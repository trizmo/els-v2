const express = require("express");
const path = require("path");
const http = require('http');

// Setting port
const port = process.env.PORT || 5000;
const host = process.env.HOST || "192.168.1.19"

// Start Express Instance
const app = express();

// Body parsing middleware; Set max file size to 10mb
app.use(express.json({ limit: '1mb' }));

// Serve static assets if in production
// Set static folder
app.use(express.static("html"))
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages', 'index.html'));
})
app.get("/services", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages', 'services.html'));
})
app.get("/pricing", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages', 'pricing.html'));
})
app.get("/portfolio", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages', 'portfolio.html'));
})
app.get("/contact", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages', 'contact-us.html'));
})
app.get("/privacy", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages', 'privacy.html'));
})
app.get("/terms", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages', 'terms.html'));
})
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages', '404.html'));
})


// acme-challenge for ssl cert
app.get("/.well-known/acme-challenge/6kvagXsNn3b26Fk3Ct_reGY-eT-taaMQ79uEaTg3Vk0", (req, res) => {
    res.sendFile(path.resolve(__dirname, "html", ".well-known", "acme-challenge", "6kvagXsNn3b26Fk3Ct_reGY-eT-taaMQ79uEaTg3Vk0", "6kvagXsNn3b26Fk3Ct_reGY-eT-taaMQ79uEaTg3Vk0.tKxqudkAHjbp2TFTLzzTlukU3yKW8IKP4NQ2r56Q_lY"));
})
app.get("/.well-known/acme-challenge/LhpsAeu61dm_SA97zY9-aGouynsIRE0-agZrDWdU14w", (req, res) => {
    res.sendFile(path.resolve(__dirname, "html", ".well-known", "acme-challenge", "LhpsAeu61dm_SA97zY9-aGouynsIRE0-agZrDWdU14w", "LhpsAeu61dm_SA97zY9-aGouynsIRE0-agZrDWdU14w.tKxqudkAHjbp2TFTLzzTlukU3yKW8IKP4NQ2r56Q_lY"));
})


// Start Node server and listen on port
if (process.env.NODE_ENV === 'production') {
    http.createServer(app).listen(port, host, () => console.log("Node Server started on port: " + host + ":" + port))
} else {
    console.log("SERVER SET TO DEVELOPMENT. MAKE SURE LINUX ENVIRONMENT IS SET TO PRODUCTION:")
    console.log("export NODE_ENV=production")
    app.listen(port, () => { console.log("Node Server started on port: " + port) })
}


