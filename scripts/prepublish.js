const fs = require("fs")
const path = require("path")

const getDirectories = (srcpath) =>
  fs.readdirSync(srcpath).filter(file =>
    fs.statSync(path.join(srcpath, file)).isDirectory())

//console.log(getDirectories("./packages"))

fs.readdir("./packages", (_, packages) =>
  packages.forEach(package =>
    fs.readFile(`./packages/${package}/${package}.css`, "utf8", (_, file) =>
      console.log(package, file))))
