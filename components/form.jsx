import { useState } from "react";
import Button from "./button";

function Radio({ label, checked, onClick }) {
  return (
    <label className="flex flex-row space-x-1">
      {label}
      <input type="radio" className="hidden" checked={checked} onChange={() => {}} />
      <div
        className={`rounded-full w-5 h-5 bg-gray-default flex justify-center items-center ${
          !checked && "hover:bg-gray-light cursor-pointer"
        }`}
        onClick={onClick}
      >
        {checked && <div className="w-3 h-3 rounded-full bg-gray-light" />}
      </div>
    </label>
  );
}

export default function Form() {
  const [checked, setChecked] = useState("none");
  const [submitted, setSubmitted] = useState(false);
  const inputClass =
    "bg-gray-darker focus:outline-none p-1 px-3 text-gray-light text-lg rounded w-full focus:bg-gray-default transition-colors";
  
  /* source: https://codepen.io/elevaunt/pen/VvKdVa */
    const good = (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
      <circle
        className="path circle"
        fill="none"
        stroke="#EAA53A"
        strokeWidth="6"
        strokeMiterlimit="10"
        cx="65.1"
        cy="65.1"
        r="62.1"
      />
      <polyline
        className="path check"
        fill="none"
        stroke="#EAA53A"
        strokeWidth="6"
        strokeLinecap="round"
        strokeMiterlimit="10"
        points="100.2,40.2 51.5,88.8 29.8,67.5 "
      />
    </svg>
  );
  return (
    <form className="w-full p-8 bg-gray-dark rounded">
      <div className="space-y-2 block">
        <div className="font-bold text-lg pb-4">NiranjanUx Registration</div>
        <input className={inputClass} placeholder="First name"></input>
        <input className={inputClass} placeholder="Last name"></input>
        <input className={inputClass} placeholder="Email"></input>
        <div className="text-gray-light text-sm flex items-center pb-4">
          Are you a penguin? <div className="flex-grow" />
          <div className="space-x-4 flex flex-row">
            <Radio
              checked={checked === "Yes"}
              onClick={() => setChecked("Yes")}
              label="Yes"
            />
            <Radio
              checked={checked === "No"}
              onClick={() => setChecked("No")}
              label="No"
            />
          </div>
        </div>
        {!submitted ? (
          <Button
            dark
            onClick={() => {
              console.log("click");
              setSubmitted(true);
            }}
          >
            Submit
          </Button>
        ) : (
          <div className="flex items-center">
            <div className="-translate-y-5">{good}</div>
            <div className="text-gray-light pl-5">
              We have received your registration details. Expect an email from us
              soon with further information!
            </div>
          </div>
        )}
      </div>
    </form>
  );
}
