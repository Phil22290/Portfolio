import React from "react";
import Footer from "./Footer";

const Contact = () => {
	return (
		<>
			<div
				name="contact"
				className="flex items-center justify-center w-full h-screen p-4 snap-start"
			>
				<form
					method="POST"
					action="https://getform.io/f/018af295-ffae-4290-8d11-bd3f48e8da30"
					className="flex flex-col max-w-[600px] w-full"
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
		</>
	);
};

export default Contact;
