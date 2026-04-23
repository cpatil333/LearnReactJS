import React, { useEffect, useRef, useState } from "react";

const UserLogin = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isCharacterAllowed, setIsCharacterAllowed] = useState(false);
  const [savedPassword, setSavedPassword] = useState([]);

  const generatePassword = () => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (isNumberAllowed) str += "0123456789";
    if (isCharacterAllowed) str += "`!@#$%^&*()+-";
    for (let i = 1; i <= length; i++) {
      let randomIndex = Math.floor(Math.random() * str.length);
      let characterPicked = str.charAt(randomIndex);
      pass += characterPicked;
    }
    setPassword(pass);
  };

  useEffect(() => {
    generatePassword();
  }, [length, isCharacterAllowed, isNumberAllowed]);

  const copyPasswordToClipboard = () => {
    navigator.clipboard.writeText(password);
    passwordRef.current.select();
  };

  const passwordRef = useRef(null);

  return (
    <div className="m-auto flex flex-col gap-3 items-center justify-center mt-10 select-none">
      <h2 className="text-xl">Password Generate</h2>

      <input
        type="text"
        name="password"
        value={password}
        ref={passwordRef}
        className="outline-none border-none bg-gray-50 rounded-2xl px-5 w-[40rem] h-[2rem] text-black"
        onChange={(e) => setPassword(e.target.value)}
      />

      <input
        type="range"
        min={0}
        max={100}
        value={length}
        className="bg-white w-[40rem] rounded-lg mt-5"
        onChange={(e) => setLength(e.target.value)}
      />

      <label htmlFor="numallow">
        <input
          id="numallow"
          checked={isNumberAllowed}
          type="checkbox"
          onChange={(e) => setIsNumberAllowed(e.target.checked)}
        />
        Number Allowed
      </label>
      <label htmlFor="numallow">
        <input
          id="camallow"
          checked={isCharacterAllowed}
          type="checkbox"
          onChange={(e) => setIsCharacterAllowed(e.target.checked)}
        />
        Character Allowed
      </label>

      <button
        className="bg-blue-500 rounded-xl  w-[40rem] px-3 py-2"
        onClick={copyPasswordToClipboard}
      >
        Copy Password
      </button>
      <button
        className="bg-blue-500 rounded-xl mt-3 w-[40rem] px-3 py-2"
        onClick={() => {
          setLength(8);
          setIsCharacterAllowed(false);
          setIsNumberAllowed(false);
        }}
      >
        Reset Password
      </button>
      <button
        className="bg-blue-500 rounded-xl mt-3 w-[40rem] px-3 py-2"
        onClick={(e) => {
          setSavedPassword([...savedPassword, password]);
        }}
      >
        Save Password
      </button>
      {savedPassword.map((item) => {
        return <p key={item}>{item}</p>;
      })}
    </div>
  );
};

export default UserLogin;
