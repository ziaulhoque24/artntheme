import React, { useEffect } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
var $ = require("jquery");
if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}
import dynamic from "next/dynamic";

import arWeb from "../../public/images/clients/Ar Webbosting.jpg"
import asianDoor from "../../public/images/clients/Asian Door.jpg"
import best from "../../public/images/clients/Best.jpg"
import colorDomain from "../../public/images/clients/Color Domain.jpg"
import eClub from "../../public/images/clients/E-CLUB.jpg"
import erms from "../../public/images/clients/erms_11zon.png"
import irFabrics from "../../public/images/clients/I R Fabrics.jpg"
import interiorStudio from "../../public/images/clients/interior studio.jpg"
import lataHarbal from "../../public/images/clients/Lata Herbal.jpg"
import masterArgo from "../../public/images/clients/Master Agro & Dairy.jpg"
import mediStore from "../../public/images/clients/Medistore.jpg"
import net71 from "../../public/images/clients/net 71.jpg"
import nexPark from "../../public/images/clients/nex parc.jpg"
import nkcl from "../../public/images/clients/NKCL.jpg"
import pal from "../../public/images/clients/PAL.jpg"
import pgcl from "../../public/images/clients/PGCL.jpg"
import saExpress from "../../public/images/clients/S A Xpress.jpg"
import sll from "../../public/images/clients/SLL.jpg"
import superDoor from "../../public/images/clients/SUPER DOOR.jpg"
import superStep from "../../public/images/clients/SUPER STEP.jpg"
import tazkia from "../../public/images/clients/tazkia.jpg"
import themAndCode from "../../public/images/clients/Theme N Code.jpg"
import vegaExpress from "../../public/images/clients/Vega Express.jpg"
import wsl from "../../public/images/clients/WSL.jpg"
import zerp from "../../public/images/clients/zerp ground.jpg"

import ClientsLogoItem from './ClientsLogoItem';



const ClientListSection = () => {
    const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
        ssr: false,
    });

    return (
        <div className='container my-5'>
            <h1 className='text-center font-bold text-2xl my-5'>Our Clients</h1>

            <OwlCarousel className='owl-theme'
                autoplay={true}
                loop={true}
                margin={10}
                dots={false}
                autoplaySpeed={500}
                autoplayHoverPause={true}
                autoplayTimeout={2000}
                responsive={{
                    0: {
                        items: 2,
                    },
                    600: {
                        items: 4,
                    },
                    1000: {
                        items: 6,
                    },
                }}
            >
                <ClientsLogoItem logo={arWeb} />
                <ClientsLogoItem logo={asianDoor} />
                <ClientsLogoItem logo={best} />
                <ClientsLogoItem logo={colorDomain} />
                <ClientsLogoItem logo={eClub} />
                <ClientsLogoItem logo={erms} />
                <ClientsLogoItem logo={irFabrics} />
                <ClientsLogoItem logo={interiorStudio} />
                <ClientsLogoItem logo={lataHarbal} />
                <ClientsLogoItem logo={masterArgo} />
                <ClientsLogoItem logo={mediStore} />
                <ClientsLogoItem logo={net71} />
                <ClientsLogoItem logo={nexPark} />
                <ClientsLogoItem logo={nkcl} />
                <ClientsLogoItem logo={pal} />
                <ClientsLogoItem logo={pgcl} />
                <ClientsLogoItem logo={saExpress} />
                <ClientsLogoItem logo={sll} />
                <ClientsLogoItem logo={superDoor} />
                <ClientsLogoItem logo={superStep} />
                <ClientsLogoItem logo={tazkia} />
                <ClientsLogoItem logo={themAndCode} />
                <ClientsLogoItem logo={vegaExpress} />
                <ClientsLogoItem logo={wsl} />
                <ClientsLogoItem logo={zerp} />

            </OwlCarousel>

        </div>
    );
}




export default ClientListSection;