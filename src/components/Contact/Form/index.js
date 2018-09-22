import React, { Component } from 'react'

import TextInput from 'components/common/TextInput'
import Button from 'components/common/Button'

import facebook from './assets/facebook.svg'
import twitter from './assets/twitter.svg'
import slack from './assets/slack.svg'

import './index.scss'
import PropTypes from 'prop-types'

const emailValidator = email => {
  let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

const emptyValidator = inputText => {
  return inputText !== ''
}

class Form extends Component {
  static propTypes = {}

  state = {
    name: '',
    email: '',
    message: '',
    messageSent: false,
    messageError: false
  }

  postMessageHandler = () => {
    if (
      !(
        emptyValidator(this.state.name) &&
        emptyValidator(this.state.message) &&
        emailValidator(this.state.email)
      )
    ) {
      return
    }
    console.log('wt')
    let body = {
      'entry.649419642': this.state.name,
      'entry.2000347351': this.state.email,
      'entry.792207788': this.state.message
    }
    let urlEncodedDataPairs = []
    for (let param in body) {
      urlEncodedDataPairs.push(
        encodeURIComponent(param) + '=' + encodeURIComponent(body[param])
      )
    }
    let encodedParams = urlEncodedDataPairs.join('&').replace(/%20/g, '+')
    const url =
      'https://docs.google.com/forms/u/2/d/e/1FAIpQLSe0M5G-sZuRrAPbNbjKla--6DT-nFPjt5SCWYO5__oiXK4HKA/formResponse'
    return fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: encodedParams
    }).then(response =>
      this.setState({
        messageSent: response.status === 0,
        messageError: response.status !== 0
      })
    )
  }

  onChangeName = e => {
    const { value } = e.target
    this.setState({ name: value })
  }

  onChangeEmail = e => {
    const { value } = e.target
    this.setState({ email: value })
  }

  onChangeMessage = e => {
    const { value } = e.target
    this.setState({ message: value })
  }

  render () {
    console.log(this.state)
    return (
      <div className='Form'>
        <p>
          Fiind o comunitate de oameni entuziasmați de tehnologie si programare,
          sediul nostru se afla in cadrul Facultății de Automatică si
          Calculatoare, din cadrul Universității Politehnica București. Aici
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
        {this.state.messageSent ? (
          <div>
            <div className='message_sent'>Mesajul a fost trimis!</div>
            <br />
            <div className='message_sent_details'>
              Vom raspunde in cel mai scurt timp posibil.{' '}
            </div>
          </div>
        ) : (
          <div className='form'>
            <TextInput
              id={'name_input'}
              label='Nume'
              value={this.state.name}
              onChange={this.onChangeName}
            />
            <TextInput
              id={'email_input'}
              label='E-mail'
              validator={emailValidator}
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
            <TextInput
              id={'mesaj_input'}
              label='Mesaj'
              value={this.state.message}
              value={this.state.message}
              onChange={this.onChangeMessage}
            />
            {this.state.messageSent === false &&
            this.state.messageError === true ? (
                <div>
                  <div className='message_error'>
                  Ne pare rau dar mesajul nu a putut fi primit.
                  </div>
                  <div className='message_error_details'>
                  Incercati din nou in scurt timp.
                  </div>
                </div>
              ) : null}
            <Button onClick={this.postMessageHandler}> Trimite mesaj </Button>
          </div>
        )}
      </div>
    )
  }
}

export default Form
