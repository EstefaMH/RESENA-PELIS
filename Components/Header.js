console.log('header')
class HeaderComponent extends HTMLElement {


    constructor() {
        super();
        this.render();
    }

    render() {
        this.innerHTML =
        `    <section id="top">
                <div class="container">
                    <div class="row top_1">
                        <div class="col-md-3">
                            <div class="top_1l pt-1">
                                <h3 class="mb-0"><a class="text-white" style="font-size: 24px;"
                                    href="index.html"><img class="fa fa-video-camera col_red me-1"
                                        src="img/logo1.png" width="20%" /> MonkeyKing Movies</a></h3>
                            </div>
                        </div>
                        <div class="col-md-5">
                            <div class="top_1m">

                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="top_1r text-end">
                                <ul class="social-network social-circle mb-0">
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
            </section>
        `
         
    }
}

customElements.define("header-component", HeaderComponent);








