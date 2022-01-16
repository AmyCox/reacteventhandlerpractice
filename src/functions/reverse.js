export default function reverse() {
  this.setState(this.state.items.reverse());
}

// the reverse() method reverses an array in place. The first array element becomes the last and the last array element becomes the first.
// this function depends on a this.stte property and an items array within the state. The key is that the state is generic. An application could have many components with an items array in its state.
