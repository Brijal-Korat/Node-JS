const http = require(`http`);

const port = 4000;

const server = http.createServer((req,res) => {
    res.write(`<h1>hello world..!</h1>`);
    res.write(`<h1>hello node.js..!</h1>`);
    res.write(`<p>The paragraph of node.js..!</p>`);
    res.end();
});

server.listen(port,(err) => {
    if(!err){
        console.log(`Server is run on :- ${port}`);
    }
});