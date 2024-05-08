const express = require("express");
const pug = require("pug");
const app = express();
const port = 9876;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`)
});

app.get("/:divName", (req,res) => {
    // console.log(compFunc({link: 'https://www.google.com'}));
    // res.send('Cool Website!');
    res.send(pug.renderFile('./template.pug', {
        divID: `${req.params.divName}`,
        link: 'https://www.google.com'}));
})
app.get("/user/:username", (req,res) => {
    res.send(`${req.params.username}`);
})