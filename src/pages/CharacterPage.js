import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class CharacterPage extends Component {
  state = {
    characters: []
  }

  componentDidMount() {
    axios.get('https://localhost:5001/api/Character').then(resp => {
      console.log({ resp })

      this.setState({
        characters: resp.data
      })
    })
  }

  render() {
    return (
      <>
        <header>
          <h1>List of Game of Thrones Characters</h1>
          <Link to={'/NewCharacter'}>Add Someone New</Link>
          <Link to={'/NewHouse'}>Add Another House</Link>
        </header>
        <section>
          <ul>
            {this.state.characters.map((c, i) => {
              return (
                <>
                  <li key={i}>
                    {this.state.characters[i].name}
                    <ul>
                      <li>{this.state.characters[i].gender}</li>
                      <li>{this.state.characters[i].age}</li>
                      <li>{this.state.characters[i].title}</li>
                      <li>{this.state.characters[i].houseId}</li>
                    </ul>
                  </li>
                </>
              )
            })}
          </ul>
        </section>
      </>
    )
  }
}

export default CharacterPage
