import { GetAllUsers } from "@/services/usuariosService"
import EmployeeTable from "@/shared/components/EmployeeTable"
import AddUserModal from "@/shared/components/users/AddUserModal"
import UserTable from "@/shared/components/UserTable"
import AddButton from "@/shared/components/utils/AddButton"
import { PRIMARY_COLOR } from "@/shared/constants/styledConstants"
import { Button, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import { Form } from "react-bootstrap"

const Usuarios = () => {

    const [user,setUser] = useState([])

    useEffect(()=>{
        GetAllUsers().then(data => {
            setUser(data)
        })
        console.log(user)
    })


    return (
        <section>
            <div className="mt-4">
                <h3>Usuarios</h3>
                <div className="my-5 d-flex justify-content-between">
                    <div>
                        <Form>
                            <TextField id="outlined-basic" placeholder="Nombre de usuario" label="Buscar" variant="outlined" />
                        </Form>
                    </div>
                    <div>
                        <AddUserModal />
                    </div>
                </div>
            </div>
            <div>
                <UserTable UserData={user} />
            </div>
        </section>
    )
}

Usuarios.layout = "Contentlayout"
export default Usuarios