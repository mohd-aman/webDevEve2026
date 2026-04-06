
{/* <div class="comment-reply-container"> <input placeholder="Write your Comment" type="text">
        <button class="btn-submit">Submit</button>
</div> */}

const container = document.querySelector('.container');


container.addEventListener('click',function(e){
    if(e.target.classList.contains('reply')){
        console.log("clicked on reply");
        const replyBox = document.createElement('div');
        replyBox.setAttribute('class','comment-reply-container');
        replyBox.innerHTML = `<input placeholder="Write your Comment" type="text">
        <button class="btn-submit">Submit</button>`
        e.target.closest('.comment-container').appendChild(replyBox);
    }

    if(e.target.classList.contains('btn-submit')){
        // console.log(e.target.previousElementSibling.value);
        const commentValue = e.target.previousElementSibling.value;
        const commentContainer = document.createElement("div");
        commentContainer.setAttribute("class", "comment-container");
        commentContainer.innerHTML = `
        <h3>${commentValue}</h3>
            <div class="reply">Reply</div>`;
        e.target.closest('.comment-container').appendChild(commentContainer);
        e.target.parentNode.remove();
    }
})