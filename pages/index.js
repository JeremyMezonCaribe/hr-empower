import Head from "next/head";
import { Inter } from "next/font/google";
import favicon from "../public/assets/img/brand/favicon.png";
import styles from "@/styles/Home.module.scss";
import { Alert, Button, Col, Form, Row, Tab, Tabs } from "react-bootstrap";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Seo from "@/shared/layout-components/seo/seo";
import { auth } from "../shared/firebase/firebase";
import { GetAllUsers, GetUserById } from "@/services/usuariosService";

export default function Home() {
  useEffect(() => {
    if (document.body) {
      document
        .querySelector("body")
        .classList.add("ltr", "error-page1", "bg-primary");
    }

    return () => {
      document.body.classList.remove("ltr", "error-page1", "bg-primary");
    };
  }, []);

  // Firebase
  const [err, setError] = useState("");
  const [data, setData] = useState({
    email: "adminnextjs@gmail.com",
    password: "1234567890",
  });
  const { email, password } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setError("");
  };

  let navigate = useRouter();
  const routeChange = () => {
    let path = `/dashboard`;
    navigate.push(path);
  };

  const Login = async (e) => {
    let usersData = await GetAllUsers();
    let user = usersData.filter((userData) => userData.NombreUsuario == email);

    if (user.length) {
      let userInfo = await GetUserById(user[0].ID);

      if (userInfo.NombreUsuario == email && userInfo.Clave == password) {
        localStorage.setItem("NombreUsuario", userInfo.NombreUsuario);
        localStorage.setItem("RolUsuario", userInfo.Descripcion);
        setError("");
        routeChange();
      } else {
        setError("El usuario o clave esta incorrecto");
      }
    } else {
      setError("El usuario o clave esta incorrecto");
    }
  };

  /*
  const ReactLogin = (e) => {
    console.log(data);
    if (data.email == "adminnextjs@gmail.com" && data.password == "1234567890"){
      routeChange()
    }
    else{
      setError("The Auction details did not Match")
      setData({
        "email": "adminnextjs@gmail.com",
       "password": "1234567890",
       })
    }
  }
  */

  const [key, setKey] = useState("nextjs");

  return (
    <>
      <Head>
        <title>Nowa</title>
        <meta name="description" content="Spruha" />
        <link rel="icon" href={favicon.src} />
        {/* <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"></link> */}
      </Head>
      <Seo title={"Login"} />
      <div className="square-box">
        {" "}
        <div></div> <div></div> <div></div> <div></div> <div></div> <div></div>{" "}
        <div></div> <div></div> <div></div> <div></div> <div></div> <div></div>{" "}
        <div></div> <div></div> <div></div>{" "}
      </div>

      <div className="page">
        <div className="page-single">
          <Tabs
            className="justify-content-center"
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
          >
            <Tab eventKey="nextjs" title="HR Empower">
              <div className="container">
                <Row>
                  <Col
                    xl={5}
                    lg={6}
                    md={8}
                    sm={8}
                    xs={10}
                    className="card-sigin-main mx-auto my-auto py-4 justify-content-center"
                  >
                    <div className="card-sigin">
                      {/* <!-- Demo content--> */}
                      <div className="main-card-signin d-md-flex">
                        <div className="wd-100p">
                          <div className="d-flex mb-4">
                            <Link href={`/components/dashboards/dashboard1/`}>
                              <img
                                src={"./assets/img/favicon.png"}
                                className="sign-favicon ht-40"
                                alt="logo"
                              />
                            </Link>
                          </div>
                          <div className="">
                            <div className="main-signup-header">
                              <h2>Bienvenido</h2>
                              <h6 className="font-weight-semibold mb-4">
                                Por favor, entra con tus credenciales
                                empresarial
                              </h6>
                              <div className="panel panel-primary">
                                <div className="tab-menu-heading mb-2 border-bottom-0">
                                  <div className="tabs-menu1">
                                    <Form action="#">
                                      <Form.Group className="form-group">
                                        <Form.Label>Usuario</Form.Label>{" "}
                                        <Form.Control
                                          className="form-control"
                                          placeholder="Escribe tu usuario"
                                          type="text"
                                          name="email"
                                          value={email}
                                          onChange={changeHandler}
                                          required
                                        />
                                      </Form.Group>
                                      <Form.Group className="form-group">
                                        <Form.Label>Contraseña</Form.Label>{" "}
                                        <Form.Control
                                          className="form-control"
                                          placeholder="Escribe tu contraseña"
                                          type="password"
                                          name="password"
                                          value={password}
                                          onChange={changeHandler}
                                          required
                                        />
                                      </Form.Group>
                                      <Button
                                        onClick={Login}
                                        variant=""
                                        className="btn btn-primary btn-block"
                                      >
                                        Ingresar
                                      </Button>
                                    </Form>
                                  </div>
                                </div>

                                <div className="panel-body tabs-menu-body border-0 p-3">
                                  <div className="tab-content"></div>
                                </div>
                              </div>

                              <div className="main-signin-footer text-center mt-3">
                                {err && (
                                  <span className="text-danger">
                                    Usuario o clave incorrectos
                                  </span>
                                )}
                                <p>
                                  <Link href="" className="mb-3">
                                    Olvidaste tu clave?
                                  </Link>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
}
