import{r as R}from"./index-BBkUAzwr.js";var T={exports:{}},c={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j=R,N=Symbol.for("react.element"),P=Symbol.for("react.fragment"),h=Object.prototype.hasOwnProperty,q=j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,B={key:!0,ref:!0,__self:!0,__source:!0};function E(o,r,a){var e,n={},u=null,m=null;a!==void 0&&(u=""+a),r.key!==void 0&&(u=""+r.key),r.ref!==void 0&&(m=r.ref);for(e in r)h.call(r,e)&&!B.hasOwnProperty(e)&&(n[e]=r[e]);if(o&&o.defaultProps)for(e in r=o.defaultProps,r)n[e]===void 0&&(n[e]=r[e]);return{$$typeof:N,type:o,key:u,ref:m,props:n,_owner:q.current}}c.Fragment=P;c.jsx=E;c.jsxs=E;T.exports=c;var L=T.exports;const p=({background:o,id:r,modifiers:a,back:e})=>L.jsx("pre",{children:JSON.stringify({background:o,id:r,modifiers:a,back:e},null,2)});try{p.displayName="TroopToken",p.__docgenInfo={description:"",displayName:"TroopToken",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"enum",value:[{value:'"A"'},{value:'"B"'}]}},background:{defaultValue:null,description:"",name:"background",required:!0,type:{name:"string"}},modifiers:{defaultValue:null,description:"",name:"modifiers",required:!0,type:{name:'("A" | "B")[]'}},back:{defaultValue:null,description:"",name:"back",required:!1,type:{name:'{ id: "A" | "B"; background: string; modifiers: ("A" | "B")[]; }'}}}}}catch{}const I={component:p,argTypes:{id:{control:{type:"select"}}}},s={args:{background:"true",id:"A",modifiers:["A"]}},t={args:{background:"true",id:"A",modifiers:["A"]}},i={args:{background:"true",id:"A",modifiers:["A"]}},d={args:{background:"true",id:"A",modifiers:["A"]}};var l,f,g;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    background: 'true',
    id: 'A',
    modifiers: ['A']
  }
}`,...(g=(f=s.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var _,y,k;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    background: 'true',
    id: 'A',
    modifiers: ['A']
  }
}`,...(k=(y=t.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var A,b,S;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    background: 'true',
    id: 'A',
    modifiers: ['A']
  }
}`,...(S=(b=i.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var x,v,O;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    background: 'true',
    id: 'A',
    modifiers: ['A']
  }
}`,...(O=(v=d.parameters)==null?void 0:v.docs)==null?void 0:O.source}}};const V=["Primary","Secondary","Large","Small"];export{i as Large,s as Primary,t as Secondary,d as Small,V as __namedExportsOrder,I as default};
