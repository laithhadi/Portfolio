// Characters are escaped with \ to match the literal / characters in the input string
// All occurrences of :word are replaced with the pattern (.+) to match any string as a 
// placeholder for dynamic URL parameter values. The function returns a regex
export const regexPath = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

// Retrieves the route with :id and converts the url parameters into an array 
// of parameters
export const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    // Loop through each of the keys, e.g. id in url, and return the key in an array 
    // and the values at index of the key. It will then be converted to an object
    // using the fromEntries method
    return Object.fromEntries(keys.map((key, index) => {
        return [key, values[index]]
    }));
};