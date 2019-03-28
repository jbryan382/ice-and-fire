import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CharacterPage from './pages/CharacterPage'
import NewCharacterPage from './pages/NewCharacterPage'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={CharacterPage} />
            <Route exact path="/newCharacter" component={NewCharacterPage} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
