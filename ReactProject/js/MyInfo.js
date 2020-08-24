var person = {
     firstName: 'Kevin', 
     lastName: 'Nerio', 
     address: {
        number: '23454',
        street: 'Sepulveda Boulevard', 
        city: 'Los Angeles', 
        state: 'CA', 
     }
}
function MyInfo(person) {
    //Welcome the user with their name 
    const fName = person.firstName; 
    const lName = person.lastName;
    const welcomeText = 'Hello, '+fName+' '+lName;

    //Create a location variable to be used throughout the rest of the file. 
    const location = person.address; 
    const address = location.number+' '+ location.street;  
    const locationAddy = 'Primary Address: '+address;   
    const city = 'City: '+location.city;   
    const state = 'State: '+location.state; 
    
    //Return all of the variables to their respective ID's   
    return (
    ReactDOM.render(welcomeText, document.getElementById('thisElement'))
    ), 
    (
    ReactDOM.render(locationAddy, document.getElementById('addressStreet'))
    ),  
    (
    ReactDOM.render(city, document.getElementById('addressCity'))
    ), 
    (
    ReactDOM.render(state, document.getElementById('addressState'))
    ) 
}
MyInfo(person); 


