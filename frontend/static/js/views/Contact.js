import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Contact");
    }

    async getHTML() {
        return `
        <h2 class="display-4 text-white">Contact Me</h2>
        <p class="lead text-white mb-0">If you would like to get in touch, please use the form below to send a message!</p>
        <div class="separator"></div>
        <div class="page-header d-flex align-items-center">
            <div class="container position-relative">
                <div class="alert alert-success" id="success-alert">
                    <strong>Success!</strong>
                </div>
            </div>
        </div>
        <section id="contact" class="contact">
            <div class="container">
                <div class="row gy-4 justify-content-center">
                    <div class="col-lg-3">
                        <div class="info-item d-flex">
                            <i class="bi bi-geo-alt flex-shrink-0"></i>
                            <div>
                                <h4>Location:</h4>
                                <p>Sheffield, UK</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="info-item d-flex">
                            <i class="bi bi-envelope flex-shrink-0"></i>
                            <div>
                                <h4>Email:</h4>
                                <p>laithoday5@yahoo.com</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="info-item d-flex">
                            <i class="bi bi-phone flex-shrink-0"></i>
                            <div>
                                <h4>Call:</h4>
                                <p>+447466546877</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center mt-4">
                    <div class="col-lg-9">
                        <form method="post" onsubmit="return false;" role="form" id="contactForm" class="php-email-form">
                            <div class="row">
                                <div class="col-md-6 form-group">
                                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name"
                                        required>
                                </div>
                                <div class="col-md-6 form-group mt-3 mt-md-0">
                                    <input type="email" class="form-control" name="email" id="email"
                                        placeholder="Your Email" required>
                                </div>
                            </div>
                            <div class="form-group mt-3">
                                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject"
                                    required>
                            </div>
                            <div class="form-group mt-3">
                                <textarea class="form-control" name="message" rows="5" placeholder="Message"
                                    required></textarea>
                            </div>
                            <div class="my-3">
                                <div class="loading">Loading</div>
                                <div class="error-message"></div>
                                <div class="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div class="text-center"><button class="btn btn-dark" id="sendMsg" type="submit">Send Message</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        `;
    }
}