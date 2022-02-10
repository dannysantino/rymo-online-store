import { useTitle } from "../utils/hooks"

const Contact = () => {
    useTitle('Contact');

    return (
        <div id='contact' className='pt-5 my-5'>
            <section id='contact-bg'>
                <h2>Contact Us</h2>
            </section>

            <section id='contact' className='container py-5 mt-5'>
                <div className='row'>
                    <div className='col-12 col-md-5'>
                        <h2>Get in touch</h2>
                        <hr />
                        <p className='lead'>For any complaints or suggestions, kindly reach out to us through any of the below means or fill out the form and we'll get back to you as soon as possible</p>
                        <div className='contact-details'>
                            <div className='hq contacts my-5'>
                                <h4 className='mb-3'>Headquarters</h4>
                                <div className='store'>
                                    <i className='far fa-home'></i>
                                    <p>1151, PUEBLO STREET, <br /> ATLANTA, GA</p>
                                </div>
                            </div>
                            <div className='phone contacts'>
                                <h4 className='mb-3'>Phone</h4>
                                <div className='phone-numbers'>
                                    <i className='fas fa-phone-alt'></i>
                                    <p>+1 (202) 555-1102 <br /> +1 (202) 555-1103</p>
                                </div>
                            </div>
                            <div className='support contacts my-5'>
                                <h4 className='mb-3'>Support</h4>
                                <div className='email'>
                                    <i className='far fa-envelope-open'></i>
                                    <p>rymostore@mail.com <br /> support@rymostore.com</p>
                                </div>
                            </div>
                            <div className='follow-us contacts'>
                                <h4 className='mb-3'>Follow Us</h4>
                                <i className='fab fa-facebook-f'></i>
                                <i className='fab fa-twitter mx-4'></i>
                                <i className='fab fa-linkedin'></i>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-7 px-3 mt-5 mt-md-0 contact-form'>
                        <h3>Connect with us</h3>
                        <p>Kindly fill the form below in order to get in touch with us</p>
                        <form className='row mt-4'>
                            <div className='col-6'>
                                <input type='text' placeholder='Your name' className='form-control' />
                            </div>
                            <div className='col-6'>
                                <input type='email' placeholder='Email' className='form-control' />
                            </div>
                            <div className='col-12 my-4'>
                                <input type='text' placeholder='Subject' className='form-control' />
                            </div>
                            <div className='col-12 mb-5'>
                                <textarea cols='30' rows='10' placeholder='Your message in detail' className='form-control'></textarea>
                            </div>
                            <div className='col-6'>
                                <button className='text-uppercase shop-btn'>Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Contact
