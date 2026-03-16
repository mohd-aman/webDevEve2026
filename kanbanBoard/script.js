const addBtn = document.querySelector(".add");
const modal = document.querySelector('.modal');
const mainEle = document.querySelector('main');
const allPriorityColor = document.querySelectorAll('.priority-color');

let isModalVisible = false;
let newlyCreatedTaskPriority = 'red';

addBtn.addEventListener('click',function(e){
    // console.log("Click happened on Plus icon");
    if(isModalVisible){
        modal.style.display = 'none'; // this is for UI.
        isModalVisible = false; // update the state 
    }else{
        modal.style.display = 'flex'; //show modal, this is for UI.
        isModalVisible = true;
    }
})

for(let i=0;i<allPriorityColor.length;i++){
    allPriorityColor[i].addEventListener("click",function(e){
        newlyCreatedTaskPriority = e.target.classList[1]
        //remove active class from already selected;
        for(let j=0;j<allPriorityColor.length;j++){
            if(allPriorityColor[j].classList.contains('active'))
                allPriorityColor[j].classList.remove('active');
        }
        e.target.classList.add('active');
    })
}

modal.addEventListener('keydown',function(e){
    const key = e.key;
    if(key === 'Shift'){
        createTicket(e.target.value,newlyCreatedTaskPriority);
        modal.style.display = 'none'; // once ticket is created hide the modal, it is UI
        isModalVisible = false; // update the state 
        e.target.value = "" // make the modal value as empty
    }
})



{/* 
<div class="ticket">
    <div class="priority red"></div>
    <div class="ticketId">#fd454y</div>
    <div class="ticketContent">Task 1</div>
    <div class="lock"><i class="fa fa-lock"></i></div>
</div> 
*/}
// createTicket("Learn JS","blue");
// createTicket("Something else","pink");

function createTicket(taskName,priorityColour){
    const divEle = document.createElement('div');
    divEle.setAttribute('class','ticket');
    const uniqueId = crypto.randomUUID().split('-')[0];
    divEle.innerHTML = `<div class="priority ${priorityColour}"></div>
                        <div class="ticketId">#${uniqueId}</div>
                        <div class="ticketContent">${taskName}</div>
                        <div class="lock">
                            <i class="fa fa-lock">
                        </i></div>`
    mainEle.appendChild(divEle);
}