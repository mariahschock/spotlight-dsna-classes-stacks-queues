const { Stack, Queue } = require("./index.js");
describe("Stack Class", () => {
  it("#push should add a new item to the stack ", () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.peek()).toEqual(1);
  });
  // add more tests here...

  it.skip('#queue should add a new item to the queue', () => {
    const queue = new Queue();
    queue.push(1);
    expect(queue.peek()).toEqual(1);
  })
  



  describe("Queue Class", () => {
    it("#enqueue should add an item to the back", () => {
      const queue = new Queue();
      queue.enqueue("fox");
      queue.enqueue("goose");
      expect(queue.count).toBe(2);
      expect(queue.next).toBe("fox");
    });
  });
  






});
