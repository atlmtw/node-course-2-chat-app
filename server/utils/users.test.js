const {Users} = require('./users');
const expect = require('expect');

describe('Users', ()=>{
  var users;
  beforeEach(()=> {
    users = new Users();
    users.users = [{
      id:'1',
      name:'Mike',
      room:'Node Course'
    },{
      id:'2',
      name:'Jen',
      room:'React Course'
    },{
      id:'3',
      name:'Julie',
      room:'Node Course'
    }];
  });

  it('should add new user', ()=>{
    var users = new Users();
    var user = {
      id: '123',
      name: 'Andrew',
      room: 'The Office Fans'
    };
    var resUser = users.addUser(user.id,user.name,user.room);

    expect(users.users).toEqual([user]);
  });

  it('should return names for node course', ()=>{
    var userList = users.getUserList('Node Course');

    expect(userList).toEqual(['Mike','Julie']);
  });

  it('should return names for react course', ()=>{
    var userList = users.getUserList('React Course');

    expect(userList).toEqual(['Jen']);
  });

  it('should remove a user', ()=>{
    var userToRemove = users.users[1];
    var removedUser = users.removeUser('2');
    expect(users.users.length).toBe(2);
    expect(removedUser).toEqual(userToRemove);
  });

  it('should not remove a user', ()=>{
    var removedUser = users.removeUser('4');
    expect(removedUser).toEqual(null);
  });

  it('should find user', ()=>{
    var foundUser = users.getUser('1');
    expect(foundUser).toEqual(users.users[0]);
  });

  it('should not find user', ()=>{
    var foundUser = users.getUser('4');
    expect(foundUser).toEqual(undefined);
  });
})
