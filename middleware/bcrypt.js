const bcrypt = require('bcrypt');
const saltRounds = 10;

async function hash(password){
    return bcrypt.hash(password,saltRounds);
}  

async function comparepassword(password,hashedPassword){
    return bcrypt.compare(password,hashedPassword)
}

module.exports = {hash,comparepassword};