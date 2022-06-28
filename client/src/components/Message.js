import { Alert } from "@mui/material";
import React from "react";

function Message({ severity, children }) {
  return <Alert severity={severity}>{children}</Alert>;
}

export default Message;
