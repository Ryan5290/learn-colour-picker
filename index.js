// data.colors[0].hex -> Object { value: "#01122A", clean: "01122A" }

let colourArr = []
let mode = "monochrome" // monochrome monochrome-dark monochrome-light analogic complement analogic-complement triad quad

fetch(`https://www.thecolorapi.com/scheme?hex=000000?mode=${mode}`)
    .then(res => res.json())
    .then(data => {
        for (let colour of data.colors) {
            colourArr.push(colour.hex.value)
        }
        console.log(colourArr)
    })