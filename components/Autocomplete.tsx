"use client";
import React, { InputHTMLAttributes, useEffect, useRef, useState } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  options?: { label: string; value: unknown }[];
  onChange: (value: any) => void;
  errorMessage?: string;
  error?: boolean;
  value?: any;
}

export const AutoComplete = ({
  label,
  value,
  options = [],
  onChange,
  error,
  errorMessage = "This field is required",
  ...props
}: Props) => {
  const [text, setText] = useState<string>("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestions = options.filter((option) =>
    option.label.toLowerCase().includes(text.toLowerCase())
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
    setText(event.target.value);
  };

  const handleSuggestionClick = (suggestion: {
    label: string;
    value: unknown;
  }) => {
    onChange(suggestion.value);
    setText(suggestion.label);
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
        value={text || value}
        onChange={handleChange}
        placeholder=""
        className={`h-16 p-4 outline-primary w-full bg-white ${
          label && "mt-2"
        } ${error && "border border-red-400"}`}
        onFocus={() => setShowSuggestions(true)}
        {...props}
      />
      {error && (
        <p className="text-end text-sm mt-2 text-red-400">{errorMessage}</p>
      )}
      {showSuggestions && (
        <ul className=" w-full absolute -bottom-30 z-50 bg-white list-none max-h-72 overflow-y-auto m-0 p-0 border-t border-t-grey">
          {suggestions.map((suggestion, index) => (
            <li
              className="list-none bg-white hover:bg-light p-2 border-t border-t-grey"
              onClick={() => handleSuggestionClick(suggestion)}
              key={index}
            >
              {suggestion.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
