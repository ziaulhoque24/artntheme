import OrderForm from "../../components/OrderForm/OrderForm";
import Header from "../../components/HeaderFooter/Header";
import Footer from "../../components/HeaderFooter/Footer";

const index = () => {
    return (
        <>
            <Header />
            <div className="bg-theme">
                <div className="container">
                    <div className="font-bold text-center text-4xl py-10 text-secondColor">SEO</div>
                    <div className="flex flex-col justify-evenly items-center">
                        <div>
                            <OrderForm />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default index;