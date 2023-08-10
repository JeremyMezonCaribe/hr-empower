import EmployeeTable from "@/shared/components/EmployeeTable"

const Empleados = () => {

    return (
        <section>
            <div>
                El header de la pagina empleados
            </div>
            <div>
                <EmployeeTable />
            </div>
        </section>
    )
}

Empleados.layout = "Contentlayout"
export default Empleados