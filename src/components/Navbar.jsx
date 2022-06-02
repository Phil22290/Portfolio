import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo2bl from "../assets/logo2bl.png";

const Navbar = () => {
	// const [nav, setNav] = useState(false);
	// const handleClick = () => setNav(!nav);

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
			{/* <div onClick={handleClick} className="z-10 md:hidden">
				{!nav ? <FaBars /> : <FaTimes />}
			</div> */}

			{/* Mobile menu */}
			{/* <ul
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
			</ul> */}

			{/* Social icons */}
		</div>
	);
};

export default Navbar;
