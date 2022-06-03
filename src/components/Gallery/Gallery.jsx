import React from "react";
import styles from "./gallery.module.css";
import Drip from "../../assets/drip.png";

import Typo from "../../assets/typo.jpg";
import Kiss from "../../assets/kiss.jpg";
import Cj from "../../assets/cj.png";
import Branding from "../../assets/branding.png";
import Chr from "../../assets/chrlogo.png";
import Mockvolth from "../../assets/mockvolth.png";
import Mockpara from "../../assets/mockpara.png";

const Gallery = () => {
	return (
		<div
			name="gallery"
			className="w-full h-screen overflow-hidden text-gray-300 snap-start md:h-screen "
		>
			<div className="max-w-[80vw] mx-auto p-4 flex flex-col justify-center w-full">
				<div className="pt-16 pb-8 sm:pb-16">
					<p className="inline text-3xl font-bold text-red-300 sm:text-5xl">
						Gallery
					</p>
				</div>
				<div className={styles.container}>
					<section class="text-gray-600 body-font">
						<div class="container px-5 mx-auto">
							<div class="flex flex-wrap -m-4">
								{/* start cards */}
								<div class="lg:w-1/4 sm:w-1/2 w-1/2 p-2">
									<div class="flex relative max-h-32 md:max-h-max">
										<a
											href="https://www.behance.net/gallery/144827947/Logo-Design-for-landscaping-company"
											target="_blank"
											rel="noreferrer"
											className="visible sm:invisible"
										>
											<img
												alt="gallery"
												class="visible absolute inset-0 w-full h-full object-cover object-center"
												src={Chr}
											/>
										</a>
										<div class="invisible sm:visible px-8 py-10 h-[12em] sm:h-[18em] relative z-10 w-full bg-indigo-200 opacity-0 hover:opacity-100 transition-opacity duration-700 hover:shadow-lg">
											<h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
												Illustrator + Photoshop for mockup
											</h2>
											<h1 class="title-font text-lg font-medium text-gray-900 mb-3">
												Logo design
											</h1>
											<p class="leading-relaxed">
												Commissioned logo design for a landscaping business.
												(2016)
											</p>
											<button
												type="button"
												class="inline-block mt-6 px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
											>
												<a
													href="https://www.behance.net/gallery/144827947/Logo-Design-for-landscaping-company"
													target="_blank"
													rel="noreferrer"
													className="font-bold button"
												>
													Open
												</a>
											</button>
										</div>
									</div>
								</div>

								<div class="lg:w-1/4 sm:w-1/2 w-1/2 p-2">
									<div class="flex relative max-h-32 md:max-h-max">
										<a
											href="https://github.com/Phil22290/Volth"
											target="_blank"
											rel="noreferrer"
											className="visible sm:invisible"
										>
											<img
												alt="gallery"
												class="visible absolute inset-0 w-full h-full object-cover object-center"
												src={Mockvolth}
											/>
										</a>
										<div class="invisible sm:visible px-8 py-10 h-[12em] sm:h-[18em] relative z-10 w-full bg-indigo-200 opacity-0 hover:opacity-100 transition-opacity duration-700 hover:shadow-lg">
											<h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
												HTML/CSS - React - Gatsby - Netlify
											</h2>
											<h1 class="title-font text-lg font-medium text-gray-900 mb-3">
												Fictional website design
											</h1>
											<p class="leading-relaxed">
												This fictional E-bike website 'Volth' was made for
												educational purposes. (2022)
											</p>
											<button
												type="button"
												class="inline-block mt-6 px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
											>
												<a
													href="https://github.com/Phil22290/Volth"
													target="_blank"
													rel="noreferrer"
													className="font-bold button "
												>
													Open
												</a>
											</button>
										</div>
									</div>
								</div>

								<div class="lg:w-1/4 sm:w-1/2 w-1/2 p-2">
									<div class="flex relative max-h-32 md:max-h-max">
										<a
											href="https://www.behance.net/gallery/144973467/Instagram-grid-for-side-project-%28fragrance-website%29"
											target="_blank"
											rel="noreferrer"
											className="visible sm:invisible"
										>
											<img
												alt="gallery"
												class="visible absolute inset-0 w-full h-full object-cover object-center"
												src={Cj}
											/>
										</a>
										<div class="invisible sm:visible px-8 py-10 h-[12em] sm:h-[18em] relative z-10 w-full bg-indigo-200 opacity-0 hover:opacity-100 transition-opacity duration-700 hover:shadow-lg">
											<h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
												Illustrator + Photoshop
											</h2>
											<h1 class="title-font text-lg font-medium text-gray-900 mb-3">
												Grid design for Instagram
											</h1>
											<p class="leading-relaxed">
												3x3 grid design for Instagram. I made this for a
												personal side project, a perfume webshop. Which is
												currently on hold. (2022)
											</p>
											<button
												type="button"
												class="inline-block mt-6 px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
											>
												<a
													href="https://www.behance.net/gallery/144973467/Instagram-grid-for-side-project-%28fragrance-website%29"
													target="_blank"
													rel="noreferrer"
													className="font-bold button "
												>
													Open
												</a>
											</button>
										</div>
									</div>
								</div>

								<div class="lg:w-1/4 sm:w-1/2 w-1/2 p-2">
									<div class="flex relative max-h-32 md:max-h-max">
										<a
											href="https://github.com/Phil22290/Paradisr"
											target="_blank"
											rel="noreferrer"
											className="visible sm:invisible"
										>
											<img
												alt="gallery"
												class="visible absolute inset-0 w-full h-full object-cover object-center"
												src={Mockpara}
											/>
										</a>
										<div class="invisible sm:visible px-8 py-10 h-[12em] sm:h-[18em] relative z-10 w-full bg-indigo-200 opacity-0 hover:opacity-100 transition-opacity duration-700 hover:shadow-lg">
											<h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
												HTML/CSS - React - Netlify
											</h2>
											<h1 class="title-font text-lg font-medium text-gray-900 mb-3">
												Fictional website design
											</h1>
											<p class="leading-relaxed">
												This website was part of an online React course. (2022)
											</p>
											<button
												type="button"
												class="inline-block mt-6 px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
											>
												<a
													href="https://github.com/Phil22290/Paradisr"
													target="_blank"
													rel="noreferrer"
													className="font-bold button "
												>
													Open
												</a>
											</button>
										</div>
									</div>
								</div>

								<div class="lg:w-1/4 sm:w-1/2 w-1/2 p-2">
									<div class="flex relative max-h-32 md:max-h-max">
										<a
											href="https://www.behance.net/gallery/144979381/Book-cover-design"
											target="_blank"
											rel="noreferrer"
											className="visible sm:invisible"
										>
											<img
												alt="gallery"
												class="visible absolute inset-0 w-full h-full object-cover object-center"
												src={Kiss}
											/>
										</a>
										<div class="invisible sm:visible px-8 py-10 h-[12em] sm:h-[18em] relative z-10 w-full bg-indigo-200 opacity-0 hover:opacity-100 transition-opacity duration-700 hover:shadow-lg">
											<h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
												InDesign
											</h2>
											<h1 class="title-font text-lg font-medium text-gray-900 mb-3">
												Book cover design
											</h1>
											<p class="leading-relaxed">
												A book cover design, made during my Graphic design
												study. (2010)
											</p>
											<button
												type="button"
												class="inline-block mt-6 px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
											>
												<a
													href="https://www.behance.net/gallery/144979381/Book-cover-design"
													target="_blank"
													rel="noreferrer"
													className="font-bold button "
												>
													Open
												</a>
											</button>
										</div>
									</div>
								</div>

								<div class="lg:w-1/4 sm:w-1/2 w-1/2 p-2">
									<div class="flex relative max-h-32 md:max-h-max">
										<a
											href="https://www.behance.net/gallery/145141483/Drip"
											target="_blank"
											rel="noreferrer"
											className="visible sm:invisible"
										>
											<img
												alt="gallery"
												class="visible absolute inset-0 w-full h-full object-cover object-center"
												src={Drip}
											/>
										</a>
										<div class="invisible sm:visible px-8 py-10 h-[12em] sm:h-[18em] relative z-10 w-full bg-indigo-200 opacity-0 hover:opacity-100 transition-opacity duration-700 hover:shadow-lg">
											<h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
												Illustrator
											</h2>
											<h1 class="title-font text-lg font-medium text-gray-900 mb-3">
												Drip
											</h1>
											<p class="leading-relaxed">
												This poster was made for practicing purposes. (2022)
											</p>
											<button
												type="button"
												class="inline-block mt-6 px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
											>
												<a
													href="https://www.behance.net/gallery/145141483/Drip"
													target="_blank"
													rel="noreferrer"
													className="font-bold button "
												>
													Open
												</a>
											</button>
										</div>
									</div>
								</div>

								<div class="lg:w-1/4 sm:w-1/2 w-1/2 p-2">
									<div class="flex relative max-h-32 md:max-h-max">
										<a
											href="https://www.behance.net/gallery/144979153/Helvetica-booklet-Typography"
											target="_blank"
											rel="noreferrer"
											className="visible sm:invisible"
										>
											<img
												alt="gallery"
												class="visible absolute inset-0 w-full h-full object-cover object-center"
												src={Typo}
											/>
										</a>
										<div class="invisible sm:visible px-8 py-10 h-[12em] sm:h-[18em] relative z-10 w-full bg-indigo-200 opacity-0 hover:opacity-100 transition-opacity duration-700 hover:shadow-lg">
											<h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
												InDesign
											</h2>
											<h1 class="title-font text-lg font-medium text-gray-900 mb-3">
												Booklet Layout + design
											</h1>
											<p class="leading-relaxed">
												A booklet layout (theme: Helvetica) I made during my
												graphic design study. (2010)
											</p>
											<button
												type="button"
												class="inline-block mt-6 px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
											>
												<a
													href="https://www.behance.net/gallery/144979153/Helvetica-booklet-Typography"
													target="_blank"
													rel="noreferrer"
													className="font-bold button "
												>
													Open
												</a>
											</button>
										</div>
									</div>
								</div>

								<div class="lg:w-1/4 sm:w-1/2 w-1/2 p-2">
									<div class="flex relative max-h-32 md:max-h-max">
										<a
											href="https://www.behance.net/gallery/144972947/Former-personal-branding"
											target="_blank"
											rel="noreferrer"
											className="visible sm:invisible"
										>
											<img
												alt="gallery"
												class="visible absolute inset-0 w-full h-full object-cover object-center"
												src={Branding}
											/>
										</a>
										<div class="invisible sm:visible px-8 py-10 h-[12em] sm:h-[18em] relative z-10 w-full bg-indigo-200 opacity-0 hover:opacity-100 transition-opacity duration-700 hover:shadow-lg">
											<h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
												Illustrator
											</h2>
											<h1 class="title-font text-lg font-medium text-gray-900 mb-3">
												Former personal branding
											</h1>
											<p class="leading-relaxed">
												This was my personal branding for a while. (2011)
											</p>
											<button
												type="button"
												class="inline-block mt-6 px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
											>
												<a
													href="https://www.behance.net/gallery/144972947/Former-personal-branding"
													target="_blank"
													rel="noreferrer"
													className="font-bold button "
												>
													Open
												</a>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
