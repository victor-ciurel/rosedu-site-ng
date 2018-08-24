import React, { Component } from 'react'

import TextInput from 'components/common/TextInput'
import Button from 'components/common/Button'

import facebook from './assets/facebook.svg'
import twitter from './assets/twitter.svg'
import slack from './assets/slack.svg'

import './index.scss'

const validator = email => {
  let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

class Form extends Component {
  static propTypes = {}
  static defaultProps = {}

  render () {
    return (
      <div className='Form'>
        <p>
          Fiind o comunitate de oameni entuziasmați de tehnologie si programare,
          sediul nostru se afla in cadrul Facultății de Automatică si
          Calculatoare, din cadrul Universitati Politehnica București. Aici
          desfăsurăm și majoritatea proiectelor la care ești binevenit să
          participi sau să ne ajuti sa le organizam. Pentru a putea lua legatura
          cu tine, te rugăm să ne trimiți un mesaj, completând formularul de mai
          jos, urmând ca noi sa luam legatura cu tine in cel mai scurt timp
          posibil.
          <br />
          <br />
          Abia asteptam sa colaboram impreuma.
        </p>
        <div className='social'>
          <span>
            <img src={twitter} />
            @rosedu
          </span>
          <span>
            <img src={facebook} />
            /rosedu
          </span>
          <span>
            <img src={slack} />
            #rosedu
          </span>
        </div>
        <div className='form'>
          <TextInput label='Nume' />
          <TextInput label='E-mail' validator={validator} />
          <TextInput label='Mesaj' />
          <Button> Trimite mesaj </Button>
        </div>
      </div>
    )
  }
}

export default Form
