'use client';
import WalletConnector from './WalletConnector';
import React, { Fragment } from "react";
import { Button, Modal } from "flowbite-react";

export default function WalletView() {
  const [openModal, setOpenModal] = React.useState(false);
  return (
    <div>
      <Button onClick={() => setOpenModal((prev) => !prev)}>
        Toggle modal
      </Button>
      <WalletConnector open={openModal} onClose={() => {
        setOpenModal(false)
      }} />
    </div>
    
  )
}