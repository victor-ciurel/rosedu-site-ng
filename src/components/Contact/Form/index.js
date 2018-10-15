import React, { Component } from 'react'

import Text from './text_translations'

import TextInput from 'components/common/TextInput'
import Button from 'components/common/Button'

import facebook from './assets/facebook.svg'
import twitter from './assets/twitter.svg'
import slack from './assets/slack.svg'

import './index.scss'

const emailValidator = email => {
  let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

const emptyValidator = inputText => {
  return inputText !== ''
}

class Form extends Component {
  static defaultProps = {
    lang: 'ro'
  }

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
    return (
      <div className='Form'>
        <p>
          {Text['paragraph_1'][this.props.lang]}
          <br />
          <br />
          {Text['paragraph_2'][this.props.lang]}
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
            <div className='message_sent'>
              {Text['message_success_1'][this.props.lang]}
            </div>
            <br />
            <div className='message_sent_details'>
              {Text['message_success_2'][this.props.lang]}
            </div>
          </div>
        ) : (
          <div className='form'>
            <TextInput
              id={'name_input'}
              label={Text['name_input_label'][this.props.lang]}
              value={this.state.name}
              onChange={this.onChangeName}
            />
            <TextInput
              id={'email_input'}
              label={Text['email_input_label'][this.props.lang]}
              validator={emailValidator}
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
            <TextInput
              id={'mesaj_input'}
              label={Text['message_input_label'][this.props.lang]}
              value={this.state.message}
              onChange={this.onChangeMessage}
            />
            {this.state.messageSent === false &&
            this.state.messageError === true ? (
                <div>
                  <div className='message_error'>
                    {Text['message_failed_1'][this.props.lang]}
                  </div>
                  <div className='message_error_details'>
                    {Text['message_failed_2'][this.props.lang]}
                  </div>
                </div>
              ) : null}
            <Button onClick={this.postMessageHandler}>
              {' '}
              {Text['send_message_button'][this.props.lang]}{' '}
            </Button>
          </div>
        )}
      </div>
    )
  }
}

export default Form
