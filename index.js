/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertBtn = document.getElementById("convert-btn")
const convertInput = document.getElementById("convert-input")
let value = ""
const lengthSubsection = document.getElementById("length-subsection")
const volumeSubsection = document.getElementById("volume-subsection")
const massSubsection = document.getElementById("mass-subsection")

function conversion(title, metricUp, imperialUp, section, num, metric, imperial, factor) {
    let product = num * factor
    let quotient = num / factor
    section.innerHTML = `<h2>${title} (${metricUp}/${imperialUp})</h2>
    <p>${num} ${metric} = ${product.toFixed(3)} ${imperial} | ${num} ${imperial} = ${quotient.toFixed(3)} ${metric}</p>`
}

convertBtn.addEventListener("click", function() {
    value = convertInput.value 
    conversion("Length", "Metric", "Feet", lengthSubsection, value, "meters", "feet", 3.281)
    conversion("Volume", "Liters", "Gallons", volumeSubsection, value, "liters", "gallons", 0.264)
    conversion("Mass", "Kilos", "pounds", massSubsection, value, "kilos", "pounds", 2.204)  
})


