import React, { useEffect, useState } from "react";
import { Breadcrumb, Card, Col, Row } from "react-bootstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import esLocale from "@fullcalendar/core/locales/es";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import Seo from "@/shared/layout-components/seo/seo";
import AddEvent from "./calendar/AddEvent";
import ComboInput from "./form/ComboInput";
import { GetAllLicenses } from "@/services/licenciasService";
import { GetAllVacations } from "@/services/vacacionesService";
import PrimaryButton from "./utils/PrimaryButton";

export function Calendar() {
  let eventGuid = 0;

  const [isOpen, setOpen] = useState(false);
  const [eventSelected, setEventSelected] = useState("");
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    if (eventSelected == "vacaciones") {
      GetAllVacations().then((data) => {
        const vacationsFiltered = data.map((vacations, index) => {
          return {
            id: index,
            title: vacations.Nombre,
            start: vacations.FechaInicio,
            end: vacations.FechaFin,
          };
        });
        setEventData(vacationsFiltered);
      });
    } else if (eventSelected == "licencias") {
      GetAllLicenses().then((data) => {
        const licensesFiltered = data.map((licences, index) => {
          return {
            id: index,
            title: `${licences.Nombre} - ${licences.Comentarios}`,
            start: licences.FechaInicio,
            end: licences.FechaFin,
          };
        });
        setEventData(licensesFiltered);
      });
    }
  }, [eventSelected]);

  const eventOptions = [
    {
      label: "Vacaciones",
      value: "vacaciones",
    },
    {
      label: "Licencias",
      value: "licencias",
    },
  ];

  let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today
  const INITIAL_EVENTS = [
    {
      id: createEventId(),
      title: "Meeting",
      start: todayStr,
      end: "2023-08-29",
    },
    {
      id: createEventId(),
      title: "Meeting Time",
      start: todayStr + "T16:00:00",
    },
  ];

  function createEventId() {
    return String(eventGuid++);
  }
  const initialstate1 = {
    calendarEvents: [
      {
        title: "Atlanta Monster",
        start: new Date("2023-08-04 00:00"),
        id: "1001",
      },
      {
        title: "My Favorite Murder",
        start: new Date("2019-04-05 00:00"),
        id: "1002",
      },
    ],

    events: [
      {
        title: "My Event 1",
        id: "1",
        bg: "bg-primary",
        border: "border-primary",
      },
      {
        title: "My Event 2",
        id: "2",
        bg: " bg-secondary",
        border: "border-success",
      },
      {
        title: "My Event 3",
        id: "3",
        bg: "bg-warning",
        border: "border-warning",
      },
      { title: "My Event 4", id: "4", bg: "bg-info", border: "border-info" },
      {
        title: "My Event 5",
        id: "5",
        bg: "bg-success",
        border: "border-success",
      },
      {
        title: "My Event 6",
        id: "6",
        bg: "bg-danger",
        border: "border-danger",
      },
    ],
  };
  const [state] = useState(initialstate1);

  useEffect(() => {
    let draggableEl = document.getElementById("external-events");
    new Draggable(draggableEl, {
      itemSelector: ".fc-event",
      eventData: function (eventEl) {
        let title = eventEl.getAttribute("title");
        let id = eventEl.getAttribute("data");
        let classValue = eventEl.getAttribute("class");
        return {
          title: title,
          id: id,
          className: classValue,
        };
      },
    });
  }, []);

  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  }
  const handleEventClick = (clickInfo) => {
    // if (
    //   window.confirm(
    //     `Are you sure you want to delete the event '${clickInfo.event.title}'`
    //   )
    // ) {
    //   clickInfo.event.remove();
    // }
  };
  const handleEvents = (events) => {};

  const handleDateSelect = (selectInfo) => {
    // setOpen(true);
    console.log("Si");
    // let title = prompt("Please enter a new title for your event");
    // let calendarApi = selectInfo.view.calendar;

    // calendarApi.unselect();

    // if (title) {
    //   calendarApi.addEvent({
    //     id: createEventId(),
    //     title,
    //     start: selectInfo.startStr,
    //     end: selectInfo.endStr,
    //     allDay: selectInfo.allDay,
    //   });
    // }
  };
  return (
    <div>
      <Seo title={"Calendar"} />
      {/* <!-- breadcrumb --> */}
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1">
            Calendario
          </span>
        </div>
        <div className="justify-content-center mt-2">
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item
              className="breadcrumb-item tx-15"
              href="/dashboard"
            >
              Dashboard
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item "
              active
              aria-current="page"
            >
              Calendario
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* <!-- /breadcrumb --> */}

      <div className="pd-b-0  main-content-calendar pt-0">
        {/* <!-- Row --> */}
        <Row>
          <Col md={12}>
            <Card>
              <Card.Header>
                <h3 className="card-title">Los eventos del calendario</h3>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col md={12} sm={12} lg={3}>
                    <div id="external-events">
                      <ComboInput
                        label="Tipo de Evento"
                        placeholder="Seleccione el evento"
                        options={eventOptions}
                        onChangeHandler={(e) => {
                          setEventSelected(e.value);
                        }}
                      />
                    </div>
                    <div>
                      <PrimaryButton
                        handlerClick={() => {
                          setOpen(true);
                        }}
                        classname="w-100 mt-4"
                      >
                        Agregar Evento
                      </PrimaryButton>
                    </div>
                  </Col>
                  <Col md={12} lg={9}>
                    <div id="calendar2">
                      <FullCalendar
                        locale={esLocale}
                        plugins={[
                          dayGridPlugin,
                          timeGridPlugin,
                          interactionPlugin,
                        ]}
                        headerToolbar={{
                          left: "prev,next today",
                          center: "title",
                          right: "dayGridMonth,timeGridWeek,timeGridDay",
                        }}
                        initialView="dayGridMonth"
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        weekends={state.weekendsVisible}
                        initialEvents={eventData}
                        events={eventData}
                        select={handleDateSelect}
                        eventContent={renderEventContent}
                        eventClick={handleEventClick}
                        eventsSet={handleEvents}
                      />
                      <AddEvent
                        isOpen={isOpen}
                        handleClose={() => {
                          setOpen(false);
                        }}
                      />
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <!-- End Row --> */}
      </div>
    </div>
  );
}

Calendar.propTypes = {};

Calendar.layout = "Contentlayout";

Calendar.defaultProps = {};

export default Calendar;
