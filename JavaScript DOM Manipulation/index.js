document.getElementById('add-task').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskCategory = document.getElementById('task-category');
    const taskText = taskInput.value.trim();
    const category = taskCategory.value;

    if (taskText === '') {
        alert('กรุณากรอกข้อความในช่องงาน');
        return;
    }

    const taskList = document.getElementById('todo-list');
    
    const li = document.createElement('li');
    li.classList.add(category);

    const taskImage = document.createElement('img');
    taskImage.src = getTaskImage(category);

    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'ลบ';
    deleteButton.onclick = function() {
        if (confirm('คุณแน่ใจว่าจะลบรายการนี้?')) {
            li.remove();
        }
    };

    li.appendChild(taskImage);
    li.appendChild(taskContent);
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = ''; // clear input field
}

function getTaskImage(category) {
    switch (category) {
        case 'personal':
            return 'https://picsum.photos/30/30?random=1';
        case 'work':
            return 'https://picsum.photos/30/30?random=2';
        case 'moive':
            return 'https://picsum.photos/30/30?random=3';
        default:
            return 'https://picsum.photos/30/30?random=4';
    }
}

document.getElementById('todo-list').addEventListener('click', function(event) {
    if (event.target.tagName === 'SPAN') {
        event.target.parentElement.classList.toggle('completed');
    }
});