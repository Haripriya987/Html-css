//files
const fs = require("fs");

//reading a file

let fileContent = fs.readFileSync("F2.txt");
//console.log("data of file 2 ->" , fileContent); if we kept ',' in buffer format we are reading.
console.log("data of file 2 ->" + fileContent); //we are reading in string format

//Writing a File
//If the file name is passed doesnot exists a new file with same name is created.
//The data will be written on that file.
fs.writeFileSync("F4.txt", "This is File3 .It is overridden");
console.log("File has been written");

//Append a file
//appendFileSync method adds new data to a previously written file.
fs.appendFileSync("F3.txt", " This is appended data");
console.log("Fil3 is appended");

//Deleting a file
fs.unlinkSync("F4.txt");
console.log("file has been Deleted");
