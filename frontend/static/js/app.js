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
    // Sidebar toggle behavior
    $('#sidebarCollapseBtn').on('click', function () {
        $('#sidebar, #content, .button-wrap, .column-wrap').toggleClass('active');
    });

    // Using the history API to prevent page refresh
    $(document.body).on('click', function (e) {
        let target = e.target;
        if (target.tagName === 'I') {
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