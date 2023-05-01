async function AddMovieList() {

    await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=64edd47a5cafe08e6d7d3db82221a5c3&language=es-ES&page=1&region=CO')
        .then(function (response) {

            console.log(response);
            console.log(response.data.results.length);
            console.log(response.data.results[0]);

            var content = [];

            for (let i = 0; i < 3; i++) {

                content.push(response.data.results[i]);
                console.log(response.data.results[0]);

            }
            console.log(content)

            let contentFilter = content.map(function (movie, i) {

                if (i == 0) {
                    return (
                        `<div  class="carousel-item active">
                    <img src='https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.backdrop_path}' class="d-block w-100 ratio ratio-16x9 img-banner-home" alt="Banner">
                     <div class="carousel-caption d-md-block">
                         <h1 class="font_60">${movie.original_title}</h1>
                         <h6 class="mt-3">
                             <span class="col_red me-3">
                                 <i class="fa fa-star"></i>
                                 <i class="fa fa-star"></i>
                                 <i class="fa fa-star"></i>
                                 <i class="fa fa-star"></i>
                                 <i class="fa fa-star-half-o"></i>
                             </span>
                             ${movie.vote_average} (${movie.vote_count} votos)  <strong> Popularidad:</strong> ${movie.popularity}
                             <a class="bg_red p-2 pe-4 ps-4 ms-3 text-white d-inline-block" href="#">Action</a>
                         </h6>
                         <p class="mt-3">${movie.overview}</p>
                         <p class="mb-2">
                            <span class="col_red me-1 fw-bold">Fecha de Estreno :</span>
                             ${movie.release_date}
                        </p>
                         <p class="mb-2">
                            <span class="col_red me-1 fw-bold">Contenido familiar : </span>
                             ${movie.adult ? 'No' : 'Si'}
                        </p>
                         <p><span class="col_red me-1 fw-bold mb-3">Lenguaje original :</span> ${movie.original_language}</p>
                        
                 </div>
                 </div>`
                    );

                } else {
                    return (
                        `<div  class="carousel-item ">
                    <img src='https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.backdrop_path}' class="d-block w-100 ratio ratio-16x9 img-banner-home" alt="Banner">
                     <div class="carousel-caption d-md-block">
                         <h1 class="font_60">${movie.original_title}</h1>
                         <h6 class="mt-3">
                             <span class="col_red me-3">
                                 <i class="fa fa-star"></i>
                                 <i class="fa fa-star"></i>
                                 <i class="fa fa-star"></i>
                                 <i class="fa fa-star"></i>
                                 <i class="fa fa-star-half-o"></i>
                             </span>
                             ${movie.vote_average} (${movie.vote_count} votos)  <strong> Popularidad:</strong> ${movie.popularity}
                             <a class="bg_red p-2 pe-4 ps-4 ms-3 text-white d-inline-block" href="#">Action</a>
                         </h6>
                         <p class="mt-3">${movie.overview}</p>
                         <p class="mb-2">
                            <span class="col_red me-1 fw-bold">Fecha de Estreno :</span>
                             ${movie.release_date}
                        </p>
                         <p class="mb-2">
                            <span class="col_red me-1 fw-bold">Contenido familiar : </span>
                             ${movie.adult ? 'No' : 'Si'}
                        </p>
                         <p><span class="col_red me-1 fw-bold">Lenguaje original :</span> ${movie.original_language}</p>
                         
                 </div>
                 </div>`
                    )
                }
            }
            )
            console.log(contentFilter);
            return carousell.insertAdjacentHTML('beforeend', contentFilter);
        }
        )


        await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=64edd47a5cafe08e6d7d3db82221a5c3&language=es-ES&page=1&region=CO')
        .then(function (response) {
            console.log(response.data);
            

            let moviesList = response.data.results.map(function (movie, i) {
            return(
            `   
                <div class="col-md-3 col-sm-12 mt-2">
                    <div class="trend_2im clearfix position-relative">
                        <div class="trend_2im1 clearfix">
                            <div class="grid">
                                <figure class="effect-jazz mb-0">
                                    <a href="about.html?Id=${movie.id}"><img src="https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}" class="w-100" alt="img25"></a>
                                </figure>
                            </div>
                        </div>
                        <div class="trend_2im2 clearfix text-center position-absolute w-100
                    top-0">
                            <span class="fs-1"><a class="col_red" href="about.html?Id=${movie.id}"></a></span>
                        </div>
                    </div>
                    <div class="trend_2ilast bg_grey p-3 clearfix">
                        <h5><a class="col_red" href="about.html?Id=${movie.id}">${movie.title}</a></h5>
                        <span class="col_red">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </span>
                        <p class="mb-0"> Popularidad ${movie.vote_average} </p>
                        <p class="mb-0"> ${movie.vote_count} Votos</p>
                    </div>
                    </div>
                    
            `   
            )
            })
             cardsMovies.insertAdjacentHTML('beforeend', moviesList);
        })
        .catch(function (error) {
            console.log(error);
        })
}
