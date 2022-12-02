import React from "react"

export default function Info() {
   return (
      <div className="section">
         <img src="src/assets/photo.png" alt="photo" />
         <p className="name">Laura Smith</p>
         <div className="details">
            <p className="dsgn">Frontend Developer</p>
            <p className="website">laurasmith.website</p>
            <div className="social">
               <button>
                  <img src="src/assets/mail-icon.png" alt="Email icon" />
                  <p>Email</p>
               </button>
               <button className="button-two">
                  <img src="src/assets/linkedin-vector.png" alt="Linkedin icon" />
                  <p>LinkedIn</p>
               </button>
            </div>
         </div>
      </div>
   )
}