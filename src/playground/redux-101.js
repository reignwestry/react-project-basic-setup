import { createStore } from 'redux';

//# CREATES a store
const store = createStore((state = { count: 0 }) => {
  return state;
});

console.log(store.getState());

// Actions
// I'd like to increment the count
// I'd like to reset the count to zero

console.log('101');
