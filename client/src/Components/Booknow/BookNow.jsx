import axios from "axios";
import React, { useState } from "react";
import icon8 from "../../img/icons8-close-window-100.png";

const BookNow = () => {
  const [isOpen, setIsopen] = useState(false);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [hireDate, setDateTime] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/booking", {
        name,
        message,
        subject,
        phone,
        email,
        hireDate,
      });
      if (res.data.message) {
        alert(`Booking Succuess`);
      }
      if (!res.status === 200) {
        alert(`Booking failed`);
      }
    } catch (error) {
      console.log(`Something Went Wrong`);
    }
  };

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  return (
    <div class="sharing">
      <div
        id="contact"
        style={{
          scale: isOpen ? "1" : "0",
        }}
      >
        <div class="head">
          <h1>REQUEST A VISIT</h1>
          <p>Book an Appointment</p>
          <img id="close" src={icon8} alt="" onClick={ToggleSidebar} />
        </div>
        <form onSubmit={handleBooking}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            required={true}
          />
          <input
            type="number"
            name="PhoneNumber"
            placeholder="Phone Number"
            required={true}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="email@example.com"
            required={true}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            // required={true}
            onChange={(e) => setSubject(e.target.value)}
          />
          <input
            type="datetime-local"
            required={true}
            onChange={(e) => setDateTime(e.target.value)}
          />
          <textarea
            name="message"
            cols="30"
            rows="10"
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
          ></textarea>
          <input type="submit" class="btns" value="send" />
        </form>
      </div>
      <h1>Schedule Your FREE Consultation Today</h1>
      <button class="consultation BookNow" onClick={ToggleSidebar}>
        Book Now
      </button>
    </div>
  );
};

export default BookNow;
