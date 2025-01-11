import React, { useState, useEffect } from "react";

const Login = ({
  onSignIn,
  onSignUp,
  flashMessage,
  error,
  isLocked,
  lockoutTime,
}) => {
  const [email, setEmail] = useState(""); // Email input state
  const [password, setPassword] = useState(""); // Password input state
  const [rememberMe, setRememberMe] = useState(false); // "Remember Me" checkbox state
  const [isSignUp, setIsSignUp] = useState(false); // Toggle for Sign-Up view

  const [fadeOutFlash, setFadeOutFlash] = useState(false); // For fading out flash messages
  const [fadeOutError, setFadeOutError] = useState(false); // For fading out error messages

  // Load saved email from localStorage when the component mounts
  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberedEmail");
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }
  }, []);

  // Handle fading out the flash message
  useEffect(() => {
    if (flashMessage) {
      const timer = setTimeout(() => setFadeOutFlash(true), 4000); // Start fade-out after 4 seconds
      const clearTimer = setTimeout(() => {
        setFadeOutFlash(false); // Reset fade-out state
      }, 5000); // Remove flash message after fade-out completes

      return () => {
        clearTimeout(timer);
        clearTimeout(clearTimer);
      };
    }
  }, [flashMessage]);

  // Handle fading out the error message
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setFadeOutError(true), 4000); // Start fade-out after 4 seconds
      const clearTimer = setTimeout(() => {
        setFadeOutError(false); // Reset fade-out state
      }, 5000); // Remove error message after fade-out completes

      return () => {
        clearTimeout(timer);
        clearTimeout(clearTimer);
      };
    }
  }, [error]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      isSignUp ? handleSignUp() : handleSignIn();
    }
  };

  const handleSignIn = () => {
    if (rememberMe) {
      localStorage.setItem("rememberedEmail", email); // Save email to localStorage
    } else {
      localStorage.removeItem("rememberedEmail"); // Remove email if "Remember Me" is unchecked
    }
    onSignIn(email, password);
  };

  const handleSignUp = () => {
    onSignUp(email, password);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-dark-background"
      onKeyPress={handleKeyPress} // Listen for keypress
    >
      <div className="w-full max-w-md p-8 space-y-4 bg-dark-surface rounded-lg shadow-lg">
        {/* Message Container with Fixed Height */}
        <div className="h-12">
          {/* Flash Message */}
          {flashMessage && (
            <div
              className={`bg-dark-error text-dark-textPrimary text-center py-2 rounded-md transition-opacity duration-500 ${
                fadeOutFlash ? "opacity-0" : "opacity-100"
              }`}
            >
              {flashMessage}
            </div>
          )}
          {/* Error Message */}
          {error && (
            <div
              className={`bg-dark-error text-dark-textPrimary text-center py-2 rounded-md transition-opacity duration-500 ${
                fadeOutError ? "opacity-0" : "opacity-100"
              }`}
            >
              {error}
            </div>
          )}
        </div>

        <h2 className="text-3xl font-bold text-center text-dark-textPrimary">
          {isSignUp ? "Sign Up" : "Login"}
        </h2>
        <p className="text-center text-dark-textSecondary">
          {isSignUp
            ? "Create your account to get started."
            : "Enter your credentials to continue"}
        </p>

        <div>
          <label className="block text-sm font-medium text-dark-textSecondary">
            Email
          </label>
          <input
            type="email"
            className="w-full px-4 py-2 mt-2 bg-dark-highlight text-dark-textPrimary rounded-md focus:outline-none focus:ring-2 focus:ring-dark-primary"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLocked && !isSignUp} // Disable input if locked and not in sign-up mode
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-dark-textSecondary">
            Password
          </label>
          <input
            type="password"
            className="w-full px-4 py-2 mt-2 bg-dark-highlight text-dark-textPrimary rounded-md focus:outline-none focus:ring-2 focus:ring-dark-primary"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLocked && !isSignUp} // Disable input if locked and not in sign-up mode
          />
        </div>

        {!isSignUp && (
          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              id="rememberMe"
              className="mr-2"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              disabled={isLocked} // Disable checkbox if locked
            />
            <label htmlFor="rememberMe" className="text-dark-textSecondary text-sm">
              Remember Me
            </label>
          </div>
        )}

        <button
          onClick={isSignUp ? handleSignUp : handleSignIn}
          className={`w-full px-4 py-2 mt-4 rounded-md ${
            isSignUp
              ? "bg-dark-primary hover:bg-dark-primaryHover"
              : "bg-dark-primary hover:bg-dark-primaryHover"
          } text-dark-textPrimary focus:outline-none focus:ring-2 focus:ring-dark-primary`}
          disabled={isLocked && !isSignUp} // Only disable if locked and not in sign-up mode
        >
          {isSignUp
            ? "Create Account"
            : isLocked
            ? `Locked (${Math.ceil(lockoutTime / 60)} min left)`
            : "Sign In"}
        </button>

        {isSignUp ? (
          <p className="text-center text-dark-textSecondary text-sm mt-4">
            Already have an account?{" "}
            <span
              className="text-dark-primary cursor-pointer hover:underline"
              onClick={() => setIsSignUp(false)}
            >
              Log in
            </span>
          </p>
        ) : (
          <p className="text-center text-dark-textSecondary text-sm mt-4">
            Don't have an account?{" "}
            <span
              className="text-dark-primary cursor-pointer hover:underline"
              onClick={() => setIsSignUp(true)}
            >
              Sign up
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
