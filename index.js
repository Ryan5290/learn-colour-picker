// data.colors[0].hex -> Object { value: "#01122A", clean: "01122A" }

let mode = "monochrome" // monochrome monochrome-dark monochrome-light analogic complement analogic-complement triad quad

document.getElementById('colour-btn').addEventListener('click', getColours)

function getColours() {
    const pickedColour = getPickedColour().slice(1)
    const paletteOp = getPaletteOp()
    let colourArr = []

    fetch(`https://www.thecolorapi.com/scheme?hex=${pickedColour}&mode=${paletteOp}`)
    .then(res => res.json())
    .then(data => {
        for (let colour of data.colors) {
            colourArr.push(colour.hex.value)
        }

        renderColours(colourArr)
    })
}

function getPickedColour() {
    return document.getElementById('colour-picker').value
}

function getPaletteOp() {
    return document.getElementById('palette-op').value
}

function renderColours(arr) {
    let colourNum = 1
    for (let colour of arr) {
        document.getElementById(`grid-${colourNum}-colour`).style.background = colour
        document.getElementById(`grid-${colourNum}-name`).textContent = colour
        colourNum++
    }
}