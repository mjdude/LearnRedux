var redux = require('redux');

console.log('Starting todo redux example');

var stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: [],
};

var reducer = (state = stateDefault , action) => {

  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText,
      };
    default:
      return state;
  }
}

// redux.compose is used for the developer tools
//  otherwise we can just pass in the reducer as such var store = redux.createStore(reducer,

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log('searchText is', state.searchText);
  document.getElementById('app').innerHTML = state.searchText;

});


store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'work',
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'sleep',
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'eat',
});
