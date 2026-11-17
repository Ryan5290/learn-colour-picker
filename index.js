// data.colors[0].hex -> Object { value: "#01122A", clean: "01122A" }

let colourArr = []

fetch("https://www.thecolorapi.com/scheme?hex=000000")
    .then(res => res.json())
    .then(data => {
        for (let colour of data.colors) {
            colourArr.push(colour.hex.clean)
        }
        console.log(colourArr)
    })