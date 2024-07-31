
const createGrid = (gridSize = 16) => {
    const totalSize = 500;
    const gridDiv = document.querySelector('.grid');
    gridDiv.style.height = totalSize + "px";
    gridDiv.style.width = totalSize + "px";

    const size = totalSize/gridSize

    for(i = 0; i < gridSize * gridSize; i++) {
        let childDiv = document.createElement('div')
        childDiv.setAttribute("class", `grid-child ${i}`)
        childDiv.style.height = size + "px";
        childDiv.style.width = size + "px";
        gridDiv.appendChild(childDiv)
    }
}

createGrid()