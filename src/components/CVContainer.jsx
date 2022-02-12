import React, { Component } from 'react'
import CV from 'react-cv'
import { CVData } from './CVData';
 
export default class CVContainer extends Component {
  render () {
    return (
      <CV {...CVData}/>
    )
  }
}