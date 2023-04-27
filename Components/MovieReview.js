
async function MovieReview() {
    const valores = window.location.search;

    //Creamos la instancia
    const urlParams = new URLSearchParams(valores);

    //Accedemos a los valores
    var param = urlParams.get('Id');

    await axios.get(`https://api.themoviedb.org/3/movie/${param}?api_key=64edd47a5cafe08e6d7d3db82221a5c3&language=es-ES&region=CO`)
        .then(function (response) {
            console.log(response);


            const section1 = ` 
			<div class="container-xl">
				<div class="row center_o1">
					<div class="col-md-5">
						<div class="center_o1l">
							<h2 class="mb-0">${response.data.original_title}</h2>
						</div>
					</div>
					<div class="col-md-7">
						<div class="center_o1r text-end">
							<h6 class="mb-0 col_red"><a href="#">Home</a> <span class="me-2 ms-2
									text-light"><i class="fa fa-caret-right align-middle"></i></span>${response.data.original_title}
							</h6>
						</div>
					</div>
				</div>
			</div>
		`
            section1MovieReview.insertAdjacentHTML('beforeend', section1);

            let getSection2 = document.getElementById('about_pg');
            getSection2.style = `background-image: url(https://www.themoviedb.org/t/p/w1000_and_h450_multi_faces${response.data.backdrop_path})`;

            const section2 = `
			<div class="about_pgm">
				<div class="container-xl">
					<div class="row about_pg1">
						<div class="col-md-12">
							<h2><span class="col_red">${response.data.title}</span><br>
								${response.data.tagline}</h2>
							<p class="mt-3 w-50">${response.data.overview}</p>
							
							<h6 class="mb-0"><a class="button" href="#">Learn More</a></h6>
						</div>
					</div>
				</div>
			</div>
        `
            about_pg.insertAdjacentHTML('beforeend', section2);

            let section3 = `
        <div class="container-xl">
				<div class="row trend_1">
					<div class="col-md-12">
						<div class="trend_1l">
							<h4 class="mb-0"><i class="fa fa-youtube-play align-middle col_red me-1"></i>
								Meet <span class="col_red">The Team</span></h4>
						</div>
					</div>
				</div>	
		</div>
        `
            team.insertAdjacentHTML('beforebegin', section3);

            `<section id="stream" class="pb-5 pt-4">
			<div class="container">
				<div class="row trend_1">
					<div class="col-md-6 col-6">
						<div class="trend_1l">
							<h4 class="mb-0"><i class="fa fa-youtube-play align-middle col_red me-1"></i>
								Movie <span class="col_red">Streaming Services</span></h4>
						</div>
					</div>
					<div class="col-md-6 col-6">
						<div class="trend_1r text-end">
							<h6 class="mb-0"><a class="button" href="#"> View All</a></h6>
						</div>
					</div>
				</div>
				<div class="row trend_2 mt-4">
					<div id="carouselExampleCaptions4" class="carousel slide"
						data-bs-ride="carousel">
						<div class="carousel-indicators">
							<button type="button" data-bs-target="#carouselExampleCaptions4"
								data-bs-slide-to="0" class="active" aria-label="Slide 1"
								aria-current="true"></button>
							<button type="button" data-bs-target="#carouselExampleCaptions4"
								data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
						</div>
						<div class="carousel-inner">
							<div class="carousel-item carousel-item-next carousel-item-start">
								<div class="trend_2i row">
									<div class="col">
										<div class="trend_2im clearfix position-relative">
											<div class="trend_2im1 clearfix">
												<div class="grid">
													<figure class="effect-jazz mb-0">
														<a href="#"><img src="img/4.jpg" class="w-100" alt="img25"></a>
													</figure>
												</div>
											</div>
											<div class="trend_2im2 clearfix position-absolute w-100 top-0">
												<h5><a class="col_red" href="#">Semper</a></h5>
												<span class="col_red">
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
												</span>
												<p class="mb-0">2 Views</p>
											</div>
										</div>

									</div>
									<div class="col">
										<div class="trend_2im clearfix position-relative">
											<div class="trend_2im1 clearfix">
												<div class="grid">
													<figure class="effect-jazz mb-0">
														<a href="#"><img src="img/5.jpg" class="w-100" alt="img25"></a>
													</figure>
												</div>
											</div>
											<div class="trend_2im2 clearfix position-absolute w-100 top-0">
												<h5><a class="col_red" href="#">Semper</a></h5>
												<span class="col_red">
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
												</span>
												<p class="mb-0">2 Views</p>
											</div>
										</div>

									</div>
									<div class="col">
										<div class="trend_2im clearfix position-relative">
											<div class="trend_2im1 clearfix">
												<div class="grid">
													<figure class="effect-jazz mb-0">
														<a href="#"><img src="img/6.jpg" class="w-100" alt="img25"></a>
													</figure>
												</div>
											</div>
											<div class="trend_2im2 clearfix position-absolute w-100 top-0">
												<h5><a class="col_red" href="#">Semper</a></h5>
												<span class="col_red">
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
												</span>
												<p class="mb-0">2 Views</p>
											</div>
										</div>

									</div>
									<div class="col">
										<div class="trend_2im clearfix position-relative">
											<div class="trend_2im1 clearfix">
												<div class="grid">
													<figure class="effect-jazz mb-0">
														<a href="#"><img src="img/7.jpg" class="w-100" alt="img25"></a>
													</figure>
												</div>
											</div>
											<div class="trend_2im2 clearfix position-absolute w-100 top-0">
												<h5><a class="col_red" href="#">Semper</a></h5>
												<span class="col_red">
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
												</span>
												<p class="mb-0">2 Views</p>
											</div>
										</div>

									</div>
									<div class="col">
										<div class="trend_2im clearfix position-relative">
											<div class="trend_2im1 clearfix">
												<div class="grid">
													<figure class="effect-jazz mb-0">
														<a href="#"><img src="img/8.jpg" class="w-100" alt="img25"></a>
													</figure>
												</div>
											</div>
											<div class="trend_2im2 clearfix position-absolute w-100 top-0">
												<h5><a class="col_red" href="#">Semper</a></h5>
												<span class="col_red">
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
												</span>
												<p class="mb-0">2 Views</p>
											</div>
										</div>

									</div>
								</div>
							</div>
							<div class="carousel-item active carousel-item-start">
								<div class="trend_2i row">
									<div class="col">
										<div class="trend_2im clearfix position-relative">
											<div class="trend_2im1 clearfix">
												<div class="grid">
													<figure class="effect-jazz mb-0">
														<a href="#"><img src="img/9.jpg" class="w-100" alt="img25"></a>
													</figure>
												</div>
											</div>
											<div class="trend_2im2 clearfix position-absolute w-100 top-0">
												<h5><a class="col_red" href="#">Semper</a></h5>
												<span class="col_red">
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
												</span>
												<p class="mb-0">2 Views</p>
											</div>
										</div>

									</div>
									<div class="col">
										<div class="trend_2im clearfix position-relative">
											<div class="trend_2im1 clearfix">
												<div class="grid">
													<figure class="effect-jazz mb-0">
														<a href="#"><img src="img/10.jpg" class="w-100" alt="img25"></a>
													</figure>
												</div>
											</div>
											<div class="trend_2im2 clearfix position-absolute w-100 top-0">
												<h5><a class="col_red" href="#">Semper</a></h5>
												<span class="col_red">
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
												</span>
												<p class="mb-0">2 Views</p>
											</div>
										</div>

									</div>
									<div class="col">
										<div class="trend_2im clearfix position-relative">
											<div class="trend_2im1 clearfix">
												<div class="grid">
													<figure class="effect-jazz mb-0">
														<a href="#"><img src="img/11.jpg" class="w-100" alt="img25"></a>
													</figure>
												</div>
											</div>
											<div class="trend_2im2 clearfix position-absolute w-100 top-0">
												<h5><a class="col_red" href="#">Semper</a></h5>
												<span class="col_red">
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
												</span>
												<p class="mb-0">2 Views</p>
											</div>
										</div>

									</div>
									<div class="col">
										<div class="trend_2im clearfix position-relative">
											<div class="trend_2im1 clearfix">
												<div class="grid">
													<figure class="effect-jazz mb-0">
														<a href="#"><img src="img/4.jpg" class="w-100" alt="img25"></a>
													</figure>
												</div>
											</div>
											<div class="trend_2im2 clearfix position-absolute w-100 top-0">
												<h5><a class="col_red" href="#">Semper</a></h5>
												<span class="col_red">
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
												</span>
												<p class="mb-0">2 Views</p>
											</div>
										</div>

									</div>
									<div class="col">
										<div class="trend_2im clearfix position-relative">
											<div class="trend_2im1 clearfix">
												<div class="grid">
													<figure class="effect-jazz mb-0">
														<a href="#"><img src="img/5.jpg" class="w-100" alt="img25"></a>
													</figure>
												</div>
											</div>
											<div class="trend_2im2 clearfix position-absolute w-100 top-0">
												<h5><a class="col_red" href="#">Semper</a></h5>
												<span class="col_red">
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
												</span>
												<p class="mb-0">2 Views</p>
											</div>
										</div>

									</div>
								</div>
							</div>

						</div>

					</div>
				</div>
			</div>
		`;
        })
        .catch(function (error) {
            console.log(error);
        })



    await axios.get(`https://api.themoviedb.org/3/movie/${param}/credits?api_key=64edd47a5cafe08e6d7d3db82221a5c3&language=es-ES&page=1`)
        .then(function (review) {
            console.log(review)

                let cardsPerson = review.data.cast.map(function (person, i) {

                   return( `
                   <div class="col-sm-12 col-md-3 mt-3">
                            <div class="team_1i1 clearfix position-relative">
                                <div class="team_1i1i clearfix">
                                    <div class="grid clearfix">
                                        <figure class="effect-jazz mb-0">
                                            <a href="#"><img src= ${person.profile_path ? `https://image.tmdb.org/t/p/w220_and_h330_face${person.profile_path}` : 'https://image.tmdb.org/t/p/w220_and_h330_face/mflBcox36s9ZPbsZPVOuhf6axaJ.jpg'} class="w-100" alt="abc"></a>
                                        </figure>
                                    </div>
                                </div>
                                <div class="team_1i1i1 clearfix position-absolute w-100 bottom-0">
                                    <h4 class="col_red">${person.name}</h4>
                                    <h6>${person.known_for_department}</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                        eiusmod tempor incididunt ut labore. Aliquam ut elit venenatis,
                                        congue dolor ut, mattis leo</p>
                                    <ul class="social-network social-circle mb-0 mt-3">
                                        <li><a href="#" class="icoRss" title="Rss"><i class="fa
                                                    fa-instagram"></i></a></li>
                                        <li><a href="#" class="icoFacebook" title="Facebook"><i class="fa
                                                    fa-facebook"></i></a></li>
                                        <li><a href="#" class="icoTwitter" title="Twitter"><i class="fa
                                                    fa-twitter"></i></a></li>
                                        <li><a href="#" class="icoGoogle" title="Google +"><i class="fa
                                                    fa-youtube"></i></a></li>
                                        <li><a href="#" class="icoLinkedin" title="Linkedin"><i class="fa
                                                    fa-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                    </div>
                            `
                   )
                })




            carouselReview.insertAdjacentHTML('beforeend',  cardsPerson);

        }).catch(function(error){
            console.log(error);
        }) 
            

}