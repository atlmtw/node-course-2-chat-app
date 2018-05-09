//addUser(id, name, room)
//removeUser(id)
//getUser(id)
//getUserList(room)

class Users {
  constructor(){
    this.users = [];
  }
  addUser(id,name,room){
    var user = {id,name,room};
    this.users.push(user);
    return user;
  }
  removeUser(id){
    //return user that was removed
    var removedUser = null;
    var updatedList = this.users.filter((user)=> {
      if(user.id === id) removedUser = user;
      return user.id !== id
    });
    this.users = updatedList;
    return removedUser;
  }
  getUser(id){
    //return user
    return this.users.filter((user)=> user.id === id)[0];
  }
  getUserList(room){
    var users = this.users.filter((user)=> user.room === room);
    var namesArray = users.map((user)=> user.name);
    return namesArray;
  }
}

module.exports = {Users};
