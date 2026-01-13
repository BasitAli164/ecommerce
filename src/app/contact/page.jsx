'use client'
import React, { useState } from 'react'
import { Mail, PhoneCallIcon } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    const { name, email, phone, message } = formData

    if (!name || !email || !phone || !message) {
      setError('Please fill in all fields')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email')
      return
    }

    console.log('Form Submitted:', formData)
    setSuccess('Your message has been sent!')
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    })
  }

  return (
    <div className="min-h-screen contain-content flex justify-center items-start bg-gray-50 px-4 py-16">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-10">

        {/* Left Column: Contact Info */}
        <div className="flex flex-col gap-6 w-full lg:w-1/3">
          {/* Call Card */}
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="bg-accent text-white rounded-full p-3">
                <PhoneCallIcon size={20} />
              </div>
              <h3 className="font-semibold text-lg">Call To Us</h3>
            </div>
            <p className="text-sm text-gray-600">We are available 24/7, 7 days a week.</p>
            <p className="text-sm text-gray-600 font-medium">Phone: +8801611112222</p>
          </div>

          {/* Email Card */}
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="bg-accent text-white rounded-full p-3">
                <Mail size={20} />
              </div>
              <h3 className="font-semibold text-lg">Write To Us</h3>
            </div>
            <p className="text-sm text-gray-600">Fill out our form and we will contact you within 24 hours.</p>
            <p className="text-sm text-gray-600 font-medium">Emails: customer@exclusive.com</p>
            <p className="text-sm text-gray-600 font-medium">Emails: support@exclusive.com</p>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="bg-white shadow-md rounded-lg p-6 lg:p-10 flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {/* First Row Inputs */}
            <div className="flex flex-col lg:flex-row gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                value={formData.name}
                onChange={handleChange}
                className="w-full lg:w-1/3 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email *"
                value={formData.email}
                onChange={handleChange}
                className="w-full lg:w-1/3 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <input
                type="text"
                name="phone"
                placeholder="Your Phone *"
                value={formData.phone}
                onChange={handleChange}
                className="w-full lg:w-1/3 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            {/* Textarea */}
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent resize-none h-60"
            ></textarea>

            {/* Error / Success */}
            {error && <p className="text-red-600">{error}</p>}
            {success && <p className="text-green-600">{success}</p>}

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-8 py-3 bg-accent text-white rounded hover:bg-red-600 transition-colors cursor-pointer"
              >
                Send Message
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  )
}
