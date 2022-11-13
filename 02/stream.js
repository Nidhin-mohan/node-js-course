const fs = require("fs");

const readStream = fs.createReadStream("./docs/blog3.txt", {
  encoding: "utf8",
});
        // readStream will store the refferenceof  a data  which is readed from blog3 using fs.createReadStream("./docs/blog3.txt",  and encoding it tp utf8 format so that is is radable by default it is in buffer)

const writeStream = fs.createWriteStream("./docs/blog4.txt");

    // fs.createWriteStream ("./docs/blog4.txt") will write the stream

readStream.on("data", (chunk) => {
        // .on is an event listener on readstramm
  console.log('---- NEW CHUNK ----');
  console.log(chunk);
  writeStream.write("\nNEW CHUNK:\n");
  writeStream.write(chunk);
});

// piping
// readStream.pipe(writeStream);
        // this also works same as the abouve code
