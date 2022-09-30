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

    }
]


async function getWeather() {
    try{
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apiKey}`)
    initializeContent(response.data)
    } catch {
        alert('shit')
    }
    console.log(response.data)

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
    createLayout(mainContainer, 'div', '', 'col-12-sm col-4-lg', 'headContainer')
    createLayout(headContainer, 'h1', 'Weather app',)

    // Zip input & button
    createLayout(mainContainer, 'div', '', 'input-group', 'formContainer')
    createLayout(formContainer, 'input', '', 'form', 'zipInput')
    createLayout(formContainer, 'div', '', 'input-group-prepend', 'formInput')
    zipInput.setAttribute('value', '')
    zipInput.setAttribute('placeholder', 'Enter zip code')
    createLayout(formInput, 'button', 'Get weather', 'btn btn-outline-primary', 'getWeatherBtn')


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
    weatherConditions[0].city = data.name
    weatherConditions[0].kTemp = data.main.temp
    weatherConditions[0].fahrenheitTemp = (weatherConditions[0].kTemp - 273.15) * 9 / 5 + 32
    weatherConditions[0].celsiusTemp = weatherConditions[0].kTemp - 273.15
    weatherConditions[0].condition = data.weather[0].description
    weatherConditions[0].icon = data.weather[0].icon



    // city
    createLayout(mainContainer, 'div', '', 'row', 'cityContainer')
    createLayout(cityContainer, 'div', '', 'col', 'cityCol')
    createLayout(cityCol, 'p', weatherConditions[0].city, 'text-center fs-1',)

    // Temp
    createLayout(mainContainer, 'div', '', 'row', 'tempContainer')
    createLayout(tempContainer, 'div', Math.ceil(weatherConditions[0].celsiusTemp) + '°C', 'col', 'celsius')
    createLayout(tempContainer, 'div', Math.ceil(weatherConditions[0].fahrenheitTemp) + '°F', 'col', 'farenheight')
    createLayout(tempContainer, 'div', weatherConditions[0].kTemp + 'K', 'col', 'kelvin')

    // Condition
    createLayout(mainContainer, 'div', '', 'row', 'conditionContainer')
    createLayout(conditionContainer, 'div', '', 'col', 'conditionCol')
    createLayout(conditionCol, 'div', weatherConditions[0].condition, 'condition')

    // Icon
    createLayout(mainContainer, 'div', '', 'row mg-50', 'iconContainer')
    createLayout(iconContainer, 'img', '', 'col', 'iconImg')
    iconImg.src = `https://openweathermap.org/img/w/${weatherConditions[0].icon}.png`;

};

