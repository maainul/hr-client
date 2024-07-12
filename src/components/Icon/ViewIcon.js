import React from "react";

const ViewIcon = () => {
  const isOnline = navigator.onLine;
  if (!isOnline) {
    return <div>View</div>;
  }
  return (
    <div>
      <i class="ri-eye-line text-green-500 text-xl hover:cursor-pointer hover:font-bold"></i>
    </div>
  );
};

export default ViewIcon;
