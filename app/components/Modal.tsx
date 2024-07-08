"use client";

import { useRouter } from "next/navigation";
import { FC } from "react";

type ModalProps = {
  children: React.ReactNode;
};

const Modal: FC<ModalProps> = ({ children }) => {
  const router = useRouter();

  const onContentDialogueClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      onClick={router.back}
    >
      <div
        className="bg-white px-4 py-8 rounded-lg max-w-screen-lg w-full"
        onClick={onContentDialogueClick}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
