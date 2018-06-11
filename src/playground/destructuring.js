// Object Destructuring 

const person = {
    name: 'Vas',
    age: 23,
    location: {
        city: 'London',
        temp: 92
    }
};

const {name = 'Anonymous', age} = person;
console.log(`${name} is ${age}`);

const {city, temp: temprature } = person.location;
if (city && temprature ){
    console.log(`It's ${temprature} is ${city}. `);
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const { name: publisherName = 'Self Published' } = book.publisher; 

if(publisherName) {
    console.log(`${publisherName} `);
}

/// Array Destructuring 

const address = ['12 S junior Street', 'London', 'EC4N 2FF'];
const [street, City = 'London'] = address;
console.log(`You are is ${street} ${City}.`);

const item = ['Coffe (hot)', '$2.00', '$2.50', '$2.75'];

const [hotCoffe, , medium] = item;

console.log(`A medium ${hotCoffe} cost ${medium}`);