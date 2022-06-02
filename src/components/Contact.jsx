import React from "react";
import Footer from "./Footer";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Contact = () => {
	return (
		<div className="relative">
			<div
				name="contact"
				className="flex items-center justify-center w-full h-screen p-4 snap-start"
			>
				<form
					method="POST"
					action="https://getform.io/f/018af295-ffae-4290-8d11-bd3f48e8da30"
					className="flex flex-col max-w-[600px] w-[70%]"
				>
					<div className="pb-8">
						<p className="inline text-5xl font-bold text-red-300">Contact</p>
						<p className="py-4 text-xl font-bold text-indigo-400">
							Submit the form below or{" "}
							<a
								href="mailto:gauthier-dupont@outlook.com"
								className="underline"
							>
								send me an email
							</a>
						</p>
					</div>
					<input
						className="bg-[#ccd6f6] p-2 rounded-lg"
						type="text"
						placeholder="Name"
						name="name"
					/>
					<input
						className="my-4 p-2 bg-[#ccd6f6] rounded-lg"
						type="email"
						placeholder="Email"
						name="email"
					/>
					<textarea
						className="bg-[#ccd6f6] p-2 rounded-lg"
						name="message"
						rows="10"
						placeholder="Message"
					></textarea>
					<button className="px-4 py-3 my-8 ml-0 mr-auto text-indigo-400 rounded-lg shadow-lg hover:bg-red-300">
						Let's talk
					</button>
					<Footer />
				</form>
			</div>

			{/* contactbar */}
			<div className=" absolute lg:flex  flex-col top-[10em] left-0">
				<ul>
					<li className="w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-indigo-400">
						<a
							className="flex items-center justify-between w-full text-gray-300"
							href="https://www.linkedin.com/in/philippe-hermans90/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Linkedin <FaLinkedin size={22} />
						</a>
					</li>
					<li className="w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-indigo-400">
						<a
							className="flex items-center justify-between w-full text-gray-300"
							href="https://github.com/Phil22290"
							target="_blank"
							rel="noopener noreferrer"
						>
							Github <FaGithub size={22} />
						</a>
					</li>

					<li className="w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-indigo-400">
						<a
							className="flex items-center justify-between w-full text-gray-300"
							href="https://drive.google.com/file/d/1NL8q7c5TSliS6kMmkPf9Kbq7zbFqIN2D/view?usp=sharing"
							target="_blank"
							rel="noopener noreferrer"
						>
							Resume <BsFillPersonLinesFill size={22} />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Contact;
