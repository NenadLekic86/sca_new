// import React from 'react'
import './deliveryPolicy.scss'
import { Link } from 'react-router-dom';

const DeliveryPolicy = () => {
  return (
    <section className="delivery-policy relative">
      <div className='pagetitle relative pt-40 pb-30 lg:pt-50 lg:pb-40'>
        <div className="container">
            <h1 className="text-4xl font-bold text-center">Delivery Policy</h1>
        </div>
      </div>
      
      <div className="container lg:!max-w-5xl py-10">
        <p>Last updated: April 03, 2021<br/><br/>

  Thank you for visiting and shopping at <a href='https://www.smartconsulting-agency.com'>https://www.smartconsulting-agency.com</a>. Following are the terms and conditions that constitute our Delivery Policy.</p>
              <h3 className="text-2xl mt-10 mb-5">Delivery Policy</h3>
              <h4 className="text-xl mt-10 mb-5">Processing time</h4>
              <p>All orders are processed within 2-3 business days. Orders are not delivered on weekends or holidays.<br/><br/>

  If we are experiencing a high volume of orders, delivery may be delayed by a few days. Please allow additional days for delivery. If there will be a significant delay in delivery of your order, we will contact you via email or telephone.</p>
              <h4 className="text-xl mt-10 mb-5">Delivery confirmation</h4>
              <p>You will receive a Confirmation email once your order is received, together with the link to the digital content, link to join the training and workshops.<br/><br/>

  In terms of consultancy services, you will receive a COnfirmation email once your order is received, as well as other instructions for scheduling a session.</p>
              <h4 className="text-xl mt-10 mb-5">Customs, Duties and Taxes</h4>
              <p>Smart Consulting Agency is not responsible for any customs and taxes applied to your order. All fees imposed after delivery are the responsibility of the customer (tariffs, taxes, etc.).</p>
              <h4 className="text-xl mt-10 mb-5">Returns Policy</h4>
              <p>Our <Link to='/ReturnPolicy'>Return & Refund Policy</Link> provides detailed information about options and procedures for returning your order.</p>
              <h4 className="text-xl mt-10 mb-5">Contact Us</h4>
              <p>If you have any questions about our Delivery Policy, please contact us:<br/><br/>

  By email: contact@smartconsulting-agency.com</p>
      </div>
    </section>
  )
}

export default DeliveryPolicy
