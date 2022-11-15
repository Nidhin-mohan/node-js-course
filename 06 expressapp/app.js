
const express = require("express");

// express app
const app = express();

//morgan
const morgan = require('morgan')

  const mongoose = require('mongoose');
const Blog = require("./models/blog");
const { result } = require("lodash");

const dbURI =
  "mongodb+srv://ndn:welcome10@nodetuts.mmun3ty.mongodb.net/?retryWrites=true&w=majority";

  mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((result) => {
          // listen for requests
          app.listen(3000);
          console.log("connected to database");
        })
        .catch((err) => {
          console.log(err)
        })



//loading static page

app.use(express.static('public'))

// using this to convert value comming from create.ejs

app.use(express.urlencoded({ extended: true }));

// register view engine
app.set("view engine", "ejs");
// app.set('views', 'myviews');

app.use((req, res, next) => {
  console.log("request made")
   console.log("host: ", req.hostname);
   console.log("path: ", req.path);
   console.log("method: ", req.method);
  next();
});

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  
 res.redirect('/blogs')
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

app.get('/add-blog', (req, res) => {
  const blog = new Blog({
    title : 'new blog1',
    snippet : 'about my blog',
    body : 'more about my blog'
  });
  blog.save()
  .then((result) => {
    res.send(result)
    console.log("data saved")
  })
  .catch((err) => {
    console.log(err)
  })
} )

// getting al blogs to home page

app.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { blogs: result, title: "All blogs" });
    })
    .catch((err) => {
      console.log(err);
    });
});




//getting data from form

app.post ('/blogs', (req,res) => {
  const blog = new Blog(req.body);
  blog.save()
  .then((result) => {
    res.redirect('/blogs')
  })
  .catch((err) => {
    console.log(err)
  })
})

// sending responce for blog by id 
app.get("/blogs/:id", (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("details", { blog: result, title: "Blog Details" });
    })
    .catch((err) => {
      console.log(err);
    });
});


//deleting blog

app.delete("/blogs/:id", (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => {
      console.log(err);
    });
});

// // gett all blogs

// app.get('/all-blogs', (req,res) => {
//   Blog.find()
//   .then((result) => {
//     res.send(result)
//   })
//   .catch((err) => {
//     console.log(err)
//   })
// })

// // get a blog by id

// app.get("/single-blog", (req, res) => {
//   Blog.findById("6372188f75b02ffadcdbc6de")
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });


// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
