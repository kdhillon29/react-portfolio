import React, { useEffect, useState } from "react";

const Modal = ({show,children }) => {
  const [showModal, setShowModal] = useState(false);
   useEffect(() => {
     setShowModal(show)

//     // return () => {
//     //   second
//     // }
  }, [show]);

  return (
    <div>
      <button
        className="bg-blue-200  text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Fill Details
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center fixed top-8 inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div
                  className="flex items-start text-blue justify-between p-5 border-b border-solid
                 border-gray-300 rounded "
                >
                  <h3 className="text-3xl font-semibold">Thank You</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative  p-6 flex-auto">
                  <div className="h-[200px]">
                    {children}
                    </div>
                  <button
                    className="text-blue bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Modal;
