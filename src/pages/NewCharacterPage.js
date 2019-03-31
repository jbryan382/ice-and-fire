import React, { Component } from 'react'
import Form from 'react-jsonschema-form'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
        living: {
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
        <Form
          schema={this.state.formSchema}
          onSubmit={this.onSubmit}
          className="form"
        />
        <Link to={'/'} className="back-home">
          Back to our Characters
        </Link>
      </>
    )
  }
}

export default NewCharacterPage
