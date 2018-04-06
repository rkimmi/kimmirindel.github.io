import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from './Home'
// import Blog from './Blog'
import Writing from './Writing'

const App = () => (
  <div className='app-container'>
  <Switch>
    <Route exact path='/' component={Home} />
    {/* <Route path='/blog' component={Blog} /> */}
    <Route path='/writing' component={Writing} />
    {/* <Route path='/thing' component={Thing} /> */}
  </Switch>
    
  </div>
)

export default App
