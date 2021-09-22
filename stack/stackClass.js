// Array version
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}

//Object version
class ObjectStack {
  constructor() {
    this._count = 0;
    this._items = {};
  }

  push(element) {
    this._items[this._count] = element;
    this._count++;
  }

  pop() {
    this._count--;
    const removedItem = this._items[this._count];
    delete this._items[this._count];
    return removedItem;
  }

  size() {
    return this._count;
  }

  clear() {
    this._items = {};
  }

  isEmpty() {
    return this._count === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this._items[this._count];
  }
}

module.exports = { Stack, ObjectStack };
