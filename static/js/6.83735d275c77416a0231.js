webpackJsonp([6],{MaV9:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l=[{id:1,url:"/example.html#/quan",name:"鼠标圈圈",subtitle:"canvas动画， 滑动鼠标试试。",img:"static/example/quan.png"},{id:2,url:"/example.html#/Clock",name:"canvas时钟",subtitle:"canvas时钟,基于当前时间的动画时钟",img:"static/example/clock.png"},{id:3,url:"/example.html#/Piano",name:"web钢琴",subtitle:"web钢琴,弹奏一曲小星星",img:"static/example/piano.png"}],s={data:function(){return{exampleList:l,activeName:"second"}},methods:{handleClick:function(t,a){console.log(t,a)}}},n={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._m(0),t._v(" "),e("el-tabs",{staticClass:"tabs",on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:"用户管理",name:"first"}},[t._v("用户管理")]),t._v(" "),e("el-tab-pane",{attrs:{label:"配置管理",name:"second"}},[t._v("配置管理")]),t._v(" "),e("el-tab-pane",{attrs:{label:"角色管理",name:"third"}},[t._v("角色管理")]),t._v(" "),e("el-tab-pane",{attrs:{label:"定时任务补偿",name:"fourth"}},[t._v("定时任务补偿")])],1),t._v(" "),e("div",{staticClass:"ex-list"},[e("el-row",{attrs:{gutter:20}},t._l(t.exampleList,function(a){return e("el-col",{key:a.id,attrs:{sm:12,md:8,lg:6}},[e("div",{staticClass:"thumbnail"},[e("a",{attrs:{href:a.url,title:a.name,target:"_blank"}},[e("img",{staticClass:"lazy",attrs:{src:""+a.img,width:"300",height:"150",alt:a.name}})]),t._v(" "),e("div",{staticClass:"caption"},[e("h3",[e("a",{attrs:{href:a.url,title:a.name,target:"_blank"}},[t._v("\n                  "+t._s(a.name)+"\n                ")])]),t._v(" "),e("p",[t._v(t._s(a.subtitle))])])])])}))],1)],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"fan-title"},[a("h1",[a("a",{attrs:{href:"/"}},[this._v("Fan's Works")])]),this._v(" "),a("p",{staticClass:"subtitle"},[this._v("前端作品库")])])}]};var i=e("VU/8")(s,n,!1,function(t){e("xcdW")},null,null);a.default=i.exports},xcdW:function(t,a){}});