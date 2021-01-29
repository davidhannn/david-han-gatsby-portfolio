import React, { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  })
  return (
    <section data-aos="fade-down" className="contact-section">
      <article className="contact-form">
        <h3>Contact Me!</h3>
        <p>If you liked any of my projects, please feel free to contact me!</p>
        <form action="https://formspree.io/davidhan2392@gmail.com" method="POST">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="name"
              className="form-control"
            />
            <input
              type="email"
              name="email"
              placeholder="email"
              className="form-control"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="message"
              className="form-control"
            ></textarea>
            <button type="submit" className="submit-btn btn">
              Send Email
            </button>
          </div>
        </form>
      </article>
    </section>
  )
}

export default Contact
