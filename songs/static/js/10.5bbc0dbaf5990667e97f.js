webpackJsonp([10],{Rp7j:function(e,s){},jsxS:function(e,s,r){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var t=r("Dd8w"),n=r.n(t),i=r("wFFv"),a=r("7y/R"),c={name:"three",components:{Headers:i.a,Foot:a.a},data:function(){return{list:[{subject:"Person who has the capacity for romantic, emotional and/or physical attraction to people of more than one gender.",isActive:!1,myAnswer:"",correctAnswer:"Bisexual",answers:["Trans","Bisexual"],subjectCh:"受到不止一种性别的浪漫、情感和/或身体吸引的人。",correctAnswerCh:"Bisexual双性恋",answersCh:["Trans跨性别者","Bisexual双性恋"]},{subject:"Terms used by some people whose gender identity differs from what is typically associated with the sex they were assigned at birth.",isActive:!1,myAnswer:"",correctAnswer:"Trans",answers:["Lesbian","Trans","Queer"],subjectCh:"该术语用于一些性别认同不同于其指派性别的人。跨儿、跨性别者和非二元性别者（non-binary）是代表各种词语的涵盖性术语。",correctAnswerCh:"Trans跨性别者",answersCh:["Lesbian女同性恋","Trans跨性别者","Queer酷儿"]},{subject:"Women whose enduring romantic, emotional and/or physical attraction is to women.",isActive:!1,myAnswer:"",correctAnswer:"Lesbian",answers:["Lesbian","Bisexual","Gay"],subjectCh:"持久地受到女性浪漫、情感和/或身体吸引的女性。",correctAnswerCh:"Lesbian女同性恋",answersCh:["Lesbian女同性恋","Bisexual双性恋","Gay男同性恋"]},{subject:"It may be used as an umbrella term for people with diverse sexual orientation, gender identity, gender expression and sex characteristics (SOGIESC), or as an alternative to the phrase “people with diverse SOGIESC” or the acronym LGBT.",isActive:!1,myAnswer:"",correctAnswer:"Queer",answers:["Gay","Queer","Intersex"],subjectCh:"它可以用作具有不同性倾向、性别认同、性别表达和性特征（SOGIESC）的人群的涵盖性术语，也可以作为具有多元SOGIESC或首字母缩略词LGBT的替代词。它被许多人使用，ta们觉得自己不符合特定社会里基于性倾向、性别认同和性别表达的经济、社会和政治规范。",correctAnswerCh:"Queer酷儿",answersCh:["Gay男同性恋","Queer酷儿","Intersex间性人"]},{subject:"Men whose men whose enduring romantic, emotional and/or physical attraction is to men; also, women who are attracted to other women.",isActive:!1,myAnswer:"",correctAnswer:"Gay",answers:["Gay","Queer"],subjectCh:"持久地受到男性浪漫、情感和/或身体吸引的男性；有时该词也包括被其ta女性吸引的女性（女同性恋）。",correctAnswerCh:"Gay男同性恋",answersCh:["Gay男同性恋","Queer酷儿"]},{subject:"People born with sex characteristics that do not  fit typical definitions of male and female bodies.",isActive:!1,myAnswer:"",correctAnswer:"Intersex",answers:["Lesbian","Intersex"],subjectCh:"出生时性特征与男性和女性身体典型定义不符的人。",correctAnswerCh:"Intersex间性人",answersCh:["Lesbian女同性恋","Intersex间性人"]}]}},computed:{fontSize:function(){var e=this.$store.state.user.fontSize;return e},isLimitNext:function(){var e=this.$store.state.user.language;return!this.list.every(function(s){return s.myAnswer&&s.myAnswer===("ch"===e?s.correctAnswerCh:s.correctAnswer)})},isChinese:function(){return"ch"===this.$store.state.user.language}},methods:{clickLiFnc:function(e,s){if(e.myAnswer&&e.myAnswer===(this.isChinese?e.correctAnswerCh:e.correctAnswer))return!1;this.list=this.list.map(function(e,r){return n()({},e,{isActive:s===r&&!e.isActive})})},clickAnswerFnc:function(e,s){this.list=this.list.map(function(r,t){return n()({},r,{isActive:!1,myAnswer:s===t?e:r.myAnswer})});var r=this.list[s],t=r.myAnswer,i=r.correctAnswer,a=r.correctAnswerCh;t===(this.isChinese?a:i)?this.$message.success(this.isChinese?"正确!":"That’s correct!"):this.$message.error(this.isChinese?"错误!":"Try again!"),this.$forceUpdate()}}},o={render:function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("div",{class:["three",{fontSize1:1===Number(e.fontSize)},{fontSize3:3===Number(e.fontSize)}]},[r("Headers",{ref:"headers"}),e._v(" "),r("div",{staticClass:"main"},[r("div",{staticClass:"main-c"},[r("div",{staticClass:"tit"},[r("div",{staticClass:"big-tit"},[e._v("\n          "+e._s(e.isChinese?"走近LGBTIQ+人士":"Understand LGBTIQ+ persons")+"\n        ")]),e._v(" "),r("div",[r("i",{staticClass:"el-icon-caret-right"}),e._v("\n          "+e._s(e.isChinese?"练习: 选择和描述相匹配的术语”改为“任务：LGBTIQ+分别代表什么？阅读以下的描述，并选择符合描述的术语":"Task: what does LGBTIQ+ stand for? Read each description and select the term that matches.")+"\n        ")])]),e._v(" "),r("div",{staticClass:"list"},[r("ul",e._l(e.list,function(s,t){return r("li",{key:t},[s.myAnswer&&s.myAnswer===(e.isChinese?s.correctAnswerCh:s.correctAnswer)?r("img",{staticClass:"icon-answer",attrs:{src:"./assets/page/three-true.png",alt:""}}):e._e(),e._v(" "),s.myAnswer&&s.myAnswer!==(e.isChinese?s.correctAnswerCh:s.correctAnswer)?r("img",{staticClass:"icon-answer",attrs:{src:"./assets/page/three-false.png",alt:""}}):e._e(),e._v(" "),r("div",{staticClass:"list-li-l"},[e._v("Q"+e._s(t+1))]),e._v(" "),r("div",{staticClass:"list-li-c"},[e._v("\n              "+e._s(e.isChinese?s.subjectCh:s.subject)+"\n            ")]),e._v(" "),r("div",{class:["list-li-r",{isTrue:s.myAnswer&&s.myAnswer===(e.isChinese?s.correctAnswerCh:s.correctAnswer)},{isFalse:s.myAnswer&&s.myAnswer!==(e.isChinese?s.correctAnswerCh:s.correctAnswer)}],on:{click:function(r){return r.stopPropagation(),e.clickLiFnc(s,t)}}},[e._v("\n              "+e._s(s.myAnswer?s.myAnswer===(e.isChinese?s.correctAnswerCh:s.correctAnswer)?s.myAnswer:e.isChinese?"回答错误":"Incorrect":e.isChinese?"回答":"Answer")+"\n              "),!s.myAnswer||s.myAnswer&&s.myAnswer!==(e.isChinese?s.correctAnswerCh:s.correctAnswer)?r("img",{staticClass:"icon icon1",attrs:{src:"./assets/page/three-xiala1.png",alt:""}}):e._e(),e._v(" "),!s.myAnswer||s.myAnswer&&s.myAnswer!==(e.isChinese?s.correctAnswerCh:s.correctAnswer)?r("img",{staticClass:"icon icon2",attrs:{src:"./assets/page/three-xiala2.png",alt:""}}):e._e()]),e._v(" "),s.isActive?r("div",{class:["answers",{"b-answers":t<=4},{"t-answers":t>4},{isActive:s.isActive}]},e._l(e.isChinese?s.answersCh:s.answers,function(s,n){return r("div",{key:n,staticClass:"answer",on:{click:function(r){return r.stopPropagation(),e.clickAnswerFnc(s,t)}}},[e._v("\n                "+e._s(s)+"\n              ")])}),0):e._e()])}),0)])])]),e._v(" "),r("Foot",{ref:"foot",attrs:{isLimitNext:e.isLimitNext}})],1)},staticRenderFns:[]};var h=r("VU/8")(c,o,!1,function(e){r("Rp7j")},"data-v-7c0c15fe",null);s.default=h.exports}});