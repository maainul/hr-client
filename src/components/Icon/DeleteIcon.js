import React from "react";

const DeleteIcon = () => {
  const isOnline = navigator.onLine;
  if (!isOnline) {
    return <div>Delete</div>;
  }
  return (
    <div>
      <i class="ri-delete-bin-line text-red-500 text-xl hover:cursor-pointer hover:font-bold"></i>
    </div>
  );
};

export default DeleteIcon;
