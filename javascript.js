
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
//     let amount=document.querySelector(".amount input");
//     let amountValue=amount.value;
//     if(amountValue<0 || amountValue===""){
//         amountValue=1;
//         amount.value=1;
//     }
//     let url=`https://2024-03-06.currency-api.pages.dev/v1/currencies/${fromCurr.value.toLowerCase()}.json`;
// let promise=await fetch(url);
// console.log(promise.status);
// let newPromise=await promise.json();
// let from=fromCurr.value.toLowerCase();
// let to=toCurr.value.toLowerCase()
// let fromTo=newPromise[from][to];
// let convertedValue=amountValue*fromTo;
// let mess=document.querySelector(".message");
// let represent=`${amountValue}\t${fromCurr.value}\t=\t${convertedValue}\t${toCurr.value}`;
// mess.innerText=represent;
   litstener();
});

window.addEventListener("load",()=>{
    litstener();
})

