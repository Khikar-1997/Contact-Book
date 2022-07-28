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

type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = { swim?: () => void; fly?: () => void };

function move(animal: Fish | Bird | Human) {
  if ('swim' in animal) {
    animal.swim?.();
  } else {
    animal;
  }
}

move({
  swim: () => {
    console.log('swim');
  },
});
