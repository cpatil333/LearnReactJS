import React, { useState } from "react";

const Header = (props) => {
  const [headerData, setHeaderData] = useState("Header Data");
  function changeData() {
    props.func(headerData);
  }

  return (
    <div onClick={changeData} className="bg-red-600">
      Header
    </div>
  );
};

export default Header;
