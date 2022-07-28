// function greet(person: string, date: Date) {
//   console.log(`Hello ${person}, today is ${date.toDateString()}!`);
// }
//
// greet('Brendan', new Date());
// interface k {
//   title: string;
// }
//
// interface k {
//   ts: boolean;
// }
//
// const src = 'const a = "Hello World"';
// function foo(x: k) {
//   console.log(x.title);
// }
//
// foo({ title: src, ts: true });
function move(animal) {
    var _a;
    if ('swim' in animal) {
        (_a = animal.swim) === null || _a === void 0 ? void 0 : _a.call(animal);
    }
    else {
        animal;
    }
}
move({
    swim: function () {
        console.log('swim');
    }
});
