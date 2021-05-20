import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { FaChevronRight } from "react-icons/fa";
import FeaturedProjects from "../FeaturedProjects";
import ContactForm from "../ContactForm";

function Home() {
	// Update page title
	useEffect(() => {
		document.title =
			"TCA Developments - Construction Consultant & General Contractor";

		//  Restart the carousel when page reloads
		// const myCarousel = document.querySelector("#myCarousel");
		// const carousel = new bootstrap.Carousel(myCarousel, {
		// 	interval: 6000,
		// 	wrap: true,
		// });
	}, []);
	return (
		<main className="container-fluid px-0 m-0">
			<div className="row">
				{/* <!-- Hero carousel --> */}
				<div
					id="myCarousel"
					className="hero-carousel slide"
					data-bs-ride="carousel"
					data-bs-interval="6000"
				>
					<div className="carousel-inner">
						<div className="hero-container">
							<div className="carousel-item active border-0">
								<img
									className="img-fluid"
									srcSet="../assets/hero-city/hero-city-1920w.jpg 1920w,
									../assets/hero-city/hero-city-630w.jpg 630w,
									../assets/hero-city/hero-city-320w.jpg 320w"
									src="../assets/hero-city/hero-city-fallback.jpg"
									alt="Background of Skyview dental clinic exterior"
								/>
								<div className="container mx-0 px-0 w-100">
									<div className="carousel-caption text-start">
										<h1 className="display-6 fw-bold text-uppercase w-100">
											TCA DEVELOPMENTS
										</h1>
										<p className="lead py-3">
											Edmonton's
											<strong className="fw-bold">{" premier "}</strong>
											commercial renovation & development company
										</p>
										<div className="border-top w-75">
											<p className="fst-italic fw-bold pt-3">
												The Right Course to Great Developments
											</p>
											<p>
												<HashLink
													smooth
													to="/contact#contactForm"
													className="hero-btn btn-primary fs-6 mt-3"
												>
													Free estimate
												</HashLink>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="carousel-item border-0">
								<img
									className="img-fluid"
									src="./assets/hero-kitchen.jpg"
									alt="Background of Skyview lobby"
								/>
								<div className="container mx-0 px-0 w-100">
									<div className="carousel-caption">
										<h1 className="display-6 fw-bold text-uppercase">
											General Contracting
										</h1>
										<p className="lead fs-5 py-3">
											Our
											<strong className="fw-bold">
												{" construction solutions "}
											</strong>
											are suitable for properties of every scope
										</p>
										<Link
											className="hero-btn btn-primary fs-6 mt-3"
											to="/services"
										>
											<span className="d-flex align-items-center">
												Learn more <FaChevronRight className="ms-2" />
											</span>
										</Link>
									</div>
								</div>
							</div>
							<div className="carousel-item border-0">
								<img
									className="img-fluid"
									src="./assets/hero-worker.jpg"
									alt="Background of a masonry wall that was built by TCA Developments."
								/>
								<div className="container mx-0 px-0 w-100">
									<div className="carousel-caption text-end">
										<h1 className="display-6 fw-bold text-uppercase">
											See our Work
										</h1>
										<p className="lead fs-5 py-3">
											We have
											<strong className="fw-bold">{" decades "}</strong>
											of experience in the commercial development industry
										</p>
										<Link
											className="hero-btn btn-primary fs-6 mt-3"
											to="/projects"
										>
											<span className="d-flex align-items-center">
												Learn more <FaChevronRight className="ms-2" />
											</span>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <!-- Welcome & lead --> */}
			<article className="row">
				<section className="container p-5 bg-white">
					<div className="welcome sections mx-0">
						<header className="d-flex pb-5 justify-content-center">
							<div className="text-center">
								<h2 className="display-5 fw-bold text-primary-alt">
									TCA Developments
								</h2>
								<small className="text-uppercase text-tan-tca fw-bold">
									General Construction & commercial renovations
								</small>
							</div>
						</header>
						<section className="row mx-0 d-flex justify-content-center text-center">
							<p className="lead lh-base">
								TCA Developments specializes in commercial renovations. We are
								committed to producing quality facilities that are on time,
								under budget, and will exceed your expectations!
							</p>
							<section className="row mx-0 pt-5 text-center">
								<header className="py-2">
									<h3 className="text-body fw-bold">Our Satisfied Clients</h3>
								</header>
								<p className="text-body">
									We are honoured to have worked with a variety of companies
									over the years.
								</p>
								{/* <!-- Client logos (Hide until we recieve approval) --> */}
								{/* <div
										className="col d-flex justify-content-center align-items-center pt-3 flex-wrap"
									>
										<ul
											className="list-group list-group-flush list-group-horizontal-lg"
										>
											<li className="list-group-item mb-2 pb-3">
												<img
													className="img-fluid"
													src="../src/imgs/clients/scotiabank-logo.png"
													alt="Scotiabank company logo"
												/>
											</li>
											<li className="list-group-item mb-2 pb-3">
												<img
													className="img-fluid"
													src="../src/imgs/clients/ahs-logo.png"
													alt="Alberta Health Services logo"
												/>
											</li>
											<li className="list-group-item mb-2 pb-3">
												<img
													className="img-fluid"
													src="../src/imgs/clients/goodwill-logo.png"
													alt="Goodwill company logo"
												/>
											</li>
											<li className="list-group-item mb-2 pb-3">
												<img
													className="img-fluid"
													src="../src/imgs/clients/norquest-logo.png"
													alt="Norquest College logo"
												/>
											</li>
											<li className="list-group-item mb-2 pb-3">
												<img
													className="img-fluid"
													src="../src/imgs/clients/atco-logo.png"
													alt="Atco Gas company logo"
												/>
											</li>
											<li className="list-group-item mb-2 pb-3">
												<img
													className="img-fluid"
													src="../src/imgs/clients/direct-energy-logo.png"
													alt="Direct Energy company logo"
												/>
											</li>
											<li className="list-group-item mb-2 pb-3">
												<img
													className="img-fluid"
													src="../src/imgs/clients/ing-real-estate-logo.png"
													alt="ING Real Estate company logo"
												/>
											</li>
										</ul>
									</div> --> */}
								{/* <!-- Substitue Client names --> */}
								<div className="col py-2 clients-list w-100 fs-5">
									<ul>
										<li>Scotiabank</li>
										<li>Goodwill</li>
										<li>Alberta Health Services</li>
										<li>Norquest College</li>
										<li>Atco Gas</li>
										<li>Direct Energy</li>
										<li>Skyview Dental</li>
										<li>Blackwood Partners</li>
										<li>Structube</li>
										<li>Bentall Green Oak</li>
										<li>Trane Supply</li>
										<li>Xtreme</li>
										<li>Finning</li>
										<li>Huntswood Custom Cabinets</li>
										<li>Ford Credit</li>
										<li>Ernst and Young</li>
										<li>Summit Memorials</li>
										<li>Apegga</li>
										<li>Procura</li>
										<li>Belterra Corporation</li>
										<li>Trydor Insulation</li>
										{/* <!-- Repeat --> */}
										<li>Scotiabank</li>
										<li>Goodwill</li>
										<li>Alberta Health Services</li>
										<li>Norquest College</li>
										<li>Atco Gas</li>
										<li>Direct Energy</li>
										<li>Skyview Dental Clinic</li>
										<li>Blackwood Partners</li>
									</ul>
								</div>
								<ul id="output"></ul>
							</section>
						</section>
					</div>
				</section>
			</article>
			{/* <!-- Services --> */}
			<article className="row">
				<section className="container mx-0 px-0 py-5 bg-light">
					<div className="sections">
						<header
							className="
									d-flex
									pb-4
									justify-content-center justify-content-md-between
									align-items-end
								"
						>
							<div className="ms-4 text-center text-md-left">
								<small className="text-uppercase text-muted fw-bold">
									What we do best
								</small>
								<h2 className="display-5 fw-bold text-primary-alt">
									Our Services
								</h2>
							</div>
						</header>
						<div className="row w-100 px-2">
							<p className="text-body fs-5 ms-4">
								Are you looking to
								<strong className="text-primary-alt fw-bold">
									{" upgrade "}
								</strong>
								your property?
							</p>
							<p className="text-body lh-base fs-5 ms-4">
								We have craftsmen from every trade who are ready to serve.
								Whether you need a do-it-all general contractor or expert
								project management advice, TCA Developments has the solution.
							</p>
							<p className="text-body lh-base fs-5 ms-4 mt-2">
								Click on a card to learn about a specific service. Or tap the
								button to view all of our solutions.
							</p>
						</div>
						<div className="row mx-0" id="custom-cards">
							<div className="row align-items-stretch mx-auto py-5">
								{/* <!-- General Contractor --> */}
								<div className="col-sm mt-2 pe-md-0">
									<div
										className="
												card card-cover
												image-container
												h-100
												bg-dark
												rounded-5
												shadow-lg
											"
										style={{
											background:
												"url('./assets/hero-construction.jpg') center",
											backgroundSize: "cover",
										}}
									>
										<HashLink to="/services#top">
											<div
												className="
														card-text-box
														d-flex
														flex-column
														text-center
														h-100
														pb-3
														text-white text-shadow-1
													"
											>
												<h3 className="pt-5 mt-5 mb-4 lh-1 fw-bold">
													General Contracting
												</h3>
											</div>
										</HashLink>
									</div>
								</div>
								<div className="col-sm mt-2">
									<div
										className="
												card card-cover
												image-container
												h-100
												text-white
												bg-dark
												rounded-5
												shadow-lg
											"
										style={{
											background:
												"url('./assets/hero-office.jpg') center no-repeat",
											backgroundSize: "cover",
										}}
									>
										<HashLink to="/services#officeSection">
											<div
												className="
														d-flex
														flex-column
														h-100
														pb-3
														text-center text-white text-shadow-1
													"
											>
												<h3 className="pt-5 mt-5 mb-4 lh-1 fw-bold">
													Office Renovations
												</h3>
											</div>
										</HashLink>
									</div>
								</div>
								{/* <!-- Electrical --> */}
								<div className="col-sm mt-2 ps-md-0">
									<div
										className="
												card card-cover
												image-container
												h-100
												text-white
												bg-dark
												rounded-5
												shadow-lg
											"
										style={{
											background: "url('./assets/electrical-main.jpg') center",
											backgroundSize: "contain",
										}}
									>
										<HashLink to="/services#electricalSection">
											<div
												className="
														d-flex
														flex-column
														h-100
														pb-3
														text-white text-center text-shadow-1
													"
											>
												<h3 className="pt-5 mt-5 mb-4 lh-1 fw-bold">
													Electrical Services
												</h3>
											</div>
										</HashLink>
									</div>
								</div>
								{/* <!-- Mechanical --> */}
								<div className="col-sm mt-2 ps-md-0">
									<div
										className="
												card card-cover
												image-container
												h-100
												text-white
												bg-dark
												rounded-5
												shadow-lg
											"
										style={{
											background:
												"url('./assets/mechanical-main.jpg') no-repeat left",
											backgroundSize: "cover",
										}}
									>
										<HashLink to="/services#hvacSection">
											<div
												className="
														d-flex
														flex-column
														h-100
														pb-3
														text-white text-center text-shadow-1
													"
											>
												<h3 className="pt-5 mt-5 mb-4 lh-1 fw-bold">
													Mechanical & Plumbing
												</h3>
											</div>
										</HashLink>
									</div>
								</div>
								{/* <!-- Concrete --> */}
								<div className="col-sm mt-2 ps-md-0">
									<div
										className="
												card card-cover
												image-container
												h-100
												text-white
												bg-dark
												rounded-5
												shadow-lg
											"
										style={{
											background:
												"url('./assets/concrete-main.jpg') center no-repeat",
											backgroundSize: "cover",
										}}
									>
										<HashLink to="/services#concreteSection">
											<div
												className="
														d-flex
														flex-column
														h-100
														pb-3
														text-white text-center text-shadow-1
													"
											>
												<h3 className="pt-5 mt-5 mb-4 lh-1 fw-bold">
													Concrete Services
												</h3>
											</div>
										</HashLink>
									</div>
								</div>
								<div className="col-auto w-100 mt-2">
									<div
										className="
												card card-cover
												image-container
												text-white
												bg-dark
												rounded-5
												shadow-lg
											"
										style={{
											background:
												"url('./assets/hero-tools.jpg') no-repeat center",
											backgroundSize: "cover",
										}}
									>
										<HashLink to="/services#customSection">
											<div
												className="
														d-flex
														flex-column
														h-100
														pb-3
														text-white text-center text-shadow-1
													"
											>
												<h3 className="pt-5 mt-5 mb-4 lh-1 fw-bold">
													Customized Solutions
												</h3>
											</div>
										</HashLink>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row pt-2">
						<div className="col justify-content-center text-center">
							<HashLink
								className="btn btn-primary text-white mt-3 text-uppercase"
								to="/services#top"
								role="button"
							>
								<span className="d-flex align-items-center">
									View our services <FaChevronRight className="ms-2" />
								</span>
							</HashLink>
						</div>
					</div>
				</section>
			</article>
			{/* <!-- Projects --> */}
			<section className="row">
				<article className="container py-5 bg-white w-100">
					<div className="sections">
						<div className="row g-3 w-100 px-2">
							<header
								className="
										d-flex
										pb-3
										justify-content-center justify-content-md-between
										align-items-end
									"
							>
								<div className="text-center text-md-left ms-4">
									<small className="text-uppercase text-tan-tca fw-bold">
										Our latest work
									</small>
									<h2 className="display-5 fw-bold text-primary-alt">
										Project Spotlight
									</h2>
								</div>
							</header>
							<div className="col-12 px-2 mb-4">
								<p className="lh-base fs-5">
									These projects exemplify the quality of work that TCA
									Developments is known for. When you work with us, your
									building is in excellent hands.
								</p>
							</div>
							<div
								className="
										row row-cols-sm row-cols-md-2 row-cols-lg-4
										justify-content-center
										text-center
										g-2
										align-items-center
									"
								id="featuredProjects"
							>
								<FeaturedProjects />
							</div>
							<div className="row pt-4">
								<div className="col justify-content-center text-center">
									<HashLink
										className="btn btn-primary mt-3 text-uppercase"
										to="/projects#top"
										role="button"
									>
										<span className="d-flex align-items-center">
											Browse gallery <FaChevronRight className="ms-2" />
										</span>
									</HashLink>
								</div>
							</div>
						</div>
					</div>
				</article>
			</section>
			{/* <!-- Testimonials --> */}
			{/* Remember to import FONT AWESOME STAR ICON WHEN IMPLEMENTING THIS SECTION */}
			{/* <!-- <section className="row">
					<section className="container py-5 text-center bg-light">
						<div className="sections">
							<div className="row">
								<header
									className="d-flex pb-5 justify-content-center justify-content-md-between align-items-end"
								>
									<div className="text-center text-md-left">
										<small className="text-uppercase text-muted fw-bold"
											>What our clients are saying</small
										>
										<h2 className="display-5 text-primary-alt">Testimonials</h2>
									</div>
								</header>
								<section className="card-group w-100">
									<div
										className="card mx-2 py-3 border border-3 border-top-0 border-end-0 border-bottom-0 rounded-0 border-primary"
									>
										<div className="card-body">
											<h5 className="card-title">Jerry Seinfeld</h5>
											<h6 className="card-subtitle mb-2 text-muted">
												Denizen, Monk's Cafe
											</h6>
											<blockquote className="card-text">
												"Lorem ipsum dolor, sit amet consectetur adipisicing
												elit. Nemo, fugiat."
											</blockquote>
											<div className="d-flex justify-content-center">
												<span className="fas fa-star checked"></span>
												<span className="fas fa-star checked"></span>
												<span className="fas fa-star checked"></span>
												<span className="fas fa-star checked"></span>
												<span className="fas fa-star checked"></span>
											</div>
										</div>
									</div>
									<div
										className="card mx-2 py-3 border border-3 border-top-0 border-end-0 border-bottom-0 rounded-0 border-primary"
									>
										<div className="card-body">
											<h5 className="card-title">George Costanza</h5>
											<h6 className="card-subtitle mb-2 text-muted">
												Sales Manager, Vandelay Industries
											</h6>
											<blockquote className="card-text">
												"Lorem ipsum dolor, sit amet consectetur adipisicing
												elit. Nemo, fugiat."
											</blockquote>
											<div className="d-flex justify-content-center">
												<span className="fas fa-star checked"></span>
												<span className="fas fa-star checked"></span>
												<span className="fas fa-star checked"></span>
												<span className="fas fa-star checked"></span>
												<span className="fas fa-star-half-alt checked"></span>
											</div>
										</div>
									</div>
									<div
										className="card mx-2 py-3 border border-3 border-top-0 border-end-0 border-bottom-0 rounded-0 border-primary"
									>
										<div className="card-body">
											<h5 className="card-title">Elaine Benes</h5>
											<h6 className="card-subtitle mb-2 text-muted">
												Editor, Pendant Publishing
											</h6>
											<blockquote className="card-text">
												"Lorem ipsum dolor, sit amet consectetur adipisicing
												elit. Nemo, fugiat."
											</blockquote>
											<div className="d-flex justify-content-center">
												<span className="fas fa-star checked"></span>
												<span className="fas fa-star checked"></span>
												<span className="fas fa-star checked"></span>
												<span className="fas fa-star checked"></span>
												<span className="fas fa-star checked"></span>
											</div>
										</div>
									</div>
									<div
										className="card mx-2 py-3 border border-3 border-top-0 border-end-0 border-bottom-0 rounded-0 border-primary"
									>
										<div className="card-body">
											<h5 className="card-title">Cosmo Kramer</h5>
											<h6 className="card-subtitle mb-2 text-muted">
												CEO, Kramerica
											</h6>
											<blockquote className="card-text">
												"Lorem ipsum dolor, sit amet consectetur adipisicing
												elit. Nemo, fugiat."
											</blockquote>
											<div className="d-flex justify-content-center">
												<span className="fas fa-star checked"></span>
												<span className="fas fa-star checked"></span>
												<span className="fas fa-star checked"></span>
												<span className="fas fa-star checked"></span>
												<span className="far fa-star checked"></span>
											</div>
										</div>
									</div>
								</section>
							</div>
						</div>
					</section>
				</section> --> */}
			{/* <!-- Contact --> */}
			<article className="row py-5 bg-secondary-tca w-100 mx-0">
				<div
					className="
							container
							justify-content-center
							align-items-center
							text-center
							w-100
							mx-0
						"
				>
					<header>
						<h5 className="h3 text-light">Choose the right course</h5>
						<p className="text-white fst-italic">We answer within 24 hours</p>
					</header>
					<ContactForm />
				</div>
			</article>
		</main>
	);
}

export default Home;