(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{302:function(n,e,t){var o=t(1),i=t(4),l=t(92),c=[].slice,s=function(n){return function(e,t){var o=arguments.length>2,i=o?c.call(arguments,2):void 0;return n(o?function(){("function"==typeof e?e:Function(e)).apply(this,i)}:e,t)}};o({global:!0,bind:!0,forced:/MSIE .\./.test(l)},{setTimeout:s(i.setTimeout),setInterval:s(i.setInterval)})},328:function(n,e,t){},386:function(n,e,t){"use strict";var o=t(328);t.n(o).a},416:function(n,e,t){"use strict";t.r(e);t(10),t(302);var o={name:"DemoDialog",props:{demo:String},data:function(){return{show:!1,show2:!1,show3:!1,text:{value:"默认内容"}}},methods:{handleAfterClose:function(){this.Toast("彻底关闭了")},advanced2:function(){this.show2=!0},advanced:function(){this.show=!0},advanced3:function(){var n=this;this.show3=!0,setTimeout((function(){n.text={value:"内容要改变了"}}),3e3)},handleInput:function(n){console.log("按钮事件触发",n)},handleClick:function(){console.log("收到回调信息")},handleBeforeClose:function(n){return"cancel"!==n&&(console.log("这个是会告诉你点击了哪个按钮",n),new Promise((function(n,e){console.log(e),setTimeout((function(){n("请求结束")}),2e3)})).catch((function(n){console.log("错误信息在这里展示",n)})))},handleBeforeClose2:function(n){return console.log("这个是会告诉你点击了哪个按钮",n),new Promise((function(n,e){console.log(e),setTimeout((function(){n("请求结束")}),3e3)})).catch((function(n){console.log("错误信息在这里展示",n)}))},alert:function(){this.Dialog.alert({title:"这个是标题",message:"这个是内容",beforeClose:this.handleBeforeClose,afterClose:this.handleAfterClose})},syncAlert:function(){this.Dialog.alert({title:"这个是标题",message:"这个是内容"})},confirm:function(){this.Dialog.confirm({title:"这个是标题",message:"这个是内容",beforeClose:this.handleBeforeClose})},confirm2:function(){this.Dialog.confirm({title:"这个是标题",message:"这个是内容",beforeClose:this.handleBeforeClose2})},confirm3:function(){this.Dialog.confirm({title:"这个是标题",message:"<span>我是span标签</span><br/>我换行了",beforeClose:this.handleBeforeClose2})}}},i=(t(386),t(43)),l=Object(i.a)(o,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("ul",["1"===n.demo?t("li",{on:{click:n.alert}},[t("yn-button",{attrs:{type:"primary"}},[n._v("\n        Async alert\n      ")])],1):n._e(),n._v(" "),"2"===n.demo?t("li",{on:{click:n.syncAlert}},[t("yn-button",{attrs:{type:"primary"}},[n._v("Sync alert")])],1):n._e(),n._v(" "),"3"===n.demo?t("li",{on:{click:n.confirm}},[t("yn-button",{attrs:{type:"primary"}},[n._v("Sync cancel, Async confirm")])],1):n._e(),n._v(" "),"4"===n.demo?t("li",{on:{click:n.confirm2}},[t("yn-button",{attrs:{type:"primary"}},[n._v("Async cancel, Async confirm")])],1):n._e(),n._v(" "),"5"===n.demo?t("li",{on:{click:n.confirm3}},[t("yn-button",{attrs:{type:"primary"}},[n._v("html")])],1):n._e(),n._v(" "),"6"===n.demo?t("li",[t("yn-dialog",{attrs:{closeModelOnClick:""},model:{value:n.show,callback:function(e){n.show=e},expression:"show"}},[t("img",{attrs:{src:"https://img.yzcdn.cn/vant/apple-3.jpg"}})]),n._v(" "),t("yn-button",{attrs:{type:"primary"},on:{click:n.advanced}},[n._v("advanced")])],1):n._e(),n._v(" "),"7"===n.demo?t("li",[t("yn-dialog",{attrs:{value:this.show2},on:{buttonClick:this.handleInput,modalClick:this.handleClick}},[t("img",{attrs:{src:"https://img.yzcdn.cn/vant/apple-3.jpg"}})]),n._v(" "),t("yn-button",{attrs:{type:"primary"},on:{click:n.advanced2}},[n._v("\n        advanced modal click callback\n      ")])],1):n._e(),n._v(" "),"8"===n.demo?t("li",[t("yn-button",{attrs:{type:"primary"},on:{click:n.advanced3}},[n._v("\n        异步加载数据渲染问题-"+n._s(n.text.value)+"\n      ")]),n._v(" "),t("yn-dialog",{attrs:{closeModelOnClick:""},model:{value:n.show3,callback:function(e){n.show3=e},expression:"show3"}},[t("span",[n._v("我是固定内容，我后面的是动态内容"+n._s(n.text.value))])])],1):n._e()])])}),[],!1,null,"d75ddb90",null);e.default=l.exports}}]);