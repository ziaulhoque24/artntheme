import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ServiceSliderItem from "./ServiceSliderItem";


const ServiceSlider = () => {
    const responsive = {
        Desktop: {
            // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1200 },
            items: 5,
        
        },
        desktop: {
            breakpoint: { max: 1200, min: 992 },
            items: 5,
      
        },
        tablet: {
            breakpoint: { max: 992, min: 768 },
            items: 3,
 
        },
        tablet2: {
            breakpoint: { max: 768, min: 576 },
            items: 2,
     
        },
        mobile: {
            breakpoint: { max: 576, min: 0 },
            items: 1,
           
        }
    };
    return (
        <div className="mt-[-80px] pb-5 drop-shadow">
            <div className="container">
            <Carousel
                centerMode={true}
                showDots={false}
                responsive={responsive}
                ssr={true}
                arrows={true}
                infinite={true}
                // autoPlay={true}
                autoPlaySpeed={5000} 
                itemClass="text-myColor"
                containerClass="ml-[-10]"
            >
                    <ServiceSliderItem name="SEO" icon={""}/>
                    <ServiceSliderItem name="Graphics Design"/>
                    <ServiceSliderItem name="Digital Marketing" />
                    <ServiceSliderItem name="Motion Graphics" />
                    <ServiceSliderItem name="2D/3D Animation" />
                    <ServiceSliderItem name="Photography" />
            </Carousel>
           
        </div>
        </div>
    );
}

export default ServiceSlider;