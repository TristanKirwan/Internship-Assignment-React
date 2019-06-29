import React from 'react';
import { Route, Switch, Router} from 'react-router-dom'
import history from './history'
import { Provider } from 'react-redux'
import store from './store'

import Navbar from './Components/Navbar'
import home from './Components/Home'
import test from './Components/Test'

import Artistoverview from './Components/Artistoverview'
import Artistpage from './Components/Artistpage'
import Albumpage from './Components/Albumpage'
import Favourites from './Components/Favourites'

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Navbar/>
        <Switch>
          <Route path="/"component={home} exact/>
          <Route path="/artistoverview"component={Artistoverview} />
          <Route path="/artistpage"component={Artistpage} />
          <Route path="/albumpage" component={Albumpage}/>
          <Route path="/favourites" component={Favourites}/>
          {/* <Route path="/" component={test} exact/> */}
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
