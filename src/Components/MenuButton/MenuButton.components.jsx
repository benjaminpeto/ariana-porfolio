import React, { useState } from "react";
import { Link } from "react-router-dom";

function MenuButton() {
	const [isOpen, setIsOpen] = useState(false);
	const hide = () => setIsOpen(false);

	return (
    <>
      <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
        >
          {!isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#87614E"
              width="24px"
              height="24px"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#87614E"
              width="24px"
              height="24px"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>

        {isOpen && (
          <div className='navigation-wrapper'>
            <Link
              to="/"
              onClick={hide}
            >
              About
            </Link>
  
            <Link
              to="/portfolio"
              onClick={hide}
            >
              Portfolio
            </Link>
  
            <Link
              to="/contact"
              onClick={hide}
            >
              Contact
            </Link>
          </div>
        )}
    </>
  )
}

export default MenuButton;