class Stack {
    #list = [];

    constructor(initialList) {
        if (initialList) this.#list = initialList;
    }

    push(newItem) {
        this.#list.push(newItem);
    }
    peek() {
        return this.#list[this.#list.length -1];
    }
}

class Queue {
    #list;

    constructor(list) {
        this.#list = list || [];
    }

    enqueue(item) {
        this.#list.push(item);
    }

    dequeue() {
        return this.#list.shift();
    }

    get count() {
        return this.#list.length;
    }

    get next() {
        return this.#list[0];
    }
   
}

module.exports = { Stack, Queue };
