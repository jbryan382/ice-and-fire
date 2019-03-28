import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import NewCharacterPage from './NewCharacterPage'

class CharacterPage extends Component {
  state = {
    characters: []
  }

  componentDidMount() {
    axios.get('https://localhost:5001/api/Characters').then(resp => {
      console.log({ resp })

      this.setState({
        characters: resp.data
      })
    })
  }

  render() {
    return (
      <>
        <h1>Character List</h1>
        <Link to={NewCharacterPage} />
        <ul>
          {this.state.characters.map((c, i) => {
            return <li key={i}>{this.state.characters[i].species}</li>
          })}
        </ul>
      </>
    )
  }
}

export default CharacterPage
