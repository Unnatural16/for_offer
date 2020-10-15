/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.array=[]
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if(this.array.length==0){
        this.array.push(num);
        return
    }
    for(var i=0; i<this.array.length; i++){
        if(this.array[i]>=num){
            this.array.splice(i,0,num);
            return
        }
    }
    this.array.push(num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if(this.array.length%2==0){
        return (this.array[this.array.length/2-1]+this.array[this.array.length/2])/2
    }else{
        return this.array[Math.floor(this.array.length/2)]
    }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */