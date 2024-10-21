import { createEffect } from "solid-js";
import { stuff } from "./data";
import { get_difference } from "./utils";
import { saved_resize_event } from "./state";
import {mouse} from "./browser_state_and_utils"

const { events, setEvents } = stuff;

createEffect(() => {
  console.table(events.list);
});

export function render_events() {
  setEvents("list", [...events.list]);
}

export function change_event_duration(index: number, amount: number) {
  console.log("change_event_duration", { index, amount });
  const new_events = [...events.list];
  new_events[index] = {
    ...new_events[index],
    duration: new_events[index].duration + amount,
  };
  setEvents("list", new_events);
}



export function set_event_duration(index: number, new_duration: number) {
  if (get_difference(new_duration, events.list[index].duration) >= 10) {
    const new_events = [...events.list];
    new_events[index] = { ...new_events[index], duration: new_duration };
    setEvents("list", new_events);
  }
}



setInterval(() => {
  if (
    !saved_resize_event.completed &&
    saved_resize_event.index != undefined &&
    saved_resize_event.size != undefined &&
    !mouse.is_down
  ) {
    set_event_duration(saved_resize_event.index, saved_resize_event.size);
    saved_resize_event.completed = true;
  }
}, 10);
