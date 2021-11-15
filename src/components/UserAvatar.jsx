import React, { useContext } from "react";
import { CurrentUserContext } from "./CurrentUserContext";

export default function UserAvatar() {
  const { url, name } = useContext(CurrentUserContext);
  return (
    <div className="avatar">
      <img
        src={
          url ||
          "https://www.lewesac.co.uk/wp-content/uploads/2017/12/default-avatar.jpg"
        }
        alt={name}
      />
    </div>
  );
}
