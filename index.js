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

module.exports = { Stack, Queue };
