import React, { Component } from 'react'
import Form from 'react-jsonschema-form'
import axios from 'axios'
import CharacterPage from './CharacterPage'

class NewCharacterPage extends Component {
  state = {
    formSchema: {
      title: 'Add a Character',
      type: 'object',
      properties: {
        name: {
          type: 'string',
          title: 'Character Name',
          default: 'No name given'
        },
        gender: {
          type: 'string',
          title: 'Character Gender',
          default: 'No gender given'
        },
        title: {
          type: 'string',
          title: 'Character Title',
          default: 'No title given'
        },
        age: { type: 'number', title: 'Character Age', default: 0 },
        Living: {
          type: 'boolean',
          title: 'Are they living... please let them be okay',
          default: true
        }
        //   imageUrl: { type: 'string', title: 'Character Picture ', default: null }
        // }
      }
    }
  }

  onSubmit = event => {
    const data = { ...event.formData }
    console.log(data)
    axios
      .post('https://localhost:5001/api/characters', data, {
        headers: {
          'Content-type': 'application/json'
        }
      })
      .then(resp => {
        console.log(resp)
      })
  }

  render() {
    return (
      <>
        <Form schema={this.state.formSchema} onSubmit={this.onSubmit} />
      </>
    )
  }
}

export default NewCharacterPage
