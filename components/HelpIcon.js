import React from "react";
import Link from "next/link";

const HelpIcon = ({ setNotify }) => {
  return (
    <>
      <Link class="help-icon-holder" href="help">
        <img
          src="https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/help-icon.svg"
          alt=""
        />
      </Link>
    </>
  );
};
export default HelpIcon;