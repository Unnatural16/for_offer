/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
    this.array = []
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    if (this.array.length == 0) {
        this.array.push(num);
        return
    }
    let left = 0,
        right = this.array.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (this.array[mid] === num) {
            this.array.splice(mid, 0, num);
            return;
        } else if (this.array[mid] < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    this.array.splice(right + 1, 0, num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    if (this.array.length % 2 == 0) {
        return (this.array[this.array.length / 2 - 1] + this.array[this.array.length / 2]) / 2
    } else {
        return this.array[Math.floor(this.array.length / 2)]
    }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */