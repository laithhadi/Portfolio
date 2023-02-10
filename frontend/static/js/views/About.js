import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("About");
    }

    async getHTML() {
        return `      
        <div class="container">
        <h1 class="text-center text-white">About Me</h1>
        <hr>
      <div class="row">
        <div class="col-md-3 col-sm-12">
            <img src="./static/img/author-homepage.jpg" class="img-fluid rounded-circle mb-2">
        </div>
        <div class="col-md-9 col-sm-12">
          <div class="card mb-3">
            <div class="card-body">
              <h3 class="card-title">My Skills</h3>
              <ul class="list-group">
                <li class="list-group-item">HTML</li>
                <li class="list-group-item">CSS</li>
                <li class="list-group-item">JavaScript</li>
                <li class="list-group-item">Bootstrap</li>
                <li class="list-group-item">jQuery</li>
              </ul>
            </div>
          </div>
          <div class="card mb-3">
            <div class="card-body">
              <h3 class="card-title">My Experience</h3>
              <p class="card-text">I have worked on several web development projects, including building websites and web applications for small businesses and individuals. I have a strong understanding of front-end development and am constantly learning and improving my skills.</p>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h3 class="card-title">My Qualifications</h3>
              <ul class="list-group">
                <li class="list-group-item">Bachelor's Degree in Software Engineering</li>
                <li class="list-group-item">Several online web development courses completed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
        `;
    }
}