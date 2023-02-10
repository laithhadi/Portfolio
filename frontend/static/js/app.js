import {
    router
} from "./routes.js";

// Make use of the Web History API
const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    // Contact page error handler
    let form = document.getElementById("contactForm");

    $("#sendMsg").click(function showAlert() {
        if (form.checkValidity()) {
            $("#success-alert").fadeTo(1000, 500).slideUp(500, function () {
                $("#success-alert").slideUp(500);
                form.reset();
            });
        }
    });

    // Sidebar toggle behavior
    $('#sidebarCollapseBtn').on('click', function () {
        $('#sidebar, #content, .button-wrap, .column-wrap').toggleClass('active');
    });

    // Using the history API to prevent page refresh
    $(document.body).on('click', function (e) {
        let target = e.target;
        if (target.tagName === 'I' || target.tagName === 'IMG') {
            target = target.parentElement;
        }
        if (target.matches("[data-navigate]")) {
            navigateTo(target.href);
        }
        if (target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(target.href);
        }
    });
    router();
});