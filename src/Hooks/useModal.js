import { useState, useCallback } from "react";

const useModal = () => {
  const [modal, setModal] = useState(null);

  const openModal = useCallback((data) => {
    setModal(data);
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setModal(null);
    document.body.style.overflow = "";
  }, []);

  return { modal, openModal, closeModal };
}

export default useModal;