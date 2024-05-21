// import Quotes from '../assets/quotes.png';
// import People1 from '../assets/people-1.png';
// import People2 from '../assets/people-2.png';
// import People3 from '../assets/people-3.png';
import { projectsData } from "../constants";
// import { Image } from "react" 

export default function People(){
    return(
        <section className="container pt-32 space-y-20 md:ml-20">
            <div className="justify-around ml-3 space-y-10 md:w-9/12 md:ml-20 md:flex md:space-x-52 md:space-y-0">
                <h2 className="text-5xl font-medium text-white md:font-bold">What people are saying about us</h2>
                <p className="pt-5 text-xl font-semibold text-textColor">
                    Everything you need to accept card payments and grow your business anywhere on the planet.
                </p>
            </div>

            <div className="w-10/12 grid-cols-3 gap-40 pt-5 ml-10 space-y-10 md:grid md:space-y-0">
                {projectsData.map(({ id, quotes, description, img, name, span }) => (
                    <div key={id} className="space-y-10 Card">
                       <div className="pt-5 ml-5"><img src={quotes} alt="" className="w-[40.6px] h-[27.6px] bg-textColor"/></div> 
                        <p className="ml-5 text-lg text-white">{description}</p>
                        <div className="flex flex-row ml-5 space-x-5">
                            <img src={img} alt="" className="w-[48px] h-[48px]"/>
                            <div className="">
                                <h5 className="text-white">{name}</h5>
                                <span className="text-textColor">{span}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

                // <div className="">
                //    <img src={Quotes} alt="Quotes" className=""/>
                //    <p className="">
                //        Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.
                //    </p>
                //    <div className="">
                //       <img src={People1} alt="Quotes" className=""/>
                //       <h5 className="">Herman Jensen</h5>
                //       <span className="">Founder & Leader</span>
                //    </div>
                // </div>