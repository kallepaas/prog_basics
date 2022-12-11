const form = document.querySelector('form')
form.addEventListener('submit', addTask)

function addTask(event) {
    const taskText = document.querySelector('#task').value

    let li = document.createElement('li')
    li.className = 'collection-item'
    let liText = document.createTextNode(taskText)
    li.appendChild(liText)
    let a = document.createElement('a')
    a.className = 'waves-effect waves-light btn-flat btn-small black-text secondary-content'
    let aText = document.createTextNode('X')
    a.appendChild(aText)
    a.setAttribute('href', "#")

    li.appendChild(a)

    const ul = document.querySelector('ul')
    ul.appendChild(li)

    document.querySelector('#task').value = ''
    event.preventDefault()

}