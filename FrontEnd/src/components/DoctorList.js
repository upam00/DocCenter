import React from "react";
import { Card, Avatar, Space, Button } from "antd";

const { Meta } = Card;

const hello = "Hello JuahAD";

const buttonStyle = {
  color: "red",
  fontWeight: "bold",
};

const contentStyle = {
  marginLeft: "56px",
  color: "rgb(87, 85, 85)",
};

export const DoctorList = ({ doctors }) => {
  console.log(doctors);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridGap: "10px",
      }}
    >
      {doctors.map((doctor) => {
        const degree = doctor.Degree.map((degree) => degree.toString()).join(
          " "
        );

        const desc = doctor.Specialization.map((s) => s.toString()).join(", ");
        console.log(degree);
        return (
          <Card
            style={{ width: 500 }}
            actions={[
              <p key="availability" style={{ paddingTop: 5 }}>
                {" "}
                Next Availability at {`${doctor.Availability}`}{" "}
              </p>,
              <Button type="text" key="schedule" style={buttonStyle}>
                {" "}
                Schedule Now{" "}
              </Button>,
            ]}
          >
            <Meta
              avatar={
                <Avatar
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  size={"large"}
                />
              }
              title={`Dr. ${doctor.Name}`}
              description={`${doctor.Expereince} years of experience`}
            />
            <div style={contentStyle}>
              <p style={{ margin: 0, padding: 0 }}>
                {" "}
                {degree} <span style={{ float: "right" }}>₹500</span>{" "}
              </p>
              <p style={{ margin: 0, padding: 0 }}> {desc} </p>
            </div>
          </Card>
        );
      })}
    </div>
  );
};
