let Input=document.querySelector("#input");
console.log(Input);

let Sreen=document.querySelector(".sreen");
console.log(Sreen);


let BTN=document.querySelector("#btn");
console.log("#btn");

BTN.addEventListener("click",()=>{
    let CreLi=document.createElement("li");
    CreLi.innerHTML=Input.value;
    let Delete=document.createElement("button");
    Delete.innerHTML="Delete";
    Delete.classList.add("delete");
    console.log(Delete);
   CreLi.appendChild(Delete)
    Sreen.appendChild(CreLi);
    Input.value="";
})



Sreen.addEventListener("click",(event)=>{
    if(event.target.nodeName == "BUTTON"){
        console.log("Ready to delete")
        let ListItem=event.target.parentElement;
        ListItem.remove();
        console.log(ListItem)
    }

    else{
        console.log("not jjj")
    }
})

// let BTNS=document.querySelectorAll(".delete");

// for(delBTN of BTNS){
//     delBTN.addEventListener("click",()=>{
//         console.log("Ready the delete")
//     })
// }