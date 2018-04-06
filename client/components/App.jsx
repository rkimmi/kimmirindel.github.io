import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from './Home'
import Blog from './Blog'
import Writing from './Writing'
import RandomPic from './RandomPic'

const App = () => (
  <div className='app-container'>
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/blog' component={Blog} />
    <Route path='/writing' component={Writing} />
    <Route path='/randompic' component={RandomPic} />
  </Switch>
    
  </div>
)

export default App
