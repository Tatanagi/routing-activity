import { useLocation } from "react-router-dom"
import { useState } from "react"

export default function Contact() {
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const name = queryParams.get("name")

  const [formData, setFormData] = useState({
    email: "",
    message: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Replace with your actual submission logic or endpoint
    console.log("Form submitted:", formData)
    alert("Thank you for reaching out!")
    setFormData({ email: "", message: "" })
  }

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '1rem' }}>
      <h2>Hey {name || "there"}, Contact Us</h2>
      <p>
        Feel free to reach out to us through the form below or via the contact info provided.
      </p>

      <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email">Email:</label><br />
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="message">Message:</label><br />
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
            style={{ width: '100%', padding: '0.5rem' }}
          ></textarea>
        </div>

        <button type="submit" style={{ padding: '0.5rem 1rem' }}>
          Send
        </button>
      </form>

      <div style={{ marginTop: '2rem' }}>
        <h3>Contact Info</h3>
        <p><strong>Email:</strong> support@example.com</p>
        <p><strong>Phone:</strong> +63 912 345 6789</p>
        <p><strong>Address:</strong> CIIT, College Of Arts and Technology, Philippines</p>
      </div>
    </div>
  )
}
