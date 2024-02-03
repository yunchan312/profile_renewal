import React from "react";
import { atom } from "recoil";

export const ModalState = atom({
  key: "modalState",
  default: false,
});

export const ModalContents = atom({
  key: "modalContent",
  default: {
    title: "",
    content: null,
    detail: "",
  },
});
