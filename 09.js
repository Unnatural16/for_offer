var CQueue = function() {
    this.inner_array = [];
    this.sub_array = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.inner_array.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if(this.inner_array.length==0) return -1
    while(this.inner_array.length!=1){
        this.sub_array.push(this.inner_array.pop())
    }
    let result = this.inner_array.pop()
    while(this.sub_array.length!=0){
        this.inner_array.push(this.sub_array.pop())
    }
    return result
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */