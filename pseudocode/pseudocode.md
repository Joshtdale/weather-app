zip code input
city
Current weather
temp
image

![wireframe](pseudocode/weather-app.png)

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
    global so that it can be updated



    state = [
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
    
    **getWeather()** {<br>
    gets data from api
       fetch('ur + ${userInputZip} + apiCode or code')<br>
       fetch returns values<br>
    };

    **initialState()** {<br>
       getElementById
       create elements
       - user input & submit btn
       - header
       append elements
       assign container class - classlist
       gets values from **getWeather()**<br>
    };<br>
    
    data() {
       async
       displays values only when valid zip is entered<br>
       throws error message if zip is invalid<br>
       - city<br>
       - temp - convert value<br>
       - condition <br>
       - images?<br>
    }
    
    tempConvert() {
      converts
    };
    
    image() {
       picks images from []
       based on weather
    };
    
    buttonCLick() {
       check if valid zip
       if (invalid) {
       return error('invalid zip')
       };
    };
    
    clearData() {
    
    };
    
