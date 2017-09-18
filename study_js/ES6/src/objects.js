let name = 'Tanya',
    surname = 'Gavrilenko';

//create object with key->value
let data = {
    name,
    surname,
    sayHello(){
        return 'Hello';
    },
    get fullName() {
        return this.name +' '+ this.surname;
    },
    set fullName(val) {
        this.name = val.split(' ')[0];
        this.surname=val.split(' ')[1];
    }
};

console.log(data);
console.log(data.fullName);
data.fullName = 'Lukas Gavrilenko';
console.log(data.fullName);

//dynamical property creation
let car = createCar('lanos', 'Daewoo');
console.log(car);

function createCar(key, val) {
    return {
        [key]: val,
        [key.toUpperCase()]: val,
        ['get_' + key](){
            return this[key];
        }
    }
}

