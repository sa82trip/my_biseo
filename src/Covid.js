import React, { useEffect, useState } from "react";

const Covid = (test_props) => {
  useEffect(() => console.log(test_props));
  return <div className="covid">{test_props.length ? "있다" : "없다"}</div>;
};
export default Covid;
