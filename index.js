const fs = require("fs")
const http = require("http")

const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html")
  console.log(req.url)
  if (req.url == "/") {
    res.statusCode = 200
    const data = fs.readFileSync("Login/index.html")
    res.end(data.toString())
  } else if (req.url == "/identify") {
    res.statusCode = 200
    const data = fs.readFileSync("Identify/index.html")
    res.end(data.toString())
  } else if (req.url == "/enter") {
    res.statusCode = 200
    const data = fs.readFileSync("Enter/index.html")
    res.end(data.toString())
  } else if (req.url == "/confirm") {
    res.statusCode = 200
    const data = fs.readFileSync("Confirm/index.html")
    res.end(data.toString())
  } else if (req.url == "/dashboard") {
    res.statusCode = 200
    const data = fs.readFileSync("Dashboard/index.html")
    res.end(data.toString())
  } else if (req.url == "/manage") {
    res.statusCode = 200
    const data = fs.readFileSync("Manage/index.html")
    res.end(data.toString())
  } else {
    // res.harry();
    res.statusCode = 404
    res.end(
      "<h1> Not Found</h1> <p> Hey this page was not found on this server</p>"
    )
  }
})

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
