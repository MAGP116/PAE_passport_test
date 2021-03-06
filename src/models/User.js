const {getJSON, saveJSON} = require('../utils/fileHelpers');

class User {
  constructor() {
    this.saveData = saveJSON;
    this.fetchData = getJSON;
  }

  async find(id) {
    // fetch the users
    let users = getJSON();
    // found the users
    let ind = users.findIndex(user => user.googleId === id);
    if(ind !== -1){
      //   if found return the user
      return users[ind];
    }
    //   if not found return Promise.reject(new Error(`User with id ${id} not found`));
    return Promise.reject(new Error(`User with id ${id} not found`));

  }

  async create(user) {
    // fetch the users
    let users = getJSON();
    // append the user to all the users
    users.push(user);
    // save the users
    saveJSON(users);
    // return the saved user
    return user;
  }
};

module.exports = new User();