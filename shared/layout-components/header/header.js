import React from "react";
import {
  Navbar,
  Dropdown,
  Button,
  Form,
  Col,
  Row,
  Modal,
} from "react-bootstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { Delete } from "../../redux/actions/action";
import ProductService from "../../services/ProductService";
import { useRouter } from "next/router";

export default function Header() {
  let { basePath } = useRouter();
  const [Lang, setLang] = React.useState(false);
  function Fullscreen() {
    if (
      (document.fullScreenElement && document.fullScreenElement === null) ||
      (!document.mozFullScreen && !document.webkitIsFullScreen)
    ) {
      if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }

  //leftsidemenu
  const openCloseSidebar = () => {
    document.querySelector("body").classList.toggle("sidenav-toggled");
  };
  //rightsidebar
  const Rightsidebar = () => {
    document.querySelector(".sidebar-right").classList.add("sidebar-open");
  };
  const Darkmode = () => {
    document.querySelector(".app").classList.toggle("dark-theme");
    document.querySelector(".app").classList.remove("light-theme");
  };

  // responsivesearch
  const responsivesearch = () => {
    document.querySelector(".navbar-form").classList.toggle("active");
  };
  //swichermainright
  const swichermainright = () => {
    document.querySelector(".demo_changer").classList.toggle("active");
    document.querySelector(".demo_changer").style.right = "0px";
  };
  const [price, setPrice] = React.useState(0);
  // console.log(price);

  let getdata = useSelector((state) => state.cartreducer.carts);

  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    // console.log(open)
  };

  const [Data, setData] = React.useState([]);

  // const { id } = useParams();
  const { id } = "";

  // console.log(getdata);

  const compare = () => {
    let comparedata = getdata.filter((e) => {
      console.log(e, id);
      return e.id === id;
    });
    setData(comparedata);
  };

  React.useEffect(() => {
    compare();
    // eslint-disable-next-line
  }, [id]);
  const ondelete = (id) => {
    dispatch(Delete(id));
  };

  function total() {
    let price = 0;
    getdata.map((ele) => {
      price = ele.price * ele.qnty + price;
      return price;
    });
    setPrice(price);
  }

  React.useEffect(() => {
    total();
  });
  // let navigate = useNavigate();
  let navigate;
  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };
  return (
    <Navbar className="main-header side-header sticky nav nav-item">
      <div className="main-container container-fluid">
        <div className="main-header-left ">
          <div className="responsive-logo">
            <Link
              href={`/components/dashboards/dashboard1/`}
              className="header-logo"
            >
              <img
                src={`${
                  process.env.NODE_ENV === "production" ? basePath : ""
                }/assets/img/`}
                className="mobile-logo logo-1"
                alt="logo"
              />
              <img
                src={`${
                  process.env.NODE_ENV === "production" ? basePath : ""
                }/assets/img/brand/logo-white.png`}
                className="mobile-logo dark-logo-1"
                alt="logo"
              />
            </Link>
          </div>
          <div
            className="app-sidebar__toggle"
            data-bs-toggle="sidebar"
            onClick={() => openCloseSidebar()}
          >
            <Link className="open-toggle" href="#!">
              <i className="header-icon fe fe-align-left"></i>
            </Link>
            <Link className="close-toggle" href="#!">
              <i className="header-icon fe fe-x"></i>
            </Link>
          </div>
          <div className="logo-horizontal">
            <Link href={`/dashboard/dashboard-1`} className="header-logo">
              <img
                src={`${
                  process.env.NODE_ENV === "production" ? basePath : ""
                }/assets/img/logo.png`}
                className="mobile-logo logo-1"
                alt="logo"
              />
              <img
                src={`${
                  process.env.NODE_ENV === "production" ? basePath : ""
                }/assets/img/brand/logo-white.png`}
                className="mobile-logo dark-logo-1"
                alt="logo"
              />
            </Link>
          </div>
        </div>
        <div className="main-header-right">
          <Navbar.Toggle
            className="navresponsive-toggler d-lg-none ms-auto"
            type="button"
          >
            <span className="navbar-toggler-icon fe fe-more-vertical"></span>
          </Navbar.Toggle>
          <div className="mb-0 navbar navbar-expand-lg   navbar-nav-right responsive-navbar navbar-dark p-0">
            <Navbar.Collapse className="collapse" id="navbarSupportedContent-4">
              <ul className="nav nav-item header-icons navbar-nav-right ">
                <li className="nav-link search-icon d-lg-none d-block">
                  <Form
                    className="navbar-form"
                    role="search"
                    onClick={() => responsivesearch()}
                  >
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                      />
                      <span className="input-group-btn">
                        <Button
                          variant=""
                          type="reset"
                          className="btn btn-default"
                        >
                          <i className="fas fa-times"></i>
                        </Button>
                        <Button
                          variant=""
                          className="btn btn-default nav-link resp-btn"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            className="header-icon-svgs"
                            viewBox="0 0 24 24"
                            width="24px"
                            fill="#000000"
                          >
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                          </svg>
                        </Button>
                      </span>
                    </div>
                  </Form>
                </li>
                <Dropdown className=" main-profile-menu nav nav-item nav-link ps-lg-2">
                  <Dropdown.Toggle
                    className="new nav-link profile-user d-flex"
                    variant=""
                  >
                    <img
                      alt=""
                      src={`${
                        process.env.NODE_ENV === "production" ? basePath : ""
                      }/assets/img/faces/2.jpg`}
                      className=""
                    />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <div className="menu-header-content p-3 border-bottom">
                      <div className="d-flex wd-100p">
                        <div className="main-img-user">
                          <img
                            alt=""
                            src={`${
                              process.env.NODE_ENV === "production"
                                ? basePath
                                : ""
                            }/assets/img/faces/2.jpg`}
                            className=""
                          />
                        </div>
                        <div className="ms-3 my-auto">
                          <h6 className="tx-15 font-weight-semibold mb-0">
                            {localStorage.getItem("NombreUsuario") ||
                              "Administrador"}
                          </h6>
                          <span className="dropdown-title-text subtext op-6  tx-12">
                            {localStorage.getItem("RolUsuario") || "Admin"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Link
                      className="dropdown-item"
                      href={`/components/pages/profile/`}
                    >
                      <i className="far fa-user-circle"></i>Profile
                    </Link>

                    <Link className="dropdown-item" href="/">
                      <i className="far fa-arrow-alt-circle-left"></i> Sign Out
                    </Link>
                  </Dropdown.Menu>
                </Dropdown>
              </ul>
            </Navbar.Collapse>
          </div>
        </div>
      </div>
    </Navbar>
  );
}

Header.propTypes = {};

Header.defaultProps = {};
