import React, { useState } from "react";
import Lottie from "lottie-react";
import Link from "next/link";
import DashboardUserDetails from "../components/DashboardUserDetails";
import DashboardContent from "../components/DashboardContent";
import Notification from "../components/Notification.js";

export default function learningChannel() {
  const [Notify, setNotify] = useState(false);
  return (
    <>
      {Notify ? (
        <Notification setNotify={setNotify} />
      ) : (
        <>
          <DashboardUserDetails setNotify={setNotify}/>
          <DashboardContent />
        </>
      )}
    </>
  );
}
