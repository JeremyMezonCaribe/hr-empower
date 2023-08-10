import EmployeeTable from "@/shared/components/EmployeeTable"
import { PRIMARY_COLOR } from "@/shared/constants/styledConstants"
import { Button, TextField } from "@mui/material"
import { Form } from "react-bootstrap"

const Empleados = () => {

    return (
        <section>
            <div className="mt-4">
                <h3>Empleados</h3>
                <div className="my-5 d-flex justify-content-between">
                    <div>
                        <Form>
                            <TextField id="outlined-basic" placeholder="Buscar empleado" label="Buscar" variant="outlined" />
                        </Form>
                    </div>
                    <div>
                        <Button sx={{backgroundColor: PRIMARY_COLOR}} variant="contained" >Agregar Empleado</Button>
                    </div>
                </div>
            </div>
            <div>
                <EmployeeTable />
            </div>
        </section>
    )
}

Empleados.layout = "Contentlayout"
export default Empleados