import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Adobe from "../assets/adobe.png";
import Gatsby from "../assets/gatsby.svg";

const Skills = () => {
	return (
		<div name="skills" className="w-full h-screen text-indigo-400 snap-start ">
			{/* Container */}
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div>
					<p className="inline px-16 text-3xl font-bold text-red-300 sm:text-5xl ">
						Skills
					</p>
					<p className="px-16 py-4 text-lg font-bold sm:px-16">
						I love tinkering around with the following technologies:
					</p>
				</div>

				<div className="grid w-full grid-cols-2 gap-2 py-8 font-bold text-center sm:gap-4 sm:grid-cols-4">
					<div className="duration-500 hover:scale-110">
						<img className="w-12 mx-auto sm:w-32" src={HTML} alt="HTML icon" />
						<p className="my-4">HTML</p>
					</div>
					<div className="duration-500 hover:scale-110">
						<img className="w-12 mx-auto sm:w-32" src={CSS} alt="HTML icon" />
						<p className="my-4">CSS</p>
					</div>
					<div className="duration-500 hover:scale-110">
						<img
							className="w-12 mx-auto sm:w-32"
							src={Tailwind}
							alt="HTML icon"
						/>
						<p className="my-4">Tailwind</p>
					</div>
					<div className="duration-500 hover:scale-110">
						<img
							className="w-12 mx-auto sm:w-32"
							src={JavaScript}
							alt="HTML icon"
						/>
						<p className="my-4">Javascript</p>
					</div>
					<div className="duration-500 hover:scale-110">
						<img
							className="w-12 mx-auto sm:w-32"
							src={ReactImg}
							alt="HTML icon"
						/>
						<p className="my-4">React</p>
					</div>
					<div className="duration-500 hover:scale-110">
						<img
							className="w-12 mx-auto sm:w-32"
							src={GitHub}
							alt="HTML icon"
						/>
						<p className="my-4">Github</p>
					</div>
					<div className="duration-500 hover:scale-110">
						<img
							className="w-12 mx-auto sm:w-32"
							src={Gatsby}
							alt="HTML icon"
						/>
						<p className="my-4">Gatsby</p>
					</div>
					<div className="duration-500 hover:scale-110">
						<img
							className="w-12 mx-auto my-4 sm:w-32"
							src={Adobe}
							alt="HTML icon"
						/>
						<p className="my-6">Adobe Creative Suite</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
