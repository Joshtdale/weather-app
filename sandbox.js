const apiKey = '7e8e7a9139e4f09fb253db0d8ddce620';

//////// TAKE THIS OUT //////////
let zip = ''///////////////
///////////////////////////////
let weatherConditions = [
    {
        city: '',
        kTemp: '',
        fahrenheitTemp: '',
        celsiusTemp: '',
        condition: '',
        icon: '',

    },
    {
        city: '',
        kTemp: '',
        fahrenheitTemp: '',
        celsiusTemp: '',
        condition: '',
        icon: '',

    },
    {
        city: '',
        kTemp: '',
        fahrenheitTemp: '',
        celsiusTemp: '',
        condition: '',
        icon: '',

    },
    {
        city: '',
        kTemp: '',
        fahrenheitTemp: '',
        celsiusTemp: '',
        condition: '',
        icon: '',

    }
]


async function getWeather() {
    // try{
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?zip=${zip},us&appid=${apiKey}`)
    initializeContent(response.data)
    // } catch {
    //     alert('shit')
    // }

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

// Main container div
const mainContainer = document.getElementById('main_container')

// head text, zip input, button
// initialized on reload
function headContent() {

    // "Weather app" header
    createLayout(mainContainer, 'div', '', 'col card', 'headContainer')
    createLayout(headContainer, 'h1', 'Weather app')

    // Zip input & button
    createLayout(mainContainer, 'div', '', 'row', 'formContainer')
    createLayout(formContainer, 'div', '', 'col', 'formInput')
    createLayout(formInput, 'input', '', '', 'zipInput')
    zipInput.setAttribute('value', '')
    createLayout(formContainer, 'div', '', 'col', 'btnCol')
    createLayout(btnCol, 'button', 'Get weather', 'text-primary', 'getWeatherBtn')


    getWeatherBtn.addEventListener('click', () => {
        // if (mainContainer.firstChild){
        //     mainContainer.removeChild
        // }
        zip = zipInput.value
        getWeather()
    })
};
headContent()

function initializeContent(data) {
// weather for day 1
    weatherConditions[0].city = data.city.name
    weatherConditions[0].kTemp = data.list[0].main.temp
    weatherConditions[0].fahrenheitTemp = (weatherConditions[0].kTemp - 273.15) * 9 / 5 + 32
    weatherConditions[0].celsiusTemp = weatherConditions[0].kTemp - 273.15
    weatherConditions[0].condition = data.list[0].weather[0].description
    weatherConditions[0].icon = data.list[0].weather[0].icon

    weatherConditions[1].city = data.city.name
    weatherConditions[1].kTemp = data.list[1].main.temp
    weatherConditions[1].fahrenheitTemp = (weatherConditions[0].kTemp - 273.15) * 9 / 5 + 32
    weatherConditions[1].celsiusTemp = weatherConditions[0].kTemp - 273.15
    weatherConditions[1].condition = data.list[1].weather[0].description
    weatherConditions[1].icon = data.list[1].weather[0].icon
    console.log(data.list[0].weather[0].icon)

    // console.log(day1.city)
    //header

    // city
    createLayout(mainContainer, 'div', '', 'row', 'cityContainer')
    createLayout(cityContainer, 'div', '', 'col', 'cityCol')
    createLayout(cityCol, 'div', weatherConditions[0].city, 'text-center',)

    // Temp
    createLayout(mainContainer, 'div', '', 'row', 'tempContainer')
    createLayout(tempContainer, 'div', Math.ceil(weatherConditions[0].celsiusTemp) + '°C', 'col card', 'celsius')
    createLayout(tempContainer, 'div', Math.ceil(weatherConditions[0].fahrenheitTemp) + '°F', 'col card', 'farenheight')
    createLayout(tempContainer, 'div', weatherConditions[0].kTemp + 'K', 'col card', 'kelvin')

    // Condition
    createLayout(mainContainer, 'div', '', 'row card', 'conditionContainer')
    createLayout(conditionContainer, 'div', weatherConditions[0].condition, 'col')

    // Icon
    createLayout(mainContainer, 'div', '', 'row', 'iconContainer')
    createLayout(iconContainer, 'img', '', 'col', 'iconImg')
    // let iconImg = document.getElementById('iconImg')
    // iconImg.setAttribute('src', `http://openweathermap.org/img/wn${icon}.png`)

    // let img.src = `http://openweathermap.org/img/wn/${icon}.png`
    // console.log(getWeatherBtn)

    createLayout(mainContainer, 'div', '', '', 'day2')
    // Temp
    createLayout(day2, 'div', '', 'row', 'tempContainer2')
    createLayout(tempContainer2, 'div', Math.ceil(weatherConditions[0].celsiusTemp) + '°C', 'col card', 'celsius')
    createLayout(tempContainer2, 'div', Math.ceil(weatherConditions[0].fahrenheitTemp) + '°F', 'col card', 'farenheight')
    createLayout(tempContainer2, 'div', weatherConditions[0].kTemp + 'K', 'col card', 'kelvin')

    // Condition
    createLayout(day2, 'div', '', 'row card', 'conditionContainer2')
    createLayout(conditionContainer2, 'div', weatherConditions[0].condition, 'col')

    // Icon
    createLayout(day2, 'div', '', 'row', 'iconContainer2')
    createLayout(iconContainer2, 'img', '', 'col', 'iconImg')
};

