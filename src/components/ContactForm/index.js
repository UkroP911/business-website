import React from 'react';

import './../../assets/style/contact_form.css';

export default () =>
    <div className="contact-form__wrap">
        <form action="" className="contact-form">
            <div className="form-group">
                <input className="animated-input" type="text" id="contactName" placeholder="Name"/>
                <label htmlFor="contactName">Name</label>
            </div>
            <div className="form-group">
                <input className="animated-input" type="text" id="contactEmail" placeholder="Email Address"/>
                <label htmlFor="contactEmail">Email Address</label>
            </div>
            <div className="form-group">
                <input className="animated-input" type="text" id="contactSubject" placeholder="Subject"/>
                <label htmlFor="contactSubject">Subject</label>
            </div>
            <div className="form-group form-group__text-area">
                <textarea name="" cols="30" rows="10" id="contactDescription" placeholder="Your letter"/>
                <label htmlFor="contactDescription">Your letter</label>
            </div>
            <div className="form-group">
                <button className="banner-btn" type="submit">Submit</button>
            </div>
        </form>
    </div>