import { useState } from "react";
import { useRouter } from "next/router";

import BaseModal from "../utils/BaseModal";
import { Button } from "@mui/material";
import { PRIMARY_COLOR } from "@/shared/constants/styledConstants";
import SecondaryButton from "../utils/SecondaryButton";
import PrimaryButton from "../utils/PrimaryButton";
import { Col, Row } from "react-bootstrap";
import SingleInput from "../forms/SingleInput";

const AddEvent = ({ isOpen, handleClose = () => {} }) => {
  //   const [open, setOpen] = useState(isOpen);

  const router = useRouter();

  const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);

  return (
    <BaseModal open={isOpen} handleClose={handleClose}>
      <h3 className="font-weight-bold mb-3">Add Employee</h3>
      <Row className="my-2">
        <Col xs={12} md={4}>
          <SingleInput label="Tipo de Solicitud" />
        </Col>
        <Col xs={12} md={8}>
          <SingleInput label="Nombre del Evento" />
        </Col>
      </Row>
      <Row className="my-2">
        <Col xs={12}>
          <SingleInput
            label="Descripción"
            style={{ fieldset: { minHeight: "100px" }, minHeight: "100px" }}
          />
        </Col>
      </Row>
      <div className="d-flex justify-content-end mt-3">
        <SecondaryButton handlerClick={handleClose}>Cancel</SecondaryButton>
        <PrimaryButton
          classname="ms-2"
          //   handlerClick={
          // //     async () => {
          // //     const isDeleted = await deleteJobById(jobId);
          // //     if (isDeleted?.acknowledged) router.push("/jobs/job-posts");
          // //   }
          // }
        >
          Confirm
        </PrimaryButton>
      </div>
    </BaseModal>
  );
};

export default AddEvent;
