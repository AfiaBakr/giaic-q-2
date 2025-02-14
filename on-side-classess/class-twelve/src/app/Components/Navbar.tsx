import React from "react";

const Navbar =()=>{
    return(
        <div>
            <nav className="w-full bg-slate-800 h-16">
                <ul className="p-5  text-white flex items-center justify-center gap-5">
                    <li><a>Home</a></li>
                    <li><a>Contact</a></li>
                    <li><a>Gallery</a></li>
                    <li><a>About</a></li>
                </ul>
            </nav>
        </div>
    )
};
export default Navbar;