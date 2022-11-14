const express = require('express')

const app = express()
//express app 
app.listen(3000);
// listening in port 3000

// for /  sending index.html as responce  using send method it have 2 parameter one is the path and seconde root dir

app.get('/', (req, res) => {
    // res.send('<p>Homme page </p>')

    res.sendFile('./views/index.html', {root : __dirname})

})

app.get("/about", (req, res) => {

  res.sendFile("./views/about.html", { root: __dirname });
});


// redirecting 

app.get("/about-me", (req, res) => {
  res.redirect("/about");
});

//404 page

app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
}) 

// .use method wil send 404 as status and 404.html as responce if no other abouve link got matched .its must be place in bottom of code otherwise it wont check the code undr this






