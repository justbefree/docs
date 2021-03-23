/*
* @Author: Just be free
* @Date:   2020-07-21 13:46:22
* @Last Modified by:   Just be free
* @Last Modified time: 2021-03-23 14:10:37
* @E-mail: justbefree@126.com
*/
const fs = require("fs");
const path = require("path");
const package = require("../package.json");
const dependencies = { ...package.dependencies, ...package.devDependencies };
const pkgName = package.pkgName;
if (pkgName === "") {
  return;
}
const pkgVersion = dependencies[pkgName].replace("^", "");
const axios = require("axios");
const content = `[${pkgName}](https://www.npmjs.com/package/yn-components) was updated, the latest version is ${pkgVersion}, you can read [online docs](https://justbefree.github.io/docs/) for latest updates.`;
let data = "";
try {
  data = fs.readFileSync("docs/.updates", "utf-8");
} catch (e) {
  console.log(e);
}
// console.log(`${content}\n${data}`);
axios.post("https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=7c2c6538-df14-41b3-b45c-ed328de6f7b8", {
  "msgtype": "markdown",
  "markdown": {
    "content": `${content}\n${data}`
  }
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.log(error)
});
