// API key set globally so that it is easily edited if needed
const apiKey = '7e8e7a9139e4f09fb253db0d8ddce620';

// Zip value set globally to be edited later by user input
let zip = ''


// Values set globally to be edited later with stateValue()
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

// Gets values from API
// If zip causes API to return an error
// catch - alert message will run
async function getWeather() {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apiKey}`)

        stateValues(response.data)

        initializeContent()
    } catch {
        alert('Enter a valid zip.\nOr else...')

    // Reloads page if zip invalid
        location.reload()
    }

};


function createLayout(parentEl, tag, text, className, idName,) {
    // creates element based on tag input
    // Example 'div' creates a div element
    let element = document.createElement(tag)
    // Takes value of text and places it in innerText of
    // the element being created
    element.innerText = text

    // If className exists
    if (className) {
        // Set class attribute of element = className
        element.setAttribute('class', className)
    };
    // If idName exists
    if (idName) {
        // Set id attribute of element = idName
        element.setAttribute('id', idName)
    }
    // parentEl = parent element
    // places the element being created inside parentEl
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
    zipInput.setAttribute('type', 'number')
    createLayout(formInput, 'button', 'Get weather', 'btn btn-outline-primary', 'getWeatherBtn')
    
    let elementClicked = false;
    
    getWeatherBtn.addEventListener('click', () => {
        
        if (elementClicked) {
            mainContainer.removeChild(elementContainer)
        }
        
        elementClicked = true;
        zip = zipInput.value
        

        getWeather()
    })

};


function stateValues(data) {
    // Grabbing values from API and updating values of weatherConditions object
    weatherConditions[0].city = data.name
    weatherConditions[0].kTemp = data.main.temp
    weatherConditions[0].fahrenheitTemp = (weatherConditions[0].kTemp - 273.15) * 9 / 5 + 32
    weatherConditions[0].celsiusTemp = weatherConditions[0].kTemp - 273.15
    weatherConditions[0].condition = data.weather[0].description
    weatherConditions[0].icon = data.weather[0].icon
};


function initializeContent() {

    createLayout(mainContainer, 'div', '', '', 'elementContainer')
    
    // city
    createLayout(elementContainer, 'div', '', 'row', 'cityContainer')
    createLayout(cityContainer, 'div', '', 'col', 'cityCol')
    createLayout(cityCol, 'p', weatherConditions[0].city, 'text-center fs-1',)
    
    // Temp
    createLayout(elementContainer, 'div', '', 'row', 'tempContainer')
    createLayout(tempContainer, 'div', Math.ceil(weatherConditions[0].celsiusTemp) + '°C', 'col', 'celsius')
    createLayout(tempContainer, 'div', Math.ceil(weatherConditions[0].fahrenheitTemp) + '°F', 'col', 'farenheight')
    createLayout(tempContainer, 'div', weatherConditions[0].kTemp + 'K', 'col', 'kelvin')
    
    // Condition
    createLayout(elementContainer, 'div', '', 'row', 'conditionContainer')
    createLayout(conditionContainer, 'div', '', 'col', 'conditionCol')
    createLayout(conditionCol, 'div', weatherConditions[0].condition, 'condition')
    
    // Icon
    createLayout(elementContainer, 'div', '', 'row mg-50', 'iconContainer')
    createLayout(iconContainer, 'img', '', 'col', 'iconImg')
    iconImg.src = `https://openweathermap.org/img/w/${weatherConditions[0].icon}.png`;
    
};

// Runs header and form on page load
headContent()
