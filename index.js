
const taskBtn = document.getElementById('create-task-btn')

const taskDetails = `
        <div id="task-details">
            <input type="text" id = "titleId" placeholder="Title">
            <input type="text" id = "assignId" placeholder="Assigne">
            <select name="" id="progressId">
                <option value="TO DO">TO DO</option>
                <option value="IN PROGRESS">IN PROGRESS</option>
                <option value="DONE">DONE</option>
            </select>
            <textarea name="" id="descriptionId" cols="30" rows="8"></textarea>
            <button id = "create-btn">Create</button>
        </div>
`

let count = 0

taskBtn.addEventListener('click',() => {
    const landingPage = document.getElementById('landing-page')
    const createTaskPanel = document.createElement('div')
    createTaskPanel.id = 'create-task-panel'  //Assign Id
    landingPage.appendChild(createTaskPanel)
    createTaskPanel.innerHTML = taskDetails

    const createBtn = document.getElementById('create-btn')
    createBtn.addEventListener('click',()=>{
        const title = document.getElementById('titleId')
        const assign = document.getElementById('assignId')
        const progress = document.getElementById('progressId')
        const description = document.getElementById('descriptionId')
        let taskAssign = `
                    <b>${title.value}</b> <br>
                    <b>${assign.value}</b> <br>
                    <span>${description.value}</span>
        `
        count++
        if(progress.value == 'TO DO'){
            const ele = document.getElementById('TODO')
            const taskField = document.createElement('div')
            ele.appendChild(taskField)
            taskField.className = 'task-field'
            taskField.id = `task-${count}`
            taskField.innerHTML = taskAssign
            taskField.draggable = true
            taskField.addEventListener('dragstart',() => {
                event.dataTransfer.setData('id',taskField.id)
                event.dataTransfer.setData('parent','TODO')
            })
        }
        if(progress.value == 'IN PROGRESS'){
            const ele = document.getElementById('PROGRESS')
            const taskField = document.createElement('div')
            ele.appendChild(taskField)
            taskField.className = 'task-field'
            taskField.id = `task-${count}`
            taskField.innerHTML = taskAssign
            taskField.draggable = true
            taskField.addEventListener('dragstart',() => {
                event.dataTransfer.setData('id',taskField.id)
                event.dataTransfer.setData('parent','PROGRESS')
            })
        }
        if(progress.value == 'DONE'){
            const ele = document.getElementById('DONE')
            const taskField = document.createElement('div')
            ele.appendChild(taskField)
            taskField.className = 'task-field'
            taskField.id = `task-${count}`
            taskField.innerHTML = taskAssign
            taskField.draggable = true
            taskField.addEventListener('dragstart',(event) => {
                event.dataTransfer.setData('id',taskField.id)
                event.dataTransfer.setData('parent','DONE')
            })
        }
        createTaskPanel.remove()
    })
})

const container = document.getElementsByClassName('task-container')

for(let i = 0; i < container.length;i++){
    container[i].addEventListener('dragover',(event)=>{
        event.preventDefault()
    })
    container[i].addEventListener('drop',(event)=>{
        const id = event.dataTransfer.getData('id')
        const parent = event.dataTransfer.getData('parent')
        
        const parentEle = document.getElementById(parent)
        const idEle = document.getElementById(id)
        console.log(container[i])
        container[i].appendChild(idEle)
    })
}
