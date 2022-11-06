const express = require('express');
const next = require('next');
const mysql = require("mysql");
const multer = require("multer");
const path = require("path");
const bodyParser = require('body-parser');
const cookie = require('cookie');
// const rateLimit = require('express-rate-limit');
const jwt = require('jsonwebtoken');
const { error } = require('console');




const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();



app.prepare().then(() => {
    const server = express();
    server.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
    server.use(bodyParser.json())


    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'cms'
    });


    connection.connect(error => {error ? console.log("connection failed database") : console.log("successfully connected database")});
    // const limiter = rateLimit({
    //     windowMs: 60 * 1000, // 15 minutes
    //     max: 1, // limit each IP to 100 requests per windowMs
    // });

    // upload dir
    const UPLOADS_FOLDER = "./public/uploads/";

    // define the storage
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, UPLOADS_FOLDER);
        },
        filename: (req, file, cb) => {
            const fileExt = path.extname(file.originalname);
            const fileName =
                file.originalname
                    .replace(fileExt, "")
                    .replaceAll(",", "-")
                    .toLowerCase()
                    .split(" ")
                    .join("-") +
                "-" +
                Date.now();

            cb(null, fileName + fileExt);
        },
    });

    // prepare the final multer upload object
    var upload = multer({
        storage: storage,
        limits: {
            fileSize: 10000000, // 10MB
        },
        fileFilter: (req, file, cb) => {
            if (file.fieldname === "file") {
                if (
                    file.mimetype === "image/png" ||
                    file.mimetype === "image/jpg" ||
                    file.mimetype === "image/jpeg" ||
                    file.mimetype === "application/pdf"
                ) {
                    cb(null, true);
                } else {
                    cb(new Error("Only .jpg, .png, .pdf or .jpeg format allowed!"));
                }
            } else {
                cb(new Error("There was an unknown error!"));
            }
        },
    });



    // server.use("/api/hello",limiter);
    // server.set('trust proxy', 1);
    // server.get('/ip', (request, response) => response.send(request.ip))
    // file up route
    server.use("/api/order", upload.array("file"))
    server.post("/api/order", (req, res) => {

        const { name, email, phone, company, qyt, message} = req.body;
 let fileName = []
        req.files.map((item)=>{
            fileName.push(item.filename)
 })
       

       // sql query
        const sql = "INSERT INTO `orderlist`(`name`, `email`, `phone`, `company`, `qyt`, `message`, `files`) VALUES (" + `'${name}','${email.toLowerCase()}','${phone}','${company}','${qyt}','${message}','${fileName}')`

        connection.query(sql, function (error, results) {
            if(error){
                res.status(404).json({"status": false, "message": error.message})

            }else if(results){
                res.status(200).json({"status": true})

            }

        });

            
        }
    );


    // contact form insert api 

    server.post("/api/contact", (req, res) => {

        const { name, email, phone, cat, message } = req.body;
        // sql query
        const sql = "INSERT INTO `contactlist`(`name`, `email`, `phone`, `cat`, `message`) VALUES (" + `'${name}','${email.toLowerCase()}','${phone}','${cat}','${message}')`

        connection.query(sql, function (error, results) {
            if (error) {
                res.status(404).json({ "status": false, "message": error.message })

            } else if (results) {
                res.status(200).json({ "status": true, "message" : "Your Contact Request Successfully sent"})

            }

        });
});

    //  check api 

    server.get("/api/check", (req, res) => {

        connection.query("SELECT * FROM `orderlist`", function (err, result, fields) {
            if (err){
                
            }
            console.log(result[0].files.split(","));
        });
    });


    // default error handler
    server.use((err, req, res, next) => {
        if (err) {
            if (err instanceof multer.MulterError) {
                res.status(500).send("There was an upload error!");
            } else {
                res.status(500).json({"status": false, "message" : err.message});
            }
        } else {
            res.send("success api");
        }
    });



    //login api ////




//     server.post('/api/login', (req, res) => {
//         const {email, password} = req.body
       

//         connection.query("SELECT * FROM `user` WHERE email=" + `'${email.toLowerCase() }'`, function (err, data, fields) {
//            if (err){
//                res.status(404).json({ "message": "Your entered Email or password is incorrect" })
//            }else if(data){
//                if (email.toLowerCase() === data[0].email.toLowerCase() && password === data[0].password) {
//                 const authToken = jwt.sign({
//                     data: data[0]
//                 }, 'creativeatorHash');
                
//                 res.setHeader('Set-Cookie', cookie.serialize('authToken', String(authToken), {
//                     secure: false,
//                     path: "/",
//                     maxAge: 60 * 60 * 24 * 7 // 1 week
//                 }));
//                 res.status(201).json({ "message": "logged in success", "user": data[0], "authToken": authToken })
            
//             }else{
//                 res.status(404).json({ "message": "Your entered Email or password is incorrect" })
                
//             }
//            }
//         })
//     });

// /// join email check ///
//     server.post('/api/join/:prams', (req, res) => {
        
// if(req.params.prams === "email"){
//     const RequestEmail = req.body.email;

//     connection.query("SELECT * FROM `user` WHERE email=" + `'${RequestEmail.toLowerCase()}'`, function (err, data, fields) {
//         if (err) {}

//         if (data.length >= 1) {
//             res.status(201).json({ "message": "You have already Registered" , "status": false})
        
//         } else if (data.length === 0) {
//             res.status(201).json({ "message": "email not exist", "status": true })
         
//         }

//     })

// } else if (req.params.prams === "password"){

//     const { email, password, password2 } = req.body;
//     const sql = "INSERT INTO `user`(`email`, `password`) VALUES (" + `'${email.toLowerCase()}','${password}')`
//     connection.query(sql, function (error, results, fields) {
//         if (error) {
//             console.log(error)
//         } else if (results) {
//             connection.query("SELECT * FROM `user` WHERE email=" + `'${email.toLowerCase()()}'`, function (err, result, fields) {
//                 if (err) throw err;
//                 if (result.length === 0) {
//                     res.status(400).json({ "message": "Something Wrong", "status": false })
//                 } else if (result.length === 1) {
//                     res.status(201).json({ "message": "User Successfully Created", "status": true, "user": result[0] })
//                 }
//             })
//         }

//     });

// }
       
//     });



//     server.get('/api/hello', (req, res) => {
//         connection.query("SELECT * FROM `products`", function (err, data, fields) {
//     if (err) throw err;
//     res.json(data)
//   })
//     });


    server.get('*/*', (req, res) => {
        return handle(req, res);
    });

    server.listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});
