import React from 'react';

import './../../assets/style/contact_form.css';

export default () =>
    <div className="contact-form__wrap">
        <form action="" className="contact-form">
            <div className="form-group">
                <label htmlFor="contactName">Name</label>
                <input type="text" id="contactName"/>
            </div>
            <div className="form-group">
                <label htmlFor="contactEmail">Email Address</label>
                <input type="text" id="contactEmail"/>
            </div>
            <div className="form-group">
                <label htmlFor="contactSubject">Subject</label>
                <input type="text" id="contactSubject"/>
            </div>
            <div className="form-group">
                <label htmlFor="contactDescription">Name</label>
                <textarea name="" cols="30" rows="10" id="contactDescription"></textarea>
            </div>
            <div className="form-group">
                <button className="banner-btn" type="submit">Submit</button>
            </div>
        </form>
    </div>