let acceptBtn = document.querySelector("#first")
let acceptMark = document.querySelector(".accept-mark")
let rejectBtn = document.querySelector("#second")
let rejectMark = document.querySelector(".reject-mark")
let pendingBtn = document.querySelector("#third")
let pendingMark = document.querySelector(".pending-mark")
let rootBtn = document.querySelector("#fourth")
let rootMark = document.querySelector(".root-mark")
if (acceptBtn.textContent = "Accepted"){
    acceptBtn.classList.add("accepted")
    acceptBtn.addEventListener("click", ()=>{
        acceptMark.style.color = "green"
        acceptMark.style.backgroundColor = "black";
    })
}
if(rejectBtn.textContent = "Rejected"){
    rejectBtn.classList.add("rejected")
    rejectBtn.addEventListener("click",()=>{
        rejectMark.style.color = "red"
        rejectMark.style.backgroundColor = "black"
    })
}
if(pendingBtn.textContent = "Pending"){
    pendingBtn.classList.add("pending")
    pendingBtn.addEventListener("click",()=>{
        pendingMark.style.color = "yellow"
        pendingMark.style.backgroundColor = "black"
    })
}
if(rootBtn.textContent = "Root"){
    rootBtn.classList.add("root")
    rootBtn.addEventListener("click",()=>{
        rootMark.style.color = "white"
        rootMark.style.backgroundColor = "black"
    })
}
