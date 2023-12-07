class MyArray {
  constructor() {
    this.data = {};
    this.length = 0;
  }
  getAll() {
    return this.data;
  }
  get(index) {
    return this.data[index];
  }
  push(data) {
    const newData = (this.data[this.length] = data);
    this.length++;
    return newData;
  }
  /**
   * Elimina siempre lo que este en la ultima posicion del array
   */
  pop() {
    this.data[this.length--] = undefined;
    this.clearUndefineds();
    return this.data;
  }
  delete(index) {
    this.data[index] = undefined;
    this.clearUndefineds();
  }

  addFirst(data) {
    this.moveIndexForNewItem(0);
    this.data[0] = data;
  }
  addWhereIWant(data, index) {
    this.moveIndexForNewItem(index);
    this.data[index] = data;
  }
  removeFirst() {
    this.data[0] = undefined;
    this.clearUndefineds();
  }
  moveIndexForNewItem(newIndex) {
    const auxData = Object.assign({}, this.data);
    for (let index = newIndex; index < this.length; index++) {
      auxData[index + 1] = this.data[index];
    }
    this.length++;
    this.data = auxData;
  }
  /**
   * Limpio los undefineds cuando saco un elemento del array
   * Se puede resolver tambien usando la palabra reservada delete delante del objeto
   * @example delete this.data[index]
   */
  clearUndefineds() {
    let newData = {};
    let undefinedCount = 0;
    for (let index = 0; index < this.length; index++) {
      if (this.data[index] !== undefined) {
        const info = this.data[index];
        newData[index - undefinedCount] = info;
      } else {
        undefinedCount++;
      }
    }
    this.data = newData;
    return this.data;
  }
}

const arr = new MyArray();
console.log(arr.getAll());
arr.push("Dato0");
arr.push("Dato1");
arr.push("Dato2");
// arr.push("Dato3");
// arr.push("Dato4");
// arr.push("Dato5");
//* DELETE RANDOM
// arr.delete(1);
//* ADD FIRST
arr.addFirst("dato comienzo");
arr.addWhereIWant("donde quiero", 2);

console.log(arr.getAll());
