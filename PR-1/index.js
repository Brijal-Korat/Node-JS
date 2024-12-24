const http = require('http');
const port = 8000;
const fs = require('fs');

const server = http.createServer((req, res) => {
    let fileName = "";
    switch (req.url) {
        case "/":
            fileName = "./home.html"
            break;

        case "/about":
            fileName = "./about.html"
            break;

        case "/blog":
            fileName = "./blog.html"
            break;

        case "/feature":
            fileName = "./feature.html"
            break;

        case "/services":
            fileName = "./services.html"
            break;

        case "/shop":
            fileName = "./shop.html"
            break;

        case "/cart":
            fileName = "./cart.html"
            break;

        case "/team":
            fileName = "./team.html"
            break;

        case "/contact":
            fileName = "./services.html"
            break;
    }

    fs.readFile(fileName, (err, pageName) => {
        if (err) {
            console.log("This file does not exist");
            return false;
        }
        res.end(pageName);
    })
})

server.listen(port, (err) => {
    if (!err) {
        console.log(`Server is running on port :- ${port}`);
    }
})








