
async function MovieReview() {
	const valores = window.location.search;

	//Creamos la instancia
	const urlParams = new URLSearchParams(valores);

	//Accedemos a los valores
	var param = urlParams.get('Id');

	//Peticion a la API enviando el parametro recolectado en la url
	await axios.get(`https://api.themoviedb.org/3/movie/${param}?api_key=64edd47a5cafe08e6d7d3db82221a5c3&language=es-ES&region=CO`)
		.then(function (response) {
			console.log(response);

			//Añade la seccion 1 (nombre de la pelicula)
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

			//Añade la seccion 2 de la pagina (Banner de la pelicula)
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
							
							<h6 class="mb-0"><a class="button" target="_blank" href="${response.data.homepage}">Learn More</a></h6>
						</div>
					</div>
				</div>
			</div>
        	`
			about_pg.insertAdjacentHTML('beforeend', section2);

			//Añade la seccion 3 ( titulo conoce el equipo)
			let section3 = `
       	 		<div class="container-xl">
					<div class="row trend_1">
						<div class="col-md-12">
							<div class="trend_1l">
								<h4 class="mb-0"><i class="fa fa-youtube-play align-middle col_red me-1"></i>
									Conoce el  <span class="col_red">Equipo de trabajo</span></h4>
							</div>
						</div>
					</div>	
				</div>
       		 `
			team.insertAdjacentHTML('beforebegin', section3);

		})
		.catch(function (error) {
			console.log(error);
		})


	//Card para devolver informacion de cada actor
	await axios.get(`https://api.themoviedb.org/3/movie/${param}/credits?api_key=64edd47a5cafe08e6d7d3db82221a5c3&language=es-ES&page=1`)
		.then(function (review) {
			console.log(review)

			let cardsPerson = review.data.cast.map(function (person, i) {

				return (`
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
                                    <p>Personaje : ${person.character}</p>
									<p>Popularidad : ${person.popularity}</p>
                                    
                                </div>
                            </div>
                    </div>
                            `
				)
			})




			carouselReview.insertAdjacentHTML('beforeend', cardsPerson);

		}).catch(function (error) {
			console.log(error);
		})


}