import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Projects");
    }

    async getHTML() {
        return `      
        <h2 class="display-4 text-white">Projects</h2>
        <p class="lead text-white mb-0">Below is the list of projects I've worked on
        </p>
        <div class="separator"></div>
            <section class="wrapper">
            <div class="container-fostrap">
                <div class="content">
                    <div class="row">
                        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
                            <div class="card">
                                <a href="/projects/1" data-link class="img-card">
                                    <img src="./static/img/kittyworld.png"/>
                                </a>
                                <div class="card-content">
                                    <h4 class="card-title">Hobby Site</h4>
                                    <h6 class="font-weight-bold font-italic">Difficulty:
                                        <i class="ml-4 fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="far fa-star"></i>
                                        <i class="far fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </h6>
                                    <h6 class="font-weight-bold font-italic">Technologies:
                                        <i class="ml-2 fa-brands fa-css3-alt fa-lg"></i>
                                        <i class="fa-brands fa-html5 fa-lg"></i>
                                        <i class="fa-brands fa-js fa-lg"></i>
                                    </h6>
                                    <p class="card-text">
                                        A hobby website created using bootstrap among other frameworks.
                                    </p>
                                </div>
                                <div class="card-read-more">
                                    <a href="https://github.com/laithhadi/bootcamp" target="_blank" class="btn btn-dark">
                                        <i class="fa-brands fa-github data-navigate"></i> Repository
                                    </a>
                                    <a href="" class="disabled btn btn-dark">Live code</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
                            <div class="card">
                                <a href="/projects/2" data-link class="img-card">
                                    <img src="./static/img/jsquiz.png"/>
                                </a>
                                <div class="card-content">
                                    <h4 class="card-title">Cat Quiz</h4>
                                    <h6 class="font-weight-bold font-italic">Difficulty:
                                        <i class="ml-4 fa fa-star"></i>
                                        <i class="far fa-star"></i>
                                        <i class="far fa-star"></i>
                                        <i class="far fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </h6>
                                    <h6 class="font-weight-bold font-italic">Technologies:
                                        <i class="ml-2 fa-brands fa-css3-alt fa-lg"></i>
                                        <i class="fa-brands fa-html5 fa-lg"></i>
                                        <i class="fa-brands fa-js fa-lg"></i>
                                    </h6>
                                    <p class="card-text">
                                        A single HTML page javascript quiz about cats that uses bootstrap
                                        elements.
                                    </p>
                                </div>
                                <div class="card-read-more">
                                    <a href="https://github.com/laithhadi/jsquiz" target="_blank" class="btn btn-dark">
                                        <i class="fa-brands fa-github data-navigate"></i> Repository
                                    </a>
                                    <a href="https://laithhadi.github.io/jsquiz/" target="_blank" class="btn btn-dark">Live code</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
                            <div class="card">
                                <a href="/projects/2" data-link class="img-card">
                                    <img src="./static/img/mobileapp.png"/>
                                </a>
                                <div class="card-content">
                                    <h4 class="card-title">Booking Application</h4>
                                    <h6 class="font-weight-bold font-italic">Difficulty:
                                        <i class="ml-4 fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </h6>
                                    <h6 class="font-weight-bold font-italic">Technologies:
                                        <i class="ml-2 fa-brands fa-java fa-lg"></i>
                                    </h6>
                                    <p class="card-text">
                                        A mobile app booking application created for Sheffield Hallam University
                                        for dissertation.
                                    </p>
                                </div>
                                <div class="card-read-more">
                                    <a href="https://github.com/laithhadi/bookingApplication" target="_blank" class="btn btn-dark">
                                        <i class="fa-brands fa-github data-navigate"></i> Repository
                                    </a>
                                    <a href="" class="disabled btn btn-dark">Live code</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
                            <div class="card">
                                <a href="/projects/2" data-link class="img-card">
                                    <img src="./static/img/eventshub.png"/>
                                </a>
                                <div class="card-content">
                                    <h4 class="card-title">Eventshub</h4>
                                    <h6 class="font-weight-bold font-italic">Difficulty:
                                        <i class="ml-4 fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="far fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </h6>
                                    <h6 class="font-weight-bold font-italic">Technologies:
                                        <i class="ml-2 fa-brands fa-php fa-lg"></i>
                                        <i class="fa-brands fa-css3-alt fa-lg"></i>
                                        <i class="fa-brands fa-html5 fa-lg"></i>
                                        <i class="fa-brands fa-js fa-lg"></i>
                                    </h6>
                                    <p class="card-text">
                                        An event listing website created using full-stack tools, features use of databases
                                        and more!
                                    </p>
                                </div>
                                <div class="card-read-more">
                                    <a href="https://github.com/laithhadi/EventsHub" target="_blank" class="btn btn-dark">
                                        <i class="fa-brands fa-github data-navigate"></i> Repository
                                    </a>
                                    <a href="" class="disabled btn btn-dark">Live code</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="separator"></div>
        `;
    }
}