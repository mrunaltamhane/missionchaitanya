import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../ContactUs.css'
import { Button, TextField } from "@mui/material";
import TextareaAutosize from '@mui/base/TextareaAutosize';

export default function ContactUs() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9xfpylh', 'template_fp99l1x', form.current, 't1n2Gz1Z1ffaNmg9V')
            .then((result) => {
                console.log(result.text);
                console.log('message sent');
                e.target.reset()
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div id="contact-us">
            <div class="container-fluid px-5 my-5">
                <div class="row justify-content-center">
                    <div class="col-xl-10">
                        <div class="card border-0 rounded-3 shadow-lg overflow-hidden">
                            <div class="card-body p-0">
                                <div class="row g-0">
                                    <div class="col-sm-6 d-none d-sm-block bg-image-contact"></div>
                                    <div class="col-sm-6 p-4">
                                        <div class="text-center">
                                            <div class="h2 fw-light">Contact Form</div>

                                        </div>
                                        <form ref={form} onSubmit={sendEmail} class="form-contact">

                                            <div class="name-contact">
                                                <TextField margin="normal" sx={{
                                                    width: 400,
                                                    maxWidth: '90%',

                                                }} id="outlined-basic " label="Name" variant="outlined" name="user_name" type="text" data-sb-validations="required" ></TextField>

                                                <div class="invalid-feedback" data-sb-feedback="name:required">Name is required.</div>
                                            </div>
                                            <div class="email-contact">
                                                <TextField margin="normal" sx={{
                                                    width: 400,
                                                    maxWidth: '90%',

                                                }} id="outlined-basic " label="Email" variant="outlined" name="user_email" data-sb-validations="required,email" ></TextField>

                                                <div class="invalid-feedback" data-sb-feedback="emailAddress:required">Email Address is required.</div>
                                                <div class="invalid-feedback" data-sb-feedback="emailAddress:email">Email Address Email is not valid.</div>
                                            </div>
                                            <div class="message-contact">

                                                <TextareaAutosize
                                                    aria-label="minimum height"
                                                    minRows={3} name="message"
                                                    placeholder="Message"
                                                    style={{ width: 400 }}
                                                />
                                                <div class="invalid-feedback" data-sb-feedback="message:required">Message is required.</div>
                                            </div>


                                            {/* <!-- Submit error message --> */}


                                            <div class="d-grid">
                                                <button class="btn btn-primary btn-lg " id="submitButton" value="Send" type="submit">Submit</button>
                                            </div>


                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};