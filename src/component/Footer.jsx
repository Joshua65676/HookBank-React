import logo from "../assets/logo.png";
import { PiFacebookLogoBold } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";

export default function Footer(){
    return(
        <footer className="w-[1400px] h-[418px] container">
         <div className="pt-20 space-y-10 md:ml-20 md:flex md:space-x-36 md:space-y-0">
            
             <div className="ml-5 space-y-8 md:ml-0">
                <img src={logo} alt="logo" />
                <p className="w-3/12 text-2xl font-semibold md:text-xl md:w-8/12 text-textColor">A new way to make the payments easy, reliable and secure.</p>
             </div>
             
           <div className="pt-5 ml-5 space-y-5 md:flex md:space-x-28 md:ml-0 md:space-y-0">
            
             <div className="space-y-3">
                <h5 className="font-bold text-white">Usefull Links</h5>
                <div className="space-y-3">
                    <a href="" > <p className="font-bold text-textColor NavBar">Content </p> </a>
                    <a href="" > <p className="font-bold text-textColor NavBar">How it Works </p> </a>
                    <a href="" > <p className="font-bold text-textColor NavBar">Create </p> </a>
                    <a href="" > <p className="font-bold text-textColor NavBar">Explore </p> </a>
                    <a href="" > <p className="font-bold text-textColor NavBar">Terms & Services </p> </a>
                </div>
             </div>

             <div className="space-y-3">
                <h5 className="font-bold text-white">Community</h5>
                <div className="space-y-3">
                    <a href="" > <p className="font-bold text-textColor NavBar"> Help Center </p> </a>
                    <a href="" > <p className="font-bold text-textColor NavBar"> Partners </p> </a>
                    <a href="" > <p className="font-bold text-textColor NavBar"> Suggestions </p> </a>
                    <a href="" > <p className="font-bold text-textColor NavBar"> Blog </p> </a>
                    <a href="" > <p className="font-bold text-textColor NavBar"> Newsletters </p> </a>
                </div>
             </div>

             <div className="space-y-3">
                <h5 className="font-bold text-white">Partner</h5>
                <div className="">
                    <a href="" > <p className="font-bold text-textColor NavBar"> Our Partner </p> </a>
                    <a href="" > <p className="font-bold text-textColor NavBar"> Become a Partner </p> </a>
                </div>
             </div>
           </div>
           
          </div>
          
          <div className="pt-10">
            <hr className="md:ml-20 Line" />
            <div className="pt-10 ml-4 space-y-10 md:justify-between md:ml-20 md:flex md:space-y-0">
              <p className="w-3/12 space-x-1 text-xl text-center text-textColor md:w-full md:-ml-96">
                <span className=""> Copyright </span>
                 <span className="font-bold"> &copy; </span>
                <span className="font-semibold">2024 HooBank. All Rights Reserved.</span>
              </p>

              <div className="flex ml-20 space-x-2 md:mr-24 md:ml-0">
                <a href=""> <FaInstagram className="w-10 h-10 text-white"/> </a>
                <a href=""> <PiFacebookLogoBold className="w-10 h-10 text-white"/> </a>
                <a href=""> <RiTwitterXFill className="w-10 h-10 text-white"/> </a>
                <a href=""> <CiLinkedin className="w-10 h-10 text-white"/> </a>
              </div>

            </div>
          </div>

        </footer>
    )
}