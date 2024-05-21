import Star from "../assets/star.png";
import Shield from "../assets/shield.png";
import Send from "../assets/send.png";

export default function Business(){
    return(
        <section className="md:flex justify-around md:w-10/12 pt-20 md:ml-20 md:space-x-20 ml-5">
            <div className="pt-8 md:space-y-7 space-y-12">
                <h2 className="w-10/12 text-5xl md:font-bold font-semibold text-white">
                   You do the business, we’ll handle the money.
                </h2>
                <p className="w-9/12 text-xl font-medium text-textColor">
                   With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
                </p>
                <button className="font-bold text-black Button">
                    Get Started
                </button>
            </div>
            
            <div className="space-y-10 md:mr-96 md:pt-0 pt-20">
                <div className="flex space-x-5 Business">
                    <img src={Star} alt="Star" className="pt-5 ml-2 h-14" />
                    <div className="pt-1">
                        <h3 className="mb-1 text-xl font-extrabold text-white">Rewards</h3>
                        <span className="font-semibold text-textColor">The best credit cards offer some tantalizing combinations of promotions and prizes</span>
                    </div>
                </div>
                
                <div className="flex space-x-5 Business">
                     <img src={Shield} alt="" className="pt-5 ml-2 h-14" />
                     <div className="pt-1">
                        <h3 className="mb-1 text-xl font-extrabold text-white">100% Secured</h3>
                        <span className="font-semibold text-textColor">We take proactive steps make sure your information and transactions are secure.</span>
                     </div>
                </div>
                
                <div className="flex space-x-5 Business">
                     <img src={Send} alt="" className="pt-5 ml-2 h-14" />
                     <div className="pt-1">
                        <h3 className="mb-1 text-xl font-extrabold text-white">Balance Transfer</h3>
                        <span className="font-semibold text-textColor">A balance transfer credit card can save you a lot of money in interest charges.</span>
                     </div>
                </div>
                
            </div>
            
        </section>
    )
}