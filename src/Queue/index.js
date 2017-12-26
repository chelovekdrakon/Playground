import Queue from './Queue';

export function testQueue() {
    const queue = new Queue();

    queue.enqueue('lol');
    queue.enqueue('qol');
    queue.enqueue('wol');
    queue.enqueue('eol');

    window.console.log(queue.toString());
    window.console.log(queue.empty());

    queue.dequeue();
    queue.dequeue();
    queue.dequeue();

    window.console.log(queue.toString());
    window.console.log(queue.empty());

    queue.dequeue();
    window.console.log(queue.empty());
}
