import Discount from "../assets/discount.png";
import Arrow from "../assets/arrow.png";
import Robot from "../assets/robot.png";


export default function Main(){
    return(
        <section className="justify-around pt-20 space-x-10  md:flex">
          <div className="w-full pt-20 ml-20 space-y-20">
            <div className="flex -mb-10 -ml-12 rounded-lg w-80 md:w-7/12 md:h-10 md:ml-0 bg-brightBlack">
               <div className="pt-2 md:pt-0"> <img src={Discount} alt="discount logo" className="ml-5 md:h-8 md:pt-2 h-9" /> </div>
                <span className="pt-2 ml-5 font-bold text-center" >
                    <span className="text-white"> 20% </span>
                    <span className="text-textColor"> DISCOUNT FOR </span>
                    <span className="text-white"> 1 MONTH </span>
                    <span className="text-textColor"> ACCOUNT </span>
                </span>
            </div>
            <div className="md:flex" >
                
              <h1 className="w-11/12 space-y-10 text-[42.55px] font-bold text-white md:font-bold md:text-7xl -ml-14 md:ml-0 md:-mr-10">
                The Next
                <div className="pt-5 pb-5 text-transparent bg-clip-text bg-gradient-to-br from-blue-100 via-blue-300 to-blue-600"> Generation </div>
                Payment Method.
              </h1>
               
               <div className="hidden md:flex md:-ml-48 Circle Parent">
                 <div className="flex pt-10 GetStarted">
                  <span className="ml-8 -mb-5 text-transparent bg-clip-text bg-gradient-to-br from-blue-100 via-blue-300 to-blue-600"> Get Started </span>
                  <img src={Arrow} alt="arrow" className="h-6 pt-1 -ml-5 mr-80"/>
                 </div>
               </div>
               
             </div>
          
            <p className="w-10/12 text-lg font-bold md:w-8/12 md:text-xl md:font-medium -ml-14 md:ml-0 text-textColor">
               Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
               We examine annual percentage rates, annual fees.
            </p>
            
          </div>
          
          <div className="w-full pt-10 pb-10 md:pt-0 md:pb-0 md:w-full">
            <img src={Robot} alt="robot" className="-ml-10 md:w-full md:-ml-0"/>
          </div>
              <div className=" Circle Parent md:hidden">
                 <div className="flex pt-10 GetStarted">
                  <span className="ml-8 -mb-5 text-transparent bg-clip-text bg-gradient-to-br from-blue-100 via-blue-300 to-blue-600"> Get Started </span>
                  <img src={Arrow} alt="arrow" className="-ml-5 mr-80"/>
                 </div>
               </div>
        </section>
    )
}