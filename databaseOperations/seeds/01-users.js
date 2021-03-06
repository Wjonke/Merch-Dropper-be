exports.seed = function(knex) {
  return knex("users").insert([
    {
      first_name: "Guest",
      last_name: "Guest",
      username: "Guest",
      password: "Guest",
      seller: false,
      stripe_account: "NA",
      address1: "123 Test Drive",
      city: "TheBest",
      state: "tranquil",
      zip_code: 12345,
      country: "Merica",
      phone: 1234567890,
      email: "NA",
      support_pin: "12345"
    },
    {
      first_name: "Merch",
      last_name: "Dropper",
      username: "admin",
      password: "anthill",
      seller: true,
      stripe_account: "MerchDropperAdmin",
      address1: "7822 Myriad Drive",
      city: "Denver",
      state: "Colorado",
      zip_code: 80204,
      country: "USA",
      phone: 2165274556,
      email: "merchdropper20@gmail.com",
      support_pin: "HRYI7820"
    },
    {
      first_name: "Wes",
      last_name: "Jonke",
      username: "wjonke",
      password: "password",
      seller: true,
      stripe_account: "4242424242424242",
      address1: "7822 Test Drive",
      city: "Atlanta",
      state: "Georgia",
      zip_code: 30319,
      country: "USA",
      phone: 1234567890,
      email: "wjonke@gmail.com",
      support_pin: "gunbunny"
    },
    {
      first_name: "Jeris",
      last_name: "Manning",
      username: "jmanning",
      password: "password",
      seller: true,
      stripe_account: "4242424242424242",
      address1: "7822 Test Drive",
      city: "Atlanta",
      state: "Georgia",
      zip_code: 30319,
      country: "USA",
      phone: 1234567890,
      email: "dontknow@gmail.com",
      support_pin: "test"
    },
    {
      first_name: "Preston",
      last_name: "Burton",
      username: "pburton",
      password: "password",
      seller: true,
      stripe_account: "4242424242424242",
      address1: "7822 Test Drive",
      city: "Atlanta",
      state: "Georgia",
      zip_code: 30319,
      country: "USA",
      phone: 1234567890,
      email: "dontknow@gmail.com",
      support_pin: "test"
    },
    {
      first_name: "Alan",
      last_name: "Fischbach",
      username: "afischbach",
      password: "password",
      seller: true,
      stripe_account: "4242424242424242",
      address1: "7822 Test Drive",
      city: "Atlanta",
      state: "Georgia",
      zip_code: 30319,
      country: "USA",
      phone: 1234567890,
      email: "dontknow@gmail.com",
      support_pin: "test"
    },
    {
      first_name: "Daniel",
      last_name: "Ajadi",
      username: "dajadi",
      password: "password",
      seller: true,
      stripe_account: "4242424242424242",
      address1: "7822 Test Drive",
      city: "Atlanta",
      state: "Georgia",
      zip_code: 30319,
      country: "USA",
      phone: 1234567890,
      email: "dontknow@gmail.com",
      support_pin: "test"
    },
    {
      first_name: "Jennie",
      last_name: "Van",
      username: "jvan",
      password: "password",
      seller: true,
      stripe_account: "4242424242424242",
      address1: "7822 Test Drive",
      city: "Atlanta",
      state: "Georgia",
      zip_code: 30319,
      country: "USA",
      phone: 1234567890,
      email: "dontknow@gmail.com",
      support_pin: "test"
    },
    {
      first_name: "Marcos",
      last_name: "Lira",
      username: "mlira",
      password: "password",
      seller: true,
      stripe_account: "4242424242424242",
      address1: "7822 Test Drive",
      city: "Atlanta",
      state: "Georgia",
      zip_code: 30319,
      country: "USA",
      phone: 1234567890,
      email: "dontknow@gmail.com",
      support_pin: "test"
    },
    {
      first_name: "Tristan",
      last_name: "Boudreau",
      username: "tboudreau",
      password: "password",
      seller: true,
      stripe_account: "4242424242424242",
      address1: "7822 Test Drive",
      city: "Atlanta",
      state: "Georgia",
      zip_code: 30319,
      country: "USA",
      phone: 1234567890,
      email: "dontknow@gmail.com",
      support_pin: "test"
    }
  ]);
};
