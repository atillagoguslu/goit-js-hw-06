// task1 ve 2 yi açmayı unutma

class StringBuilder {
  value;
  constructor(initialValue) {
    this.value = initialValue;
  }
  getValue() {
    return this.value;
  }
  padStart(padCharacterStart) {
    let cStart = padCharacterStart;
    const newCStart = cStart.concat(this.value);
    this.value = newCStart;
    // console.log("START =", newCStart);
  }
  padEnd(padCharacterEnd) {
    let cEnd = padCharacterEnd;
    const newEnd = this.value.concat(cEnd);
    this.value = newEnd;
    // console.log("END =", newEnd);
  }
  padBoth(padCharacterBoth) {
    let cBoth = padCharacterBoth;
    const first = cBoth.concat(this.value);
    // console.log("First-BOTH =", first);
    const second = first.concat(cBoth);
    this.value = second;
    // console.log("Second-BOTH =", second);
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
