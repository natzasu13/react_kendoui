(this["webpackJsonpjlwxtf.run"]=this["webpackJsonpjlwxtf.run"]||[]).push([[0],{148:function(e,t,a){e.exports=a(302)},302:function(e,t,a){"use strict";a.r(t);var i=a(142),l=a(143),n=a(146),r=a(144),d=a(147),p=a(4),c=a.n(p),s=a(56),o=a.n(s),b=a(87),u=a.n(b),h=a(8),x=(a(301),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(n.a)(this,Object(r.a)(t).call(this,e))).state={filter:{logic:"and",filters:[void 0]}},a.dataSource=new u.a.data.DataSource({transport:{read:{url:"https://bmgavzf5zj.execute-api.us-west-2.amazonaws.com/Prod/status",dataType:"json"},parameterMap:function(e,t){if("read"!==t&&e.models)return{models:u.a.stringify(e.models)}}},batch:!0,pageSize:20,schema:{model:{id:"id",fields:{shipping:{editable:!1,type:"text"},starting:{editable:!1,type:"text"},add_product:{editable:!1,type:"text"},login:{editable:!1,type:"text"},current_step:{editable:!1,type:"text"},gcs_completed:{editable:!1,type:"text"},thanks:{editable:!1,type:"text"},waiting:{editable:!1,type:"text"},ip:{editable:!1,type:"text"},proxy:{editable:!1,type:"text"},billing:{editable:!1,type:"text"}}}}}),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement(h.a,{dataSource:this.dataSource,pageable:!0,height:550,sortable:!0,scrollable:!0},c.a.createElement(h.b,{field:"shipping",title:"shipping",width:"120px"}),c.a.createElement(h.b,{field:"starting",title:"starting",width:"120px"}),c.a.createElement(h.b,{field:"add_product",title:"add_product",width:"120px"}),c.a.createElement(h.b,{field:"login",title:"login",width:"120px"}),c.a.createElement(h.b,{field:"current_step",title:"current_step",width:"120px"}),c.a.createElement(h.b,{field:"gcs_completed",title:"gcs_completed",width:"120px"}),c.a.createElement(h.b,{field:"thanks",title:"thanks",width:"120px"}),c.a.createElement(h.b,{field:"waiting",title:"waiting",width:"120px"}),c.a.createElement(h.b,{field:"ip",title:"ip",width:"120px"}),c.a.createElement(h.b,{field:"proxy",title:"proxy",width:"120px"}),c.a.createElement(h.b,{field:"billing",title:"billing",width:"120px"}))}}]),t}(c.a.Component));o.a.render(c.a.createElement(x,null),document.querySelector("react-kendo"))}},[[148,1,2]]]);
//# sourceMappingURL=main.56333767.chunk.js.map