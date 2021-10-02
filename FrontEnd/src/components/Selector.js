import React from "react";
import { Row, Col, Space, Cascader } from "antd";

const selectorStyle = {
  height: "8vh",
  background: "#fff",
  padding: "0 4vw",
  display: "flex",
  alignItems: "center",
};

const specialization = [
  {
    value: "Neurology",
    label: "Neurology",
  },
  {
    value: "Medicine",
    label: "Medicine",
  },
];

const availability = [
  {
    value: "Morning",
    label: "Morning",
  },
  {
    value: "Evening",
    label: "Evening",
  },
];

const city = [
  {
    value: "Dibrugarh",
    label: "Dibrugarh",
  },
  {
    value: "Jorhat",
    label: "Jorhat",
  },
];

export const Selector = ({ setAvailability, setCity, setSpecialization }) => {
  function onSpecializationChange(value) {
    setSpecialization(value[0]);
  }

  function onAvailabilityChange(value) {
    setAvailability(value[0]);
  }

  function onCityChange(value) {
    setCity(value[0]);
  }

  return (
    <Row>
      <Col span={24}>
        <div style={selectorStyle}>
          <Space>
            <Cascader
              options={specialization}
              onChange={onSpecializationChange}
              placeholder="Specialization"
              bordered={false}
              style={{
                width: "140px",
                fontSize: "1rem",
                fontWeight: "bold",
                color: "rgb(87, 85, 85)",
              }}
            />
            <Cascader
              options={availability}
              onChange={onAvailabilityChange}
              placeholder="Availability"
              bordered={false}
              style={{
                width: "120px",
                color: "rgb(87, 85, 85)",
              }}
            />
            <Cascader
              options={city}
              onChange={onCityChange}
              placeholder="City"
              bordered={false}
              style={{
                width: "100px",
                color: "rgb(87, 85, 85)",
              }}
            />
          </Space>
        </div>
      </Col>
    </Row>
  );
};
