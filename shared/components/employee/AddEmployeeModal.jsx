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
import { GetDeparments } from "@/services/departamentosService";

const AddEmployeeModal = ({ jobId }) => {
  const [open, setOpen] = useState(false);
  const [employeeData,setEmployeeData] = useState({
    "DepartamentoID": 1,
  "TipoDocumentoID": 1,
  "Nombre": "",
  "Cedula": "",
  "FechaContratacion": "2023-08-15",
  "Direccion": "",
  "Telefono": "",
  "Celular": "",
  "Salario": 0,
  "Rutadocumento": ""
  })
  const [options,setOptions] = useState([]);

  const router = useRouter();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (value,prop) => {
    setEmployeeData({...employeeData,[prop]:value})
  }
  const getDepartmentOptions = () => {
    GetDeparments().then(data => {
        const dataOptions = data.map(({ID,Descripcion}) => {return {label:Descripcion,value:ID}})
        setOptions(dataOptions)
    })
  }

//   useEffect(()=>{
//     console.log("Data empleado: ",employeeData)
//   })


  return (
    <>
        <AddButton clickHandler={handleOpen}>Agregar Empleado</AddButton>
      <BaseModal open={open} handleClose={handleClose}>
        <h3 className="font-weight-bold mb-3">Agregar Empleado</h3>
        <div>
            <Row>
                <Col className="my-2" xs={12} md={6}>
                    <SingleInput label="Nombre Completo" placeholder="Fulano de tal" changeHandler={(value)=>{handleChange(value,"Nombre")}} />
                </Col>
                <Col className="my-2" xs={12} md={6}>
                <SingleInput label="Cedula" placeholder="01234567891" changeHandler={(value)=>{handleChange(value,"Cedula")}} />
                </Col>
            </Row>
            <Row>
                <Col className="my-2" xs={12} md={6}>
                <SingleInput label="Telefono" placeholder="8090000000" changeHandler={(value)=>{handleChange(value,"Telefono")}} />
                </Col>
                <Col className="my-2" xs={12} md={6}>
                <SingleInput label="Celular" placeholder="8490000000" changeHandler={(value)=>{handleChange(value,"Celular")}} />
                </Col>
            </Row>
            <Row>
                <Col className="my-2" xs={12} md={6}>
                    <ComboInput label="Departamento" onFocusHandler={getDepartmentOptions} onChangeHandler={(value) =>{handleChange(Number(value.value),"DepartamentoID")} } options={options} placeholder="Seleccione un departamento" />
                </Col>
                <Col className="my-2" xs={12} md={6}>
                <SingleInput label="Sueldo" placeholder="RD$000000" changeHandler={(value)=>{handleChange(Number(value),"Salario")}} />
                </Col>
            </Row>
            <Row>
                <Col className="my-2" xs={12}>
                <SingleInput label="Dirección" placeholder="Ej: Calle 01, Sector, Ciudad" changeHandler={(value)=>{handleChange(value,"Direccion")}} />
                </Col>
            </Row>
        </div>
          <div className="mt-4 d-flex justify-content-end">
            <SecondaryButton handlerClick={handleClose}>Cancel</SecondaryButton>
            <PrimaryButton
              handlerClick={async ()=>{
                const data = await CreateEmployee(employeeData);
                handleClose()
              }}
            >
              Guardar Empleado
            </PrimaryButton>
          </div>
      </BaseModal>
    </>
  );
};

export default AddEmployeeModal;
