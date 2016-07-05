var redux = require('redux');

console.log('starting redux example');

var stateDefault = {
  name: 'Anonymous',
  hobbies: [],
  movies: [],
};

var nextHobbyId = 1;
var nextMovieId = 1;
var reducer = (state = stateDefault, action) => {
  //  state = state || {name: 'Anonymous'};

  switch (action.type) {
    case 'CHANGE_NAME':
      return {
          ...state,
          name: action.name,
      };
    case 'ADD_HOBBY':
      return {
        ...state,
        hobbies: [
          ...state.hobbies,
          {
            id: nextHobbyId++,
            hobby: action.hobby,
          }
        ]
      };
    case 'ADD_MOVIE':
      return {
        ...state,
        movies: [
          ...state.movies,
          {
            id: nextMovieId++,
            title: action.title,
            genre: action.genre,
          }
        ],
      };
    default:
      return state;
  }
 };
var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('name is', state.name);
  document.getElementById('app').innerHTML = state.name;

  console.log('new state' ,store.getState());
});

// unsubscribe();

var currentState = store.getState();

console.log('currentState', currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Mo',
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'running',
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Emily',
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'GATTACA',
  genre: 'sci-fi',
});
