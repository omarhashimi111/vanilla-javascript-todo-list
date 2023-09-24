// variables

const addTask = document.getElementById("add-task");
const input = document.getElementById("input")
const taskContainer = document.getElementById("left")




// Add event

addTask.onclick = () => {
    let comp = document.getElementById("completed-ul")
    let task  = document.createElement("div");
    task.classList.add("new-task")

    let li = document.createElement("li");
    li.classList.add("new-li")
    li.innerText = input.value
    task.appendChild(li)

    let completeBtn = document.createElement("button");
    completeBtn.classList.add("complete-btn");
    completeBtn.innerHTML = "<i class='fa-solid fa-check'></i>"
    task.appendChild(completeBtn)

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = "<i class='fa-solid fa-trash can'></i>"
    task.appendChild(deleteBtn)

    if(input.value === ""){
        alert("Please Enter A Task!!!")
    }else{
        taskContainer.appendChild(task)
    }

    input.value = "";

    completeBtn.addEventListener("click",(e) => {
        let copy = completeBtn.previousSibling.cloneNode(true)
        comp.appendChild(copy)
        completeBtn.previousSibling.style.textDecoration = "line-through"
        completeBtn.disabled = "true"
    })

    deleteBtn.addEventListener("click",() => {
        deleteBtn.parentElement.remove()
    })


}