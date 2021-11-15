import React, { useContext } from "react";
import { CurrentUserContext } from "./CurrentUserContext";

export default function EditProfileForm() {
  const { name, setName, url, setUrl } = useContext(CurrentUserContext);
  const handleNameInput = (e) => {
    setName(e.target.value);
  };
  const handleAvatarUrlInput = (e) => {
    setUrl(e.target.value);
  };
  return (
    <form>
      <h2>Your informations</h2>
      <label>
        Your name
        <input type="text" value={name} onChange={handleNameInput} />
      </label>
      <br />
      <label>
        Your avatar URL :
        <input type="url" value={url} onChange={handleAvatarUrlInput} />
      </label>
    </form>
  );
}
