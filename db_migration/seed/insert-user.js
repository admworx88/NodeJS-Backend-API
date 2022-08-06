/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('Users').del();
  await knex('Users').insert(Users);
};

const Users = [
  {
    id: 1,
    first_name: 'John',
    last_name: 'Cruz',
    address: 'Quezon st.',
    post_code: '8900',
    phone_number: '+6392818882928',
    email: 'john.cruz@email.com',
    username: 'john123',
    password: 'p@assword123',
  },
  {
    id: 2,
    first_name: 'Maria',
    last_name: 'Teresa',
    address: 'Manila st.',
    post_code: '8200',
    phone_number: '+6392818882222',
    email: 'maria.teresa@email.com',
    username: 'maria123',
    password: 'p@assword321',
  },
  {
    id: 3,
    first_name: 'Jack',
    last_name: 'Daniels',
    address: 'Pasig st.',
    post_code: '1920',
    phone_number: '+6392238882911',
    email: 'jack.daniel@email.com',
    username: 'jack123',
    password: 'p@assword222',
  },
  {
    id: 4,
    first_name: 'Ivan',
    last_name: 'Ivan',
    address: 'San Juan st.',
    post_code: '2222',
    phone_number: '+639223892029',
    email: 'ivan@email.com',
    username: 'ivan123',
    password: 'p@assword111',
  },
];
