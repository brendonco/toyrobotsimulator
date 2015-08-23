describe('Table', function() {
  var Test, bob, table;
  bob = {};
  table = {};
  Test = {};
  beforeEach(function() {
    table = new Table(5);
    return bob = new Robot(table);
  });
  afterEach(function() {
    return Test = {};
  });
  describe('#init', function() {
    describe('When initialised with a Robot', function() {
      beforeEach(function() {
        return table.init(bob);
      });
      return it('adds the Robot to the robots array', function() {
        return expect(table.robots.length).toEqual(1);
      });
    });
    return describe('When initialised with a non-Robot', function() {
      beforeEach(function() {
        var jane;
        jane = 'A human';
        return table.init(jane);
      });
      return it('does not add non-Robots to the robots array', function() {
        return expect(table.robots.length).toEqual(0);
      });
    });
  });
  describe('#_addRobotToTable', function() {
    beforeEach(function() {
      return table._addRobotToTable(bob);
    });
    return it('Adds a Robot to the table', function() {
      return expect(table.robots.length).toEqual(1);
    });
  });
  describe('#_isValidPosition', function() {
    describe('When arguments are valid', function() {
      beforeEach(function() {
        Test.x = 0;
        Test.y = 0;
        return Test.f = 'NORTH';
      });
      return it('returns true', function() {
        return expect(table._isValidPosition(Test.x, Test.y, Test.f)).toBe(true);
      });
    });
    return describe('When arguments are invalid', function() {
      beforeEach(function() {
        Test.x = 10;
        Test.y = 20;
        return Test.f = 'SOUTH-WEST';
      });
      return it('returns false', function() {
        return expect(table._isValidPosition(Test.x, Test.y, Test.f)).toBe(false);
      });
    });
  });
  describe('#isValidDirection', function() {
    describe('When direction is valid', function() {
      beforeEach(function() {
        return Test.direction = 'NORTH';
      });
      return it('returns true', function() {
        return expect(table._isValidDirection(Test.direction)).toBe(true);
      });
    });
    return describe('When direction is invalid', function() {
      beforeEach(function() {
        return Test.direction = 'New York';
      });
      return it('returns false', function() {
        return expect(table._isValidDirection(Test.direction)).toBe(false);
      });
    });
  });
  describe('#isValidXY', function() {
    describe('When XY is valid', function() {
      beforeEach(function() {
        return Test.xy = 4;
      });
      return it('returns true', function() {
        return expect(table._isValidXY(Test.xy)).toBe(true);
      });
    });
    return describe('When XY is invalid', function() {
      beforeEach(function() {
        return Test.xy = 5;
      });
      return it('returns false', function() {
        return expect(table._isValidXY(Test.xy)).toBe(false);
      });
    });
  });
  describe('#typeof', function() {
    describe('When Number', function() {
      beforeEach(function() {
        return Test.thing = 5;
      });
      return it('returns "Number"', function() {
        return expect(table._typeof(Test.thing)).toEqual('Number');
      });
    });
    describe('When String', function() {
      beforeEach(function() {
        return Test.thing = 'hello world';
      });
      return it('returns "String"', function() {
        return expect(table._typeof(Test.thing)).toEqual('String');
      });
    });
    describe('When Array', function() {
      beforeEach(function() {
        return Test.thing = [1, 2, 3];
      });
      return it('returns "Array"', function() {
        return expect(table._typeof(Test.thing)).toEqual('Array');
      });
    });
    describe('When Object', function() {
      beforeEach(function() {
        return Test.thing = {
          name: 'Negative Nancy'
        };
      });
      return it('returns "Object"', function() {
        return expect(table._typeof(Test.thing)).toEqual('Object');
      });
    });
    describe('When Null', function() {
      beforeEach(function() {
        return Test.thing = null;
      });
      return it('returns "Null"', function() {
        return expect(table._typeof(Test.thing)).toEqual('Null');
      });
    });
    describe('When Undefined', function() {
      beforeEach(function() {
        return Test.thing = void 0;
      });
      return it('returns "Undefined"', function() {
        return expect(table._typeof(Test.thing)).toEqual('Undefined');
      });
    });
    return describe('When Boolean', function() {
      beforeEach(function() {
        return Test.thing = true;
      });
      return it('returns "Boolean"', function() {
        return expect(table._typeof(Test.thing)).toEqual('Boolean');
      });
    });
  });
  describe('#_cleanXY', function() {
    describe('When XY is a Number', function() {
      beforeEach(function() {
        return Test.xy = 3.14;
      });
      return it('returns a rounded number', function() {
        return expect(table._cleanXY(Test.xy)).toEqual(3);
      });
    });
    return describe('When XY is not a Number', function() {
      beforeEach(function() {
        return Test.xy = {};
      });
      return it('returns false', function() {
        return expect(table._cleanXY(Test.xy)).toBe(false);
      });
    });
  });
  return describe('#_cleanF', function() {
    describe('When F is a String', function() {
      beforeEach(function() {
        return Test.f = 'north';
      });
      return it('returns an uppercase string', function() {
        return expect(table._cleanF(Test.f)).toEqual('NORTH');
      });
    });
    return describe('When F is not a String', function() {
      beforeEach(function() {
        return Test.f = null;
      });
      return it('returns false', function() {
        return expect(table._cleanF(Test.f)).toBe(false);
      });
    });
  });
});
