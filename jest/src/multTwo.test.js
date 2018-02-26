const multTwo = require('./multTwo');
const sandbox = require('./sandbox');

it('works', () => {
    expect(1).toBe(1)
})

it('we are fetching', () => {
    // const fakeFetch = (url) => {
    //     expect(url).toBe(sandbox.URL);
    // }

    const fakeFetch = jest.fn().mockReturnValue(sandbox.URL);

    return multTwo(fakeFetch, 2).then(result => expect(result).toBe(4))
})

it('multiply 2', () => {
    return multTwo(null, 2).then(result => expect(result).toBe(4))
})

it('multiply 4', () => {
    return multTwo(null, 4).then(result => expect(result).toBe(8))
})

it('multiply 8', () => {
    return multTwo(null, 8).then(result => expect(result).toBe(16))
})

it('array containing', () => {
    const array = [1, 2, 3, 5];
    const expected = [1, 2];
    expect(array).toEqual(expect.arrayContaining(expected)); // => if expected = subset of array
})

const doAsync = (cb1, cb2) => {
    cb1(1);
    cb2(1);
}

test('doAsync calls both callbacks', () => {
    expect.assertions(2); // to verify that a certain number of assertions have been called

    function callback1(data) {
        expect(data).toBeTruthy();
    }
    function callback2(data) {
        expect(data).toBeTruthy();
    }

    doAsync(callback1, callback2);
})

test('at least one asserion have been called', () => {
    expect.hasAssertions(); // verify that at least one assertion have been called
    expect(2).toBe(2);
})

test('expected obj is subset of obj', () => {
    const obj = {
        x: 1,
        y: {
            z: 3
        }
    };
    const expected = {
        y: {
            z: 3
        }
    };
    expect(obj).toEqual(expect.objectContaining(expected)); // if obj does contain expected
})

test('string contains', () => {
    const str = 'qwe';
    const expected = 'qw';
    expect(str).toEqual(expect.stringContaining(expected)); // if expected is substr of str
})

describe('stringMatching in arrayContaining', () => {
    const expected = [expect.stringMatching(/^Alic/), expect.stringMatching(/^[BR]ob/)];
    it('matches even if received contains additional elements', () => {
        expect(['Alicia', 'Roberto', 'Evelina']).toEqual(expect.arrayContaining(expected),);
    });
    it('does not match if received does not contain expected elements', () => {
        expect(['Roberto', 'Evelina']).not.toEqual(expect.arrayContaining(expected),);
    });
});

// *****
//
// import serializer from 'my-serializer-module';
// expect.addSnapshotSerializer(serializer);
//
// affects expect(value).toMatchSnapshot() assertions in the test file
//
// *****

test('resolves to lemon', () => {
    return expect(Promise.resolve('lemon')).resolves.toBe('lemon');
});
// OR
test('resolves to lemon', async () => {
    await expect(Promise.resolve('lemon')).resolves.toBe('lemon');
    await expect(Promise.resolve('lemon')).resolves.not.toBe('octopus');
});

test('rejects to octopus', () => {
    return expect(Promise.reject(new Error('octopus'))).rejects.toThrow('octopus');
});
// OR
test('rejects to octopus', async () => {
    await expect(Promise.reject(new Error('octopus'))).rejects.toThrow('octopus');
});

const drinkAll = (cb, fruit) => {
    switch (fruit) {
        case 'lemon':
            {
                cb(fruit);
                break;
            }
        default:
            {
                return;
            }
    }
}

describe('drinkAll', () => {
    test('drinks something lemon-flavored', () => {
        const drink = jest.fn();
        drinkAll(drink, 'lemon');
        expect(drink).toHaveBeenCalled();
    });

    test('does not drink something octopus-flavored', () => {
        const drink = jest.fn();
        drinkAll(drink, 'octopus');
        expect(drink).not.toHaveBeenCalled();
    });
});

const drinkEach = (cb, arr) => {
    arr.forEach(fruit => {
        cb(fruit);
    });
}

test('drinkEach drinks each drink', () => {
    const drink = jest.fn();
    drinkEach(drink, ['lemon', 'octopus']);
    expect(drink).toHaveBeenCalledTimes(2);
});

const applyToAllFlavors = (cb) => {
    const flavours = ['lemon', 'lol', 'bob', 'mango'];
    drinkEach(cb, flavours);
}

test('applying to all flavors does mango last', () => {
    const drink = jest.fn();
    applyToAllFlavors(drink);
    expect(drink).toHaveBeenLastCalledWith('mango');
});

class A {}
test('instance of A', () => {
    expect(new A()).toBeInstanceOf(A);
    expect(() => {}).toBeInstanceOf(Function);
    expect(new A()).not.toBeInstanceOf(Function);
})

const myBeverages = {
    obj: {
        elicious: true,
        sour: false
    },
    elicious: true,
    sour: false
}

describe('my beverage', () => {
    test('is delicious and not sour', () => {
        const myBeverage = {
            delicious: true,
            sour: false
        };
        expect(myBeverages.toContainEqual(myBeverage));
    })
});

it('have length ...', () => {
    expect([1, 2, 3]).toHaveLength(3);
    expect('abc').toHaveLength(3);
    expect('').not.toHaveLength(5);
})

const houseForSale = {
    bath: true,
    bedrooms: 4,
    kitchen: {
        amenities: [
            'oven', 'stove', 'washer'
        ],
        area: 20,
        wallColor: 'white'
    }
};
const desiredHouse = {
    bath: true,
    kitchen: {
        amenities: [
            'oven', 'stove', 'washer'
        ],
        wallColor: expect.stringMatching(/white|yellow/)
    }
};

test('the house has my desired features', () => {
    expect(houseForSale).toMatchObject(desiredHouse); // desiredHouse is subset of houseForSale
});



describe('toMatchObject applied to arrays arrays', () => {
    test('the number of elements must match exactly', () => {
        expect([{foo: 'bar'}, {baz: 1}]).toMatchObject([{foo: 'bar'}, {baz: 1}]);
    });

    test('.toMatchObject does not allow extra elements', () => {
        expect([{foo: 'bar'}, {baz: 1}]).not.toMatchObject([{foo: 'bar'}]);
    });

    test('.toMatchObject is called for each elements, so extra object properties are okay', () => {
        expect([{foo: 'bar'}, {baz: 1, extra: 'quux'}]).toMatchObject([
            {foo: 'bar'},
            {baz: 1},
        ]);
    });
});
