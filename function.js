const totalSize = 500;
const colors = ["black", "white", "red", "yellow", "blue", "green"]
let currentColor = "black"

const gridDiv = document.querySelector('.grid');

const initGrid = () => {
    // Initialize Grid UI
    gridDiv.style.height = totalSize + "px";
    gridDiv.style.width = totalSize + "px";

    createGrid()
}

const createGrid = (gridSize = 16) => {
    const size = totalSize/gridSize

    for(i = 0; i < gridSize * gridSize; i++) {
        const childDiv = document.createElement('div')
        childDiv.setAttribute("class", `grid-child g-${i}`)
        childDiv.style.height = size + "px";
        childDiv.style.width = size + "px";
        gridDiv.appendChild(childDiv)
    }
}

const initEventListener = () => {
    // Add Event Listener
    gridDiv.addEventListener('mouseover', (e) => {
        if(e.target.classList[0] === "grid-child") {
            const target = document.querySelector(`.${e.target.classList[1]}`)
            target.style.backgroundColor = currentColor
        }
    })
}

const resetGrid = () => {
    const size = prompt("Change grid size (Please input between 1-100):")
    if(typeof +size !== "number" || size < 1 || size > 100) alert("Please input between 1-100")
    else {
        const gridChildren = Array.from(document.querySelectorAll('.grid-child'))
        for(i = 0; i < gridChildren.length; i++) {
            gridChildren[i].remove()
        }
        createGrid(size)
    }
}

const clearGrid = () => {
    Array.from(gridDiv.childNodes).forEach(item => item.style.backgroundColor = "white")
}

const createColorPallete = () => {
    const sidebarDiv = document.querySelector('.sidebar')
    colors.forEach(color => {
        const colorDiv = document.createElement('button');
        colorDiv.setAttribute("title", color)
        colorDiv.setAttribute("class", `color color-${color}`)
        colorDiv.setAttribute("onclick", `currentColor = "${color}"`)
        colorDiv.style.backgroundColor = color;
        sidebarDiv.appendChild(colorDiv)
    })
}

initGrid()
initEventListener()
createColorPallete()