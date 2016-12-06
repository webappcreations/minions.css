const fs = require("fs")
const path = require("path")

const getDirectories = (srcpath) =>
  fs.readdirSync(srcpath).filter(file =>
    fs.statSync(path.join(srcpath, file)).isDirectory())

console.log(getDirectories("./packages"))
