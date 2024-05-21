import Airbnb from "../assets/airbnb.png";
import Binance from "../assets/binance.png";
import Coinbase from "../assets/coinbase.png";
import Dropbox from "../assets/dropbox.png";

export default function Logo(){
    return(
        <section className="w-[200px] md:ml-44 pt-10 ml-20">
            <div className="pt-10 space-y-20 md:space-x-20 md:flex md:space-y-0">
                <img src={Airbnb} alt="" />
                <img src={Binance} alt="" />
                <img src={Coinbase} alt="" className=""/>
                <img src={Dropbox} alt="" />
            </div>
        </section>
    )
}