/*
 * @author Chiragkumar Maniyar
 * @2019 all rights are reserved
 */

/**
 * Custom hash table for understanding
 */
class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    var hash = 0;
    for (var i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    var address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    var address = this._hash(key);
    var currentBucket = this.data[address];
    if (currentBucket) {
      for (var i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    var keysArray = [];
    for (var i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
}

// var table = new HashTable(10);
// table.set('grapes', 1000);
// table.set('mango', 23);
// table.set('apple', 10);
// table.set('banana', 12);
// table.set('avacado', 1);
// table.get('mango');
