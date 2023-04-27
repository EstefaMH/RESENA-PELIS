async function getAllMovies(id){
    await axios.get('https://api.themoviedb.org/3/movie/${id}?api_key=64edd47a5cafe08e6d7d3db82221a5c3')
    .then(function (response) {
        console.log(response);
        return response.data;
    })
    .catch(function (error) {
        console.log(error);
    })   
}

function getMovieSearch(search){
    axios.get('https://api.themoviedb.org/3/search/movie?api_key=64edd47a5cafe08e6d7d3db82221a5c3&query='+search)
    .then(function (response) {
        console.log(response);

        return response;
    })
    .catch(function (error) {
        console.log(error);
    })   
}

function getMovieSearch(search){
    axios.get('https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=64edd47a5cafe08e6d7d3db82221a5c3&language=es-ES&page=1')
    .then(function (response) {
        console.log(response);

        return response;
    })
    .catch(function (error) {
        console.log(error);
    })   
}
