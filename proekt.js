//Add selector

document.querySelectorAll("question").forEach(question) => question.addEventListenner("click", () => {

if(question.parentNode.classList.contain("active")){
    question.parentNode.classList.toggle("active")
}
else{
    document.querySelectorAll(".question").forEach(question => question.parentNode.classList.remove("active"))
    question.parentNode.classList.add("active") 
}



}))