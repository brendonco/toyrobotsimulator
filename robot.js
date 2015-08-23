var Robot = function(table){
    var _f = null, _placed = false, _x = null, _y = null;

    if(!(this instanceof Robot)){
        return new Robot();
    }

    this.table = table;

    return this;
}

Robot.prototype = {
    constructor: Robot,
    place: function(x, y, f) {
        //Check for valid position
        if (!this.table._isValidPosition(x, y, f)) {
          return false;
        }
        //set x,y,facing
        this._x = x;
        this._y = y;
        this._f = f;
        return this._placed = true;
    },
    move: function(){
        return this._doValidMove((function(_this){
            return function(){
                switch(_this._f){
                    case 'EAST':
                        if(_this.table._isValidXY(_this._x + 1)){
                            return _this._x++;
                        }
                    break;
                    case 'NORTH':
                        if(_this.table._isValidXY(_this._y + 1)){
                            return _this._y++;
                        }
                    break;
                    case 'WEST':
                        if(_this.table._isValidXY(_this._x -1)){
                            return _this._x--;
                        }
                    break;
                    case 'SOUTH':
                        if(_this.table._isValidXY(_this._y -1)){
                            return _this._y--;
                        }
                    break;
                    default: return false;
                }
            };
        })(this));
    },
    left: function(){
        return this._doValidMove((function(_this){
            return function(){
                return _this._turn('left');
            };
        })(this));
    },
    right: function(){
        return this._doValidMove((function(_this) {
          return function() {
            return _this._turn('right');
          };
        })(this));
    },
    report: function(){
        return this._doValidMove((function(_this){
            return function(){
                return {
                    x: _this._x,
                    y: _this._y,
                    f: _this._f
                };
            };
        })(this));
    },
    _turn: function(direction){
        var index, newF, r;
        r = direction === 'left' ? -1 : direction === 'right' ? 1 : void 0;
        index = this.table.validDirections.indexOf(this._f) + r;
        if (index >= this.table.validDirections.length) {
          index = 0;
        }
        newF = this.table.validDirections.slice(index)[0];
        if (this.table._isValidDirection(newF)) {
          return this._f = newF;
        }
    },
    _doValidMove: function(fn){
        if(!this._placed){
            return false;
        }
        var args = Array.prototype.slice(arguments);

        return fn.apply(fn, args);
    }
};

module.exports = Robot;