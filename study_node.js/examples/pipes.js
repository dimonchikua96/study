let fs = require('fs');
//fs.writeFileSync('1mb',Buffer.alloc(1024*1024).fill(1));

let read_stream = fs.createReadStream('1mb');
let write_stream = fs.createWriteStream('1mb_');
let write_stream_ = fs.createWriteStream('1mb__');

read_stream.on('data', function (data) {
    console.log(data.length);
    write_stream.write(data);
});
read_stream.on('end', function () {
    console.log('end')
});

read_stream.on('error', function (err) {
    console.log(err.message)
});

read_stream.pipe(write_stream_);