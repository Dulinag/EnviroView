
"use client"

import React, { useState } from 'react';
import { BasicModal } from "../components/modal";
import Link from "next/link";

function Card() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const sendEmail = () => {
    // Implement your email sending logic here
    console.log(`Sending email to ${email}`);
    // Close the modal after sending the email
    toggleModal(); // Use the toggleModal function to close the modal
  };

  return (
    <>
      <link rel="stylesheet" href="https://cdn.tailgrids.com/tailgrids-fallback.css" />

      <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6]">
        <div className="container mx-auto">
          <div className="flex place-content-evenly flex-wrap -mx-4 fle">
            <div className="w-full md:w-1/2 xl:w-1/3 px-4">
              <div className="bg-white rounded-lg overflow-hidden mb-10">
                <img
                  src="https://img.elo7.com.br/product/original/47300F3/espada-do-dracule-mihawk.jpg"
                  alt="image"
                  className="w-full"
                />
                <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                    <a
                      href="javascript:void(0)"
                      className="font-semibold text-dark text-xl sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] mb-4 block hover:text-primary"
                    >
                      One Piece Sword Replica
                    </a>
                  </h3>
                  <p className="text-base text-body-color leading-relaxed mb-7">
                    Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.
                  </p>
                  <button
                    onClick={toggleModal}

                    className="inline-block py-2 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-white transition"
                  >
                    Intrested
                {showModal &&
            <BasicModal onClose={toggleModal}>
                Hello from the modal!
            </BasicModal>
        }

                     </button>

                     <BasicModal/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default Card;
