import React from "react";
import "./style.scss";

const Home = () => {
	return (
		<div name="home" className="w-full h-screen ">
			{/* Container */}
			<div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
				<h2 className="mb-6 font-serif text-xl italic text-indigo-400 sm:text-4xl">
					Hi, welcome to
				</h2>
				{/* <h1 className="text-4xl font-bold text-red-300 sm:text-7xl">
					STUDIO <br />
				</h1> */}

				{/* text for mobile/tablet */}
				<div className="visible md:invisible md:h-0">
					<div className="text-5xl font-bold text-red-300 sm:text-7xl">
						STUDIO
					</div>
					<div className="mt-2 text-5xl font-bold text-indigo-400 sm:text-7xl">
						GAUTHIER DUPONT
					</div>
				</div>

				{/* textfx for desktop */}
				<div className="invisible md:visible">
					<a href="/" className="link">
						<span className="word">
							<span
								className="text-4xl font-bold text-red-300 title1 sm:text-7xl"
								data-char="S"
								style={{ "--char-index": "0" }}
							>
								S
							</span>
							<span
								className="text-4xl font-bold text-red-300 title1 sm:text-7xl"
								data-char="T"
								style={{ "--char-index": "1" }}
							>
								T
							</span>
							<span
								className="text-4xl font-bold text-red-300 title1 sm:text-7xl"
								data-char="U"
								style={{ "--char-index": "2" }}
							>
								U
							</span>
							<span
								className="text-4xl font-bold text-red-300 title1 sm:text-7xl"
								data-char="D"
								style={{ "--char-index": "3" }}
							>
								D
							</span>
							<span
								className="text-4xl font-bold text-red-300 title1 sm:text-7xl"
								data-char="I"
								style={{ "--char-index": "4" }}
							>
								I
							</span>
							<span
								className="text-4xl font-bold text-red-300 title1 sm:text-7xl"
								data-char="O"
								style={{ "--char-index": "5" }}
							>
								O
							</span>
						</span>
					</a>

					{/* <h1 className="mb-6 text-4xl font-bold text-indigo-400 sm:text-7xl">
					GAUTHIER-DUPONT
				</h1> */}

					<a href="/" className="link">
						<span className="char2 word">
							<span
								className="text-4xl font-bold text-indigo-400 title2 sm:text-7xl"
								data-char="G"
								style={{ "--char-index": "0" }}
							>
								G
							</span>
							<span
								className="text-4xl font-bold text-red-300 title2 sm:text-7xl"
								data-char="A"
								style={{ "--char-index": "1" }}
							>
								A
							</span>
							<span
								className="text-4xl font-bold text-red-300 title2 sm:text-7xl"
								data-char="U"
								style={{ "--char-index": "2" }}
							>
								U
							</span>
							<span
								className="text-4xl font-bold text-red-300 title2 sm:text-7xl"
								data-char="T"
								style={{ "--char-index": "3" }}
							>
								T
							</span>
							<span
								className="text-4xl font-bold text-red-300 title2 sm:text-7xl"
								data-char="H"
								style={{ "--char-index": "4" }}
							>
								H
							</span>
							<span
								className="text-4xl font-bold text-red-300 title2 sm:text-7xl"
								data-char="I"
								style={{ "--char-index": "5" }}
							>
								I
							</span>
							<span
								className="text-4xl font-bold text-red-300 title2 sm:text-7xl"
								data-char="E"
								style={{ "--char-index": "6" }}
							>
								E
							</span>
							<span
								className="text-4xl font-bold text-red-300 title2 sm:text-7xl"
								data-char="R"
								style={{ "--char-index": "7" }}
							>
								R
							</span>
							<span
								className="text-4xl font-bold text-red-300 title2 sm:text-7xl"
								data-char="-"
								style={{ "--char-index": "8" }}
							>
								-
							</span>
							<span
								className="text-4xl font-bold text-red-300 title2 sm:text-7xl"
								data-char="D"
								style={{ "--char-index": "9" }}
							>
								D
							</span>
							<span
								className="text-4xl font-bold text-red-300 title2 sm:text-7xl"
								data-char="U"
								style={{ "--char-index": "10" }}
							>
								U
							</span>
							<span
								className="text-4xl font-bold text-red-300 title2 sm:text-7xl"
								data-char="P"
								style={{ "--char-index": "11" }}
							>
								P
							</span>
							<span
								className="text-4xl font-bold text-red-300 title2 sm:text-7xl"
								data-char="O"
								style={{ "--char-index": "12" }}
							>
								O
							</span>
							<span
								className="text-4xl font-bold text-red-300 title2 sm:text-7xl"
								data-char="N"
								style={{ "--char-index": "13" }}
							>
								N
							</span>
							<span
								className="text-4xl font-bold text-red-300 title2 sm:text-7xl"
								data-char="T"
								style={{ "--char-index": "14" }}
							>
								T
							</span>
						</span>
					</a>
				</div>
				<section id="section01" class="demo">
					<a href="#section02">
						<span></span>
					</a>
				</section>
			</div>
		</div>
	);
};

export default Home;
