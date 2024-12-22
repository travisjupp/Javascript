// Singly Linked List: Node

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  setNextNode(node) {
    // Set next Node validation
    if (node === null || node instanceof Node) {
      this.next = node;
    } else {
      throw new Error('Node not instance of node class 💀');
    }
  }

  getNextNode() {
    return this.next;
  }
}

export default Node;

