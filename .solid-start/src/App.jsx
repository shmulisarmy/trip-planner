import logo from "./logo.svg";
import styles from "./App.module.css";
import { createSignal, createEffect } from "solid-js";
import { For } from "solid-js/web";
import { getDistance } from "./utils";
import { events, setEvents } from "./data.js";

const day_start_time = 50;

let cur_time;


let dragging = null
let toSwap = null


createEffect(() => {
  console.log(`events have changed`);
  console.table(events());
  cur_time = day_start_time;
});

createEffect(() => {
  localStorage.setItem("events", JSON.stringify(events()));
});

function Event({ event, index }) {
  let allowed = true;
  if (
    cur_time < event.hours[0] ||
    cur_time+event.total_time > event.hours[1]){
      allowed = false
    }
  {
    const html_event = (
      <div
        class={styles.event}
        draggable={true}
        style={`height: ${event.total_time}px; background-color: ${!allowed? "red": "white"}`}
        onDragStart={(e) => {
          // document.body.style.cursor = "grabbing";
          dragging = index
        }}
        ondragover={(e) => {
          if (dragging == index) {
            return
          }
          toSwap = [index, dragging]
          
        }}
        ondragend={(e) => {
          const el = e.target
          const ev = [...events()]
          ev[toSwap[0]] = events()[toSwap[1]]
          ev[toSwap[1]] = events()[toSwap[0]]
          setEvents(ev);
          dragging = null
          toSwap = null
        }}
      >
        <header >
            <h2 style={`color: ${event.color}`}>{event.name}</h2>
          <div className={styles.total_time}>
            <button
              onclick={() => {
                event.total_time -= 10;
                setEvents([...events()]);
              }}
              >
              -
            </button>
              <p>total_time: {event.total_time}</p>

            <button
              onclick={() => {
                event.total_time += 10;
                setEvents([...events()]);
              }}
            >
              +
            </button>
          </div>
        </header>

        <div className="other">
          
          <details>
            <summary>description</summary>
            <div className="content">
              <p>{event.description}</p>
            </div>
          </details>
          <p>start time: {Math.round(cur_time)}</p>
          <p>end time: {Math.round(cur_time + event.total_time)}</p>
        </div>
      </div>
    );
    if (index < events().length - 1) {
      const next_event = events()[index + 1];
      const distance = getDistance(
        event.location[0],
        event.location[1],
        next_event.location[0],
        next_event.location[1]
      );
      cur_time += distance;
    }
    cur_time += event.total_time;
    return html_event;
  }
}

export default function App() {
  return (
    <>
      <div className="holding" style={`color: red`}></div>
      <div id={styles.events}>
        {events().map((event, index) => (
          <>
            <Event event={event} index={index} key={event.name} />
            {index < events().length - 1 && (
              <Buffer event={event} index={index} />
            )}
          </>
        ))}
      </div>
    </>
  );

  function Buffer({ event, index }) {
    return (
      <div
        className={styles.buffer}
        style={`height: ${
          (events()[index + 1].location[1] - event.location[1])
        }px`}
      >
        <p>
          distance:{" "}
          {getDistance(
            event.location[0],
            event.location[1],
            events()[index + 1].location[0],
            events()[index + 1].location[1]
          )}
        </p>
      </div>
    );
  }
}
