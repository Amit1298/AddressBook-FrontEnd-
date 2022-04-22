// Start with Displaying Welcome to Address Book Program in AddressBookMain class on
// START Master Branch

console.log('Welcome to Address Book Program');
let users = [
  [
    'Krishna',
    'Bhamare',
    '3232323232',
    'Pune',
    'MH',
    '411033',
    'krishnabhamare123@gmail.com',
  ],
  [
    'Amit',
    'Kumar',
    '9897139203',
    'Agra',
    'UP',
    '282001',
    'Amitkr123@gmail.com',
  ],
  [
    'Rishi',
    'Gupta',
    '9627974345',
    'Mathura',
    'UP',
    '411033',
    'guptaRishi412@gmail.com',
  ],
  [
    'Satty',
    'Thakur',
    '7017362779',
    'Delhi',
    'Delhi',
    '213569',
    'ThakurSatty702@gmail.com',
  ],
];
/**
UC1: Ability to create a Contacts in Address
Book with first and last names, address,
city, state, zip, phone number and
email
 */
class AddressBookMain {
  constructor(firstName, lastName, phoneNumber, city, state, zip, email) {
    this.id = Math.random().toString(16).slice(2);
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.address = {
      city,
      state,
      zip,
    };
  }
}
/**
UC2: bility to add a new
Contact to Address Book
 */
// Generating array of Users
const details = users.map((user) => {
  return new AddressBookMain(...user);
});
console.log(details);

/**
 UC3: Ability to edit
existing contact
person using their
name
 */
// Update any user detail
console.log('-----------------------------------------------');
const updatedDetails = details.map((user) => {
  if (user.firstName === 'Krishna') {
    return {
      ...user,
      lastName: 'Patil',
    };
  }
  return user;
});
console.log(updatedDetails);

/**
 UC4: Ability to delete a
person using
person's name
 */
// Delete User
console.log('-----------------------------------------------');
const finalArr = updatedDetails.filter((user) => user.firstName !== 'Krishna');
console.log(finalArr);
