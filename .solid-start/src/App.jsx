import logo from "./logo.svg";
import styles from "./App.module.css";
import { createSignal, createEffect } from "solid-js";
import { For } from "solid-js/web";
import { getDistance } from "./utils";
import { events, setEvents } from "./data.js";
import {Buffer} from "./components/buffer.jsx";
import {actions, setActions, undo} from "./utils/undo.js"
import {Action_component} from "./components/Action.jsx"



import traveling_image from "./assets/favicon.ico";


const day_start_time = 50;

let cur_time;


let dragging = null
let toSwap = null




createEffect(() => {
  localStorage.setItem("actions", JSON.stringify(actions()))
})


function Actions_log(){
  return (
    <div id="actions">
      {actions().map((action) => <div className="action">
        <Action_component   action={action}  />
      </div>)}
    </div>
  )
}




createEffect(() => {
  console.log(`events have changed`);
  console.table(events());
  cur_time = day_start_time;
  console.table(actions())
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
        style={`height: ${event.total_time/2}px;`}
        onDragStart={(e) => {
          // document.body.style.cursor = "grabbing";
          dragging = index
        }}
        ondragover={(e) => {
          if (dragging == index) {
            //let it do so as the users way of canceling
          }
          toSwap = [index, dragging]
          
        }}
        ondragend={(e) => {
          const ev = [...events()]
          setActions([...actions(), {
            type: "swap",
            swapped: toSwap,
            time: new Date()
          }])
          ev[toSwap[0]] = events()[toSwap[1]]
          ev[toSwap[1]] = events()[toSwap[0]]
          setEvents(ev);
          dragging = null
          toSwap = null
        }}
      >
        <header >
            <h2 style={`color: ${event.color}`}>{event.name}</h2>
          <div className={styles.controls}>
            <button
              onclick={() => {
                event.total_time -= 10;
                actions().push({
                  type: "minus",
                  amount: 10,
                  index_of_changed_event: index,
                  event_name: event.name, // for confirmation
                  time: new Date()
                })
                setActions([...actions()])
                setEvents([...events()]);
              }}
              
              >
              -
            </button>
              <p>total_time: {event.total_time}</p>

            <button
              onclick={() => {
                event.total_time += 10;
                actions().push({
                  type: "plus",
                  amount: 10,
                  index_of_changed_event: index,
                  event_name: event.name, // for confirmation
                  time: new Date()
                })
                setActions([...actions()])
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

        {!allowed? <p className={styles.not_allowed}>it seems as thought you are not able to atebd this event</p>: ""}

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
    <div id={styles.root}>
      <button onclick={() => undo()}>undo</button>
      <Actions_log/>
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
    </div>
  );

}

