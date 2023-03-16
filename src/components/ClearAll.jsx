import { useState } from "react";

export const ClearAll = ({clear}) => {


  return (
    <button className="clear" onClick={clear}>
      Clear All
    </button>
  )
};