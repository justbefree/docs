/*
* @Author: Just be free
* @Date:   2020-07-21 13:46:22
* @Last Modified by:   Just be free
* @Last Modified time: 2020-07-21 14:04:50
* @E-mail: justbefree@126.com
*/

const package = require("../package.json");
const pkgVersion = package.dependencies["yn-components"].replace("^", "");
const axios = require("axios");
const content = `yn-components was updated, the latest version is ${pkgVersion}, you can read online docs for latest updates. https://justbefree.github.io/youdefine-docs/`;
axios.post("https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=7c2c6538-df14-41b3-b45c-ed328de6f7b8", {
  "msgtype": "text",
  "text": {
    "content": content
  }
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.log(error)
});
