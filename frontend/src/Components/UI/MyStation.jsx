import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import StationForm from "../Forms/StationForm";
import StationMap from "../StationComp/StationMap";
import { Navigate } from "react-router-dom";

const MyStation = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
    setValue,
  } = useForm();
  return (
    <Container fluid>
      {!user && <Navigate to="/login" />}
      {!user?.station && (
        <Row style={{ width: "100vw", height: "90vh" }}>
          <Col xs={8} md={4}>
            <StationForm
              {...{
                register,
                handleSubmit,
                errors,
                reset,
                trigger,
              }}
            />
          </Col>
          <Col xs={4} md={8}>
            <StationMap {...{ setValue }} />
          </Col>
        </Row>
      )}
      {user?.station &&
        Object.entries(user).map(([key, value]) => <h1>{user[key]}</h1>)}
    </Container>
  );
};

export default MyStation;
