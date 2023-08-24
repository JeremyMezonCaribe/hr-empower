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
import { CreateUser } from "@/services/usuariosService";
import { GetAllRoles } from "@/services/rolesService";

const AddUserModal = ({ jobId }) => {
  const [open, setOpen] = useState(false);
  const [userData,setUserData] = useState({
    "NombreUsuario": "usuario123",
  "Clave": "contraseña123",
  "RolID": 2
  })
  const [options,setOptions] = useState([]);

  const router = useRouter();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (value,prop) => {
    setUserData({...userData,[prop]:value})
  }

  
  const getRolOptions = () => {
    GetAllRoles().then(data => {
        const dataOptions = data.map(({ID,Descripcion}) => {return {label:Descripcion,value:ID}})
        setOptions(dataOptions)
    })
  }

//   useEffect(()=>{
//     console.log("Data empleado: ",employeeData)
//   })


  return (
    <>
        <AddButton clickHandler={handleOpen}>Agregar Usuario</AddButton>
      <BaseModal open={open} handleClose={handleClose}>
        <h3 className="font-weight-bold mb-3">Agregar Usuario</h3>
        <div>
            <Row>
                <Col className="my-2" xs={12} md={6}>
                    <SingleInput label="Nombre de Usuario" placeholder="fulanodetal" changeHandler={(value)=>{handleChange(value,"NombreUsuario")}} />
                </Col>
                <Col className="my-2" xs={12} md={6}>
                    <ComboInput label="Rol de Usuario" placeholder="Seleccione Rol" onFocusHandler={getRolOptions} options={options}  />
                </Col>
            </Row>
            <Row>
                <Col className="my-2" xs={12}>
                  <SingleInput label="Contraseña" type="password" placeholder="***" changeHandler={(value)=>{handleChange(value,"Clave")}} />
                </Col>
            </Row>
        </div>
          <div className="mt-4 d-flex justify-content-end">
            <SecondaryButton handlerClick={handleClose}>Cancel</SecondaryButton>
            <PrimaryButton
              handlerClick={async ()=>{
                const data = await CreateUser(userData);
                handleClose()
              }}
            >
              Guardar Usuario
            </PrimaryButton>
          </div>
      </BaseModal>
    </>
  );
};

export default AddUserModal;
