import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";

import BaseModal from "../utils/BaseModal";
import { Button, Dialog, IconButton } from "@mui/material";
import {
  PRIMARY_COLOR,
  PURPURE_COLOR,
} from "@/shared/constants/styledConstants";
import SecondaryButton from "../utils/SecondaryButton";
import PrimaryButton from "../utils/PrimaryButton";
import { Col, Row } from "react-bootstrap";
import SingleInput from "../form/SingleInput";
import ComboInput from "../form/ComboInput";
import { Event } from "@mui/icons-material";
import dayjs from "dayjs";
import { GetAllEmployees } from "@/services/empleadosService";
import { CreateVacation } from "@/services/vacacionesService";
import { CreateLincense } from "@/services/licenciasService";

const AddEvent = ({ isOpen, handleClose = () => {} }) => {
  //   const [open, setOpen] = useState(isOpen);
  const [open, setOpen] = useState(false);
  const [eventData, setEventData] = useState({});

  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
      startDateValue: dayjs(new Date()).format("YYYY-MM-DD"),
      endDateValue: dayjs(new Date()).format("YYYY-MM-DD"),
      rangeValue: `${dayjs().format("D MMM YYYY")} - ${dayjs().format(
        "D MMM YYYY"
      )}`,
    },
  ]);
  const [employeeOptions, setEmployeeOptions] = useState([]);

  const router = useRouter();

  const eventOptions = [
    {
      label: "Vacaciones",
      value: "vacaciones",
    },
    {
      label: "Licencias",
      value: "licencias",
    },
  ];

  const handleOpenDate = () => setOpen(true);
  const handleCloseDate = () => setOpen(false);
  const getEmployeesOptions = () => {
    if (employeeOptions.length) return;
    GetAllEmployees().then((data) => {
      const dataOptions = data.map(({ ID, Nombre }) => {
        return { label: Nombre, value: ID };
      });
      setEmployeeOptions(dataOptions);
    });
  };

  //   const handleClose = () => setOpen(false);

  return (
    <BaseModal open={isOpen} handleClose={handleClose}>
      <h3 className="font-weight-bold mb-3">Agregar Evento</h3>
      <Row className="my-2">
        <Col xs={12} md={4}>
          <ComboInput
            label="Tipo de Solicitud"
            placeholder="Selecciona tipo de solicitud"
            options={eventOptions}
            onChangeHandler={(e) => {
              setEventData({ ...eventData, type: e.value });
            }}
          />
        </Col>
        <Col xs={12} md={8}>
          <ComboInput
            label="Nombre del Empleado"
            options={employeeOptions}
            onFocusHandler={getEmployeesOptions}
            onChangeHandler={(e) => {
              setEventData({ ...eventData, EmpleadoID: e.value });
            }}
          />
        </Col>
      </Row>
      <Row className="my-2">
        <Col xs={4}>
          <p className="mg-b-10 font-weight-bold h6 text-black">Fecha</p>
          <div className="d-flex align-items-center">
            <IconButton onClick={handleOpenDate}>
              <Event />
            </IconButton>
            <span>{dates[0].rangeValue}</span>
          </div>
        </Col>
        <Col xs={8}>
          <SingleInput
            label="Descripción del evento"
            style={{ fieldset: { minHeight: "100px" }, minHeight: "100px" }}
            changeHandler={(e) => {
              setEventData({ ...eventData, Descripcion: e });
            }}
          />
        </Col>
      </Row>
      <div className="d-flex justify-content-end mt-3">
        <SecondaryButton handlerClick={handleClose}>Cancel</SecondaryButton>
        <PrimaryButton
          classname="ms-2"
          handlerClick={async () => {
            if (eventData?.type == "vacaciones") {
              const vacationsData = {
                EmpleadoID: eventData.EmpleadoID,
                FechaInicio: eventData.startDateValue,
                FechaFin: eventData.endDateValue,
                Aprobada: true,
              };

              const vacationsAdded = await CreateVacation(vacationsData);
            } else if (eventData?.type == "licencias") {
              const licenciaData = {
                EmpleadoID: eventData.EmpleadoID,
                FechaInicio: eventData.startDateValue,
                FechaFin: eventData.endDateValue,
                Comentarios: eventData.Descripcion,
                Tipo: "Indispuesto",
              };
              const licenceAdded = await CreateLincense(licenciaData);
            }
            handleClose();
          }}
        >
          Guardar Evento
        </PrimaryButton>
        <Dialog onClose={handleCloseDate} open={open}>
          <DateRange
            editableDateInputs={true}
            rangeColors={[PURPURE_COLOR]}
            onChange={(item) => {
              const { startDate, endDate } = item.selection;
              setDates([
                {
                  ...item.selection,
                  startDateValue: dayjs(startDate).format("YYYY-MM-DD"),
                  endDateValue: dayjs(endDate).format("YYYY-MM-DD"),
                  rangeValue: `${dayjs(startDate).format(
                    "D MMM YYYY"
                  )} - ${dayjs(endDate).format("D MMM YYYY")}`,
                },
              ]);
              setEventData({
                ...eventData,
                startDateValue: dayjs(startDate).format("YYYY-MM-DD"),
                endDateValue: dayjs(endDate).format("YYYY-MM-DD"),
              });
            }}
            moveRangeOnFirstSelection={false}
            ranges={dates}
          />
          <Button
            onClick={() => {
              handleCloseDate();
              // return onChangeDatePicker(state[0]);
            }}
            sx={{
              width: "100%",
              backgroundColor: PRIMARY_COLOR,
              borderRadius: 0,
              color: "white",
              "&:hover": {
                color: PRIMARY_COLOR,
              },
            }}
          >
            Confirm
          </Button>
        </Dialog>
      </div>
    </BaseModal>
  );
};

export default AddEvent;
