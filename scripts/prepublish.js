const fs = require("fs")
const path = require("path")
const cons = require("consolidate")

fs.readdir("./packages", (_, packages) =>
  packages.forEach(packageName =>
    fs.readFile(`./packages/${packageName}/package.json`, "utf8", (_, mod) =>
      fs.readFile(`./packages/${packageName}/${packageName}.css`, "utf8", (_, file) =>
        cons["lodash"]("scripts/_README.md", {packageName: packageName, code: file, mod: JSON.parse(mod)}, (_, md) =>
          fs.writeFile(`./packages/${packageName}/README.md`, md, (_, _file) =>
            console.log(`${packageName} README.md written.\n`)))))))
