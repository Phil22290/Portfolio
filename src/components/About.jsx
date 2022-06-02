import React from "react";

const About = () => {
	return (
		<div
			name="about"
			className="w-full h-screen text-indigo-400 bg-transparent snap-start "
		>
			<div className="flex flex-col items-center justify-center w-full h-full">
				<div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
					<div className="pb-4 pl-4 sm:text-right">
						<p className="inline text-5xl font-bold text-red-300">About</p>
					</div>
					<div></div>
				</div>
				<div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
					<div className="text-4xl font-bold sm:text-right">
						<p>
							Hi, my name is Phil. I'm a creative jack of all trades, who loves
							anything tech-related.
						</p>
					</div>
					<div className="mt-2 text-xl">
						<p>
							I am passionate about creating stuff, in the broadest sense of the
							word. Ranging from smaller websites to anything design related,
							I've got your back. Leave me your contact info and I'll be all
							over your inbox in no time.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
