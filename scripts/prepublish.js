const fs = require("fs")
const path = require("path")
const cons = require("consolidate")

const writeFiles = ({ packageName, code, mod }) => {
  cons["lodash"]("scripts/_README.md", {packageName, code, mod}, (_, md) =>
    fs.writeFile(`./packages/${packageName}/README.md`, md, (_, __) =>
      console.log(`${packageName} README.md written.`)))

  cons["lodash"]("scripts/_index.html", {packageName, code, mod}, (_, md) =>
    fs.writeFile(`./packages/${packageName}/index.html`, md, (_, __) =>
      console.log(`${packageName} index.html written.`)))
}

fs.readdir("./packages", (_, packages) =>
  packages.forEach(packageName =>
    fs.readFile(`./packages/${packageName}/package.json`, "utf8", (_, mod) =>
      fs.readFile(`./packages/${packageName}/${packageName}.css`, "utf8", (_, code) =>
        writeFiles({packageName, code, mod: JSON.parse(mod)})))))
