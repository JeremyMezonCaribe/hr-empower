import { useEffect, useState } from "react";

import { DeleteUser } from "@/services/usuariosService";
import BaseModal from "../utils/BaseModal";
import DeleteButton from "../utils/DeleteButton";
import SecondaryButton from "../utils/SecondaryButton";
import PrimaryButton from "../utils/PrimaryButton";
import { ROL } from "@/shared/constants/auth";

const DeleteModal = ({ userID }) => {
  const [open, setOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const rol = localStorage.getItem("RolUsuario") || "";
    const hasAccess = rol == ROL.administrador;
    setIsAdmin(hasAccess);
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <DeleteButton
        disabled={!isAdmin}
        handlerClick={handleOpen}
        classname="ms-2"
      />
      <BaseModal open={open} handleClose={handleClose}>
        <h3 className="font-weight-bold mb-3">Eliminar Usuario</h3>
        <div className="d-flex justify-content-between">
          <p className="text-center tx-18">
            Seguro que desea eliminar este usuario?
          </p>
          <div>
            <SecondaryButton handlerClick={handleClose}>
              Cancelar
            </SecondaryButton>
            <PrimaryButton
              handlerClick={async () => {
                const isDeleted = await DeleteUser(userID);
                handleClose();
              }}
            >
              Confirmar
            </PrimaryButton>
          </div>
        </div>
      </BaseModal>
    </>
  );
};

export default DeleteModal;
