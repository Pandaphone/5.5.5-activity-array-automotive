//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass");

//this shows how to call from this module...
let v = new VehicleModule.Vehicle(
  "Mecury",
  "Sedan",
  "1965",
  "color",
  "mileage"
);
console.log(v.make);

/*You have been assigned the task of developing a Car class for 
the new A28 Mercury sedan. 
The class will be written in JavaScript and will contain vehicle properties 
and methods that have previously been defined in the base class named 
vehicleBaseClass.js. The new Car class is required to have the following 
properties and methods added.

A28 Mercury Sedan

start	no parameters	if fuel is greater than 0, then start == true
scheduleService	mileage	if mileage is greater than 30000, time for maintenance == true

*/

class Car extends VehicleModule {
  constructor(make, model, year, color, mileage) {
    super(make, model, year, color, mileage);
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.mileage = mileage;
    this.passengers = 0;
    this.maxPassengers = 6;
    this.wheelNum = 4;
    this.maxSpeed = 200;
    this.fuel = 100;
    this.scheduleService = false;
  }
  loadPassenger(passengers) {
    if (this.passengers < this.maxPassengers) {
      let availableRoom = true;
    } else {
      let availableRoom = false;
    }
  }

  start() {
    if (this.fuel > 0) {
      let start = true;
    }
  }

  scheduleService(mileage) {
    if (this.mileage > 3000) {
      let timeForMaintenace = true;
    }
  }
}
