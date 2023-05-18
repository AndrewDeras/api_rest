"use strict";/** @type {import('sequelize-cli').Migration} */

const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'Toni Kroos',
          email: 'kroos@email.com',
          password_hash: await bcryptjs.hash('88888888', 8),
          created_at: new Date(),
          updated_at: new Date(),

        },
        {
          nome: 'Luka Modric',
          email: 'modric@email.com',
          password_hash: await bcryptjs.hash('19191919', 8),
          created_at: new Date(),
          updated_at: new Date(),

        },
        {
          nome: 'Edu Camavinga',
          email: 'camavinga@email.com',
          password_hash: await bcryptjs.hash('12121212', 8),
          created_at: new Date(),
          updated_at: new Date(),

        },
      ],

      {},
    );
  },

  async down() {
  },
};
