import React from "react";

const EditIcon = () => {
  const isOnline = navigator.onLine;
  if (!isOnline) {
    return <div>Edit</div>;
  }
  return (
    <div>
      <i className="ri-edit-line text-blue-400 text-xl hover:text-blue-700 hover:cursor-pointer hover:font-bold"></i>
    </div>
  );
};

export default EditIcon;
