// Generic types - A FIFO (First In, First Out) collection Queue
class Queue<T> {
  data: T[] = [];
  push(item: T) {
    this.data.push(item);
  }
  pop(): T | undefined {
    return this.data.shift();
  }
}

// class specialization to handle different types instead of generic types
// class NumberQueue extends Queue {
//   push(item: number) {
//     super.push(item);
//   }
//   pop(): number {
//     return super.pop();
//   }
// }

const queueNum = new Queue<number>();
queueNum.push(321);
const popQueNum = queueNum.pop()?.toPrecision(1);
console.log(popQueNum);

const queueStr = new Queue<string>();
queueStr.push("some string");
const popQueStr = queueStr.pop()?.toUpperCase();

console.log(popQueStr);

// used to exclude conflict with other files
export {};
