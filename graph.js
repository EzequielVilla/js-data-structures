class GraphNode {
  constructor(value) {
    this.value = value;
    this.relations = [];
  }
}

class GraphMatrix {
  constructor() {
    this.nodes = 0;
    this.graph = {};
  }

  insert(value) {
    const newNode = new GraphNode(value);
    this.graph[this.nodes] = newNode;
    this.nodes++;
    this.updateGraphsArray();
  }
  updateGraphsArray() {
    for (const key in this.graph) {
      if (Object.hasOwnProperty.call(this.graph, key)) {
        const element = this.graph[key];
        const relations = element.relations;
        const totalNodes = this.nodes;
        const difBtwRelationsAndElement = totalNodes - relations.length;
        for (let i = 0; i < difBtwRelationsAndElement; i++) {
          relations.push(0);
        }
      }
    }
  }
  makeRelation(valueFrom, valueTo) {
    const indexFrom = this.findIndexByValue(valueFrom);
    const indexTo = this.findIndexByValue(valueTo);
    this.graph[indexFrom].relations[indexTo] = 1;
    this.graph[indexTo].relations[indexFrom] = 1;
  }
  findIndexByValue(searchValue) {
    for (const key in this.graph) {
      if (this.graph.hasOwnProperty(key)) {
        if (this.graph[key].value === searchValue) {
          return key; // Retorna el índice (clave) cuando el valor coincide
        }
      }
    }
    return null; // Si no se encuentra el valor, retorna null o algún otro valor indicativo
  }
  get(value) {
    const index = this.findIndexByValue(value);
    return this.graph[index];
  }
  delete() {
    this.nodes--;
  }
  console() {
    console.log(this.graph);
  }
}
function customReplacer(value) {
  // Si el valor es un array, lo convertimos a un String con el contenido del array
  if (Array.isArray(value)) {
    return value.join(", "); // Puedes personalizar el formato de visualización si lo deseas
  }
  // De lo contrario, devolvemos el valor sin cambios
  return value;
}
const g = new GraphMatrix();
g.insert(10);
g.insert(24);
g.insert(42);
g.insert(7);

g.makeRelation(10, 7);
g.makeRelation(24, 42);
g.makeRelation(24, 7);
// esperado:
// [0,0,0,1]
// [0,0,1,1]
// [0,1,0,0]
// [1,1,0,0]
// g.console();
console.log(g.get(24));
