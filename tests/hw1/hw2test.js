describe ('HomeWork task', () => {

    describe ('getMultorSum', () =>{
        //Given
        const testData = [
            {
                a: 2,
                b: 3,
                expected: 6,
            }, 
            {
                a: 3,
                b: 4,
                expected: 7,
            },
            {
                a: 0,
                b: 10,
                expected: 0,
            },
        ];
        testData.forEach( data => {
            const { a, b, expected} = data;
            //when
            const actual = getMultorSum (a,b);
            //Then 
            it(`Должна вернуться '${expected}' когда а = ${a} и b = ${b}`, () => {
                assert.strictEqual(actual ,expected);
            });  
        });
    });
     
    describe ('Quarter', () => {
        //Given
        const testData = [
            {
               x: -5,
               y: 10,
               expected: 1, 
            },
            {
                x: -19,
                y: 2,
                expected: 1,
            },
            {
                x: 3,
                y: 3,
                expected: 2,
            },
            {
                x: 7,
                y: 15,
                expected: 2,
            },
            {
                x: -4,
                y: -5,
                expected: 3,
            },
            {
                x: -6,
                y: -12,
                expected: 3,
            },
            {
                x: 1,
                y: -3,
                expected: 4,
            },
            {
                x: 2,
                y: -6,
                expected: 4,
            },
        ];
        testData.forEach(data => {
            const {x, y, expected} = data;
            //when
            const actual = Quarter (x, y);
            it(`Должно вернуть '${expected}' когда x = ${x} и y = ${y}`, () => {
                assert.strictEqual(actual, expected);
            });
        });

    });
    describe ('SumPozitiv', () => {
        //Given
        const testData =[
             {
                 a: 7,
                 b: 4,
                 c: 3,
                 expected: 14,
             },
             {
                 a: 3,
                 b: 9,
                 c: -1,
                 expected: 12,
             },
             {
                 a: 4,
                 b: -4,
                 c: 1,
                 expected: 5,
             },
             {
                a: -8,
                b: 14,
                c: 1,
                expected: 15, 
             },
        ];
        testData.forEach( data => {
            //when
            const {a, b, c, expected} = data;
            //Then
            const actual = SumPozitiv (a, b, c);
            it(`Должно вернуть '${expected}' когда а = ${a} b = ${b} c = ${c}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe ('СalcExpression', () => {
        const testData = [
            {
                a: 1,
                b: 1,
                c: 1,
                expected: 6,
            },
            {
                a: 2,
                b: 3,
                c: 4,
                expected: 24,
            },
            {
                a: 0,
                b: 15,
                c: 2,
                expected: 20,
            },
            {
                a: -4,
                b: 2,
                c: 3,
                expected: 4,
            },
        ];
        testData.forEach ( data => {
            const {a, b, c, expected} = data;
            const actual = CalcExpression(a, b, c);
            it(`Должно вернуть ${expected} когда а = ${a} b = ${b} c = ${c}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('getRatingStud', () => {
        const testData =[
            {
                rating: 16,
                expected: 'F'
            },
            {
                rating: 22,
                expected: 'E'
            },
            {
                rating: 45,
                expected: 'D'
            },
            {
                rating: 73,
                expected: 'C'
            },
            {
                rating: 78,
                expected: 'B'
            },
            {
                rating: 92,
                expected: 'A'
            },
            {
                rating: 101,
                expected: 'ERROR'
            },
        ];
        testData.forEach(data => {
            const {rating, expected} = data;
            const actual = getRatingStud(rating);
            it(`Должно вернуть '${expected}' когда рейтинг студента - ${rating} `, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('CountEvenNum', () => {
        const testData = [
            {
                expected:[49, 2450]
            },

        ];
        testData.forEach( data => {
            const {expected} = data;
            const actual = CountEvenNum();
            it(`Количество чисел и их сумма ${expected}`, () =>{
                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('chekNum', () => {
        const testData = [
            {
                num: 9,
                expected: 'сложное',
            },
            {
                num: 18,
                expected: 'сложное',
            },{
                num: 17,
                expected: 'простое',
            },{
                num: 7,
                expected: 'простое',
            },
        ];
        testData.forEach( data =>{
        const {num, expected} = data;
        const actual = chekNum(num);
        it( `Число  ${num} ---- ${expected}`,  () => {
            assert.strictEqual(actual, expected);
        });
        });
    });

    describe('getRoot', ()=>{
        const testData = [
            {
                num: 9,
                expected: 3,
            },
            {
                num: 16,
                expected: 4,
            },
            {
                num: 25,
                expected: 5,
            },
        ];
        testData.forEach( data =>{
            const {num, expected} = data;
            const actual = getRoot(num);
            it(`Корень числа ${num} равен ${expected}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('getFactorial', () => {
        const testData = [
            {
                n: 5,
                expected: 120,
            },
            {
                n: 2,
                expected: 2,
            },
            {
                n: 3,
                expected: 6,
            },
            {
                n: 4,
                expected: 24,
            },
        ];
            testData.forEach(data => {
            const {n, expected} = data;
            const actual = getFactorial(n);
            it( `Должно вернуть факториалом ${n} является  ${expected} `,  () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('sumRest', () => {
        const testData =[
            {
                num: 345,
                expected: 12,
            },
            {
                num: 167,
                expected: 14,
            },
        ];
        testData.forEach( data => {
            const {num, expected} = data;
            const actual = sumRest(num);
            it(`Сумма цифер числа ${num} = ${expected}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('getMirrorNumber', () => {
        const testData =[
            {
                num: 478,
                expected: 874,
            },
            {
                num: 123,
                expected: 321,
            },
        ];
        testData.forEach( data => {
            const {num, expected} = data;
            const actual = getMirrorNumber(num);
            it(`Число ${num} выводится реверсивно ${expected}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('minElement', () => {
        const testData = [
            {
                array: [23, 34, 67, 234, 79, 56, 1214568, -345, 0, -4],
                expected: -345,
            },
            {
                array: [-34, -4],
                expected: -34,
            },
            {
                array: [23],
                expected: 23,
            },
            {
                array: [],
                expected: -1,
            },
        ];
        testData.forEach( data =>{
            const {array, expected} = data;
            const actual = minElement(array);
            it(`Должно вернуть минимальный элемент ${expected} массив [ ${array} ]`, () =>{
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('maxElement', () => {
        const testData = [
            {
                array: [23, 34, 67, 234, 79, 56, 100001, -345, 0, -4],
                expected: 100001,
            },
            {
                array: [234],
                expected: 234,
            },
            {
                array: [79, 12],
                expected: 79,
            },
            {
                array: [],
                expected: -1,
            },
        ];
        testData.forEach( data =>{
            const {array, expected} = data;
            const actual = maxElement(array);
            it(`Должно вернуть максимальный элемент ${expected} массив [ ${array} ]`, () =>{
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('getMaxIndex', () => {
        const testData = [
            {
                array: [4,3,2,0,5],
                expected: 4
            },
            {
                array: [21, 22, 23, 24, 25, 26],
                expected: 5
            },
            {
                array: [27, 22],
                expected: 0
            },
            {
                array: [],
                expected: -1,
            },
        ];
        testData.forEach(data => {
            const {array, expected} = data;
            const actual = getMaxIndex(array);
            it(`Должно вернуть индекс максимального элемента ${expected} из массива [ ${array} ] `, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('getMinIndex', () => {
        const testData = [
            {
                array: [4,3,2,0,5],
                expected: 3,
            },
            {
                array: [27, 22],
                expected: 1,
            },
            {
                array: [27, 22, 23, 24, 25, 26,21],
                expected: 6,
            },
            {
                array: [],
                expected: -1,
            },
        ];
        testData.forEach(data => {
            const {array, expected} = data;
            const actual = getMinIndex(array);
            it(`Должно вернуть индекс минимального элемента ${expected} из массива [ ${array} ] `, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('getQuantityOddElement', () => {
        const testData = [
            {
                array: [7, 8, 9, 1, 2, 4],
                expected: 3
            },
            {
                array: [11, 13, 15, 16, 17, 19],
                expected: 5
            },
            {
                array: [20, 21],
                expected: 1
            },
            {
                array: [],
                expected: -1,
            },
        ];
        testData.forEach(data => {
            const {array, expected} = data;
            const actual = getQuantityOddElement(array);
            it(`Должно вернуть ${expected} нечетных элемента ${expected} из массива [ ${array} ] `, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });
    
    describe('reverseArray', () => {
        const testData = [
            {
                array: [1,2,3,4,5,6],
                expected: [6,5,4,3,2,1],
            },
            {
                array: [4],
                expected: [4],
            },
            {
                array: [4,5],
                expected: [5,4],
            },
            {
                array: [10,11,12,13,14,15],
                expected:[15,14,13,12,11,10],
            },
            {
                array: [],
                expected: -1,
            },
        ];
        testData.forEach( data => {
            const {array, expected} = data;
            const actual = reverseArray(array);
            it(`Должно вернуть реверс  ${expected} массив [ ${array} ]`, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('getSumOddIndexElement', () => {
        const testData = [
            {
                array: [7, 8, 9, 1, 2, 4],
                expected: 13
            },
            {
                array: [11, 13, 15, 16, 17, 19],
                expected: 48
            },
            {
                array: [20, 22, 23, 24, 26, 28],
                expected: 74
            },
            {
                array: [],
                expected: -1,
            },
        ];
        testData.forEach(data => {
            const {array, expected} = data;
            const actual = getSumOddIndexElement(array);
            it(`Должно вернуть сумму элементов с нечетным индексом ${expected} из массива [ ${array} ] `, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('swapHalf', () => {
        const testData = [
            {
                array: [7, 8, 9, 1, 2, 4],
                expected: [1, 2, 4, 7, 8, 9]
            },
            {
                array: [11, 13, 15, 16, 17, 19],
                expected: [16, 17, 19, 11, 13, 15]
            },
            {
                array: [20, 22],
                expected: [22, 20]
            },
            {
                array: [],
                expected: -1,
            },
        ];
        testData.forEach(data => {
            const {array, expected} = data;
            const actual = swapHalf(array);
            it(`Должно вернуть - поменять местами две половины массива ${expected} из массива [ ${array} ] `, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('bubbleSort', () => {
        const testData = [
            {
                array: [7, 8, 9, 1, 2, 4],
                expected: [9, 8, 7, 4, 2, 1]
            },
            {
                array: [11, 13, 17, 16, 15, 19],
                expected: [19, 17, 16, 15, 13, 11]
            },
            {
                array: [20, 22],
                expected: [22, 20]
            },
            {
                array: [],
                expected: -1,
            },
        ];
        testData.forEach(data => {
            const {array, expected} = data;
            const actual = bubbleSort(array);
            it(`Должно вернуть отсортированный массив [ ${expected} ]`, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('selectSort ', () => {
        const testData = [
            {
                array: [7, 8, 9, 1, 2, 4],
                expected: [9, 8, 7, 4, 2, 1]
            },
            {
                array: [11, 13, 17, 16, 15, 19],
                expected: [19, 17, 16, 15, 13, 11]
            },
            {
                array: [20, 22],
                expected: [22, 20]
            },
            {
                array: [],
                expected: -1,
            },
        ];
        testData.forEach(data => {
            const {array, expected} = data;
            const actual = selectSort (array);
            it(`Должно вернуть отсортированный массив ${expected} `, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('insertSort', () => {
        const testData = [
            {
                array: [7, 8, 9, 1, 2, 4],
                expected: [9, 8, 7, 4, 2, 1]
            },
            {
                array: [11, 13, 17, 16, 15, 19],
                expected: [19, 17, 16, 15, 13, 11]
            },
            {
                array: [20, 22],
                expected: [22, 20]
            },
            {
                array: [],
                expected: -1,
            },
        ];
        testData.forEach(data => {
            const {array, expected} = data;
            const actual = insertSort(array);
            it(`Должно вернуть отсортированный массив ${expected} `, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('getDay', () => {
        const testData = [
            {
                number: 1,
                expected:'Понедельник',
            },
            {
                number: 3,
                expected:'Среда',
            },
            {
                number:9,
                expected:'Неверный номер',
            },
        ];
        testData.forEach( data => {
            const {number, expected} = data;
            const actual = getDay(number);
            it(`Должно вернуть день недели ${expected} относяшийся к цифре ${number}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('distanceBetweenPoint', () => {
        const testData = [
            {
                x1: 2,
                x2: 5,
                y1: 6,
                y2: 10,
                expected: 5,
            },
            {
                x1: 7,
                x2: 8,
                y1: 0,
                y2: 0,
                expected: 1,
            },
        ];
        testData.forEach( data => {
            const {x1, x2, y1, y2, expected} = data;
            const actual = distanceBetweenPoint(x1,x2,y1,y2);
            it(`Должно вернуть расстояние ${expected} между точкой x { ${x1},${x2} } и y { ${y1},${y2} }`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });
});







































































































