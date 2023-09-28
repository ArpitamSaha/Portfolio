import React from 'react';
import "./ContactPage.scss";
const ContactPage = () => {
    return (
        <div><section class="contact" id="contact">
            <h2 class="heading">Contact <span>ME</span></h2>
            <form action="#">
                <div class="input-box">
                    <div class="input-field left">
                        <input type="text" placeholder="Full Name" required />
                    </div>
                    <div class="input-field right">
                        <input type="text" placeholder="Email Address" required />
                    </div>
                </div>

                <div class="input-box">
                    <div class="input-field left">
                        <input type="number" placeholder="Mobile Number" required />
                    </div>
                    <div class="input-field right">
                        <input type="text" placeholder="Email Subject" required />
                    </div>
                </div>

                <div class="textarea-field bottom">
                    <textarea name="" id="" cols="30" rows="10" placeholder="Your Message" required ></textarea>
                </div>
                <div class="btn-box">
                    <button class="btn">Submit</button>
                </div>
            </form>
        </section></div >
    );
};

export default ContactPage;