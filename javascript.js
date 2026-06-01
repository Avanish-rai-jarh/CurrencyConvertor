
const select=document.querySelectorAll(".dropdown select");

const btn=document.querySelector("form button");

const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");


for(let sel of select){
    for(let curr in countryList){
        let newOption=document.createElement("option");
        newOption.innerText=curr;
        newOption.value=curr;
        if(sel.name=="from" && curr=="INR"){
            newOption.selected="selected"
        }
        else if(sel.name=="to" && curr=="USD"){
            newOption.selected="selected";
        }
        sel.append(newOption);
    }
    sel.addEventListener("change",(e)=>{
        updateFlag(e.target);
    });
}

async function litstener(){
    let amount=document.querySelector(".amount input");
    let amountValue=amount.value;
    if(amountValue<0 || amountValue===""){
        amountValue=1;
        amount.value=1;
    }
    let url=`https://2024-03-06.currency-api.pages.dev/v1/currencies/${fromCurr.value.toLowerCase()}.json`;
let promise=await fetch(url);
console.log(promise.status);
let newPromise=await promise.json();
let from=fromCurr.value.toLowerCase();
let to=toCurr.value.toLowerCase()
let fromTo=newPromise[from][to];
let convertedValue=amountValue*fromTo;
let mess=document.querySelector(".message");
let represent=`${amountValue}\t${fromCurr.value}\t=\t${convertedValue}\t${toCurr.value}`;
mess.innerText=represent;
}

function updateFlag(event){
    let countryCode=countryList[event.value];
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img=event.parentElement.querySelector("img");
    img.src=newSrc;
}

btn.addEventListener("click",async (eve)=>{
    eve.preventDefault();
   litstener();
});

window.addEventListener("load",()=>{
    litstener();
})

let back=document.querySelector("body");
let mode=document.querySelector(".mode");
let alpha="original";
let beta=getComputedStyle(back).backgroundImage;

mode.onclick=()=>{
    if(alpha=="original"){
        back.style.backgroundImage = "none";
        back.style.backgroundColor = "black";
        alpha="black";
    }
    else{
        back.style.backgroundImage = beta;
        alpha="original";
    }
};

let sp=document.querySelector(".snap");
let side=document.querySelector(".sidebar");
let newEle1=document.createElement("a");
        newEle1.innerHTML='<i class="fa-solid fa-house"></i>Home';
        newEle1.href="index.html";
        newEle1.style.cursor="pointer";
        newEle1.href="index.html";
        newEle1.style.color="white";
let newEle2=document.createElement("a");
        newEle2.innerHTML='<i class="fa-solid fa-circle-info"></i>About';
        newEle2.href="https://www.linkedin.com/in/avanish-rai-b68b2237b/";
        newEle2.style.cursor="pointer";
        newEle2.style.color="white";
let newEle3=document.createElement("a");
        newEle3.innerHTML='<i class="fa-solid fa-phone"></i>Contact';
        newEle3.href="https://www.instagram.com/jarhnitian.srinagar/?utm_source=wa4a&utm_campaign=wa_vpl_m2_vf_web";
        newEle3.style.cursor="pointer";
        newEle3.style.color="white";
        side.append(newEle1);
        side.append(document.createElement("br"));
        side.append(newEle2);
        side.append(document.createElement("br"));
        side.append(newEle3);

let snip="close";
function toggl(){
    if(snip=="close"){
        side.style.left="0rem";
        snip="open";
    }
    else{
        side.style.left="-11rem";
        snip="close";
    }
};
sp.addEventListener("click",toggl);
sp.addEventListener("touchStart",toggl);

