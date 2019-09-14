/*
 * @author Chiragkumar Maniyar
 * @2019 all rights are reserved
 */

// Create a custom Array

class Array {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  // Returns the array
  // Time Complexity : O(n)
  get() {
    return this.data;
  }

  // Insert element at the end
  // Time Complexity : O(1)
  push(data) {
    this.data[this.length] = data;
    this.length++;
    return this.length;
  }

  // Remove the element from the end
  // Time Complexity : O(1)
  pop() {
    const item = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }

  // Delete the data from given index
  // Time Complexity : O(n)
  delete(index) {
    const item = this.data[index];
    this.shiftIndieces(index);
    return item;
  }

  shiftIndieces(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const myArr = new Array();
myArr.push("Chirag");
myArr.push("Maniyar");
myArr.pop();
myArr.push("John");
myArr.push("Mosh");
myArr.push("Sort");
myArr.delete(1);
console.log(myArr);
