Array.prototype.myForEach = function (cb) {
    for (i = 0; i < this.length; i++) {
        cb(this[i], i, this);
    }
};

Array.prototype.myMap = function (cb) {
    var arr = [];
    for (i = 0; i < this.length; i++) {
        arr[i] = cb(this[i], i, this);
    }
    return arr;
};

Array.prototype.mySort = function (fun) {
    for (i = 0; i < this.length; i++) {
        for (j = i + 1; j < this.length; j++) {
            if (fun(this[i], this[j]) > 0) {
                var arr   = this[i];
                this[i] = this[j];
                this[j] = arr;
            }
        }
    }
};

Array.prototype.myFilter = function (fun) {
    var arr = [];
    for (i = 0; i < this.length; i++) {
        if (fun(this[i], i, this)) {
            arr.push(this[i]);
        }
    }

    return arr;
};

Array.prototype.myPush = function () {
    for (i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
    }
};

var arr = [12, 4, 2123, 3231, 432, 212];

arr.myForEach((el, i, arr) => {
    console.log('myForEach', el, i, arr);
});

var mapArr = arr.myMap(el => el * 2);
console.log('mapArr', mapArr);

arr.mySort((a, b) => a - b);
console.log('mySort', arr);

var filtArr = arr.myFilter(el => el > 200);
console.log('myFilter', filtArr);

arr.myPush(2, 4, 12, undefined, [], {}, NaN);
console.log('myPush', arr);

