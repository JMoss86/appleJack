import React, { Component } from "react";
import Mailchimp from "react-mailchimp-form";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact section" id="Contact">
        <div className="container">
          <div className="section-head">
            <h2 className="text-center">Sign up for our newsletter</h2>
            <Mailchimp
              action="https://app.us8.list-manage.com/subscribe/post?u=f2639e87a7aa751a8adae9713&amp;id=8aa423b577"
              fields={[
                {
                  name: "EMAIL",
                  placeholder: "Email",
                  type: "email",
                  required: true,
                },
              ]}
            />
            <h2 className="text-center">
              Or, just contact us at applejacksranch@gmail.com
            </h2>
          </div>
          <form
            action={`https://formspree.io/maydrwrn`}
            name="contact"
            method="POST"
            data-netlify="true"
          >
            <div>
              <label>
                Your Name: <input type="text" name="name" required />
              </label>
            </div>
            <div>
              <label>
                Your Email: <input type="email" name="email" required />
              </label>
            </div>
            <div>
              <label>
                Message: <textarea name="message" required></textarea>
              </label>
            </div>
            <div>
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
