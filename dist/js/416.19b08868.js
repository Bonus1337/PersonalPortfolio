"use strict";(self["webpackChunkvuejs_tailwindcss_portfolio"]=self["webpackChunkvuejs_tailwindcss_portfolio"]||[]).push([[416],{614:function(t,e,n){n.r(e),n.d(e,{default:function(){return ct}});var i=n(252);const r={class:"container mx-auto"},a={class:"container mx-auto"},s={class:"container mx-auto"};function o(t,e,n,o,u,m){const l=(0,i.up)("AboutMe"),d=(0,i.up)("AboutCounter"),c=(0,i.up)("AboutSkills"),A=(0,i.up)("AboutClients");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",r,[(0,i.Wm)(l)]),(0,i.Wm)(d),(0,i._)("div",a,[(0,i.Wm)(c)]),(0,i._)("div",s,[(0,i.Wm)(A)])])}var u=n(577),m=n.p+"img/pofile.450a2b23.png";const l={class:"block sm:flex sm:gap-10 mt-10 sm:mt-20"},d=(0,i._)("div",{class:"w-full sm:w-1/4 mb-7 sm:mb-0"},[(0,i._)("img",{src:m,class:"rounded-xl w-96",alt:""})],-1),c={class:"w-full sm:w-3/4 text-left"},A={class:"font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"};function p(t,e,n,r,a,s){return(0,i.wg)(),(0,i.iD)("div",l,[d,(0,i._)("div",c,[(0,i._)("p",A,(0,u.zw)(t.$root.t.myDescription),1)])])}var g={name:"AboutMe"},h=n(789);const f=(0,h.Z)(g,[["render",p]]);var w=f;const b={class:"mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm"},x={class:"font-general-regular container mx-auto py-20 block sm:flex sm:justify-between sm:items-center"},k={class:"mb-20 sm:mb-0"},y={class:"block text-md text-ternary-dark dark:text-ternary-light"},v={class:"mb-20 sm:mb-0"},S={class:"block text-md text-ternary-dark dark:text-ternary-light"},T={class:"mb-20 sm:mb-0"},j={class:"block text-md text-ternary-dark dark:text-ternary-light"},z={class:"mb-20 sm:mb-0"},N={class:"block text-md text-ternary-dark dark:text-ternary-light"};function F(t,e,n,r,a,s){const o=(0,i.up)("counter");return(0,i.wg)(),(0,i.iD)("div",b,[(0,i._)("div",x,[(0,i._)("div",k,[(0,i.Wm)(o,{ref:"counter",startAmount:0,endAmount:6,duration:1,autoinit:!0,onFinished:e[0]||(e[0]=e=>t.alert("Counting finished!")),class:"font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2","aria-label":"About Status Counter"},null,512),(0,i._)("span",y,(0,u.zw)(t.$root.t.experienceTitle),1)]),(0,i._)("div",v,[(0,i.Wm)(o,{ref:"counter",startAmount:0,endAmount:2,duration:1,autoinit:!0,onFinished:e[1]||(e[1]=e=>t.alert("Counting finished!")),class:"font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"},null,512),(0,i._)("span",S,(0,u.zw)(t.$root.t.commercialExperienceTitle),1)]),(0,i._)("div",T,[(0,i.Wm)(o,{ref:"counter",startAmount:0,endAmount:95,duration:1,suffix:"%",autoinit:!0,onFinished:e[2]||(e[2]=e=>t.alert("Counting finished!")),class:"font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"},null,512),(0,i._)("span",j,(0,u.zw)(t.$root.t.feedbackTitle),1)]),(0,i._)("div",z,[(0,i.Wm)(o,{ref:"counter",startAmount:0,endAmount:62,duration:1,autoinit:!0,onFinished:e[3]||(e[3]=e=>t.alert("Counting finished!")),class:"font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"},null,512),(0,i._)("span",N,(0,u.zw)(t.$root.t.projectsTitle),1)])])])}var _=(0,i.aZ)({name:"Vue3Autocounter",interval:null,props:{startAmount:{type:Number,default:0},endAmount:{type:Number,default:0,required:!0},duration:{type:Number,default:3,validator(t){return t>=1}},autoinit:{type:Boolean,default:!0},prefix:{type:String,default:""},suffix:{type:String,default:""},separator:{type:String,default:","},decimalSeparator:{type:String,default:"."},decimals:{type:Number,default:0,validator(t){return t>=0}}},data(){return{timestamp:0,startTimestamp:0,currentAmount:0,currentStartAmount:0,currentDuration:0,paused:!1,remaining:0,animationFrame:0}},mounted(){this.currentAmount=this.startAmount,this.currentStartAmount=this.startAmount,this.currentDuration=1e3*this.duration,this.remaining=1e3*this.duration,this.autoinit?this.start():this.paused=!0,this.$emit("mounted")},unmounted(){this.cancelAnimation()},watch:{startAmount(){this.reset()},endAmount(){this.reset()},duration(){this.reset()}},computed:{isCountingUp(){return this.endAmount>this.startAmount},displayedAmount(){return`${this.prefix}${this.formatedAmount}${this.suffix}`},formatedAmount(){const t=/(\d+)(\d{3})/;let e=this.currentAmount.toFixed(this.decimals);e+="";let n=e.split("."),i=n[0],r=n.length>1?this.decimalSeparator+n[1]:"",a=!isNaN(parseFloat(this.separator));if(this.separator&&!a)while(t.test(i))i=i.replace(t,"$1"+this.separator+"$2");return i+r}},methods:{start(){this.cancelAnimation(),this.currentStartAmount=this.startAmount,this.startTimestamp=null,this.currentDuration=1e3*this.duration,this.paused=!1,this.animationFrame=window.requestAnimationFrame(this.counting)},pause(){this.paused||(this.cancelAnimation(),this.paused=!0)},resume(){this.paused&&(this.startTimestamp=null,this.currentDuration=+this.remaining,this.currentStartAmount=+this.currentAmount,this.animationFrame=window.requestAnimationFrame(this.counting),this.paused=!1)},reset(){this.paused=!1,this.startTimestamp=null,this.cancelAnimation(),this.currentAmount=this.startAmount,this.autoinit?this.start():this.paused=!0},counting(t){this.timestamp=t,this.startTimestamp||(this.startTimestamp=t);let e=t-this.startTimestamp;this.remaining=this.currentDuration-e,this.isCountingUp?(this.currentAmount=this.currentStartAmount+(this.endAmount-this.currentStartAmount)*(e/this.currentDuration),this.currentAmount=this.currentAmount>this.endAmount?this.endAmount:this.currentAmount):(this.currentAmount=this.currentStartAmount-(this.currentStartAmount-this.endAmount)*(e/this.currentDuration),this.currentAmount=this.currentAmount<this.endAmount?this.endAmount:this.currentAmount),e<this.currentDuration?this.animationFrame=window.requestAnimationFrame(this.counting):setTimeout((()=>{this.$emit("finished")}),1e3)},cancelAnimation(){this.animationFrame&&window.cancelAnimationFrame(this.animationFrame)}}});function D(t,e,n,r,a,s){return(0,i.wg)(),(0,i.j4)("span",null,(0,u.zw)(t.displayedAmount),1)}_.render=D;var P=(()=>{const t=_;return t.install=e=>{e.component("Vue3Autocounter",t)},t})(),C=P,J={components:{counter:C}};const E=(0,h.Z)(J,[["render",F]]);var X=E;const q={class:"mt-10 sm:mt-20"},M={class:"font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"},V={class:"flex flex-wrap justify-center sm:grid-cols-4 mt-10 sm:mt-14 gap-2"};function Y(t,e,n,r,a,s){const o=(0,i.up)("AboutClientSingle");return(0,i.wg)(),(0,i.iD)("div",q,[(0,i._)("p",M,(0,u.zw)(t.$root.t.clientsHeading),1),(0,i._)("div",V,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.clients,(t=>((0,i.wg)(),(0,i.j4)(o,{key:t.id,client:t},null,8,["client"])))),128))])])}const U=["href"],W=["src","alt"];function R(t,e,n,r,a,s){return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("a",{href:n.client.url,target:"_blank"},[(0,i._)("img",{src:n.client.img,alt:n.client.title,class:"w-64 py-5 px-10 border border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer dark:bg-secondary-light"},null,8,W)],8,U)])}var H={props:["client"]};const Z=(0,h.Z)(H,[["render",R],["__scopeId","data-v-5a6dd551"]]);var O=Z,B={components:{AboutClientSingle:O},data:()=>({clients:[{id:1,title:"Instytut Meteorologii i Gospodarki Wodnej – Państwowy Instytut Badawczy",img:n(677),url:"https://www.imgw.pl/"},{id:2,title:"Państwowa Uczelnia zawodowa im. Ignacego Mościckiego w Ciechanowie",img:n(926),url:"https://puzim.edu.pl/"},{id:3,title:"GoIT",img:n(798),url:"https://m.goit.global/pl/?utm_source=google&utm_medium=cpc&utm_campaign=19908700535|146264932766|652857908380||goit"},{id:4,title:"Rada Uczelniana Samorządu Studentów PUZ w Ciechanowie",img:n(313),url:"https://www.facebook.com/profile.php?id=100068397649695"},{id:5,title:"Narodowy Fundusz Ochrony Środowiska i Gospodarki Wodnej",img:n(243),url:"https://www.gov.pl/web/nfosigw/narodowy-fundusz-ochrony-srodowiska-i-gospodarki-wodnej"},{id:6,title:"Forum Akademii Nauk Stosowanych",img:n(904),url:"https://fans.edu.pl/"}]})};const K=(0,h.Z)(B,[["render",Y]]);var I=K,Q=n(508),G=n.n(Q);const $={class:"mt-10 sm:mt-20"},L={class:"font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"},tt={class:"flex flex-wrap justify-center sm:grid-cols-4 mt-10 sm:mt-14 gap-2"};function et(t,e,n,r,a,s){const o=(0,i.up)("AboutSkillSingle");return(0,i.wg)(),(0,i.iD)("div",$,[(0,i._)("p",L,(0,u.zw)(t.$root.t.skills),1),(0,i._)("div",tt,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.skills,(t=>((0,i.wg)(),(0,i.j4)(o,{key:t.id,skill:t},null,8,["skill"])))),128))])])}const nt=["src","alt"];function it(t,e,n,r,a,s){return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("img",{src:n.skill.img,alt:n.skill.title,class:"w-64 py-5 px-10 border border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer dark:bg-secondary-light"},null,8,nt)])}var rt={props:["skill"]};const at=(0,h.Z)(rt,[["render",it],["__scopeId","data-v-66335725"]]);var st=at,ot={components:{AboutSkillSingle:st},data:()=>({skills:[{id:1,title:"HTML",img:n(565)},{id:2,title:"CSS",img:n(717)},{id:3,title:"Bootstrap",img:n(192)},{id:4,title:"Tailwind",img:n(148)},{id:5,title:"Vue.js",img:n(93)},{id:6,title:"Angular.js",img:n(179)},{id:7,title:"React.js",img:n(736)},{id:8,title:"JavaScript",img:n(774)},{id:9,title:"JavaScript",img:n(253)}]})};const ut=(0,h.Z)(ot,[["render",et]]);var mt=ut,lt={name:"About",components:{AboutMe:w,AboutCounter:X,AboutClients:I,AboutSkills:mt},data:()=>({}),mounted(){G().replace()},updated(){G().replace()},methods:{}};const dt=(0,h.Z)(lt,[["render",o]]);var ct=dt},904:function(t,e,n){t.exports=n.p+"img/FANS.3bafe8f3.jpeg"},798:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAmVBMVEX///8AAAD/bQD/ZgCTk5P/tJOjo6P6dRj/wqf/agD+fzn4ikj9vJz+iUv4vJv+fTP6waK1tbX4+Pj/YADf39/u7u779e/+iER7e3vMzMyNjY0cHBzd3d2CgoLX19c3NzdxcXFcXFz/3c76bwBpaWnCwsKnp6eSkpJRUVFgYGA7OztTU1NHR0cNDQ37y7H54NApKSm7u7skJCTBDg2zAAADOUlEQVR4nO3abVfaMBiHcSqMTeeUh2YCU2inCDrc1O//4SZN2qbpXcFj0Zyc6/fK9i4tf9OHNKTTAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwynfXaNIulg5x+adXvNyXsR+36JR3kutum8bdPTRhNhIN8PWpT95MTRtPgE0aj4BP+CT5hNAw+YaSCT7gIPmG0Cj5hdBl8wmrXJsSEURJ8wmgZfEK7a9OQ8FhzFl0HTHi1zJ5r8fBGqk6y6mjeXzR8PN2V8PpEM9XjE9nBEt5aG41mbrVnVef3u/YgJjz+bqqDbrY8bviGF24rtpNw43SfVaWlFk6npSfvpNjq9YSnJuHPj0x4U9/Qqta71k/iXoqujX8J1/XtkrJ6L+xmKEaceZuwPEWVqm9WVq1TORUjzj1NmN8iVHYTTeJOZ2pV+3l126yb/I1eiQkfPE1oSkWslXqlmo/LJJEk8TLhla7IrZInKqt95/9Rtdw7YfdskPlrVv8zy+fuB9+f0PS35EbJq1YvwFyN8uZZda+ER2as8MKsPhvrFbUPvj9hbH3j/rAgVDUzaNHQt1nvndCs/pEnrGdrK6Fuk0s7j5XJrmrmvL1raMRb/xLqwrQhoV3VTPeg4azefsK3hPu0YWxtb+5MaUPAoX8J7SutnrDxOnyUA25fMXxLaN8t12maJpVMT3rJetvQK0YNTbj/vfTjErpPvEUlYeIGMk24lANmfR7fErq9lsdKwvzxpx70Yv6muBYD6v+WdwmLnmd2oi6W1YTFWOjtJnqe5BfqXAxohty8S2i/W8TF30XVHbPPyPeZS18TSm+AZcJnoXglBszPYP8SSq/A1juu+7NEU8BNXvYwYfTozDhQlT7ZQ3XQfpTKO3nbOM0HJ3zpqViXm6q10UTt3kX5M+JeY21uwsGhE76cqv1prFS8XImjhbo6lwdTt+7KgzSMl55rbvVEXn2AhO/05jHvHau9S2hPyQjyd4vKtJoQE1afmSEmrD5sAkzYqx4kvIRury+8hMHPpwl+TlRaO0hoCYOfmxj8/NLg5wj7N887/Ln6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwIH9By1YW/Pg/OmfAAAAAElFTkSuQmCC"},677:function(t,e,n){t.exports=n.p+"img/IMGW.3a1761b9.png"},243:function(t,e,n){t.exports=n.p+"img/NFOŚiGW.a40e664e.jpeg"},926:function(t,e,n){t.exports=n.p+"img/PUZ.300e6498.jpeg"},313:function(t,e,n){t.exports=n.p+"img/RUSS.82edac82.jpeg"},774:function(t,e,n){t.exports=n.p+"img/Angular.d3576ec1.png"},192:function(t,e,n){t.exports=n.p+"img/Bootstrap.caf17cff.png"},717:function(t,e,n){t.exports=n.p+"img/CSS.fef8d30c.png"},565:function(t,e,n){t.exports=n.p+"img/HTML.3466c6ed.png"},93:function(t,e,n){t.exports=n.p+"img/JS.e7372f75.png"},736:function(t,e,n){t.exports=n.p+"img/React.5b4225d7.png"},253:function(t,e,n){t.exports=n.p+"img/TS.d38e1840.png"},148:function(t,e,n){t.exports=n.p+"img/Tailwind.f151fb8c.png"},179:function(t,e,n){t.exports=n.p+"img/Vue.7dce048b.png"}}]);
//# sourceMappingURL=416.19b08868.js.map