// import React from 'react';
// import './css/Ticket.css'; // Import the CSS file

// const TicketGenerator = () => {
//   return (
//     <main className="ready-container">
//       <section className="ready-header">
//         <div className="header-content">
//           <h1 className="header-title">Ready</h1>
//           <span className="header-step">Step 3/3</span>
//         </div>
//         <div className="progress-bar">
//           <svg width="604" height="4" viewBox="0 0 604 4" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M0 2C0 0.895431 0.895431 0 2 0H602C603.105 0 604 0.895431 604 2C604 3.10457 603.105 4 602 4H2.00001C0.895441 4 0 3.10457 0 2Z" fill="#0E464F" />
//             <path d="M0 2C0 0.895431 0.895431 0 2 0H230C231.105 0 232 0.895431 232 2C232 3.10457 231.105 4 230 4H2C0.895428 4 0 3.10457 0 2Z" fill="#24A0B5" />
//           </svg>
//         </div>
//       </section>

//       <section className="ready-content">
//         <div className="ticket-confirmation">
//           <h2 className="confirmation-title">Your Ticket is Booked!</h2>
//           <p className="confirmation-description">
//             Check your email for a copy or you can <strong>download</strong>
//           </p>
//         </div>

//         <div className="ticket-preview">
//           <div className="ticket-wrapper">
//             <div className="ticket-background">
//               <svg width="300" height="600" viewBox="0 0 300 600" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 {/* SVG Paths */}
//                 <path d="M300 24.2433C300 21.7558 297.488 20 295 20C286.716 20 280 13.2843 280 5C280 2.51247 278.244 0 275.757 0H24.2433C21.7558 0 20 2.51246 20 5C20 13.2843 13.2843 20 5 20C2.51246 20 0 21.7558 0 24.2433V468.757C0 471.244 2.51247 473 5 473C13.2843 473 20 479.716 20 488C20 496.284 13.2843 503 5 503C2.51247 503 0 504.756 0 507.243V575.757C0 578.244 2.51245 580 5 580C13.2843 580 20 586.716 20 595C20 597.488 21.7558 600 24.2433 600H275.757C278.244 600 280 597.488 280 595C280 586.716 286.716 580 295 580C297.488 580 300 578.244 300 575.757V507.243C300 504.756 297.488 503 295 503C286.716 503 280 496.284 280 488C280 479.716 286.716 473 295 473C297.488 473 300 471.244 300 468.757V24.2433Z" fill="#072C31" />
//                 {/* Additional SVG Paths */}
//               </svg>
//             </div>
//             <div className="ticket-overlay">
//               <div className="ticket-details">
//                 <h3 className="event-name">Techember Fest ”25</h3>
//                 <div className="event-info">
//                   <p>📍 04 Rumens road, Ikoyi, Lagos</p>
//                   <p>📅 March 15, 2025 | 7:00 PM</p>
//                 </div>
//                 <img className="event-image" src="https://placehold.co/140x140" alt="Event" />
//                 <div className="attendee-info">
//                   <div className="info-row">
//                     <div className="info-item">
//                       <p className="info-label">Enter your name</p>
//                       <p className="info-value">Avi Chukwu</p>
//                     </div>
//                     <div className="info-item">
//                       <p className="info-label">Enter your email *</p>
//                       <p className="info-value">User@email.com</p>
//                     </div>
//                   </div>
//                   <div className="info-row">
//                     <div className="info-item">
//                       <p className="info-label">Ticket Type:</p>
//                       <p className="info-value">VIP</p>
//                     </div>
//                     <div className="info-item">
//                       <p className="info-label">Ticket for :</p>
//                       <p className="info-value">1</p>
//                     </div>
//                   </div>
//                   <div className="special-request">
//                     <p className="info-label">Special request?</p>
//                     <p className="info-value">Nil ? Or the users sad story they write in there gets this whole space, Max of three rows</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="action-buttons">
//           <button className="book-another-button">Book Another Ticket</button>
//           <button className="download-button">Download Ticket</button>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default TicketGenerator;

import React from 'react';
import './css/Ticket.css';

interface TicketGeneratorProps {
  name: string;
  email: string;
  avatar: string;
}

const TicketGenerator: React.FC<TicketGeneratorProps> = ({ name, email, avatar }) => {
  return (
    <main className="ready-container">
      <section className="ready-header">
        <div className="header-content">
          <h1 className="header-title">Ready</h1>
          <span className="header-step">Step 3/3</span>
        </div>
        <div className="progress-bar">
          <svg width="604" height="4" viewBox="0 0 604 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 2C0 0.895431 0.895431 0 2 0H602C603.105 0 604 0.895431 604 2C604 3.10457 603.105 4 602 4H2.00001C0.895441 4 0 3.10457 0 2Z" fill="#0E464F" />
            <path d="M0 2C0 0.895431 0.895431 0 2 0H230C231.105 0 232 0.895431 232 2C232 3.10457 231.105 4 230 4H2C0.895428 4 0 3.10457 0 2Z" fill="#24A0B5" />
          </svg>
        </div>
      </section>

      <section className="ready-content">
        <div className="ticket-confirmation">
          <h2 className="confirmation-title">Your Ticket is Booked!</h2>
          <p className="confirmation-description">
            Check your email for a copy or you can <strong>download</strong>
          </p>
        </div>

        <div className="ticket-preview">
          <div className="ticket-wrapper">
            <div className="ticket-background">
              <svg width="300" height="600" viewBox="0 0 300 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* SVG Paths */}
              </svg>
            </div>
            <div className="ticket-overlay">
              <div className="ticket-details">
                <h3 className="event-name">Techember Fest ”25</h3>
                <div className="event-info">
                  <p>📍 04 Rumens road, Ikoyi, Lagos</p>
                  <p>📅 March 15, 2025 | 7:00 PM</p>
                </div>
                <img className="event-image" src={avatar} alt="Event" />
                <div className="attendee-info">
                  <div className="info-row">
                    <div className="info-item">
                      <p className="info-label">Enter your name</p>
                      <p className="info-value">{name}</p>
                    </div>
                    <div className="info-item">
                      <p className="info-label">Enter your email *</p>
                      <p className="info-value">{email}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="action-buttons">
          <button className="book-another-button">Book Another Ticket</button>
          <button className="download-button">Download Ticket</button>
        </div>
      </section>
    </main>
  );
};

export default TicketGenerator;