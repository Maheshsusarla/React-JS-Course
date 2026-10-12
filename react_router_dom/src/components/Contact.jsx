import React, { useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', form)
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div>
      <section className="hero">
        <h1>Contact us</h1>
        <p className="lead">Send us a message and we'll reply soon.</p>
      </section>

      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" value={form.name} onChange={handleChange} required />

        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} required />

        <button type="submit" className="btn">Send message</button>
        {sent && <p className="success">Message sent. Thank you!</p>}
      </form>
    </div>
  )
}

export default Contact