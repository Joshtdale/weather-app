const apiKey = '7e8e7a9139e4f09fb253db0d8ddce620'

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
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?zip=40517,us&appid=${apiKey}`)
    // initializeContent(response.data.list[0])
    // console.log(response.data.city.name)
    // initializeContent(response.data)
    // day1.city = response.data.city.name
};
getWeather()

//parent = mainContainer
function createLayout(parentEl, tag, text, className, idName, ) {
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
    const mainContainer = document.getElementById('main_container')

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
    createLayout(cityCol, 'div', 'City', 'text-center',)

// Temp
    createLayout(mainContainer, 'div', 'Temp')

// Condition
    createLayout(mainContainer, 'div', 'Condition')

// Icon
    createLayout(mainContainer, 'div', 'value text')

    console.log(getWeatherBtn)
    
    // day1.city = data.city.name
    // console.log(day1.city)
};


initializeContent()
