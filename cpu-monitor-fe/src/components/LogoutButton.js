import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import CpuInfo from "./CpuInfo/CpuInfo";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <>
      <button onClick={() => logout()}>Log Out</button>
      <CpuInfo />
    </>
  );
};

export default LogoutButton;
