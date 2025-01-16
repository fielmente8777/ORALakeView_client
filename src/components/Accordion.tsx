"use client";
import React, { useEffect, useState } from "react";
import { Heading } from "./TextAndInputComponents";
import { Add, Remove } from "@/icons/icons";
import { AccordionProps } from "@/@types/types";

const Accordion: React.FC<AccordionProps> = ({ title, content, id }) => {
  const [isOpen, setIsOpen] = useState<null | number>(null);

  const toggleAccordion = (id: number) => {
    setIsOpen(isOpen === id ? null : id);
  };
  useEffect(() => {
    setIsOpen(1);
  }, []);

  return (
    <div
      className={`accordion overflow-hidden h-max transition-all ease-linear mt-6 duration-500 ${isOpen === id ? "bg-white" : ""}`}
      onClick={() => toggleAccordion(id)}
    >
      <div className="accordion-header">
        <Heading
          level={3}
          className={`heading4 ${isOpen === id ? "text-primary" : "text-white"}`}
        >
          {title}
        </Heading>
        <span
          className={`${isOpen === id ? "text-white bg-[#c6a445]" : "text-[#c6a445]"}`}
        >
          {isOpen === id ? <Remove /> : <Add />}
        </span>
      </div>
      <div
        className={`${isOpen === id ? "h-auto max-h-auto !text-tertiary opacity-100" : "h-0 opacity-0 hidden max-h-0"} overflow-hidden ease-linear transition-all duration-700`}
      >
        {content}
      </div>
    </div>
  );
};

export default Accordion;
