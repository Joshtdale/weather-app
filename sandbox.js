const apiKey = '7e8e7a9139e4f09fb253db0d8ddce620';
let zip = ''

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
    // console.log(response.data.list.main)       
    // initializeContent(response.data)
    // day1.city = response.data.city.name
};
// getWeather()

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
const mainContainer = document.getElementById('main_container')



function headContent() {

    createLayout(mainContainer, 'div', '', 'col card', 'headContainer')
    createLayout(headContainer, 'h1', 'Weather app')

    // Zip input & button
    createLayout(mainContainer, 'div', '', 'row', 'formContainer')
    createLayout(formContainer, 'div', '', 'col', 'formInput')
    createLayout(formInput, 'input', '', '', 'zipInput')
    createLayout(formContainer, 'div', '', 'col', 'btnCol')
    createLayout(btnCol, 'button', 'Get weather', 'text-primary', 'getWeatherBtn')
    // let zipInput = document.getElementById(zipInput)
    zipInput.setAttribute('value', '')
    
    getWeatherBtn.addEventListener('click', () => {
        zip = zipInput.value
        console.log(zip)
        // mainContainer.removeChildren
        // console.log('click')
        getWeather()
    })
};
headContent()

function initializeContent(data) {
    //nope
    console.log(day1.city)
    day1.city = data.city.name
    kTemp = data.list[0].main.temp
    fahrenheitTemp = (kTemp - 273.15) * 9 / 5 + 32
    celsiusTemp = kTemp - 273.15
    condition = data.list[0].weather[0].description
    icon = data.list[0].weather[0].icon
    // console.log(data.list[0].weather[0].icon)

    //header

    // city
    createLayout(mainContainer, 'div', '', 'row', 'cityContainer')
    createLayout(cityContainer, 'div', '', 'col', 'cityCol')
    createLayout(cityCol, 'div', day1.city, 'text-center',)

    // Temp
    createLayout(mainContainer, 'div', '', 'row', 'tempContainer')
    createLayout(tempContainer, 'div', Math.ceil(celsiusTemp) + '°C', 'col', 'celsius')
    createLayout(tempContainer, 'div', Math.ceil(fahrenheitTemp) + '°F', 'col', 'farenheight')
    createLayout(tempContainer, 'div', kTemp + 'K', 'col', 'kelvin')

    // Condition
    createLayout(mainContainer, 'div', '', 'row', 'conditionContainer')
    createLayout(conditionContainer, 'div', condition, 'col')

    // Icon
    createLayout(mainContainer, 'div', '', 'row', 'iconContainer')
    createLayout(iconContainer, 'img', '', 'col', 'iconImg')
    // let iconImg = document.getElementById('iconImg')

    // iconImg.setAttribute('src', `http://openweathermap.org/img/wn${icon}.png`)

    // let img.src = `http://openweathermap.org/img/wn/${icon}.png`
    // console.log(getWeatherBtn)
};

