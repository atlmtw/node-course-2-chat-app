const expect = require('expect');
// import isRealString
var {isRealString} = require('./validation');

// isRealString
describe('isRealString', ()=>{
  it('should reject non-string values', ()=>{
    var a = 3242;
    expect(isRealString(a)).toBe(false);
  });

  it('should reject string with only spaces', ()=>{
    var b = "      ";
    expect(isRealString(b)).toBe(false);
  });

  it('should allow string with non-space characters', ()=>{
    var c = "#asdf$#%#@"
    expect(isRealString(c)).toBe(true);
  })
});
