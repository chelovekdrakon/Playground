import Stack from './Stack';

export function testStack() {
    const s = new Stack();

    s.push('david');
    s.push('lol');
    s.push('kol');

    window.console.log(s.pop());
    window.console.log(s.pop());
    window.console.log(s.pop());
    window.console.log(s.pop());
    window.console.log(s.pop());
    window.console.log(s.pop());


    window.console.log(s.length());
    window.console.log(s.peek());
}
