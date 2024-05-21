import Paypal from '../assets/paypal.png';
import Apple from '../assets/apple.png';
import GooglePlay from '../assets/google-play.png';

export default function Billing(){
    return(
        <section className="container flex flex-col-reverse pt-20 md:flex md:w-10/12 md:justify-around md:ml-20 md:space-x-40 md:flex-row">
            <div className="">
                <img src={Paypal} alt="Paypal" />
            </div>

            <div className="pt-20 pb-20 -ml-5 space-y-10 md:-ml-0">
               <h2 className="w-10/12 ml-10 text-5xl font-medium text-white md:font-bold">Easily control your billing & invoicing.</h2>
               <p className="w-9/12 ml-10 text-xl font-bold md:font-semibold text-textColor md:text-base">
                 Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
               </p>
               <div className="flex ml-10">
                  <a href="https://www.apple.com/app-store/">
                   <img src={Apple} alt="Apple" />
                  </a>
                  <a href="https://play.google.com/">
                    <img src={GooglePlay} alt="Google-Play" />
                  </a>
               </div>
            </div>
        </section>
    )
}