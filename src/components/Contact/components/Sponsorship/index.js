import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Title from 'components/common/Title'
import Button from 'components/common/Button'

import './index.scss'

class Sponsorship extends Component {
  static propTypes = {}
  static defaultProps = {}

  render () {
    return (
      <div className='Sponsorship'>
        <Title text='Susține ROSEdu' color='white' />
        <p>
          Dacă dorești să susții activitățile organizației ROSEdu, avem aici mai
          multe variante prin care poți face asta. Daca ai nevoie de ajutor, sau
          ești interesat de un parteneriat, folosește formularul de contact și
          hai să ne auzim!
        </p>

        <div className='boxes'>
          <div className='box'>
            <h2>Formular 2%</h2>
            <p>
              Donează 2% din impozitul tău pentru susținerea organizației
              noastre. Descarcă formularul și depune-l la sediul ANAF de care
              aparții.
            </p>
            <Button>Descarcă formularul</Button>
          </div>
          <div className='box'>
            <h2>Voluntariat</h2>
            <p>Vrei să fii voluntar ROSEdu ?</p>
            <Button>Trimite mesaj</Button>
          </div>
          <div className='box'>
            <h2>Cont bancar</h2>
            <p>
              Ne poți susține și prin donarea unei sume de bani la următorul
              cont:
            </p>
            <h3>RO99INGB12345678</h3>
          </div>
          <div className='box'>
            <h2>Sponsorizare</h2>
            <p>
              Dacă dorești să avem un parteneriat direct de sponsorizare,
              trimite-ne un mesaj!
            </p>
            <Button>Trimite mesaj</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Sponsorship
