//TODO: Add classes that contain content
const router = async () => {
    const routes = [
        { path: "/", view: () => console.log("viewing dash") },
        { path: "/projects", view: () => console.log("viewing projects") },
        { path: "/contact", view: () => console.log("viewing contact") }
    ];

    // TODO: customise 404 page?
    const routeMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        }
    });

    let match = routeMatches.find(routeMatch => routeMatch.isMatch);

    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        }
    }

    console.log(match.route.view);
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    // Using the history API to prevent page refresh
    document.body.addEventListener("click", function(e) {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }        
    })

    router();
});