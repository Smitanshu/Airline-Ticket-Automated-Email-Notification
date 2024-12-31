import React, { useState } from 'react';
import './AirlineTicket.css'; // Add styles for the ticket design
import { IoLogoWhatsapp } from 'react-icons/io';
import { SiGmail } from 'react-icons/si';
import { LuMessageSquareText } from 'react-icons/lu';

const AirlineTicket = () => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Harcoded Email!!!!:::::


  const toEmail = "smitanshuukey3070@gmail.com";
  const emailMessage = "Your flight details have been shared successfully!";

  const mailsender = async () => {
    setLoading(true);
    setMessage('');
    setError('');

    try {
      const response = await fetch('http://localhost:8080/api/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          toEmail,
          message: emailMessage,
        }),
      });

      if (response.ok) {
        setMessage('Email sent successfully to ' + toEmail);
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Failed to send the email. Please try again.');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('An error occurred while sending the email.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="ticket-container">
        <div className="ticket-header">
          <h1>Airline Name</h1>
          <p>Flight Information</p>
        </div>
        <div className="ticket-details">
          <div className="passenger-info">
            <h2>Passenger Details</h2>
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Ticket Number:</strong> 1234567890</p>
            <p><strong>Passport Number:</strong> A12345678</p>
          </div>

          <div className="flight-info">
            <h2>Flight Information</h2>
            <p><strong>From:</strong> New York (JFK)</p>
            <p><strong>To:</strong> London (LHR)</p>
            <p><strong>Flight Number:</strong> AB1234</p>
            <p><strong>Date:</strong> December 25, 2024</p>
            <p><strong>Departure Time:</strong> 10:00 AM</p>
            <p><strong>Arrival Time:</strong> 8:00 PM</p>
          </div>

          <div className="ticket-class">
            <h2>Ticket Class</h2>
            <p><strong>Class:</strong> Economy</p>
            <p><strong>Seat:</strong> 22B</p>
          </div>
        </div>

        <div className="pricing">
          <h2>Pricing Information</h2>
          <p><strong>Base Fare:</strong> $500</p>
          <p><strong>Taxes and Fees:</strong> $50</p>
          <p><strong>Total Price:</strong> $550</p>
        </div>

        <div className="rules-regulations">
          <h2>Rules & Regulations</h2>
          <ul>
            <li>Ticket is non-refundable unless canceled within 24 hours of booking.</li>
            <li>Passengers must arrive at the gate at least 1 hour before departure.</li>
            <li>Luggage allowance: 1 carry-on (up to 7 kg) and 1 checked bag (up to 20 kg).</li>
            <li>Flight times are subject to change. Check your email for updates.</li>
            <li>Alcohol consumption is not allowed onboard except by flight attendants.</li>
          </ul>
        </div>

        <div className="contact-info">
          <h2>Contact Information</h2>
          <p><strong>Customer Support:</strong> 1-800-123-4567</p>
          <p><strong>Website:</strong> www.airlinewebsite.com</p>
        </div>

        <div className="footer">
          <p>&copy; 2024 Airline Name. All Rights Reserved.</p>
        </div>
      </div>
      <div className='option'>
        <button className='print-btn' onClick={() => window.print()}>Print</button>
        <div className='send-option'>
          <IoLogoWhatsapp className='whatsapp-icon' />
          <SiGmail className='gmail-icon' onClick={mailsender} />
          <LuMessageSquareText className='message-icon' />
        </div>
      </div>
      {loading && <p style={{ marginTop: '15px', color: 'blue' }}>Sending email...</p>}
      {message && <p style={{ marginTop: '15px', color: 'green' }}>{message}</p>}
      {error && <p style={{ marginTop: '15px', color: 'red' }}>{error}</p>}
    </>
  );
};

export default AirlineTicket;
