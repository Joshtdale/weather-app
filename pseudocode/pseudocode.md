zip code input
city
Current weather
temp
image

![wireframe](./weather-app.png)

single div
- dynamic generation with javascript

handle unsuccessful events

bootstrap
- dynamic break points
- mobile first

api end point?
zip code validation

Find api data structure
icon: ...
Description: ...
name: ...
temp: ...

    var code = apiCode
    global so that it can be easily updated



    state = [
      data()
      object values from data funct
    {
       icon: ...
       Description: ...
       name: ...
       temp: ...
    },
    {
    icon: ...
       Description: ...
       name: ...
       temp: ...
    }
    ];
    
    getWeather() {
    gets data from api
       fetch('url + ${userInputZip} + apiCode or code')
       fetch returns values
       set interval for live update
    };

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
      k - 273.15 = temp;
      return temp;
    };
    
    image() {
       picks images from an array[] of images
       based on weather conditions
    };
    
    buttonCLick() {
      getWeather()
      call axios on button click

       check if valid zip
       
       if (invalid) {
       return error('invalid zip')
       };
    };
    
    clearData() {
    
    };
    
