import React from "react";

export function Logo() {
  return (
    <img
      className="cursor-pointer ml-12 w-42 h-32 object-contain"
      src="images/icon.png"
      alt="Icon"
    />
  );
}

interface SearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <div className="relative mt-2 ml-3">
      <input
        className="h-10  pl-4 pr-10 rounded-3xl w-56 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 placeholder-gray-400 text-sm"
        type="text"
        placeholder="Որոնում"
        value={value}
        onChange={onChange}
      />

      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18.5a7.5 7.5 0 006.15-3.85z"
          />
        </svg>
      </div>
    </div>
  );
}
