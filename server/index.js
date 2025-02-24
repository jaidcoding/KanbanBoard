const bcrypt = require('bcryptjs');

// Example usage of bcrypt to hash a password
const password = 'yourPassword';
bcrypt.hash(password, 10, (err, hash) => {
  if (err) throw err;
  console.log('Hashed password:', hash);
});
