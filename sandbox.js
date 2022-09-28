// const { default: axios } = require("axios")

const apiKey = '7e8e7a9139e4f09fb253db0d8ddce620'
const mainContainer = document.getElementById('main_container')

let weatherConditions = [
    {
        city: '',
        temp: '',
        condition: '',
        icon: '',

    },
    {
        city: '',
        temp: '',
        condition: '',
        icon: '',

    },
    {
        city: '',
        temp: '',
        condition: '',
        icon: '',

    },
    {
        city: '',
        temp: '',
        condition: '',
        icon: '',

    }
]

let day1 = weatherConditions[0]
let day2 = weatherConditions[1]
let day3 = weatherConditions[2]
let day4 = weatherConditions[3]

console.log(day1.city)

async function getWeather() {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?zip=40517,us&appid=${apiKey}`)
    // initializeContent(response.data.list[0])
    console.log(response.data)
    console.log(response.data)
    weatherConditions[0].city.innerText = 'Lexington'
};
getWeather()

parent = mainContainer
function createLayout(parentEl, tag, text, className, idName) {
    let element = document.createElement(tag)
    element.textContent = text
    if (className) {
        element.setAttribute('class', className)
    };
    if (idName) {
        element.setAttribute('id', idName)
    }
    parentEl.appendChild(element)
}

function initializeContent() {
    createLayout(mainContainer, 'input', '') 
    createLayout(mainContainer, 'button', 'Submit', 'text-primary')
    createLayout(mainContainer, 'div', 'City')
    createLayout(mainContainer, 'div', 'Temp')
    createLayout(mainContainer, 'div', 'Condition')
    createLayout(mainContainer, 'div', 'value text')
    createLayout(mainContainer, 'div', 'value text')
    createLayout(mainContainer, 'div', 'value text')


};

initializeContent()
