"use client";
import { useEffect, useCallback, useRef } from "react";
import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import Form from "./Form";
// import {Logo} from "../icons/icons";
const PopupForm = ({ setShowModal, showModal }) => {
  // useRef to store intervalId
  const intervalIdRef = useRef(null);

  useEffect(() => {
    intervalIdRef.current = setInterval(() => {
      setShowModal(true);
      document.body.style.overflow = "hidden";
    }, 10000);

    // Cleanup the interval when the component unmounts or modal is closed
    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, [setShowModal]);

  const closeModal = useCallback(() => {
    setShowModal(false);
    document.body.style.overflow = "auto"; // Restore scrolling

    // Clear the interval when the modal is closed
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = null; // Reset the ref
    }
  }, [setShowModal]);

  return (
    <>
      {showModal && (
        <section className="fixed z-50 w-full h-screen bg-[rgb(0,0,0)] bg-opacity-70 top-0 left-0">
          <article className="flex justify-center items-center h-full">
            <div className="flex flex-col gap-3 max-w-3xl w-full shadow-2xl p-4 relative rounded-md">
              <button
                onClick={closeModal}
                className="absolute top-[22px] lg:top-0 right-[3px] w-8 h-8 flex justify-center items-center text-lg rounded-full bg-primary hover:bg-primary/90 font-bold text-bgclr"
              >
                <IoCloseSharp />
              </button>
              <div className="flex flex-col w-full gap-4 items-center justify-center bg-bgclr p-5">
                <div>
                  <Logo />
                </div>
                
                <Form />
              </div>
            </div>
          </article>
        </section>
      )}
      
    </>
  );
};

export default PopupForm;
