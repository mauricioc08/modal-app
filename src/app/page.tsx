"use client";
import styles from "@/components/modal.module.css";
import { useState } from 'react';
import Modal from "@/components/modal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main>
    {!isModalOpen && <button className={styles.btnShowModal} onClick={handleOpenModal}>Open Modal</button>}
    {isModalOpen && <Modal onClose={handleCloseModal} />}
  </main>
  );
}
