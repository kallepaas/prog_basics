const form = document.querySelector('form')
form.addEventListener('submit', addTask)
const tasksList = document.querySelector('.collection')
tasksList.addEventListener('click', deleteTask)

function deleteTask(event){
    if(event.target.textContent == 'X'){
        if(confirm("Do you want to delete this task?")){
            event.target.parentElement.remove();
        }
    }
}

function addTask(event) {
    const taskText = document.querySelector('#task').value

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
    // clear input value
    document.querySelector('#task').value = ''
    // form submit event control?
    event.preventDefault()

}