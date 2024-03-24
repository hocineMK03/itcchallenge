import React from 'react'
import '../styles/payment/payment.css'
import logoimage from '../assets/logo.png'
const PaymentPage = () => {
  return (
    <div class="containerr">
      <div class="box">
        <div class="boxLeft">
          <h2>Enter your payment details</h2>
          <input type="text" class="cardNumber1" placeholder="card number" />
          <input type="text" class="cardNumber" placeholder="Street adress" />
          <input
            type="text"
            class="cardNumber"
            placeholder="Apt,unit,suit,etc,(optional)"
          />
          <select class="citySelect">
            <option selected disabled hidden>Country</option>
            <option>Algeria</option>
            <option>France</option>
            <option>United States</option>
            <option>United Kingdom</option>
            <option>United Arab Emirates</option>
          </select>

          <div class="lastnput">
            <input type="text" class="cardNumber33" placeholder="City" />
            <select class="citySelect2">
              <option selected disabled hidden>State</option>
              <option>Algeria</option>
              <option>Blida</option>
              <option>Oran</option>
              <option>Boumerdese</option>
              <option>Annaba</option>
            </select>

            <input type="text" class="citySelect3" placeholder="Zip Code" />
          </div>
        </div>

        <div class="boxRight">
          <img src={logoimage}/>
          <h2>Course : Introduction To Web Developement</h2>
          <p>Price : 350$</p>
          <button>Buy </button>

        </div>
      </div>
    </div>
  )
}

export default PaymentPage
