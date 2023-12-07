class HashTable {
  /** @type Array<array>  */
  data;
  /**
   * Seteo la cantidad de buckets que va a tener el hashTable
   * @param {number} size
   */
  constructor(size) {
    this.data = new Array(size);
  }
  /**
   * @param {string} key
   * @returns {number}
   */
  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      const keyChar = key.charCodeAt(i);
      hash = (hash + keyChar * i) % this.data.length;
    }
    return hash;
  }
  /**
   * @param {string} key
   * @param {*} value
   */
  set(key, value) {
    const address = this.hashMethod(key);
    // si no hay ningun dato contenido en esa posicion del hash entonces inicializo un array en donde van a estar alojados los datos
    // puede repetirse y haber colisiones
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }
  /**
   *
   * @param {string} key
   * @returns {undefined | *}
   */
  get(key) {
    const address = this.hashMethod(key);
    const bucket = this.data[address];
    if (!bucket) return;
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }
  }
  delete(key) {
    const address = this.hashMethod(key);
    const bucket = this.data[address];
    if (!bucket) return;
    for (let i = 0; i < bucket.length; i++) {
      console.log({ b: bucket[0] });
      if (bucket[i][0] === key) {
        bucket[i].splice(i, 1);
      }
    }
  }
  getAllKeys() {
    let keys = [];
    for (let i = 0; i < this.data.length; i++) {
      if (!this.data[i]) {
        continue;
      }
      for (let j = 0; j < this.data[i].length; j++) {
        keys.push(this.data[i][j][0]);
      }
    }
    return keys;
  }
  getData() {
    return this.data;
  }
}

const hash = new HashTable(50);
hash.set("Hello", "Hello");
// hash.set("Llave", "Valor");
// hash.set("LlaveSegunda", "ValorSegundo");

const all = hash.getAllKeys();
console.log({ all });
