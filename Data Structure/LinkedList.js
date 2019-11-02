/*
 * @author Chiragkumar Maniyar
 * @2019 all rights are reserved
 */

/**
 * Creating a Singly Linked List
 */

/**
 * Class Node will create basic node for starting the List
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  // Time Complexity: O(1)
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this.printList();
  }

  // Time Complexity: O(1)
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
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
    newNode.next = holder;
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

var list = new SinglyLinkedList(10);
list.append(15);
list.append(20);
list.prepend(5);
list.insert(2, 15);
list.deleteNode(2);
list.reverse();
