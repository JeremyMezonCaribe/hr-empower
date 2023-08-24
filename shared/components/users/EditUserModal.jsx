import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Col, Row } from "react-bootstrap";
import SingleInput from "../form/SingleInput";
import ComboInput from "../form/ComboInput";
import AddButton from "../utils/AddButton";
import SecondaryButton from "../utils/SecondaryButton";
import PrimaryButton from "../utils/PrimaryButton";
import BaseModal from "../utils/BaseModal";
import { CreateEmployee } from "@/services/empleadosService";
import { CreateUser, ModifyUser } from "@/services/usuariosService";
import { GetAllRoles } from "@/services/rolesService";
import { ROL } from "@/shared/constants/auth";

const EditUserModal = ({ userParam }) => {
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState(
    userParam || {
      NombreUsuario: "usuario123",
      Clave: "contraseña123",
      RolID: 2,
    }
  );
  const [options, setOptions] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const rol = localStorage.getItem("RolUsuario") || "";
    const hasAccess = rol == ROL.administrador;
    setIsAdmin(hasAccess);
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (value, prop) => {
    setUserData({ ...userData, [prop]: value });
  };

  const getRolOptions = () => {
    GetAllRoles().then((data) => {
      const dataOptions = data.map(({ ID, Descripcion }) => {
        return { label: Descripcion, value: ID };
      });
      setOptions(dataOptions);
    });
  };

  //   useEffect(()=>{
  //     console.log("Data empleado: ",employeeData)
  //   })

  return (
    <>
      <AddButton disabled={!isAdmin} clickHandler={handleOpen}>
        Modificar
      </AddButton>
      <BaseModal open={open} handleClose={handleClose}>
        <h3 className="font-weight-bold mb-3">Modificar Usuario</h3>
        <div>
          <Row>
            <Col className="my-2" xs={12} md={6}>
              <SingleInput
                label="Nombre de Usuario"
                defaultValue={userParam?.NombreUsuario}
                placeholder="fulanodetal"
                changeHandler={(value) => {
                  handleChange(value, "NombreUsuario");
                }}
              />
            </Col>
            <Col className="my-2" xs={12} md={6}>
              <ComboInput
                label="Rol de Usuario"
                placeholder="Seleccione Rol"
                defaultValue={{
                  label: userParam?.Descripcion,
                  value: userParam?.RolID,
                }}
                onFocusHandler={getRolOptions}
                options={options}
              />
            </Col>
          </Row>
          <Row>
            <Col className="my-2" xs={12}>
              <SingleInput
                label="Contraseña"
                type="password"
                placeholder="***"
                defaultValue={userParam?.Clave}
                changeHandler={(value) => {
                  handleChange(value, "Clave");
                }}
              />
            </Col>
          </Row>
        </div>
        <div className="mt-4 d-flex justify-content-end">
          <SecondaryButton handlerClick={handleClose}>Cancelar</SecondaryButton>
          <PrimaryButton
            handlerClick={async () => {
              const data = await ModifyUser(userData.ID, userData);
              handleClose();
            }}
          >
            Guardar Cambios
          </PrimaryButton>
        </div>
      </BaseModal>
    </>
  );
};

export default EditUserModal;
