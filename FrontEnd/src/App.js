import React, { useEffect, useState } from "react";
import axios from "axios";
import { Layout, Menu, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Selector } from "./components/Selector";
import { DoctorList } from "./components/DoctorList";

import "./App.css";

const { Text } = Typography;

const { SubMenu } = Menu;

const { Header, Content } = Layout;

const headerStyle = {
  background: "rgb(87, 85, 85)",
};

const subMenuStyle = {
  background: "rgb(87, 85, 85)",
  margin: "0",
};

const menuStyle = {
  background: "rgb(87, 85, 85)",
  height: "5vh",
};

//fierce-stream-90661.herokuapp.com/?city=Jorhat&aval=Morning&spcl=Neurology

export const App = () => {
  const [specialization, setSpecialization] = useState("");
  const [availability, setAvailability] = useState("");
  const [city, setCity] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let aval = "";
      if (availability === "Morning") {
        aval = "10:30 A.M.";
      } else if (availability === "Evening") {
        aval = "5:30 P.M.";
      }
      const res = await axios.get(
        "https://fierce-stream-90661.herokuapp.com/",
        {
          params: {
            city: city,
            aval: aval,
            spcl: specialization,
          },
        }
      );

      const data = res.data.doctors;

      setDoctors(data);
      setLoading(false);

      console.log(res);
    };
    fetchData();
  }, [specialization, availability, city]);

  return (
    <>
      <Layout>
        <Header className="header" style={headerStyle}>
          <div className="logo">
            {" "}
            <Text style={{ color: "#fff" }}>Board of Doctors</Text>{" "}
          </div>

          <Menu theme="dark" mode="horizontal" style={menuStyle}>
            <SubMenu
              key="sub1"
              icon={<UserOutlined />}
              title="Login"
              style={{ marginLeft: "auto" }}
            >
              <Menu.Item key="1" style={subMenuStyle}>
                Login as Customer
              </Menu.Item>
              <Menu.Item key="2" style={subMenuStyle}>
                Login as Doctor
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Header>

        <Content
          className="site-layout"
          style={{ padding: "0 0px", marginTop: 64 }}
        >
          <Selector
            setAvailability={setAvailability}
            setCity={setCity}
            setSpecialization={setSpecialization}
          />
          <div className="site-layout-background">
            {loading ? <Text>Loading</Text> : <DoctorList doctors={doctors} />}
          </div>
        </Content>
      </Layout>
    </>
  );
};
