function doubling(this: { value: number }) {
  this.value = this.value * 2;
}

const valid = {
  value: 10,
  doubling,
};
valid.doubling();
console.log(valid.value);
