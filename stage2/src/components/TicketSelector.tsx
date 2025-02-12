import { useState } from "react";
import "./css/TicketSelector.css";

interface TicketSelectorProps {
  handleTicketSelector: (ticket: string) => void;
  handleNextStep: () => void;
}

const TicketSelection = ({
  handleTicketSelector,
  handleNextStep,
}: TicketSelectorProps) => {
  const [ticketError, setTicketError] = useState<string>("");
  const [selectedTicket, setSelectedTicket] = useState<string>("");
  const [, setQuantity] = useState<number>(1);

  const validateTicket = (): boolean => {
    if (!selectedTicket) {
      setTicketError("Please select a ticket");
      return false;
    }
    setTicketError("");
    return true;
  };

  const handleTicketClick = (ticket: string) => {
    setSelectedTicket(ticket);
    handleTicketSelector(ticket);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(Number(e.target.value));
  };

  const handleNext = () => {
    if (validateTicket()) {
      handleNextStep();
    }
  };

  return (
    <main className="ticket-container">
      <section className="ticket-header">
        <div className="header-content">
          <h1 className="header-title">Ticket Selection</h1>
          <span className="header-step">Step 1/3</span>
        </div>
        <div className="progress-bar">
          <svg
            width="604"
            height="4"
            viewBox="0 0 604 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 2C0 0.895431 0.895431 0 2 0H602C603.105 0 604 0.895431 604 2C604 3.10457 603.105 4 602 4H2.00001C0.895441 4 0 3.10457 0 2Z"
              fill="#0E464F"
            />
            <path
              d="M0 2C0 0.895431 0.895431 0 2 0H230C231.105 0 232 0.895431 232 2C232 3.10457 231.105 4 230 4H2C0.895428 4 0 3.10457 0 2Z"
              fill="#24A0B5"
            />
          </svg>
        </div>
      </section>

      <section className="ticket-details">
        <div className="event-info">
          <div className="event-head">
            <h2 className="event-title">Techember Fest ”25</h2>
            <p className="event-description">
              Join us for an unforgettable experience at [Event Name]! Secure
              your spot now.
            </p>
          </div>
          <div className="event-meta">
            <span className="event-location">📍 [Event Location]</span>
            <span className="event-separator">| |</span>
            <span className="event-date">March 15, 2025 | 7:00 PM</span>
          </div>
        </div>

        <div className="divider">
          <svg
            width="556"
            height="4"
            viewBox="0 0 556 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="556" height="4.0001" fill="#07373F" />
          </svg>
        </div>

        <div className="ticket-options">
          <h3 className="ticket-options-title">Select Ticket Type:</h3>
          <div className="ticket-cards">
            <button
              className="ticket-card"
              onClick={() => handleTicketClick("Free")}
            >
              <h4 className="ticket-type">Free</h4>
              <div className="ticket-info">
                <p className="ticket-access">Regular Access</p>
                <p className="ticket-availability">20/52</p>
              </div>
            </button>
            <button
              className="ticket-card"
              onClick={() => handleTicketClick("VIP")}
            >
              <h4 className="ticket-type">$150</h4>
              <div className="ticket-info">
                <p className="ticket-access">VIP Access</p>
                <p className="ticket-availability">20/52</p>
              </div>
            </button>
            <button
              className="ticket-card"
              onClick={() => handleTicketClick("VVIP")}
            >
              <h4 className="ticket-type">$150</h4>
              <div className="ticket-info">
                <p className="ticket-access">VVIP Access</p>
                <p className="ticket-availability">20/52</p>
              </div>
            </button>
          </div>
        </div>

        <div className="ticket-quantity">
          <label className="quantity-label">Number of Tickets</label>
          <select
            title="no"
            className="quantity-input"
            onChange={handleQuantityChange}
          >
            <option className="quantity-dropdown" value="1">
              1
            </option>
            <option className="quantity-dropdown" value="2">
              2
            </option>
            <option className="quantity-dropdown" value="3">
              3
            </option>
          </select>
        </div>
        {ticketError && <p className="error-message">{ticketError}</p>}
        <div className="ticket-actions">
          <button className="cancel-button">Cancel</button>
          <button className="next-button" onClick={handleNext}>
            Next
          </button>
        </div>
      </section>
    </main>
  );
};

export default TicketSelection;
