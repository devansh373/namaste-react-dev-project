import React from "react";

function Shimmer() {
  return Array(20)
    .fill("")
    .map((arr, index) => (
      <div
        key={index}
        data-testid="shimmer-test-id"
        className=" w-[250] h-[250] bg-gray-300 "
      ></div>
    ));
}

export default Shimmer;
