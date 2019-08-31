module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'email', Sequelize.STRING);
  },

  down: queryInterface => {
    return queryInterface.dropTable('users');
  },
};
