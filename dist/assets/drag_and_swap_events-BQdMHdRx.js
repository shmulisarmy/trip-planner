import{c as _,u as a,s as r,A as c,e as o}from"./index-BjnzuzXB.js";const{events:n,setEvents:d}=r;function g(){let e;if(Object.entries(n).forEach(([t])=>{const i=n[t];i.length>=2&&(e=[i,t])}),e)return e}function u(){const e=[];return Object.entries(n).forEach(([t,i])=>{console.log({event_list_name:t});const s=n[t];console.log({event_list:s}),console.log({length:s.length}),s.length>=1&&e.push([s,t]),console.log({found:e}),e.length!=2}),e.length>=2?e:void 0}function l(e=300){return new Promise(t=>setTimeout(t,e))}async function h(){const[e,t]=g(),i=n[t];_(new c("swap",new o(t,0),new o(t,1))),await l(),a(),JSON.stringify(n[t])==JSON.stringify(i)||alert("test failed")}async function p(){const[[e,t],[i,s]]=u(),f=[n[t],n[s]];_(new c("place_on",new o(t,1),new o(s,1))),await l(),a(),JSON.stringify(f)==JSON.stringify([n[t],n[s]])||alert("test failed")}export{p as test_drag,h as test_swap};
