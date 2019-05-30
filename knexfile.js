module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost:/phish_members'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
