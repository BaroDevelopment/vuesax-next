(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{212:function(e,a,n){},410:function(e,a,n){"use strict";var l=n(212);n.n(l).a},560:function(e,a,n){"use strict";n.r(a);var l={data:function(){return{value1:"vuesax@gmail.com",value2:"",value3:"123456",value4:""}},computed:{validEmail:function(){return/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.value4)}}},u=(n(410),n(1)),s=Object(u.a)(l,(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"center content-inputs"},[n("vs-input",{attrs:{placeholder:"Email"},scopedSlots:e._u([{key:"message-success",fn:function(){return[e._v("\n      Email Valid\n    ")]},proxy:!0}]),model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}}),e._v(" "),n("vs-input",{attrs:{placeholder:"Name"},scopedSlots:e._u([{key:"message-danger",fn:function(){return[e._v("\n      Required\n    ")]},proxy:!0}]),model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}}),e._v(" "),n("vs-input",{attrs:{type:"password",placeholder:"Password"},scopedSlots:e._u([{key:"message-warn",fn:function(){return[e._v("\n      Insecure password\n    ")]},proxy:!0}]),model:{value:e.value3,callback:function(a){e.value3=a},expression:"value3"}}),e._v(" "),n("vs-input",{attrs:{label:"Example Regex Validation",placeholder:"vuesax@gmail.com"},scopedSlots:e._u([e.validEmail?{key:"message-success",fn:function(){return[e._v("\n      Email Valid\n    ")]},proxy:!0}:null,e.validEmail||""===e.value4?null:{key:"message-danger",fn:function(){return[e._v("\n      Email Invalid\n    ")]},proxy:!0}],null,!0),model:{value:e.value4,callback:function(a){e.value4=a},expression:"value4"}})],1)}),[],!1,null,"65332158",null);a.default=s.exports}}]);