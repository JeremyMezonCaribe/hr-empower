import { GetAllEmployees } from "@/services/empleadosService"
import AddEmployeeModal from "@/shared/components/employee/AddEmployeeModal"
import EmployeeTable from "@/shared/components/EmployeeTable"
import SingleInput from "@/shared/components/form/SingleInput"
import AddButton from "@/shared/components/utils/AddButton"
import { PRIMARY_COLOR } from "@/shared/constants/styledConstants"
import { Button, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import { Form } from "react-bootstrap"

const Empleados = () => {

    const [employee,setEmployee] = useState([])

    useEffect(()=>{
        GetAllEmployees().then(data => {
            setEmployee(data)
        })
    },[])

    return (
        <section>
            <div className="mt-4">
                <h3>Empleados</h3>
                <div className="my-5 d-flex justify-content-between">
                    <div>
                        <Form>
                            <SingleInput label="Buscar" placeholder="Nombre de Empleado" />
                        </Form>
                    </div>
                    <div>
                        <AddEmployeeModal />
                    </div>
                </div>
            </div>
            <div>
                <EmployeeTable EmployeeData={employee} />
            </div>
        </section>
    )
}

Empleados.layout = "Contentlayout"
export default Empleados