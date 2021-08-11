import React, { Component } from "react";
import Mailchimp from "react-mailchimp-form";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact section" id="Contact">
        <div className="container">
          <div className="section-donate">
            <h2 className="text-center">Donate to Make a Difference!</h2>            
            <div>
              <button type="submit">
                <form action="https://www.paypal.com/donate" method="post" target="_top">
                  <input type="hidden" name="hosted_button_id" value="96A3TNTP5TEN8" />
                  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                  <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                </form>
              </button>
            </div>
            <br />            
          </div>
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
