import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "antd";
import { Pagination } from "antd";
import { Row, Col } from "antd";

const Home = () => {
  const { Column, ColumnGroup } = Table;
  const [passenger, setPassenger] = useState(null);

  const passengers = async () => {
    const { data } = await axios.get(
      "https://api.instantwebtools.net/v1/passenger?page=0&size=50"
    );
    return data;
  };
  useEffect(async () => {
    const passenger = await passengers();
    setPassenger(passenger);
  }, []);
  console.log(`passenger`, passenger?.data);
  return (
    <div>
      <div style={{ paddingTop:"20px" }}>
      <Row>
        <Col lg={24} md={24} sm={24} xs={24}>
          <h1>Paginated API Integration of Airline Passengers</h1>
        </Col>
      </Row>
      </div>
      <div
        style={{ border: "2px solid white", padding: "10px 30px 30px 30px" }}
      >
        <div style={{ border: "2px solid grey" }}>
          <Row>
            <Col lg={24} md={24} sm={24} xs={24}>
              {passenger && (
                <Table
                  bordered
                  pageSizeOptions={0}
                  dataSource={passenger?.data?.map((item) => {
                    const { airline, _id, name, trips } = item || "";
                    const { name: airlineName, country } = airline[0];
                    return { _id, name, trips, airlineName, country };
                  })}
                >
                  <Column title="ID" dataIndex="_id" key="firstName" />
                  <Column
                    title="Passenger Name"
                    dataIndex="name"
                    key="lastName"
                  />
                  <Column title="Trips" dataIndex="trips" key="age" />
                  <Column
                    title="Airline Name"
                    dataIndex="airlineName"
                    key="address"
                  />
                  <Column
                    title="Country Name"
                    dataIndex="country"
                    key="address"
                  />
                </Table>
              )}
              {/* <Pagination pageSize={5} defaultCurrent={1} total={50} /> */}
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Home;
