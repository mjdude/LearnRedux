var redux = require('redux');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

var {changeName, addHobby, removeHobby, addMovie, removeMovie, fetchLocation} = actions;

var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('new state' ,store.getState());
  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading ...';
  } else if (state.map.url) {
    document.getElementById('app').innerHTML = '<a href="' + state.map.url + 'target="_blank">View Your Location</a>'
  }
});

// unsubscribe();

var currentState = store.getState();

console.log('currentState', currentState);

store.dispatch(fetchLocation());

store.dispatch(changeName('Mo'));

store.dispatch(addHobby('running'));

store.dispatch(addHobby('walking'));

store.dispatch(removeHobby(2));

store.dispatch(changeName('Emily'));

store.dispatch(addMovie('GATTACA', 'Sci-fi'));

store.dispatch(addMovie('Mad Max', 'Action'));

store.dispatch(removeMovie(1));
