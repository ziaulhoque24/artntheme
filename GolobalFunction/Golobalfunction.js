// Example POST method implementation:
 export async function postData(url, data) {
    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const results = await res.json();
        return results
    }
    catch(err) {
     
        return err
    }

}

