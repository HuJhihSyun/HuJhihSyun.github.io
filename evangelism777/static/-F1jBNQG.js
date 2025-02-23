import{_ as $,B as u,c as m,o as p,a as t,q as b,u as n,t as a,N as C,h as _,d as x,e as N,j as h,k as j,x as g,b as z,F as L,r as B,l as v,w as k,m as M}from"./DxPwaszu.js";import{C as R,P as D,L as V,M as A,a as E,_ as F}from"./Co-Q-uGW.js";import{u as I,a as q}from"./ClqjCkXe.js";import"./0lJRNT5E.js";const J={class:"absolute left-1/2 top-1/2 -translate-1/2 overflow-hidden z-30 rounded-full w-[calc(100%-6px)] h-[calc(100%-6px)] border-4 border-transparent transition-all duration-1000 ease-in-out"},O={class:"tracking-tighter"},U={__name:"Progress",props:{percentage:{type:Number,default:0}},setup(s){const e=s,l=u(()=>e.percentage<15?"border-cyan-200":e.percentage<30?"border-teal-200":e.percentage<45?"border-emerald-100":e.percentage<60?"border-green-200":e.percentage<75?"border-lime-100":e.percentage<90?"border-yellow-100":e.percentage>=90?"border-yellow-200":"border-white"),i=u(()=>e.percentage<15?"shadow-cyan-200":e.percentage<30?"shadow-teal-200":e.percentage<45?"shadow-emerald-200":e.percentage<60?"shadow-green-200":e.percentage<75?"shadow-lime-300":e.percentage<90?"shadow-yellow-300":e.percentage>=90?"shadow-yellow-400":"shadow-white"),c=u(()=>e.percentage<15?"bg-cyan-300/90":e.percentage<30?"bg-teal-300/90":e.percentage<45?"bg-emerald-300/90":e.percentage<60?"bg-green-300":e.percentage<75?"bg-lime-300":e.percentage<90?"bg-yellow-300/90":e.percentage>=90?"bg-yellow-300":"bg-white"),f=u(()=>e.percentage<15?"shadow-cyan-400":e.percentage<30?"shadow-teal-400":e.percentage<45?"shadow-emerald-400":e.percentage<60?"shadow-green-400":e.percentage<75?"shadow-lime-400":e.percentage<90?"shadow-yellow-400":e.percentage>=90?"shadow-orange-400":"shadow-white"),y=u(()=>e.percentage<15?"bg-gradient-to-b from-cyan-300 to-white inline-block text-transparent bg-clip-text":e.percentage<30?"bg-gradient-to-b from-teal-300 to-white inline-block text-transparent bg-clip-text":e.percentage<45?"bg-gradient-to-b from-emerald-300 to-white inline-block text-transparent bg-clip-text":e.percentage<60?"bg-gradient-to-b from-green-300 to-white inline-block text-transparent bg-clip-text":e.percentage<75?"bg-gradient-to-b from-lime-200 to-white inline-block text-transparent bg-clip-text":e.percentage<90||e.percentage>=90?"bg-gradient-to-b from-yellow-100 to-white inline-block text-transparent bg-clip-text":"text-white");return(w,r)=>(p(),m("div",null,[t("div",{class:b(["progress relative rounded-full w-[250px] h-[250px] border-4 shadow-[0_0_15px_rgba(0,0,0,0.25)] transition-all duration-1000 ease-in-out",[n(l),n(i)]])},[t("div",J,[t("div",{class:b(["absolute top-0 left-0 w-full h-full font-bold text-center leading-[240px] text-8xl drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all duration-1000 ease-in-out z-50",n(y)])},[t("span",O,a(s.percentage),1),r[0]||(r[0]=t("span",{class:"text-5xl ml-2"},"%",-1))],2),t("div",{class:b(["water animate-spin absolute z-20 w-[200%] h-[200%] -left-1/2 transition-all duration-1000 ease-in-out shadow-[0_0_5px_rgba(0,0,0,0.25)]",[n(c),n(f)]]),style:C({top:100-s.percentage+"%"})},null,6),r[1]||(r[1]=t("div",{class:"absolute bg-black/10 -top-[120%] -left-[120%] z-30 w-[200%] h-[200%] rotate-45 rounded-full transition-all duration-1000 ease-in-out"},null,-1))])],2)]))}},W=$(U,[["__scopeId","data-v-620cb566"]]),G={class:"relative flex justify-between items-center w-full mx-auto rounded-lg px-3 py-2 overflow-hidden bg-gradient-to-t from-sky-700/50 to-sky-800/50 transition-all duration-300"},H={class:"w-full flex flex-col items-center justify-center"},K={class:"w-full flex justify-between items-center"},Q={class:"flex justify-center items-center text-xs md:text-sm text-sky-200"},T={class:"text-xs md:text-sm text-sky-200 tracking-tighter"},X={class:"flex justify-center items-center w-full mt-0.5 md:mt-1"},Y={class:"progress relative w-full h-2.5 bg-gradient-to-t from-sky-700/50 to-sky-800/50 rounded-2xl overflow-hidden"},Z={class:"ml-2 text-xs md:text-sm text-sky-200 whitespace-nowrap"},P={__name:"TaskProgress",props:{summary:{type:Number,default:0},point:{type:Number,default:0},times:{type:Number,default:0},id:{type:String,default:""}},setup(s){const e=s,l=u(()=>Math.floor(e.point/e.summary*100));return(i,c)=>(p(),m("div",G,[t("div",H,[t("div",K,[t("h4",Q,[_(i.$slots,"icon"),_(i.$slots,"title"),x(" "+a(s.times)+" "+a(s.id==="pray"?"分":"次"),1)]),t("h5",T,[c[0]||(c[0]=t("span",{class:"hidden md:inline-block"},"累積：",-1)),x(a(s.point)+" 分 ",1)])]),t("div",X,[t("div",Y,[t("div",{class:"progress-bar absolute left-0.5 top-1/2 -translate-y-1/2 h-1.5 bg-gradient-to-bl from-yellow-300 to-yellow-600 rounded-2xl",style:C({width:`${n(l)}%`})},null,4)]),t("h6",Z,a(n(l))+"%",1)])])]))}},ee={class:"flex flex-col items-center justify-center"},te={class:"mt-4 md:mt-6 text-xl md:text-2xl font-bold bg-gradient-to-t from-cyan-200 to-white inline-block text-transparent bg-clip-text"},re={class:"mt-6 md:mt-10 w-full grid gap-2 grid-cols-2 lg:grid-cols-3"},le=N({__name:"result",setup(s){I({title:"傳道 777 榮耀神 | 查詢成績",author:"© 2025 Love and Word Church All rights reserved.",keywords:"教會,傳道,空提,信仰,榮耀神",description:"秉持著聖經真理的教導，效法主愛人如己的精神，讓不同年齡、背景與特質的人，相聚一起學習成長，致力於讓 神所打造的天國理想世界，能夠實現在這地上。",ogTitle:"2025 傳道777榮耀神",ogDescription:"秉持著聖經真理的教導，效法主愛人如己的精神，讓不同年齡、背景與特質的人，相聚一起學習成長，致力於讓 神所打造的天國理想世界，能夠實現在這地上。",ogUrl:"https://www.loveandword.tw/",ogImage:"https://www.loveandword.tw/resource/images/img.jpg"});const e=h(0),l=h(0),i=h(777),c=j([{title:"傳道",id:"contact",point:0,times:0,icon:g(R)},{title:"講義",id:"presentation",point:0,times:0,icon:g(D)},{title:"聽課",id:"lesson",point:0,times:0,icon:g(V)},{title:"見面",id:"meeting",point:0,times:0,icon:g(A)},{title:"禱告",id:"pray",point:0,times:0,icon:g(E)}]),{getLineResult:f}=q();return(async()=>{const w=await f(),r=JSON.parse(w);c.forEach(o=>{o.point=r.score[o.id],o.times=o.id==="pray"?r.times[`${o.id}-minutes`]:r.times[`${o.id}-times`]}),e.value=r.score.summary,l.value=Math.floor(e.value/i.value*100)})(),(w,r)=>{const o=W,S=P;return p(),m("div",ee,[r[0]||(r[0]=t("h2",{class:"text-white text-xl text-center mb-2 sacramento"},"2025",-1)),r[1]||(r[1]=t("img",{src:F,alt:"love-word",class:"w-50 md:w-60 mx-auto mb-4"},null,-1)),z(o,{class:"mt-4 md:mt-6",percentage:n(l)},null,8,["percentage"]),t("h3",te,a(n(e))+" / "+a(n(i)),1),t("div",re,[(p(!0),m(L,null,B(n(c),d=>(p(),v(S,{key:d.id,summary:n(e),point:d.point,times:d.times,id:d.id},{title:k(()=>[x(a(d.title),1)]),icon:k(()=>[(p(),v(M(d.icon),{class:"w-3 h-3 md:w-4 md:h-4 mr-1"}))]),_:2},1032,["summary","point","times","id"]))),128))])])}}});export{le as default};
