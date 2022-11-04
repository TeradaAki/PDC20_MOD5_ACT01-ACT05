// const object_name = {
//     key1: value1,
//     key2: value2
// }

// OBJECTS
let car = {
    brand: "Toyota",
    variant: "Wigo",
    transmission: "Automatic",
    lights: {
        front: "LED",
        rear: "LED",
        signal: "Bulb"
    },

    displayBrand(){
        alert(this.Brand);
    }
}

// Classes are template for objects that doesnt have data
class myCar{
    constructor (brand, variant, transmission){
        this.brand = brand;
        this.variant = variant;
        this.transmission = transmission;
    }
}