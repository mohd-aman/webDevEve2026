const addBtn = document.querySelector(".add");
const modal = document.querySelector('.modal');
const mainEle = document.querySelector('main');

let isModalVisible = false;

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

modal.addEventListener('keydown',function(e){
    const key = e.key;
    if(key === 'Shift'){
        createTicket();
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
// createTicket();

function createTicket(){
    const divEle = document.createElement('div');
    divEle.setAttribute('class','ticket');
    divEle.innerHTML = `<div class="priority red"></div>
                        <div class="ticketId">#fd454y</div>
                        <div class="ticketContent">Task 1</div>
                        <div class="lock">
                            <i class="fa fa-lock">
                        </i></div>`
    mainEle.appendChild(divEle);
}