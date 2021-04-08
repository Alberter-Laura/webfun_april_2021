var an_array = ['one', 'two', 'three', 'four', 'five'];
/*   index        0      1       2        3       4       5*/
/*   length       1      2       3        4       5    */

console.log(an_array[3]);

console.log(an_array[an_array.length - 3]);

var scores = [17, 87, 190, 5, 94];

console.log(scores[2] + scores[0]);

console.log(scores[1] + scores[scores.length]);// NaN Not A Number
console.log( scores[scores.length]);

/*
    FOR statement;

    for ( { counter }; { test resolves to TRUE/FALSE }; { step }) {

    }
 */

for ( let number = 0; number < 10; number ++ ) {
    console.log(number);

    /*
        number ++;
        number < 10; if FALSE, exit the FOR loop
    */
}

//console.log(number);

var cats = ['Fluffy', 'Snowball', 'Tiger', 'Snowball II'];
/*   index        0      1          2        3       4  */
/*   length       1      2          3        4           */

console.log('------')
console.log(cats[1]);
console.log(cats.length - 1, cats[cats.length - 1]);

// Using let, keeps the variable 'scoped' to the FOR statement
for ( var cat = 1; cat < cats.length - 1; cat ++ ) {
    console.log(cats[cat]);
}

console.log(cat);

/*
    IF statment:

    if (test that resolves to TRUE or FALSE) {
        do something;
        }

 */

var cars = [ "'78 Nissan 200SX", "'65 Ford Galaxy 500", "'14 Ford Fiesta" ];

if ( cars.length > 2 ) {
    console.log('stop buying cars');
}


var count = 0;
for ( let number = 0; number < 100; number ++ )
    if ( number % 3 !== 0 );
        count ++;

console.log(count);

console.log('-------')

var y = 10;
for ( let x = 0; y < 17; x = y * y ) {
    console.log(`x:${x}`);
    console.log(`y:${y}`);
    y ++;
}
