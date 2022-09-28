// const { default: axios } = require("axios")

const apiKey = '7e8e7a9139e4f09fb253db0d8ddce620'
const mainContainer = document.getElementById('main_container')

let weatherConditions = [
    {
        city: '',
        temp: '',

    }
]

async function getWeather() {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?zip=40517,us&appid=${apiKey}`)
    // initializeContent(response.data.list[0])
    console.log(response.data)
};
getWeather()

parent = mainContainer
function createLayout(parentEl, tag, text) {
    let element = document.createElement(tag)
    element.textContent = text
    parentEl.appendChild(element)
}

function initializeContent() {
    createLayout(mainContainer, 'input', '') 
    createLayout(mainContainer, 'button', 'Submit')
    createLayout(mainContainer, 'div', 'Temp')
    createLayout(mainContainer, 'div', 'Condition')
    createLayout(mainContainer, 'div', 'value text')
    createLayout(mainContainer, 'div', 'value text')


};

initializeContent()
