const questions = document.querySelectorAll(".question")
questions.forEach(function(current){
    const btn = current.querySelector(".question-btn")
    btn.addEventListener("click", function(){
        questions.forEach(function(item){
            if(item !== current){
                item.classList.remove("show-text")
            }
        })
        current.classList.toggle("show-text")
    }
)
})