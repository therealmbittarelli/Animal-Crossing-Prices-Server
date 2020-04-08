module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DATABASE_URL:
    process.env.DATABASE_URL ||
    'postgresql://Maggie@localhost/animal_crossing',
  TEST_DATABASE_URL:
    process.env.TEST_DATABASE_URL ||
    'postgresql://Maggie@localhost/animal_crossing_test',
  JWT_SECRET: process.env.JWT_SECRET || 'animal-crossing-jwt-secret'
};