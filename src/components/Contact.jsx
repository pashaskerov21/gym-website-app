import React from 'react'

function Contact() {
  return (
    <section id='contact'>
      <div className="container">
        <h1 className='mb-5'>Contact us</h1>
        <form action="#">
          <input type="text" placeholder='Full Name' required />
          <input type="text" placeholder='Email' required />
          <textarea placeholder='Write Message...' name='message'></textarea>
          <input type="submit" value='Send' />
        </form>
      </div>
    </section>
  )
}

export default Contact
