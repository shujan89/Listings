const express = require("express");
const app = express();
const users = require("./routes/user.js")
const posts = require("./routes/post.js")
    // const cookieParser = require('cookie-parser');
const session = require('express-session');

// app.use(cookieParser("secretcode"));

// Use the session middleware
app.use(session({ secret: "mysupersecretsring", resave: false, saveUninitialized: true }));

app.get("/reqcount", (req, res) => {
    if (req.session.count) {
        req.session.count++;
    } else {
        req.session.count = 1;
    }

    res.send(`you sent a request ${req.session.count} time`);
});

// app.get("/test", (req, res) => {
//     res.send("test successful!");
// });

// // send signed cookie

// app.get("/getsignedcookie", (req, res) => {
//     res.cookie("color", "red", { signed: true });
//     res.send("done!");
// });

// // send verify cookie

// app.get("/verify", (req, res) => {
//     console.log(req.signedCookies);
//     res.send("verified")
// });

// app.get("/getcookies", (req, res) => {
//     res.cookie("greet", "nomoste");
//     res.cookie("madeIn", "India");
//     res.send("sent you same cookies")

// });

// app.get("/greet", (req, res) => {
//     let { name = "anonymous" } = req.cookies;
//     res.send(`hii ${name}`);
// });



// app.get("/", (req, res) => {
//     console.dir(req.cookies);
//     res.send("hii, i am root!");
// });

// app.use("/users", users);
// app.use("/posts", posts);

app.listen(3000, () => {
    console.log("server is listening to 3000");
});