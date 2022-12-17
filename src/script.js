const addressEl = document.getElementById('address');
const nameEl = document.getElementById('name');

const persons = [
  {
    name: 'Vedika Kamane',
    address: 'Pune, Maharashtra',
  },
  {
    name: 'Anagha Avinash',
    address: 'Banglore, Karanataka',
  },
  {
    name: 'Nikhat Faridous',
    address: 'Hazaribagh, Jharkhand',
  },
  {
    name: 'Manisha Bajpai',
    address: 'Noida, Uttar Pradesh',
  },
];

const getRandomPerson = () => persons[Math.floor(Math.random() * persons.length)];

const person = getRandomPerson();

nameEl.textContent = person.name;
addressEl.textContent = person.address;
