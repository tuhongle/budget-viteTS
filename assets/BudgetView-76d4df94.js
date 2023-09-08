import{d as f,u as x,a as v,s as w,c as i,b as e,e as r,f as t,_ as g,g as a,t as y,w as N,h as _,v as u,i as m,j as A,T as B,o as p,F as D,r as k,k as E}from"./index-9c4cf09c.js";const V={class:"home"},R={class:"container-xl py-4"},T=e("div",{class:"row mb-3"},[e("h2",{class:"fw-bold display-4"},[e("span",{class:"text-info"},"Groceries"),a(" Overview")])],-1),S={class:"row mb-4"},C={class:"col-12 col-md-5 mb-3 mb-md-0"},G={class:"col-12 col-md-7"},$={class:"card shadow p-3 rounded-3"},q={class:"card-body p-3 border-2 border-dark rounded-3",style:{border:"dashed"}},F={class:"card-title fw-bolder mb-4"},M={class:"text-info"},O={class:"row"},U={class:"col-12 col-md-6 mb-3"},j=e("label",{for:"expenseName",class:"form-label fw-bold mb-2"},"Expense Name",-1),L={class:"col-12 col-md-6 mb-3"},z=e("label",{for:"expenseAmount",class:"form-label fw-bold mb-2"},"Amount",-1),H=e("button",{class:"btn btn-dark px-4 py-2"},[a(" Add Expense "),e("i",{class:"bi bi-plus-circle-fill ms-1"})],-1),I={class:"row mb-4"},J=e("h2",{class:"fw-bold display-5 mb-4"},[e("span",{class:"text-info"},"Groceries"),a(" Expenses")],-1),K={class:"col px-0 px-md-5"},P={class:"card border-0 overflow-auto"},Q={class:"table table-striped table-hover table-borderless text-center"},W=e("thead",null,[e("tr",{class:"fs-3"},[e("th",{scope:"col"},"Name"),e("th",{scope:"col"},"Amount"),e("th",{scope:"col"},"Date"),e("th",{scope:"col"},"Budget"),e("th",{scope:"col"})])],-1),X={class:"align-middle"},te=f({__name:"BudgetView",setup(Y){const b=x().params.id,d=v(),{budgetDetail:l,expenseName:n,expenseAmount:c}=w(d);return d.getBudget(b),(ee,o)=>(p(),i("main",V,[e("div",R,[T,e("div",S,[e("div",C,[r(g,{budget:t(l),wantDelete:!0},null,8,["budget"])]),e("div",G,[e("div",$,[e("div",q,[e("h3",F,[a("Add New "),e("span",M,y(t(l).name),1),a(" Expense")]),e("form",{onSubmit:o[2]||(o[2]=N(s=>t(d).addExpenseOnDetail(s,t(l)),["prevent"]))},[e("div",O,[e("div",U,[j,_(e("input",{type:"text",id:"expenseName",class:"form-control py-2",placeholder:"e.g., Coffee","onUpdate:modelValue":o[0]||(o[0]=s=>m(n)?n.value=s:null),required:""},null,512),[[u,t(n)]])]),e("div",L,[z,_(e("input",{type:"number",id:"expenseAmount",class:"form-control py-2",step:"0.01",placeholder:"e.g., $3.00","onUpdate:modelValue":o[1]||(o[1]=s=>m(c)?c.value=s:null),required:""},null,512),[[u,t(c)]])])]),H],32)])])])]),e("div",I,[J,e("div",K,[e("div",P,[e("table",Q,[W,e("tbody",X,[r(B,{appear:"",name:"expense"},{default:A(()=>[(p(!0),i(D,null,k(t(l).expenses,(s,h)=>(p(),i("tr",{class:"lead",key:h},[r(E,{expense:s,wantDelete:!0},null,8,["expense"])]))),128))]),_:1})])])])])])])]))}});export{te as default};