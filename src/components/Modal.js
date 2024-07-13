function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
      <div className="relative bg-white rounded-lg shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-gray-500  hover:bg-red-500 hover:rounded-lg"
        >
          <i className="ri-close-line text-accent text-xl hover:text-red-200"></i>
        </button>
        {children}
      </div>
    </div>
  );
}
export default Modal;
