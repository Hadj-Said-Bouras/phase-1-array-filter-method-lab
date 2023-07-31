// 
// Code your solution here
const drivers = {
    driverOne: {name: "hello", age: "what", city: "anywhere"},
    driverTwo: {name: "hsllo", age: "what", city: "anywhere"},
    driverThree: {name: "hdllo", age: "what", city: "anywhere"},
}
function findMatching(drivers, string) {
    return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase());
  }
  
  function fuzzyMatch(drivers, string) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(string.toLowerCase()));
  }
  
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
