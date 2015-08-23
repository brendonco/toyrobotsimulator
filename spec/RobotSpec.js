describe('Robot', function() {
  var bob, table;
  bob = {};
  table = {};
  beforeEach(function() {
    table = new Table(5);
    bob = new Robot(table);
    return table.init(bob);
  });
  describe('#place', function() {
    it('places the Robot if valid', function() {
      expect(bob.place(0, 0, 'NORTH')).toBe(true);
      expect(bob.place(4, 4, 'EAST')).toBe(true);
      return expect(bob.place(1, 1, 'south')).toBe(true);
    });
    return it('does not place the Robot if invalid', function() {
      expect(bob.place(5, 5, 'HOUSE')).toBe(false);
      expect(bob.place(-1, 6, 'WEST')).toBe(false);
      return expect(bob.place(1.5, 2.5, 5)).toBe(false);
    });
  });
  describe('#move', function() {
    describe('When Robot is placed', function() {
      describe('When move is valid', function() {
        beforeEach(function() {
          bob.place(0, 0, 'NORTH');
          return bob.move();
        });
        return it('moves the Robot', function() {
          expect(bob.report().x).toEqual(0);
          return expect(bob.report().y).toEqual(1);
        });
      });
      return describe('When move is invalid', function() {
        beforeEach(function() {
          bob.place(0, 4, 'NORTH');
          return bob.move();
        });
        return it('does not move the Robot', function() {
          expect(bob.report().x).toEqual(0);
          return expect(bob.report().y).toEqual(4);
        });
      });
    });
    return describe('When Robot is not yet placed', function() {
      beforeEach(function() {
        return bob.move();
      });
      return it('does not move the Robot', function() {
        return expect(bob.report()).toBe(false);
      });
    });
  });
  describe('#left', function() {
    describe('When Robot is placed', function() {
      beforeEach(function() {
        return bob.place(0, 0, 'NORTH');
      });
      describe('When Robot is facing North', function() {
        beforeEach(function() {
          return bob.left();
        });
        return it('turns West', function() {
          return expect(bob.report().f).toBe('WEST');
        });
      });
      describe('When Robot is facing East', function() {
        beforeEach(function() {
          bob.place(0, 0, 'EAST');
          return bob.left();
        });
        return it('turns North', function() {
          return expect(bob.report().f).toBe('NORTH');
        });
      });
      describe('When Robot is facing South', function() {
        beforeEach(function() {
          bob.place(0, 0, 'SOUTH');
          return bob.left();
        });
        return it('turns East', function() {
          return expect(bob.report().f).toBe('EAST');
        });
      });
      return describe('When Robot is facing West', function() {
        beforeEach(function() {
          bob.place(0, 0, 'WEST');
          return bob.left();
        });
        return it('turns South', function() {
          return expect(bob.report().f).toBe('SOUTH');
        });
      });
    });
    return describe('When Robot is not placed', function() {
      beforeEach(function() {
        return bob.left();
      });
      return it('does not turn left', function() {
        return expect(bob.report()).toBe(false);
      });
    });
  });
  describe('#right', function() {
    describe('When Robot is placed', function() {
      beforeEach(function() {
        return bob.place(0, 0, 'NORTH');
      });
      describe('When Robot is facing North', function() {
        beforeEach(function() {
          return bob.right();
        });
        return it('turns East', function() {
          return expect(bob.report().f).toBe('EAST');
        });
      });
      describe('When Robot is facing East', function() {
        beforeEach(function() {
          bob.place(0, 0, 'EAST');
          return bob.right();
        });
        return it('turns South', function() {
          return expect(bob.report().f).toBe('SOUTH');
        });
      });
      describe('When Robot is facing South', function() {
        beforeEach(function() {
          bob.place(0, 0, 'SOUTH');
          return bob.right();
        });
        return it('turns West', function() {
          return expect(bob.report().f).toBe('WEST');
        });
      });
      return describe('When Robot is facing West', function() {
        beforeEach(function() {
          bob.place(0, 0, 'WEST');
          return bob.right();
        });
        return it('turns North', function() {
          return expect(bob.report().f).toBe('NORTH');
        });
      });
    });
    return describe('When Robot is not placed', function() {
      beforeEach(function() {
        return bob.right();
      });
      return it('does not turn right', function() {
        return expect(bob.report()).toBe(false);
      });
    });
  });
  describe('#report', function() {
    describe('When Robot is placed', function() {
      beforeEach(function() {
        return bob.place(0, 0, 'NORTH');
      });
      return it('reports', function() {
        return expect(bob.report()).toEqual({
          x: 0,
          y: 0,
          f: 'NORTH'
        });
      });
    });
    return describe('When Robot is not placed', function() {
      return it('does not report', function() {
        return expect(bob.report()).toBe(false);
      });
    });
  });
  describe('Example A', function() {
    beforeEach(function() {
      bob.place(0, 0, 'NORTH');
      return bob.move();
    });
    return it('is correct', function() {
      return expect(bob.report()).toEqual({
        x: 0,
        y: 1,
        f: 'NORTH'
      });
    });
  });
  describe('Example B', function() {
    beforeEach(function() {
      bob.place(0, 0, 'NORTH');
      return bob.left();
    });
    return it('is correct', function() {
      return expect(bob.report()).toEqual({
        x: 0,
        y: 0,
        f: 'WEST'
      });
    });
  });
  return describe('Example C', function() {
    beforeEach(function() {
      bob.place(1, 2, 'EAST');
      bob.move();
      bob.move();
      bob.left();
      return bob.move();
    });
    return it('is correct', function() {
      return expect(bob.report()).toEqual({
        x: 3,
        y: 3,
        f: 'NORTH'
      });
    });
  });
});
