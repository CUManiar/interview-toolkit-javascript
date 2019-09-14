/*
 * @author Chiragkumar Maniyar
 * @2019 all rights are reserved
 */

/**
 * Creating a Doubly Linked List
 */

/**
 * Class Node will create basic node for starting the List
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  // Time Complexity: O(1)
  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this.printList();
  }

  // Time Complexity: O(1)
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this.printList();
  }

  // Time Complexity: O(n)
  insert(index, value) {
    const newNode = new Node(value);
    if (index > this.length) {
      return this.append(value);
    }
    const leader = this.traverseList(index - 1);
    const holder = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = holder;
    holder.prev = newNode;
    this.length++;
    return this.printList();
  }

  // Time Complexity: O(n)
  deleteNode(index) {
    if (index > this.length || index < 0) {
      return "Not found!";
    }
    const leader = this.traverseList(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    unwantedNode.prev = leader;
    this.length--;
    return this.printList();
  }

  // Time Complexity: O(n) | Also called as lookup time
  traverseList(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  // Time Complexity: O(n)
  printList() {
    let list = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return list;
  }
}

var Dlist = new DoublyLinkedList(10);
Dlist.append(15);
Dlist.append(20);
Dlist.prepend(5);
Dlist.insert(2, 15);
Dlist.deleteNode(2);
Dlist.reverse();
