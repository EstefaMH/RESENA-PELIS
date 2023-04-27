class FooterComponent extends HTMLElement {

    constructor() {
        super();
        this.render();
    }

    render() {
        this.innerHTML = 
        ` 
            <section id="footer">
				<div class="footer_m clearfix">
					<div class="container">
						<div class="row footer_1">
							<div class="col-md-4">
								<div class="footer_1i">
									<h3><a class="text-white" href="index.html">
									<img src="img/logo1.png" style="width:20%"/>
									</i>MonkeyKing Movies</a></h3>
									<p class="mt-3">Encontraras reseñas de mas de 5.000 peliculas </p>

								</div>
							</div>
							<div class="col-md-4">

							</div>
							<div class="col-md-4">
								<div class="footer_1i">
									<h4>Sign <span class="col_red">Newsletter</span></h4>
									<p class="mt-3">Actividad de contextualización FrontEnd </p>
									<div class="d-flex justify-content-between">
									<ul>
										<strong>Tecnologias : </strong>
										<li>JavaScript</li>
										<li>HTML</li>
										<li>CSS</li>
										<li>Bootstrap</li>
									</ul>
									
									<ul>
										<strong>API :  </strong>
										<li>Axios</li>
										<li>TMDB</li>
									</ul>
									</div>
									<ul class="social-network social-circle mb-0 mt-4">
										<li><a href="#" class="icoRss" title="Rss"><i class="fa fa-instagram"></i></a></li>
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
					</div>
				</div>
			</section>
            <section id="footer_b" class="pt-3 pb-3 bg_grey">
				<div class="container">
					<div class="row footer_1">
						<div class="col-md-8">
							<div class="footer_1l">
								<p class="mb-0">© 2023 MonkeyKingMovies. All Rights Reserved | Design
									by
								</p>
							</div>
						</div>
						<div class="col-md-4">
							<div class="footer_1r">
							<p class="col_red"> Estefanía Moncaleano  & <a class="col_red" href="http://www.templateonweb.com">TemplateOnWeb</a></p>
							</div>
					</div>
				</div>
			</section>
        ` 
    }
}

customElements.define("footer-component", FooterComponent);