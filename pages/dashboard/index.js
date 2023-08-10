import React from "react";
import dynamic from 'next/dynamic';
import Seo from "@/shared/layout-components/seo/seo";
const ReactApexChart = dynamic(()=>import('react-apexcharts'), { ssr: false })
import {useTable,useSortBy,useGlobalFilter,usePagination} from "react-table";
import {Breadcrumb,Col,Row,Card,Button,ProgressBar, Form} from "react-bootstrap";
import Link from "next/link";
import Select from 'react-select';
import * as Dashboarddata from "../../shared/data/dashboards/dashboards1";
import {COLUMNS,DATATABLE,GlobalFilter} from "../../shared/data/dashboards/dashboards1"


const Dashboard = ()=>{
  const tableInstance = useTable(
    {
      columns: COLUMNS,
      data: DATATABLE,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const FormSize = [
    { value: "5", label: "Show 5" },
    { value: "10", label: "Show 10" },
    { value: "15", label: "Show 15" },
  ];

const {
    getTableProps, // table props from react-table
    headerGroups, // headerGroups, if your table has groupings
    getTableBodyProps, // table body props from react-table
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    state,
    setGlobalFilter,
    page, // use, page or rows
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
  } = tableInstance;

const { globalFilter, pageIndex, pageSize } = state;
  return (
    <>
    <Seo title={"Dashboard1"}/>
    <React.Fragment>
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1">DASHBOARD</span>
        </div>
        <div className="justify-content-center mt-2">
          <Breadcrumb>
            <Breadcrumb.Item className=" tx-15" href="#!">
              Dashboard
            </Breadcrumb.Item>
            <Breadcrumb.Item active aria-current="page">
              Overview
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* <!-- /breadcrumb --> */}

      {/* <!-- row --> */}
      <Row>
        <Col xxl={5} xl={12} lg={12} md={12} sm={12}>
          <Row>
            <Col xl={12} lg={12} md={12} xs={12}>
              <Card>
                <Card.Body>
                  <Row>
                    <Col xl={9} lg={7} md={6} sm={12}>
                      <div className="text-justified align-items-center">
                        <h3 className="text-dark font-weight-semibold mb-2 mt-0">
                          Bienvenido{" "}
                          <span className="text-primary">Nick!</span>
                        </h3>
                        {/* <p className="text-dark tx-14 mb-3 lh-3">
                          You have used the 85% of free plan storage. Please
                          upgrade your plan to get unlimited storage.
                        </p>
                        <Button variant="" className="btn btn-primary shadow">
                          Upgrade Now
                        </Button> */}
                      </div>
                    </Col>
                    {/* <Col
                      xl={3}
                      lg={5}
                      md={6}
                      sm={12}
                      className="d-flex align-items-center justify-content-center upgrade-chart-circle"
                    >
                      <div className="chart-circle float-md-end mt-4 mt-md-0">
                        <ReactApexChart
                          options={Dashboarddata.Radialbar.options}
                          series={Dashboarddata.Radialbar.series}
                          type="radialBar"
                          height={180}
                        />
                        <div className="chart-circle-value circle-style">
                          <div className="tx-18 font-weight-semibold">85%</div>
                        </div>
                      </div>
                    </Col> */}
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={6} lg={12} md={12} xs={12}>
              <Card className=" sales-card">
                <Row>
                  <div className="col-8">
                    <div className="ps-4 pt-4 pe-3 pb-4">
                      <div className="">
                        <h6 className="mb-2 tx-12 ">Total de Empleados</h6>
                      </div>
                      <div className="pb-0 mt-0">
                        <div className="d-flex">
                          <h4 className="tx-20 font-weight-semibold mb-2">
                            5,472
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="circle-icon bg-primary-transparent text-center align-self-center overflow-hidden">
                      <i className="fe fe-shopping-bag tx-16 text-primary"></i>
                    </div>
                  </div>
                </Row>
              </Card>
            </Col>
            <Col xl={6} lg={12} md={12} xs={12}>
              <Card className="sales-card">
                <Row>
                  <div className="col-8">
                    <div className="ps-4 pt-4 pe-3 pb-4">
                      <div className="">
                        <h6 className="mb-2 tx-12">Total de Usuarios</h6>
                      </div>
                      <div className="pb-0 mt-0">
                        <div className="d-flex">
                          <h4 className="tx-20 font-weight-semibold mb-2">
                            38
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="circle-icon bg-info-transparent text-center align-self-center overflow-hidden">
                      <i className="fe fe-dollar-sign tx-16 text-info"></i>
                    </div>
                  </div>
                </Row>
              </Card>
            </Col>
            <Col xl={6} lg={12} md={12} xs={12}>
              <Card className=" sales-card">
                <Row>
                  <div className="col-8">
                    <div className="ps-4 pt-4 pe-3 pb-4">
                      <div className="">
                        <h6 className="mb-2 tx-12">Profit Gain</h6>
                      </div>
                      <div className="pb-0 mt-0">
                        <div className="d-flex">
                          <h4 className="tx-20 font-weight-semibold mb-2">
                            $8,943
                          </h4>
                        </div>
                        <p className="mb-0 tx-12 text-muted">
                          Last week
                          <i className="fa fa-caret-up mx-2 text-success"></i>
                          <span className=" text-success font-weight-semibold">
                            +788
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="circle-icon bg-secondary-transparent text-center align-self-center overflow-hidden">
                      <i className="fe fe-external-link tx-16 text-secondary"></i>
                    </div>
                  </div>
                </Row>
              </Card>
            </Col>
            <Col xl={6} lg={12} md={12} xs={12}>
              <Card className="sales-card">
                <Row>
                  <div className="col-8">
                    <div className="ps-4 pt-4 pe-3 pb-4">
                      <div className="">
                        <h6 className="mb-2 tx-12">Total Earnings</h6>
                      </div>
                      <div className="pb-0 mt-0">
                        <div className="d-flex">
                          <h4 className="tx-22 font-weight-semibold mb-2">
                            $57.12M
                          </h4>
                        </div>
                        <p className="mb-0 tx-12  text-muted">
                          Last week
                          <i className="fa fa-caret-down mx-2 text-danger"></i>
                          <span className="text-danger font-weight-semibold">
                            -693
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="circle-icon bg-warning-transparent text-center align-self-center overflow-hidden">
                      <i className="fe fe-credit-card tx-16 text-warning"></i>
                    </div>
                  </div>
                </Row>
              </Card>
            </Col>
          </Row>
        </Col>
        
        {/* <!-- </div> --> */}
      </Row>
      {/* <!-- row closed --> */}

      {/* <!-- row --> */}
      
      {/* <!-- row closed --> */}

      
    </React.Fragment>
    </>
  );
}

Dashboard.layout = "Contentlayout"

export default Dashboard