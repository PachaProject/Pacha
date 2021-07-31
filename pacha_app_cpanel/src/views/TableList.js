import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function TableList() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Lista de Tierras registradas</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">ADDRESS</th>
                      <th className="border-0">Location</th>
                      <th className="border-0">Department</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Dakota Rice</td>
                      <td>Av. Lima 566</td>
                      <td>Latitud:xxxxLongitud:xxxxx</td>
                      <td>Cajamarca</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Minerva Hooper</td>
                      <td>Mz 6 Lote 55</td>
                      <td>Latitud:xxxxLongitud:xxxxx</td>
                      <td>Cajamarca</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">List of Crops in Land</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Cultivation</th>
                      <th className="border-0">Ground</th>
                      <th className="border-0">S/. Suggested</th>
                      <th className="border-0">Detail</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>White potato</td>
                      <td>Dakota Rice</td>
                      <td>S/1.00 KG  </td>
                      <td>Harvest Start</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Sweet potato</td>
                      <td>Minerva Hooper</td>
                      <td>S/1.00 KG</td>
                      <td>Harvest Start</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Corn</td>
                      <td>Minerva Hooper</td>
                      <td>S/1.00 KG</td>
                      <td>Harvest Start</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Wheat</td>
                      <td>Minerva Hoope</td>
                      <td>S/1.00 KG</td>
                      <td>Harvest Start</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Yuka</td>
                      <td>Dakota Rice</td>
                      <td>S/1.00 KG</td>
                      <td>Harvest Start</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TableList;
