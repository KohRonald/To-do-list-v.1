const express = require("express");
const app = express();

const date = require(__dirname + "/date.js");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public")); //serve up static folder

const items = [];
const workItems = [];

//render home ejs
app.get("/", function(req, res) {

    //run getDate function in date.js and store into day
    let day = date.getDate();

    res.render("list", { listTitle: day, newListItems: items });
});

//render work ejs
app.get("/work", function(req, res) {
    res.render("list", { listTitle: "Work List", newListItems: workItems });
})

//post function
app.post("/", function(req, res) {

    let item = req.body.newItem;

    //append item to array if list title is work
    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
})

//listen to Port:3000
app.listen(3000, function() {
    console.log("Site is up on Port:3000");
});
