import{d as q,r as _,a as o,o as p,c as C,b as t,e,w as c,F as x,f as v,g as f}from"./index.e4360c1e.js";var h="/front/assets/no_mountain.75f754de.png";const g={class:"q-mx-xl mountains"},V={class:"row justify-end items-center q-pa-md search-box"},b=q({setup(B){const s=_(""),u=["\uC804\uAD6D","\uC11C\uC6B8\uD2B9\uBCC4\uC2DC"];return(i,n)=>{const d=o("q-icon"),r=o("q-select"),m=o("q-btn"),a=o("q-input");return p(),C("section",g,[t("div",V,[e(r,{standout:"bg-teal text-white",modelValue:s.value,"onUpdate:modelValue":n[0]||(n[0]=l=>s.value=l),options:u,label:"\uC9C0\uC5ED",class:"q-ma-md item"},{prepend:c(()=>[e(d,{name:"place"})]),_:1},8,["modelValue"]),e(a,{modelValue:s.value,"onUpdate:modelValue":n[1]||(n[1]=l=>s.value=l),standout:"bg-teal text-white",class:"q-ma-md item"},{after:c(()=>[e(m,{round:"",icon:"search",color:"teal"})]),_:1},8,["modelValue"])])])}}}),y={class:"q-ma-xl mountains"},k={class:"row justify-center list-box"},w=t("div",{class:"absolute-bottom text-h6"},"Title",-1),D=f(" \uBB34\uC2A8\uBB34\uC2A8 \uC0B0\uC785\uB2C8\uB2E4. "),$={class:"q-mt-xl"},j=t("div",{class:"text-center q-ma-md"},[t("h2",{class:"q-py-xl"},"\uB4F1\uB85D\uB41C \uC0B0 \uC815\uBCF4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."),t("div",{class:"q-py-xl text-center"},[t("img",{src:h,alt:""})])],-1),E=q({setup(B){const s=_(1);return _(""),(u,i)=>{const n=o("q-img"),d=o("q-card-section"),r=o("q-card"),m=o("q-pagination");return p(),C("section",y,[e(b),t("div",k,[(p(),C(x,null,v(9,a=>t("div",{class:"q-ma-md item",key:a},[e(r,{class:"my-card cursor-pointer",onClick:l=>u.$router.push(`/mountains/detail/${a}`)},{default:c(()=>[e(n,{src:"https://cdn.quasar.dev/img/mountains.jpg"},{default:c(()=>[w]),_:1}),e(d,null,{default:c(()=>[D]),_:1})]),_:2},1032,["onClick"])])),64))]),t("div",$,[e(m,{modelValue:s.value,"onUpdate:modelValue":i[0]||(i[0]=a=>s.value=a),max:5,"direction-links":"",size:"18px",color:"teal",class:"justify-center"},null,8,["modelValue"])]),j])}}});export{E as default};