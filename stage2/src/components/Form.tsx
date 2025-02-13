import React, { useState, useEffect } from "react";

declare global {
  interface Window {
    cloudinary: {
      openUploadWidget: (
        options: {
          cloudName: string;
          uploadPreset: string;
          sources: string[];
          multiple: boolean;
          cropping: boolean;
        },
        callback: (
          error: Error | null,
          result: { event: string; info: { secure_url: string } } | null
        ) => void
      ) => void;
    };
  }
}
import { CloudinaryContext } from "cloudinary-react";
import "./css/form.css";
import TicketGenerator from "./TicketGenerator";
import TicketSelection from "./TicketSelector";
import { Spinner } from "@chakra-ui/react";

const Form: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [avatarError, setAvatarError] = useState<string>("");
  const [, setIsSubmitted] = useState<boolean>(false);
  const [step, setStep] = useState<number>(1);
  const [selectedTicket, setSelectedTicket] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(false);

  // Load saved data from localStorage
  useEffect(() => {
    const savedName = localStorage.getItem("name") || "";
    const savedEmail = localStorage.getItem("email") || "";
    const savedAvatar = localStorage.getItem("avatar") || "";
    setName(savedName);
    setEmail(savedEmail);
    setAvatar(savedAvatar);
  }, []);

  const validateName = (value: string): boolean => {
    if (!value) {
      setNameError("Name is required");
      return false;
    }
    setNameError("");
    return true;
  };

  const validateEmail = (value: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
      setEmailError("Email is required");
      return false;
    } else if (!emailRegex.test(value)) {
      setEmailError("Invalid email format");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validateAvatar = (value: string): boolean => {
    if (!value) {
      setAvatarError("Avatar is required");
      return false;
    }
    setAvatarError("");
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isNameValid = validateName(name);
    const isEmailValid = validateEmail(email);
    const isAvatarValid = validateAvatar(avatar);

    if (isNameValid && isEmailValid && isAvatarValid) {
      setIsSubmitted(true);
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("avatar", avatar);
      setStep(3);
    }
  };

  const handleTicketSelection = (ticket: string) => {
    setSelectedTicket(ticket);
  };

  const handleNextStep = () => {
    if (selectedTicket) {
      setStep(2);
    }
  };
  const handleCancel = () => {
    setStep(1);
  };
  const handleQuantityChange = (quantity: number) => {
    setQuantity(quantity);
  };

  const openCloudinaryWidget = () => {
    setIsLoading(true);
    console.log("Opening Cloudinary widget");
    window.cloudinary.openUploadWidget(
      {
        cloudName: "dqu6ag1sc",
        uploadPreset: "beloved_preset",
        sources: ["local", "url", "camera"],
        multiple: false,
        cropping: true,
      },
      (
        error: Error | null,
        result: { event: string; info: { secure_url: string } } | null
      ) => {
        setIsLoading(false);
        if (error) {
          console.error("Error opening Cloudinary widget: ", error);
        }
        if (!error && result && result.event === "success") {
          console.log("Upload successful. Image Url: ", result.info.secure_url);
          setAvatar(result.info.secure_url);
        }
      }
    );
  };

  return (
    <CloudinaryContext cloudName="dqu6ag1sc">
      <main className="attendee-container">
        {step === 1 && (
          <TicketSelection
            handleTicketSelector={handleTicketSelection}
            handleNextStep={handleNextStep}
            handleCancel={handleCancel}
            handleQuantityChange={handleQuantityChange}
          />
        )}

        {step === 2 && (
          <>
            <section className="attendee-header">
              <div className="header-content">
                <h1 className="header-title">Attendee Details</h1>
                <span className="header-step">Step 2/3</span>
              </div>
              <div className="progress-bar">
                <svg
                  width="604"
                  height="4"
                  viewBox="0 0 604 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_5_2229)">
                    <path
                      d="M0 2.00012C0 0.895553 0.895431 0.00012207 2 0.00012207H602C603.105 0.00012207 604 0.895553 604 2.00012C604 3.10469 603.105 4.00012 602 4.00012H2.00001C0.895441 4.00012 0 3.10469 0 2.00012Z"
                      fill="#0E464F"
                    />
                    <path
                      d="M0 2.00012C0 0.895553 0.895431 0.00012207 2 0.00012207H324C325.105 0.00012207 326 0.895553 326 2.00012C326 3.10469 325.105 4.00012 324 4.00012H2.00001C0.895436 4.00012 0 3.10469 0 2.00012Z"
                      fill="#24A0B5"
                    />
                  </g>
                </svg>
              </div>
            </section>

            <section className="attendee-details">
              <form onSubmit={handleSubmit}>
                <div className="upload-section">
                  <p className="upload-instruction">Upload Profile Photo *</p>
                  <div className="upload-box">
                    <div
                      className="upload-icon"
                      onClick={openCloudinaryWidget}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          openCloudinaryWidget();
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      aria-label="Upload profile photo"
                    >
                      {isLoading ? (
                        <div className="loading-container">
                          <Spinner
                            borderWidth="4px"
                            color="blue.500"
                            size="lg"
                          />
                        </div>
                      ) : (
                        <>
                          {avatar && (
                            <div className="image-hover-container">
                              <img
                                src={avatar}
                                alt="Uploaded profile"
                                className="uploaded-image"
                              />
                              <div className="image-hover-text">
                                <svg
                                  width="32"
                                  height="32"
                                  viewBox="0 0 32 32"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M25.2639 14.8161C24.6812 10.2267 20.7505 6.66675 16.0052 6.66675C12.3305 6.66675 9.13854 8.81475 7.68121 12.2001C4.81721 13.0561 2.67188 15.7601 2.67188 18.6667C2.67188 22.3427 5.66254 25.3334 9.33854 25.3334H10.6719V22.6667H9.33854C7.13321 22.6667 5.33854 20.8721 5.33854 18.6667C5.33854 16.7947 6.93721 14.9907 8.90254 14.6454L9.67721 14.5094L9.93321 13.7654C10.8705 11.0307 13.1972 9.33341 16.0052 9.33341C19.6812 9.33341 22.6719 12.3241 22.6719 16.0001V17.3334H24.0052C25.4759 17.3334 26.6719 18.5294 26.6719 20.0001C26.6719 21.4707 25.4759 22.6667 24.0052 22.6667H21.3385V25.3334H24.0052C26.9465 25.3334 29.3385 22.9414 29.3385 20.0001C29.337 18.8048 28.9347 17.6445 28.196 16.7047C27.4574 15.765 26.425 15.1 25.2639 14.8161Z"
                                    fill="#FAFAFA"
                                  />
                                  <path
                                    d="M17.3385 18.6667V13.3334H14.6719V18.6667H10.6719L16.0052 25.3334L21.3385 18.6667H17.3385Z"
                                    fill="#FAFAFA"
                                  />
                                </svg>
                                <p>Drag and Drop or Click to Upload</p>
                              </div>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                    {avatarError && (
                      <p className="error-message">{avatarError}</p>
                    )}
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
                    <rect width="556" height="4" fill="#07373F" />
                  </svg>
                </div>

                <div className="input-section">
                  <label className="input-label">Enter your name *</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onBlur={() => validateName(name)}
                    aria-label="Enter your name"
                  />
                  {nameError && <p className="error-message">{nameError}</p>}
                </div>

                <div className="input-section">
                  <label className="input-label">Enter your email *</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => validateEmail(email)}
                    aria-label="Enter your email"
                    placeholder="beloved@gmail.com"
                  />
                  {emailError && <p className="error-message">{emailError}</p>}
                </div>

                <div className="action-buttons">
                  <button
                    type="button"
                    className="back-button"
                    onClick={() => setStep(1)}
                  >
                    Back
                  </button>
                  <button type="submit" className="submit-button">
                    Get My Free Ticket
                  </button>
                </div>
              </form>
            </section>
          </>
        )}

        {step === 3 && (
          <TicketGenerator
            name={name}
            email={email}
            avatar={avatar}
            ticketType={selectedTicket}
            quantity={quantity}
          />
        )}
      </main>
    </CloudinaryContext>
  );
};

export default Form;
