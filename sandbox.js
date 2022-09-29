const apiKey = '7e8e7a9139e4f09fb253db0d8ddce620';
const zip = '40517'

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


async function getWeather() {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?zip=${zip},us&appid=${apiKey}`)
    // data = response.data;
    initializeContent(response.data)
    // console.log(response.data.city.name)       
    // initializeContent(response.data)
    // day1.city = response.data.city.name
};
getWeather()

//parent = mainContainer
function createLayout(parentEl, tag, text, className, idName,) {
    let element = document.createElement(tag)
    element.innerText = text
    if (className) {
        element.setAttribute('class', className)
    };
    if (idName) {
        element.setAttribute('id', idName)
    }
    parentEl.appendChild(element)
}

function initializeContent(data) {
    const mainContainer = document.getElementById('main_container')
    //nope
    // console.log(day1.city)

    //header
    createLayout(mainContainer, 'div', '', 'col card', 'headContainer')
    createLayout(headContainer, 'h1', 'Weather app')

    // Zip input & button
    createLayout(mainContainer, 'div', '', 'row', 'formContainer')
    createLayout(formContainer, 'div', '', 'col', 'formInput')
    createLayout(formInput, 'input', '')
    createLayout(formContainer, 'div', '', 'col', 'btnCol')
    createLayout(btnCol, 'button', 'Get weather', 'text-primary', 'getWeatherBtn')

    // city
    createLayout(mainContainer, 'div', '', 'row', 'cityContainer')
    createLayout(cityContainer, 'div', '', 'col', 'cityCol')
    createLayout(cityCol, 'div', day1.city, 'text-center',)

    // Temp
    createLayout(mainContainer, 'div', 'Temp')

    // Condition
    createLayout(mainContainer, 'div', 'Condition')

    // Icon
    createLayout(mainContainer, 'div', 'value text')
    createLayout(mainContainer, 'div', 'stuff')

    // console.log(getWeatherBtn)
    day1.city = data.city.name
    console.log(day1.city)
    // console.log(data)
};


// initializeContent()
