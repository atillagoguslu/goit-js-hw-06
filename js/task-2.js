class Storage {
  #items;
  constructor(initialItems) {
    this.#items = initialItems;
  }
  getItems() {
    return this.#items;
  }
  addItem(newItem) {
    this.#items.push(newItem);
    // console.log("addItem'deki this.item =", this.#items);
  }
  removeItem(searchedItem) {
    let found = 0;
    this.#items.find((val, ind, arr) => {
      if (val == searchedItem) {
        found = 1;
        // console.log("val =", val, ".");
        // console.log("ind =", ind, ".");
        this.#items.splice(ind, 1);
        // console.log("This.#items =", this.#items);
      }
    });
    if (!found) {
      console.log(`There is no item named ${searchedItem}.`);
    }
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
