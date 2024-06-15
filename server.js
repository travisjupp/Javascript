import http from "http";
import fs from "fs";

const PORT = 3001;

fs.readFile('./index.html', function(error, html) {
  if (error) throw error;

http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/html"});
  res.write(html);
  res.end("Hello World\n");
}).listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
  });
})


