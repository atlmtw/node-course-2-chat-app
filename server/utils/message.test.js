var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', ()=>{
  it('should generate the correct message object', ()=>{
    var res = generateMessage('Admin','LOL ME?');

    expect(res.createdAt).toBeA('number');
    expect(res).toInclude({from:'Admin',text:'LOL ME?'});
  });
})
