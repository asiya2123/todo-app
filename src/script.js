let add_button=document.querySelector('.add_button');
let todos=document.querySelector('.todos');
let add_input=document.querySelector('.add_input');

function showData(){
    todos.innerHTML=localStorage.getItem('todo') || "";
}
showData();
function saveData(){
    localStorage.setItem('todo',todos.innerHTML);
}

function dispalyTodo(){

    let todoBox=document.createElement('div');
    todoBox.className='each_todo';

    let imageparadiv=document.createElement('div');
    imageparadiv.className='imageParadiv';

    let image=document.createElement('img');
    image.src='unchecked.png';
    image.className='checked';

    let para=document.createElement('p');
    para.textContent=add_input.value;

    let cross=document.createElement('i');
    cross.className = 'fa-solid fa-xmark';

    imageparadiv.appendChild(image);
    imageparadiv.appendChild(para);
    todoBox.appendChild(imageparadiv);
    todoBox.appendChild(cross);
    todos.appendChild(todoBox);

    saveData();
}

todos.addEventListener('click',function(e){
    if(e.target.tagName === 'I'){
        e.target.parentElement.remove();
        saveData();
    }
    else if(e.target.tagName === 'P'){
            e.target.classList.toggle('strike');
            let img = e.target.previousElementSibling;
            img.src.includes('unchecked.png')? img.src='checked.png': img.src='unchecked.png';
            saveData();
    }

});

add_button.addEventListener('click',dispalyTodo);