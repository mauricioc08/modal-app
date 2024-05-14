"use client";

import styles from "./modal.module.css";
import Image from "next/image";
import icon from "../../public/iconClosed.svg";
import { useState } from "react";

interface ModalProps{
    onClose: () => void;
}

export default function Modal({ onClose }: ModalProps) {

    const [isOpen, setIsOpen] = useState(true);

    function handleCloseModal(){
        setIsOpen(false);
        onClose();
    }

    return (
        isOpen && (
          <div className={styles.card}>
            <div className={styles.cardMain}>
            <h1>Lorem ipsum!</h1>
            <Image onClick={handleCloseModal} className={styles.icon} src={icon} width="26" height="26" alt="icone de fechar modal"/>
            </div>
            <div>
              <p className={styles.description}>
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum perspiciatis commodi ullam dolorum facere. laborum aliquid. Molestias quae ratione illum aut omnis sint obcaecati?
              </p>
            </div>
            <div className={styles.buttons}>
              <button className={styles.btn1}>
                LOREM 
              </button>
              <button className={styles.btn2}>
                IPSUM 
              </button>
            </div>
          </div>
        )

    );
  }