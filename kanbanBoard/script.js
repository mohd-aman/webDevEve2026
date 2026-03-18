const lockClass = "fa-lock"
const unlockClass = "fa-unlock";
const colorArr = ['red','blue','green','pink'];

const addBtn = document.querySelector(".add");
const deleteBtn = document.querySelector(".delete");
const modal = document.querySelector('.modal');
const mainEle = document.querySelector('main');
const allPriorityColor = document.querySelectorAll('.priority-color');
const allFilterBoxes = document.querySelectorAll('.box');

let isModalVisible = false;
let isDeleteActive = false;
let newlyCreatedTaskPriority = 'red';


//filteration of ticket 
for(let i=0;i<allFilterBoxes.length;i++){

    allFilterBoxes[i].addEventListener('click',function(e){
        const selectedBoxCol = allFilterBoxes[i].classList[1];
        //next step will be to show/hide tickets available at this point in the DOM;
        const allTicketsCurrently = document.querySelectorAll(".ticket");
        for(let j=0;j<allTicketsCurrently.length;j++){
            const currentTicketPriorityEle = allTicketsCurrently[j].querySelector('.priority');
            const currentTicketPriorityCol = currentTicketPriorityEle.classList[1];
            if(selectedBoxCol === currentTicketPriorityCol){
                allTicketsCurrently[j].style.display = 'block';
            }else{
                allTicketsCurrently[j].style.display = 'none';
            }
        }
    })

    //show all tickets on double click
    allFilterBoxes[i].addEventListener('dblclick',function(e){
        const allTicketsCurrently = document.querySelectorAll(".ticket");
        for(let j=0;j<allTicketsCurrently.length;j++){
            allTicketsCurrently[j].style.display = 'block';
        }
    })

}

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

deleteBtn.addEventListener('click',function(){
    if(isDeleteActive){
        deleteBtn.classList.remove("delete-active"); // UI change
        isDeleteActive = false;
    }else{
        deleteBtn.classList.add("delete-active"); // UI change
        isDeleteActive = true; // update the state
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
    handleTicketDelete(divEle);
    handleLockMechanism(divEle);
    handlePriorityChange(divEle);
}

function handleTicketDelete(ticket){
    ticket.addEventListener('click',function(){
        //can we know somehow? what is the state of delete icon? 
        if(isDeleteActive) ticket.remove();
    })
}

function handleLockMechanism(ticket){
    const lockIcon = ticket.querySelector('.lock>i'); //it is selecting child i of element having lock class
    const ticketContentEle = ticket.querySelector('.ticketContent');
    lockIcon.addEventListener('click',function(){
        if(lockIcon.classList.contains(lockClass)){ // making ticket editable
            lockIcon.classList.remove(lockClass);
            lockIcon.classList.add(unlockClass);
            ticketContentEle.setAttribute('contenteditable','true');
        }else{ // making ticket not editable
            lockIcon.classList.remove(unlockClass);
            lockIcon.classList.add(lockClass);
            ticketContentEle.setAttribute('contenteditable','false');
        }
    })
}

function handlePriorityChange(ticket){
    const priorityTag = ticket.querySelector('.priority');
    priorityTag.addEventListener('click',function(){
        const currentPriorityCol = priorityTag.classList[1];
        let currentColIndex;
        for(let i=0;i<colorArr.length;i++){
            if(colorArr[i] === currentPriorityCol){
                currentColIndex = i;
                break;
            }
        }
        let nextColorIndex;
        if(currentColIndex === colorArr.length-1){ //it is edge case, we are at the last we need to go back 0th index
            nextColorIndex = 0;
        }else{
            nextColorIndex = currentColIndex+1;
        }// try to achieve this if else logic in single line
        const nextPriorityCol = colorArr[nextColorIndex];
        priorityTag.classList.remove(currentPriorityCol);
        priorityTag.classList.add(nextPriorityCol);
    })
}