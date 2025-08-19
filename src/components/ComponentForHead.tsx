// components/ComponentForHead.tsx

import React from "react";

export function Logo() {
  return (
    <img
      className="cursor-pointer ml-12"
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
    <input
      className="h-8 mt-7 p-5 rounded-3xl w-48 -ml-3.5 border"
      type="text"
      placeholder="Որոնում"
      value={value}
      onChange={onChange}
    />
  );
}
