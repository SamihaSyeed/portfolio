import React from 'react'
import './ContactPage.css'

const ContactPage = () => {
  return (
    <div class="container">
        <form>
            <h2>Send us a Message</h2>
            <label forname="fname">Name</label>< br/>
            <input type="text" name="fname" id="fname" placeholder='Name'/>< br/>
            <label forname="Email">E-mail</label>< br/>
            <input type="email" name="Email"  placeholder='Email' id="Email" />< br/> 
            <label forname="sub">Subject</label>< br/>
            <input type="text" name="sub"  placeholder='Subject' id="sub" />< br/>
            <label forname="msg">Message</label>< br/>
            <input type="text" placeholder='Message' name="msg" id="msg" />
            <button>Send Message</button>
        </form>
        <div class="box">
            <div>
            <h1>Contact Us</h1>
            <hr />
            <p>Open for any suggestion or just to have a chat!</p></div>
            <div class="divide">
                <table>
                    <tr>
                        <td><i class="fa-solid fa-location-dot"></i></td>
                        <td><span>Address:</span> 15\5, Shollinganalur, OMR<br /> Chennai - 600130</td>
                    </tr>
                    <tr>
                        <td><i class="fa-solid fa-phone"></i></td>
                        <td><span>Phone:</span> 9003087275</td>
                    </tr>
                    <tr>
                        <td><i class="fa-solid fa-paper-plane"></i></td>
                        <td> <span>Email:</span> saranyav26112003@gmail.com</td>
                    </tr>
                    <tr>
                        <td><i class="fa-solid fa-earth-asia"></i></td>
                        <td><span>LinkedIn:</span> https://www.linkedin.com/in/saranya/ </td>
                    </tr>
                </table>
            </div>
        </div>
      </div>
  )
}

export default ContactPage