
## Wireframe (project layout example)
![wireframe](./images/weather-app.png)

## Notes
single div
- dynamic generation with javascript

handle unsuccessful events

bootstrap
- dynamic break points
- mobile first

api end point?
zip code validation

## API values
zip code input
city
Current weather
temp
image
---
## Methods

### Element creation
      let ul = getElementById
      let li1 = createelement('li')
      li1.textContent
      ul.appendChild(li1)

      function createListItem(parentEl, tag, textContent){
      Default text --- function createListItem(parentEl, tag, text = 'didn't include this'){
      if(!text){

      }
         let list = document.createelement(tag)
         list.textcontent = text
         if(id) {
            element.id = id
         }
         parentEl.appendChild(list)
      }

      init(){
         createListItem(ul, 'li', 'list Item 1')
         createListItem(ul, 'li', 'list Item 2')
         createListItem(ul, 'li', 'list Item 3')
         createListItem(main, 'div', 'list Item 1')
      }

---

Find api data structure<br>
icon: ...<br>
Description: ...<br>
name: ...<br>
temp: ...<br>


    variable code = apiCode
    hard coded and at the top so that it is edited easily
    global so that it can be easily updated



    state = [
      object values from data funct
    {
       icon: ...
       Description: ...
       name: ...
       temp: ...
    }

    InitialState(){
      creates head text and form input on
      page load
      called on page load
    }
    initalState()
    


      createElements(parent, childBeingCreated, text, class, id ){
         creates elements by taking input
         parameters then runs them through
         the same code in this function to
         create elements
         
      }


    getWeather() {
    gets data from api

      userInputZip - Template literal

       fetch('url + ${userInputZip} + apiCode or code')
       fetch returns values
       set interval for live update
       time()

       check if valid zip
       if (invalid) {
       return error('invalid zip')
       };
    };


    time() {
      new Date()
      last updated time
      getting updated time on set interval of getWeather()
    }

    initialState() {
       getElementById
       create elements
       - user input & submit btn
       - header
       append elements
       assign container class - classlist
       gets values from getWeather()
    };
    
    data() {
      getWeather()
       async
       displays values only when valid zip is entered
       throws error message if zip is invalid<br>
       - city
       - temp - convert value
       - condition
       - images?
    }
    
    tempConvert(temp) {
      converts temp values if needed
      (k - 273.15 = temp);
      return temp;
    };
    
    image() {
       picks images from an array[] of images
       based on weather conditions
    };
    
    buttonCLick() {
      getWeather()
      call axios on button click
    };
    
    clearData() {
    
    };
    
