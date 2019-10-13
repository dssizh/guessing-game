class GuessingGame {

    constructor() {}

    setRange(min, max) {
        this._min = min;
        this._max = max;
    }

    guess() {

        if (this._min <= this._max) {
            this.m = Math.round((this._min+this._max)/2);
        } else {
            return this._min;
        }

        return this.m;
    }

    lower() {
        this._max = this.m;
    }

    greater() {
       this._min = this.m;
    //    this.min = this.m;
    }
}

module.exports = GuessingGame;
