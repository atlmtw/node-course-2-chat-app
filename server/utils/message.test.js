var expect = require('expect');

var {
  generateMessage,
  generateLocationMessage
} = require('./message');

describe('generateMessage', ()=>{
  it('should generate the correct message object', ()=>{
    var res = generateMessage('Admin','LOL ME?');

    expect(res.createdAt).toBeA('number');
    expect(res).toInclude({from:'Admin',text:'LOL ME?'});
  });
})

describe('generateLocationMessage', ()=>{
  it('should generate correct location object', ()=>{
    var res = generateLocationMessage('Admin',35,-23.532)

    expect(res.createdAt).toBeA('number');
    expect(res.from).toBeA('string');
    expect(res.url).toEqual('https://www.google.com/maps?=35,-23.532');
  });
});
