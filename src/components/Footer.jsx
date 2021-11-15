import React, { useContext } from "react";
import { CurrentUserContext } from "./CurrentUserContext";

export default function Footer() {
  const { name } = useContext(CurrentUserContext);
  return <footer>Glad to see you back {name}</footer>;
}
