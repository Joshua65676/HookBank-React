import Discount from "../assets/discount.png";
import Arrow from "../assets/arrow.png";
import Robot from "../assets/robot.png";


export default function Main(){
    return(
        <section className="md:flex justify-around pt-20 space-x-10">
          <div className="w-full pt-20 ml-20 space-y-20">
            <div className="flex -ml-12 w-80 md:w-7/12 md:h-10 md:ml-0 -mb-10 rounded-lg bg-brightBlack">
               <div className="pt-2 md:pt-0"> <img src={Discount} alt="discount logo" className="md:h-8 md:pt-2 h-9 ml-5" /> </div>
                <span className="pt-2 ml-5 font-bold text-center" >
                    <span className="text-white"> 20% </span>
                    <span className="text-textColor"> DISCOUNT FOR </span>
                    <span className="text-white"> 1 MONTH </span>
                    <span className="text-textColor"> ACCOUNT </span>
                </span>
            </div>
            <div className="md:flex" >
                
              <h1 className="space-y-10 md:font-bold font-semibold text-white md:text-7xl text-6xl -ml-14 md:ml-0">
                The Next
                <div className="pt-5 pb-5 text-transparent bg-clip-text bg-gradient-to-br from-blue-100 via-blue-300 to-blue-600"> Generation </div>
                Payment Method.
              </h1>
               
               <div className="hidden md:flex md:-ml-20 Circle Parent">
                 <div className="flex pt-10 GetStarted">
                  <span className="ml-8 -mb-5 text-transparent bg-clip-text bg-gradient-to-br from-blue-100 via-blue-300 to-blue-600"> Get Started </span>
                  <img src={Arrow} alt="arrow" className="-ml-5 mr-80 h-6 pt-1"/>
                 </div>
               </div>
               
            </div>
          
            <p className="md:w-8/12 md:text-xl md:font-medium font-bold text-lg w-10/12 -ml-14 md:ml-0 text-textColor">
               Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
               We examine annual percentage rates, annual fees.
            </p>
            
          </div>
          
          <div className="w-full pt-10 md:pt-0 pb-10 md:pb-0 ">
            <img src={Robot} alt="robot" className="md:w-full -ml-10 md:ml-10"/>
          </div>
              <div className=" Circle Parent  md:hidden">
                 <div className="flex pt-10 GetStarted">
                  <span className="ml-8 -mb-5 text-transparent bg-clip-text bg-gradient-to-br from-blue-100 via-blue-300 to-blue-600"> Get Started </span>
                  <img src={Arrow} alt="arrow" className="-ml-5 mr-80"/>
                 </div>
               </div>
        </section>
    )
}