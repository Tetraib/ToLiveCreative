var express = require("express"),
    app = express();
app.use(express.static('./public'));
app.listen(process.env.PORT, process.env.IP);

app.get('/', function(req, res) {
    // res.send("hello");
     res.render("home.jade", {});
});