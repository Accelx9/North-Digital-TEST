"use client";
import React, { InputHTMLAttributes, useEffect, useRef, useState } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  options?: { label: string; value: string }[];
}

const Options = [
  {
    label: "1",
    value: "1",
  },
  {
    label: "1",
    value: "2",
  },
];

export const AutoComplete = ({ label, options = Options, ...props }: Props) => {
  const [value, setValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestions = options.filter((option) =>
    option.label.toLowerCase().includes(value.toLowerCase())
  );

  const autocompleteRef = useRef<any>();

  useEffect(() => {
    const handleClick = (event: any) => {
      if (
        autocompleteRef.current &&
        !autocompleteRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setValue(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className="w-full relative" ref={autocompleteRef}>
      {label && (
        <label className="text-grey" htmlFor={props.name}>
          {label}
        </label>
      )}
      <input
        value={value}
        onChange={handleChange}
        placeholder=""
        className={`h-16 p-4 outline-primary w-full bg-white ${
          label && "mt-2"
        }`}
        onFocus={() => setShowSuggestions(true)}
        {...props}
      />
      {showSuggestions && (
        <ul className=" w-full absolute -bottom-30 z-50 bg-white list-none max-h-72 overflow-y-auto m-0 p-0 border-t border-t-grey">
          {suggestions.map((suggestion) => (
            <li
              className="list-none bg-white hover:bg-light p-2 border-t border-t-grey"
              onClick={() => handleSuggestionClick(suggestion.value)}
              key={suggestion.value}
            >
              {suggestion.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
