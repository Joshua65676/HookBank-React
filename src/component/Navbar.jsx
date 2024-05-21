import logo from "../assets/logo.png";
import SideBar from "./SideBar";

export default function NavBar() {
    return (
        <div className="container flex justify-between pt-10">
             <img src={logo} alt="logo" className="h-10 ml-5 md:w-32 md:ml-20 w-28"/>
               <nav className="justify-between hidden mr-20 space-x-10 list-none md:flex ">
                <a href="#"> <li className="text-textColor NavBar">Home</li> </a>
                <a href="#footer"> <li className="text-textColor NavBar">About Us</li> </a>
                <a href="#"> <li className="text-textColor NavBar">Features</li> </a>
                <a href="#"> <li className="text-textColor NavBar">Solution</li> </a>
               </nav>
               <SideBar />
        </div>
    )
}