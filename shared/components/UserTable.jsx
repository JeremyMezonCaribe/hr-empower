import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditButton from './utils/EditButton';
import { BLUE_COLOR, PRIMARY_FONT } from '../constants/styledConstants';
import { GetAllEmployees } from '@/services/empleadosService';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: BLUE_COLOR,
    color: theme.palette.common.white,
    fontWeight: 600,
    fontFamily: PRIMARY_FONT
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontFamily: PRIMARY_FONT
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('JM-01', "Jeremy Mezon", "CEO", "jeremymezon@gmail.com", ""),
  createData('RO-02', "Rafael Ogando", "CTO", "rafaelogando813@gmail.com", ""),
  createData('CA-01', "Cesar Antonio Gonzalez", "Gerente de IT", "09pinales@gmail.com", ""),
  createData('ER-02', "Erick Rosario", "Gerente de Finanzas", "erickrosario@gmail.com", ""),
  createData('EO-03', "Estik Ogando", "Gerente de Marketing", "estikogando@gmail.com", "")
];

const UserTable = ({UserData=[]}) => {

  const [user,setUser] = React.useState(UserData)

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="right">Nombre de Usuario</StyledTableCell>
            <StyledTableCell align="right">Rol de Usuario</StyledTableCell>
            <StyledTableCell align="right">Editar Usuario</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {UserData.map((row) => (
            <StyledTableRow key={row.ID}>
              <StyledTableCell component="th" scope="row">
                {row.ID}
              </StyledTableCell>
              <StyledTableCell align="right">{row?.NombreUsuario}</StyledTableCell>
              <StyledTableCell align="right">{row?.Descripcion}</StyledTableCell>
              <StyledTableCell align="right">
                <EditButton>Editar</EditButton>
                </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UserTable