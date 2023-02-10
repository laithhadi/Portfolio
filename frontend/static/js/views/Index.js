import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Index");
    }

    async getHTML() {
        return `
        <h2 class="display-4 text-white">Portfolio</h2>
        <p class="lead text-white mb-0">Hi! I am a full stack developer 
            <a href="/contact" data-link class="link-info">
                available for hire!
            </a>
        </p>
        <div class="separator"></div>
        <div class="row text-white">
            <div class="col-12 col-md-4">
                <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                    sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div class="bg-white p-5 rounded my-5 shadow-sm">
                    <p class="lead font-italic mb-0 text-muted">"Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                        id
                        est laborum."</p>
                </div>
            </div>
            <div class="col-12 col-md-4">
                <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                    sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div class="bg-white p-5 rounded my-5 shadow-sm">
                    <p class="lead font-italic mb-0 text-muted">"Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                        id
                        est laborum."</p>
                </div>
            </div>
            <div class="col-12 col-md-4">
                <img src="./static/img/author-homepage.jpg" class="homepage-img img-thumbnail img-fluid">
            </div>
        </div>
        <div class="row text-white">
            <div class="col-12">
                <div class="carousel-container">
                    <div id="myCarousel" class="carousel slide" data-ride="carousel">
                        <!-- Slides -->
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="./static/img/test1.jpg" alt="Image 1">
                                <div class="carousel-caption">
                                    <h3>Image 1</h3>
                                    <p>Image 1 description</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="./static/img/author.jpg" alt="Image 2">
                                <div class="carousel-caption">
                                    <h3>Image 2</h3>
                                    <p>Image 2 description</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="./static/img/test2.jpg" alt="Image 3">
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