import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

export default function SideBar() {

    const [open, setOpen] = useState(false);

    const showSideBar = () => setOpen(!open);

    return(
     <div className="md:hidden focus:outline-none">
        <a href="" className="menu-bars text-textColor">
          <AiOutlineMenu onClick={showSideBar}/>
        </a>
        {/* navBarMenu */}
        <nav className={open ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSideBar}>
           <li className='navbar-toggle'>
            <a href="" className='Menu-Bars text-textColor'>
              <AiOutlineClose />
            </a>
           </li>
           <li className="font-bold nav-text">
             <a className="text-textColor"  href="#">Home</a>
             <a className="text-textColor"  href="#">About Us</a>
             <a className="text-textColor"  href="#">Features</a>
             <a className="text-textColor"  href="#">Solution</a>
           </li>
          
         </ul>

        </nav>
      </div>
    )
}