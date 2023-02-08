import { router } from "./routes.js";

// Make use of the Web History API
const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    // Using the history API to prevent page refresh
    document.body.addEventListener("click", function (e) {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })

    router();
});