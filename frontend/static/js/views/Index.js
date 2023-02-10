import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Index");
    }

    async getHTML() {
        return `
        <h2 class="display-4 text-white">Portfolio</h2>
        <p class="lead text-white mb-0">Hi! I am an aspiring web developer available for hire!
        </p>
        <div class="separator"></div>
        <div class="row">
            <div class="col-xl-4 col-12 col-md-12 col-sm-12">
                <div class="card bg-light mb-3">
                    <img src="./static/img/confused.jpg" class="card-img-top">
                    <div class="row no-gutters">
                        <div class="col-md-12">
                            <div class="card-body">
                                <h5 class="card-title">Who am I?</h5>
                                <p class="card-text">I am a skilled web developer with a passion 
                                    for creating high-quality, user-friendly websites and applications
                                </p>
                                <a href="/about" data-link class="btn btn-dark">Find out more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-12 col-md-12 col-sm-12">
                <div class="card bg-light mb-3">
                    <img src="./static/img/skills.jpg" class="card-img-top">
                    <div class="row no-gutters">
                        <div class="col-md-12">
                            <div class="card-body">
                                <h5 class="card-title">Skills</h5>
                                <p class="card-text">My expertise lies in the latest technologies, such as PHP, HTML, CSS, JavaScript,
                                    and frameworks such as Laravel.
                                </p>
                                <a href="/projects" data-link class="btn btn-dark">Find out more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-12 col-md-12 col-sm-12">
                <div class="card bg-light mb-3">
                    <img src="./static/img/contact.jpg" class="card-img-top">
                    <div class="row no-gutters">
                        <div class="col-md-12">
                            <div class="card-body">
                                <h5 class="card-title">Get in touch</h5>
                                <p class="card-text">My socials are located on the left side of the page.
                                    If you would like to download my CV, click the button below.
                                </p>
                                <a href="/contact" data-link class="btn btn-dark">Contact me!</a>
                                <a href="./static/LaithHadi.pdf" download="LaithHadi.pdf" class="btn btn-dark float-right">Download CV</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="separator"></div>
        <div class="row text-white">
            <div class="col-12">
                <div class="carousel-container">
                    <div id="myCarousel" class="carousel slide" data-ride="carousel">
                        <!-- Slides -->
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="./static/img/kittyworld.png" alt="Kitty World Site">
                                <div class="carousel-caption d-none d-md-block">
                                    <div class="row">
                                        <div class="col-4">
                                            <h4>Kitty World Site</h4>
                                            <p>A hobby website featuring my cat and cat breeds</p>
                                            <a href="https://github.com/laithhadi/bootcamp"  target="_blank" class="btn btn-dark">
                                                <i class="fa-brands fa-github data-navigate"></i> Repository
                                            </a>
                                            <a href="" target="_blank" class="btn btn-dark">Live code</a>
                                        </div>
                                        <div class="col-8">
                                            <h4>Technologies</h4>
                                            <div class="row">
                                                <div class="col col-md-4">
                                                  <ul>
                                                    <li>HTML</li>
                                                    <li>CSS</li>
                                                    <li>Javascript</li>
                                                  </ul>
                                                </div>
                                                <div class="col col-md-4">
                                                  <ul>
                                                    <li>Bootstrap</li>
                                                    <li>Bootstrap icons</li>
                                                    <li>JQuery</li>
                                                  </ul>
                                                </div>
                                                <div class="col col-md-4">
                                                  <ul>
                                                    <li>OOP</li>
                                                    <li>SCSS</li>
                                                    <li>Parcel</li>
                                                  </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="./static/img/skills.jpg" alt="Image 2">
                                <div class="carousel-caption">
                                    <h3>Image 2</h3>
                                    <p>Image 2 description</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="./static/img/skills.jpg" alt="Image 3">
                                <div class="carousel-caption">
                                    <h3>Image 3</h3>
                                    <p>Image 3 description</p>
                                </div>
                            </div>
                        </div>

                        <!-- Left and right controls -->
                        <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}