//let tabContentChildren = document.getElementById("tab-content").children;

//for(let child of tabContentChildren){
    //child.addEventListener("click",function(){
    //    document.getElementById("tab-content").querySelector(".line").classList.remove("line");
   //     this.lastChild.classList.add("line");
   // });
//}

let basket=[];
let addBasketAll=document.querySelectorAll(".add-to-card");

for(let addBasket of addBasketAll){
    addBasket.onclick=function(e){
        e.preventDefault();
        let name=this.parentElement.parentElement.parentElement.firstElementChild.innerText;
       // let src=this.parentElement.previousElementSibling.getAttribute("src");
        let data_id=this.parentElement.parentElement.parentElement.getAttribute("data-id");
        basket.push({
            Id:data_id,
            Name:name
            //Src:src
        });
        console.log(basket);
    }
}