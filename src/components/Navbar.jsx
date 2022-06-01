import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo2bl from "../assets/logo2bl.png";
import { Link } from "react-scroll";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);

	return (
		<div className="fixed w-full h-[80px] flex justify-between items-center px-4 font-bold backdrop-blur-sm text-indigo-400 ">
			<div>
				<img src={Logo2bl} alt="gdlogo" style={{ width: "100px" }} />
			</div>

			{/* menu */}
			{/* <ul className="hidden md:flex ">
				<li className="duration-700 hover:text-red-300 ">
					<Link to="home" smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li className="duration-700 hover:text-red-300 ">
					<Link to="about" smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li className="duration-700 hover:text-red-300">
					<Link to="skills" smooth={true} duration={500}>
						Skills
					</Link>
				</li>
				<li className="duration-700 hover:text-red-300 ">
					<Link to="gallery" smooth={true} duration={500}>
						Gallery
					</Link>
				</li>
				<li className="duration-700 hover:text-red-300 ">
					<Link to="contact" smooth={true} duration={500}>
						Contact
					</Link>
				</li>
			</ul> */}

			{/* Hamburger */}
			<div onClick={handleClick} className="z-10 md:hidden">
				{!nav ? <FaBars /> : <FaTimes />}
			</div>

			{/* Mobile menu */}
			<ul
				className={
					!nav
						? "hidden"
						: "absolute top-0 left-0 w-full h-screen bg-center bg-cover bg-backgroundgr flex flex-col justify-center items-center"
				}
			>
				<li className="py-6 text-4xl">
					<Link onClick={handleClick} to="home" smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li className="py-6 text-4xl">
					{" "}
					<Link onClick={handleClick} to="about" smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li className="py-6 text-4xl">
					{" "}
					<Link onClick={handleClick} to="skills" smooth={true} duration={500}>
						Skills
					</Link>
				</li>
				<li className="py-6 text-4xl">
					{" "}
					<Link onClick={handleClick} to="gallery" smooth={true} duration={500}>
						Gallery
					</Link>
				</li>
				<li className="py-6 text-4xl">
					{" "}
					<Link onClick={handleClick} to="contact" smooth={true} duration={500}>
						Contact
					</Link>
				</li>
			</ul>

			{/* Social icons */}
			<div className="hidden lg:flex fixed flex-col top-[300%] left-0">
				<ul>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-indigo-400">
						<a
							className="flex items-center justify-between w-full text-gray-300"
							href="https://www.linkedin.com/in/philippe-hermans90/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Linkedin <FaLinkedin size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-indigo-400">
						<a
							className="flex items-center justify-between w-full text-gray-300"
							href="https://github.com/Phil22290"
							target="_blank"
							rel="noopener noreferrer"
						>
							Github <FaGithub size={30} />
						</a>
					</li>

					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-indigo-400">
						<a
							className="flex items-center justify-between w-full text-gray-300"
							href="https://drive.google.com/file/d/1NL8q7c5TSliS6kMmkPf9Kbq7zbFqIN2D/view?usp=sharing"
							target="_blank"
							rel="noopener noreferrer"
						>
							Resume <BsFillPersonLinesFill size={30} />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
