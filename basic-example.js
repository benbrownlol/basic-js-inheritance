// Object Composition using Factory Functions (no 'this' used)

const engine = (state) => ({
  start: () => {
    console.log('Engine is running, using 1 litre of ' + state.fuelType + ' per mile.');
  },
  stop: () => {
    console.log('Engine has stopped. 10 litres of ' + state.fuelType + ' left.')
  }
});

const motorbike = (fuelType) => {
  let state = {
    fuelType
  }

  return Object.assign({},
    engine(state)
  )
}

const ducati = motorbike('petrol');
ducati.start(); // Engine is running, using 1 litre of petrol per mile.
ducati.stop(); // Engine has stopped. 10 litres of petrol left.

// Prototype Inheritance without 'New'

const car = {
  init: function(manufacturer, model) {
    this.manufacturer = manufacturer;
    this.model = model;
  },
  whatCar: function() {
    console.log('This car is a ' + this.manufacturer + ' ' + this.model);
  }
}

const bmw = Object.create(car);
bmw.init('BMW', '135i');
bmw.whatCar(); // This car is a BMW 135i

const porsche = Object.create(car);
porsche.init('Porsche', 'Cayman S');
porsche.whatCar(); // This car is a Porsche Cayman S
