const form = document.querySelector('form')
const tasksList = document.querySelector('.collection')
const delTasksBtn = document.querySelector('#clear-all-tasks')

form.addEventListener('submit', addTask)
tasksList.addEventListener('click', deleteTask)
delTasksBtn.addEventListener('click', deleteTasks)

document.addEventListener('DOMContentLoaded', getTasks)

function getTasks(event){
    // ADD TASK TO LOCALSTORAGE
    let tasks // arrary for user inputs
    if(localStorage.getItem('tasks') === null){
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    // loop array for each element value

    tasks.forEach(function (task){
    // create <li> element
    let li = document.createElement('li')
    // define <li> CSS class
    li.className = 'collection-item'
    // create text value for <li>
    let liText = document.createTextNode(taskText)
    // add text value to <li>
    li.appendChild(liText)
    // create link element
    let a = document.createElement('a')
    // add css style
    a.className = 'waves-effect waves-light black-text secondary-content'
    // add X text to link
    let aText = document.createTextNode('X')
    // ???
    a.appendChild(aText)
    // set href attribute
    a.setAttribute('href', "#")
    // add link to <li>
    li.appendChild(a)

        ul.appendChild(li)

    })

}

function deleteTask(event){
    if(event.target.textContent === 'X'){
        if(confirm('Are you sure to delete this task?')){
            event.target.parentElement.remove()
            // get task value from dom li element textContent
            let liText = event.target.parentElement.textContent
            let liTextCorrect = liText.slice(0, liText.length-1)
            // get data from LS
            let tasks // array for user inputs
            if(localStorage.getItem('tasks') === null){
                tasks = []
            } else {
                tasks = JSON.parse(localStorage.getItem('tasks'))
            }
            // loop all tasks elements
            tasks.forEach(function(task, index){
                // get element with the same value as clicked
                if(task === liTextCorrect){
                    tasks.splice(index, 1) // delete this element from data array
                }
            })
            localStorage.setItem('tasks', JSON.stringify(tasks)) // save updated data lo LS
        }
    }
}

function deleteTasks(){
    if(confirm("Do you want to delete all tasks?")){
    // tasksList.innerHTML = '';
    console.log(tasksList.firstElementChild);
    while(tasksList.firstChild){
        tasksList.removeChild(tasksList.firstChild);
        }
    }
}

function addTask(event) {
    // USER INPUT
    const taskText = document.querySelector('#task').value

    // ADD DOM ELEMENT - begin
    // create <li> element
    let li = document.createElement('li')
    // define <li> CSS class
    li.className = 'collection-item'
    // create text value for <li>
    let liText = document.createTextNode(taskText)
    // add text value to <li>
    li.appendChild(liText)
    // create link element
    let a = document.createElement('a')
    // add css style
    a.className = 'waves-effect waves-light black-text secondary-content'
    // add X text to link
    let aText = document.createTextNode('X')
    // ???
    a.appendChild(aText)
    // set href attribute
    a.setAttribute('href', "#")
    // add link to <li>
    li.appendChild(a)


    // find <ul> DOM component
    const ul = document.querySelector('ul')
    // add <li> to <ul>
    ul.appendChild(li)

    // ADD TASK TO LOCALSTORAGE
    let tasks // arrary for user inputs
    if(localStorage.getItem('tasks') === null){
        tasks = []
} else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    console.log(tasks)
    tasks.push(taskText)
    console.log(tasks)
    localStorage.setItem('tasks', JSON.stringify(tasks))

    // clear input value
    document.querySelector('#task').value = ''
    // form submit event control?
    event.preventDefault()

}