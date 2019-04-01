import React, { Component } from 'react'
import Form from 'react-jsonschema-form'
import axios from 'axios'
import { Link } from 'react-router-dom'

class NewHousePage extends Component {
  state = {
    formSchema: {
      title: 'Add a House',
      type: 'object',
      properties: {
        houseName: {
          type: 'string',
          title: 'House Name',
          default: 'No name given'
        },
        houseWords: {
          type: 'string',
          title: 'House Words',
          default: 'No gender given'
        },
        coatOfArms: {
          type: 'string',
          title: 'Coat of Arms',
          default: 'No title given'
        },
        extinct: {
          type: 'boolean',
          title:
            'Have they been wiped of the face of Westeros?... Preferably not by Wild Fire',
          default: true
        }
        //   imageUrl: { type: 'string', title: 'House Sigil ', default: null }
        // }
      }
    }
  }

  onSubmit = event => {
    const data = { ...event.formData }
    console.log(data)
    axios
      .post('https://localhost:5001/api/Houses', data, {
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

export default NewHousePage
