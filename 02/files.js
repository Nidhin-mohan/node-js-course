const fs = require('fs')
    // fs is node module from node(filesystem)

    //reading files

fs.readFile('./docs/blog.txt',(err, data) => {
    // readFile takes to paameter one is the path/file name and second one is a callback which help us show error/data

    if (err) {
        console.log(err);
    }console.log(data.toString())

    // in here data is buffer format thats y we are using toString() metho to covert them into string

})
console.log("lastline")

// lastline will be loged first because fsWrite having a call back


// write files

fs.writeFile('./docs/blog.txt', 'hello, world', () => {
    console.log("file has written")

    // fs.writeFile takes three parameter one a path/filename to write file   second the the string to wroite third is a call back . will replace whatever was there in the file 
    
})



fs.writeFile("./docs/blog1.txt", "hello, world", () => {
  console.log("file has written");

  // if there is nofile in that directory the name give it will create that file and write
});

// directories

// directories
if (!fs.existsSync('./assets')) {
    //fs,existsSync is a synchronous method rhat check the file exist or not
  fs.mkdir('./assets', err => {
    // fs.mkdir will  make a directory assets in current directory 
    if (err) {
      console.log(err);
    }
    console.log('folder created');
  });
} else {
  fs.rmdir('./assets', err => {
    // fs.rmdir will remove the directory

    if (err) {
      console.log(err);
    }
    console.log('folder deleted');
  });
}



// deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
  fs.unlink('./docs/deleteme.txt', err => {
    //fs.unlink will delete the file fom given directory
    
    if (err) {
      console.log(err);
    }
    console.log('file deleted');
  });
}