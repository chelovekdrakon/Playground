import LList from './LList';

export function testLList() {
    const food = new LList();

    food.insert('hello');
    food.insert('qello');
    food.insert('wello');
    food.insert('eello');
    food.insert('rello');

    food.display();

    food.remove('hello');
    food.remove('qello');
    food.remove('wello');
    food.remove('eello');
    food.remove('rello');
    food.display();
}
