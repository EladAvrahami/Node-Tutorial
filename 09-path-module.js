const path = require('path') //using path module to interact with path easily
//for this example i created folder called .vscode

console.log("dirname is:"+__dirname)
console.log(path.sep)//return my platform specific separator

const filePath = path.join('/content/', 'subfolder', 'test.txt')//put in existing names of file and it will join them create a path
console.log(filePath)

const base = path.basename(filePath)//basename will give me the last folder name in the url 
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')//global url from my computer
console.log(absolute)
