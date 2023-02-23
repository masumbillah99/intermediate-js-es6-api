// var, let, const
// default parameter
// template literals / strings
// arrow function

const arrow = x => x * 5;
console.log(arrow(3));

// spread operator


// destructuring (array, object)
const { x, y, ...c } = { x: 32, y: 49, z: 23, name: 'Alim' };
console.log(x, y, c);

// ------------------------
/** 1. optional chaining
        student.marks?.math
*/
// 2. map, filter, find   -- important

// 3. (optional): forEach, reduce (advanced)

// 4. class   -- important

// 5. (optional) inheritence, super

// 6. (must) protypical Inheritence (chain)   -- important

/**
must know:
    1. var, let, const (must)
    2. template string (must)
        2.1 create multi-line string (``)
        2.2 add dynamic variable (expression) : `&{}`
    3. Arrow function
        3.1 single parameter arrow function
        3.2 two parameters arrow function
        3.3 arrow function with function body. and don't forget you have to return explicitly.
        3.4 no parameter
    4. map(), filter(), find()
    5. optional chaining
*/

// GOOD TO HAVE
/**
    1. spread operator: [...numbers, 12, 45]
    2. destructuring (object, array)
        2.1 object destructuring. how to get property name as variable
            const {x} = {x:3, y:5}
        2.2 array destructuring
            const [a, b] = [23, 4, 6, 9]
    3. default parameter
    4. forEach
    5. Dot notation vs Bracket notation
*/

// SHOULD KNOW THE NAME
/** 
    1. reduce
    2. inheritence
    3. prototypical chain
    5. class, object
*/