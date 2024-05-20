import React from "react";

const Spinner = () => {
  return (
    <div className="flex flex-col gap-y-2 text-3xl font-semibold items-center">
      <div className="spinner mt-60"></div>
      Loding...
    </div>
  );
};

export default Spinner;
