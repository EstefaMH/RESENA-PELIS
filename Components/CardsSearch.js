
async function CardsSearch() {

    let search = localStorage.getItem('busqueda');
    axios.get('https://api.themoviedb.org/3/search/movie?api_key=64edd47a5cafe08e6d7d3db82221a5c3&language=es-ES&region=CO&query='+search).then(function (response) {
    console.log(response);

        let cardsMovies = response.data.results.map(function (movie, i) {
            
            return (
                `<form key=${i} class="cardMovieSearch col-sm-12 col-md-3 mt-3" action="about.html" method="GET">
                    <div class="serv_pg1i bg_dark p-4 pt-3>
                        <h1 class="col_light"><i class="fa fa-film"></i> <span
                        class="pull-right">${i<10 ? '0'+i : i }</span>
                        </h1>
                        <img class='w-100' src='https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}'/>
                        <h5 class="col_red mt-2">${movie.original_title}</h5>
                        <h6  class="mb-0 mt-4">
                        <button id='IdMovieSearch' class="submit btn btn text-white bg_red rounded-0 border-0 btn-cardSearch"  href="about.html/${movie.id}" >Ver Reseña</button>
                        </h6>
                        <input class="w-80 bg_dark mt-2 text-white " id="Id" name='Id' value=${movie.id} />
                    </div>
                </form>`
            );
        })
    
        console.log(cardsMovies);
        return cardsSearch.insertAdjacentHTML('beforeend', cardsMovies);

    })
    .catch(function (error) {
        console.log(error);
    }) 

}


function GetId(){
    let Id = document.getElementById('Id').value;
    console.log(Id);
    localStorage.setItem('IdMovie', movie.id);
}
