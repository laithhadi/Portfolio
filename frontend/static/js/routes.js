import Index from "./views/Index.js";
import Projects from "./views/Projects.js";
import ProjectView from "./views/ProjectView.js";
import Contact from "./views/Contact.js";
import { regexPath, getParams } from "./_helper_functions.js";

// Routes
export const router = async () => {
    const routes = [{
            path: "/",
            view: Index
        },
        {
            path: "/projects",
            view: Projects
        },
        {
            path: "/projects/:id",
            view: ProjectView
        },
        {
            path: "/contact",
            view: Contact
        },
    ];

    const routeMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(regexPath(route.path))
        }
    });

    let match = routeMatches.find(routeMatch => routeMatch.result !== null);

    if (!match) {
        match = {
            // TODO: customise 404 page?
            route: routes[0],
            result: [location.pathname]
        }
    }

    // Render the view for that specific page
    const view = new match.route.view(getParams(match));
    document.querySelector("#content").innerHTML = await view.getHTML();
};