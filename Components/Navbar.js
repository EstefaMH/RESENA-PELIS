class NavbarComponent extends HTMLElement {

    constructor() {
        super();
        this.render();
    }

    render() {
        this.innerHTML =
        `   <section id="header">
                <nav class="navbar navbar-expand-md navbar-light" id="navbar_sticky">
                    <div class="container">
                        <a class="navbar-brand text-white fw-bold" href="index.html"><i class="fa
                        fa-video-camera col_red me-1"></i> MonkeyKing Movies</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mb-0">
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="index.html">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="movies.html">Peliculas</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="credits.html">Creditos</a>
                                </li>
                            </ul>
                        </div>
                        <form class="container d-flex col-md-6 col-sm-12 mt-3 " action="searchMovie.html">
                            <input type="search" class="form-control bg-black w-60" id='input-search'
                                autocomplete="autocomplete"
                                placeholder="Buscar una pelicula">
                                <button class="btn btn text-white bg_red rounded-0 border-0" type="submit"
                                    onclick="getMovieSearch(inputSearch())">Buscar</button>
                        </form>
                    </div>
                </nav>
            </section>
        `
    }
}

customElements.define("navbar-component", NavbarComponent);