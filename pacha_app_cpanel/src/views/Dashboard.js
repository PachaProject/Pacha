import React from "react";
import ChartistGraph from "react-chartist";
import './style.css'
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
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

function Dashboard() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
             <div class="page-content page-container" id="page-content">
                <div class="padding">
                    <div class="row container d-flex justify-content-center">
                        <div class="col-lg-8 grid-margin stretch-card">
                        
                            <div class="card card-weather">
                                <div class="card-body">
                                    <div class="weather-date-location">
                                        <h3>Friday</h3>
                                        <p class="text-gray"> <span class="weather-date">25 March, 2019</span> <span class="weather-location">Sydney, Australia</span> </p>
                                    </div>
                                    <div class="weather-data d-flex">
                                        <div class="mr-auto">
                                            <h4 class="display-3">32 <span class="symbol">°</span>C</h4>
                                            <p> Cloudy </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body p-0">
                                    <div class="d-flex weakly-weather">
                                        <div class="weakly-weather-item">
                                            <p class="mb-0"> Sun </p> <i class="mdi mdi-weather-cloudy"></i>
                                            <p class="mb-0"> 30° </p>
                                        </div>
                                        <div class="weakly-weather-item">
                                            <p class="mb-1"> Mon </p> <i class="mdi mdi-weather-hail"></i>
                                            <p class="mb-0"> 31° </p>
                                        </div>
                                        <div class="weakly-weather-item">
                                            <p class="mb-1"> Tue </p> <i class="mdi mdi-weather-partlycloudy"></i>
                                            <p class="mb-0"> 28° </p>
                                        </div>
                                        <div class="weakly-weather-item">
                                            <p class="mb-1"> Wed </p> <i class="mdi mdi-weather-pouring"></i>
                                            <p class="mb-0"> 30° </p>
                                        </div>
                                        <div class="weakly-weather-item">
                                            <p class="mb-1"> Thu </p> <i class="mdi mdi-weather-pouring"></i>
                                            <p class="mb-0"> 29° </p>
                                        </div>
                                        <div class="weakly-weather-item">
                                            <p class="mb-1"> Fri </p> <i class="mdi mdi-weather-snowy-rainy"></i>
                                            <p class="mb-0"> 31° </p>
                                        </div>
                                        <div class="weakly-weather-item">
                                            <p class="mb-1"> Sat </p> <i class="mdi mdi-weather-snowy"></i>
                                            <p class="mb-0"> 32° </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Price Variation</Card.Title>
                <p className="card-category">24 Weeks</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartHours">
                  <ChartistGraph
                    data={{
                      labels: [
                        "Weeks 1",
                        "Weeks 2",
                        "Weeks 3",
                        "Weeks 4",
                        "Weeks 5",
                        "Weeks 6",
                        "Weeks 7",
                        "Weeks 8",
                      ],
                      series: [
                        [2.87, 3.85, 4.90, 4.92, 5.54, 5.86, 6.98, 6.95],
                        [1.67, 1.52, 1.43, 2.40, 2.87, 3.35, 4.35, 43.7],
                        [1.23, 1.13, 0.67, 1.08, 1.90, 2.39, 3.07, 3.08],
                      ],
                    }}
                    type="Line"
                    options={{
                      low: 0,
                      high: 5,
                      showArea: false,
                      height: "245px",
                      axisX: {
                        showGrid: false,
                      },
                      lineSmooth: true,
                      showLine: true,
                      showPoint: true,
                      fullWidth: true,
                      chartPadding: {
                        right: 50,
                      },
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 640px)",
                        {
                          axisX: {
                            labelInterpolationFnc: function (value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  Potato <i className="fas fa-circle text-danger"></i>
                  Sweet potato <i className="fas fa-circle text-warning"></i>
                  Corn
                </div>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-history"></i>
                 
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col md="4">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Potato seeds</Card.Title>
              </Card.Header>
              <Card.Body>
                <div
                  className="ct-chart ct-perfect-fourth"
                  id="chartPreferences"
                >
                  <ChartistGraph
                    data={{
                      labels: ["40%", "20%", "40%"],
                      series: [40, 20, 40],
                    }}
                    type="Pie"
                  />
                </div>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  En Stock <i className="fas fa-circle text-danger"></i>
                  En Proceso <i className="fas fa-circle text-warning"></i>
                  Sin iniciar
                </div>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-clock"></i>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
      </Container>
    </>
  );
}

export default Dashboard;
