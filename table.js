var Table = function(size){
    if(size === null){
        size = 5;
    }

    if(!(this instanceof Table)){
        return new Table();
    }

    this.robots = [];
    this.size = size;

    return this;
}

Table.prototype = {
    constructor: Table,
    validDirections: ['NORTH', 'EAST', 'SOUTH', 'WEST'],
    init: function(robot) {
        if (!(robot instanceof Robot)) {
          return false;
        }
        return this._addRobotToTable(robot);
    },
    _addRobotToTable: function(robot) {
        return this.robots.push(robot);
    },
    _isValidPosition: function(x, y, f) {
        x = this._cleanXY(x);
        y = this._cleanXY(y);
        f = this._cleanF(f);
        if (!(this._isValidXY(x) && this._isValidXY(y) && this._isValidDirection(f))) {
          return false;
        }
        return true;
    },
    _isValidDirection: function(direction) {
        return this.validDirections.indexOf(direction) !== -1;
    },
    _isValidXY: function(xy) {
        return (0 <= xy && xy < this.size);
    },
    _typeof: function(thing) {
        var type;
        type = Object.prototype.toString.call(thing);
        return type.match(/[^\[\]]+/)[0].split(' ')[1];
    },
    _cleanXY: function(xy) {
        if (this._typeof(xy) !== 'Number') {
          return false;
        }
        return Math.round(xy);
    },
    _cleanF: function(f) {
        if (this._typeof(f) !== 'String') {
          return false;
        }
        return f.toUpperCase();
    }
};

module.exports = Table;