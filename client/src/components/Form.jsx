import React, { useState } from 'react';
import useToggle from '../customHooks/Toggle';

const SendEmailForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [emailSentFail, setEmailSentFail] = useState(false);
  const { toggle, toggleOnOff } = useToggle();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toggleOnOff();
    try {
      const response = await fetch('https://my-portfolio-sandy-phi.vercel.app/api/v1/sendEmail/sendmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        setEmailSent(true);
        setFormData({
          name: '',
          email: '',
          message: '',
        });
        setShowSuccessMessage(true);
        setTimeout(() => {
          setEmailSent(false);
          setShowSuccessMessage(false);
          toggleOnOff();
        }, 5000); // Reset after 15 seconds
          
      } else {
        setEmailSentFail(true)
        setTimeout(() => {
          setEmailSentFail(false);
          toggleOnOff();
        }, 5000);
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div id="form" className='formContainer'>
      <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
            <div className='userInfo'>
                <input 
                type="text" 
                name="name" placeholder='Name...'
                value={formData.name} 
                onChange={handleChange} 
                required
                 />
                <input 
                type="email" 
                name="email" 
                placeholder='Email...' 
                value={formData.email} 
                onChange={handleChange}
                required 
                />
            </div>
            <textarea 
            name="message" 
            placeholder='Message...' 
            value={formData.message} 
            onChange={handleChange}
            required
            ></textarea>
          <button className='formBtn' type="submit">Send Email</button>
        </form>
        {emailSent ? 
        showSuccessMessage &&
        <p className='emailSuccess'>Email sent successfully!</p>
       : (toggle ?  (emailSentFail ? <p className='failEmailSend'>Failed...</p> 
       : <p className='loadingEmailSend'>Sending Email...</p>) : null) }
    </div>
  );
};

export default SendEmailForm;