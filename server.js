const express = require("express");
const path = require("path");
const http = require('http');

// Setting port
const port = process.env.PORT || 5000;
const host = process.env.HOST || "192.168.1.35"

// Start Express Instance
const app = express();

// Body parsing middleware; Set max file size to 10mb
app.use(express.json({ limit: '1mb' }));
// app.use(express.urlencoded({ limit: '10mb' }));


// Serve static assets if in production
// if (process.env.NODE_ENV === 'production') {
// Set static folder
app.use(express.static("html"))
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'html', 'index.html'));
})
app.get("/services", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'html', 'services.html'));
})
app.get("/portfolio", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'html', 'portfolio.html'));
})
app.get("/contact", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'html', 'contact-us.html'));
})
app.get("*", (req, res) => {
    res.json({ status: 404, message: "404 not found" })
})
// } else {
// }

// Start Node server and listen on port

if (process.env.NODE_ENV === 'production') {
    http.createServer(app).listen(port, host, () => console.log("Node Server started on port: " + host + ":" + port))
} else {
    console.log("SERVER SET TO DEVELOPMENT. MAKE SURE LINUX ENVIRONMENT IS SET TO PRODUCTION:")
    console.log("export NODE_ENV=production")
    app.listen(port, () => { console.log("Node Server started on port: " + port) })
}


