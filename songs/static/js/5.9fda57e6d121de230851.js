webpackJsonp([5],{"+uFM":function(e,t){},gKTa:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("Dd8w"),i=s.n(n),r=s("wFFv"),a=s("7y/R"),o={name:"twenty",components:{Headers:r.a,Foot:a.a},computed:{fontSize:function(){var e=this.$store.state.user.fontSize;return e},tone:function(){var e=this.$store.state.user.tone;return e},isChinese:function(){return"ch"===this.$store.state.user.language}},data:function(){return{list:[{subjectCh:"在29个国家中自愿同性伴侣关系被定性为刑事犯罪；70个国家在法律上承认同性婚姻",subject:"Consensual same sex relationships are criminalized in 29 countries; 70 countries legally recognized marriage equality",answer:!1,myAnswer:""},{subjectCh:"《财富》500强公司中，百分之48的公司制定了包括性倾向在内的非歧视政策",subject:"Of the Fortune 500 companies, 48 per cent have non-discrimination policies that include sexual orientation",answer:!1,myAnswer:""},{subjectCh:"政府、工人组织和雇主之间的伙伴关系是实现变革的关键。 ",subject:"Partnerships between governments, worker organizations and employers are key to making change. ",answer:!0,myAnswer:""},{subjectCh:"政府、雇主和工人组织都需要和LGBTIQ+劳动者进行咨询以了解现状。",subject:"Governments, employers and worker organizations all need to consulting with LGBTIQ+ workers to assess the situation. ",answer:!0,myAnswer:""},{subjectCh:"衡量LGBTIQ+融合度可以确定一个基线，以便设定目标并确认在实现将LGBTIQ+人群纳入工作场所方面取得的进展。",subject:" Measuring LGBTIQ+ inclusion can have a baseline that lets us know where we stand in order to set goals and confirm progress towards achieving the inclusion of LGBTIQ+ persons in the workplace.",answer:!0,myAnswer:""}],isLimitNext:!0}},methods:{clickAnswerFnc:function(e,t){if(this.list=this.list.map(function(s,n){return i()({},s,{myAnswer:e===n?t:s.myAnswer})}),this.list.every(function(e){return String(e.myAnswer)})){var s=0;this.list.map(function(e){String(e.answer)===String(e.myAnswer)&&s++}),s>3?(this.$message.success(this.isChinese?"恭喜，你已通过测试！现在可以点击箭头领取你的证书！":"Congratulations, you passed the quiz! Now, click the arrow to get your certificate!"),this.isLimitNext=!1):(this.$message.error(this.isChinese?"对不起！你没有通过测试，请再试一次！":"Sorry, you didn't pass the quiz! Please try again!"),this.isLimitNext=!0,this.list=this.list.map(function(e,t){return i()({},e,{myAnswer:""})}))}}}},c={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:["twenty",{fontSize1:1===Number(e.fontSize)},{fontSize3:3===Number(e.fontSize)}]},[s("Headers",{ref:"headers"}),e._v(" "),s("div",{class:["main",{isChinese:e.isChinese}]},[s("div",{staticClass:"main-bg"},[s("div",{staticClass:"tit"},[e._v("\n        "+e._s(e.isChinese?"完成小测验，获得你的证书":"Take a quiz to win your certificate")+"\n      ")])]),e._v(" "),s("div",{staticClass:"main-con"},[e.isChinese?s("div",{class:["main-con-tit",{"main-con-tit-tone2":2===e.tone.val}]},[e._v("\n        测验：请判断以下的描述是正确还是错误。答对四题及以上将可以完成本课程并获得一张结课证书。\n      ")]):s("div",{class:["main-con-tit",{"main-con-tit-tone2":2===e.tone.val}]},[e._v("\n        Quiz: determine whether the following statements are true or false.\n        You could complete the course with a certificate of completion by\n        answering four out of five questions correctly.\n      ")]),e._v(" "),s("div",{staticClass:"main-con-list"},[s("ul",e._l(e.list,function(t,n){return s("li",{key:n,class:["main-con-li",{"main-con-li-tone2":2===e.tone.val}]},[s("div",{staticClass:"main-con-li-l"},[s("div",{staticClass:"subject"},[e._v("\n                "+e._s(e.isChinese?t.subjectCh:t.subject)+"\n              ")])]),e._v(" "),s("div",{class:["answer-box",{"is-true":"true"===String(t.myAnswer)},{"is-false":"false"===String(t.myAnswer)}]},[s("div",{staticClass:"answer answer-false",on:{click:function(t){return e.clickAnswerFnc(n,!1)}}}),e._v(" "),s("div",{staticClass:"answer answer-true",on:{click:function(t){return e.clickAnswerFnc(n,!0)}}})])])}),0)]),e._v(" "),s("div",{staticClass:"foot-des"},[e._v("\n        "+e._s(e.isChinese?"欲知更多信息，可查看之前课程内容":"For more information, please check previous course contents.")+"\n      ")])])]),e._v(" "),s("Foot",{ref:"foot",attrs:{isLimitNext:e.isLimitNext}})],1)},staticRenderFns:[]};var u=s("VU/8")(o,c,!1,function(e){s("+uFM")},"data-v-ed58d040",null);t.default=u.exports}});