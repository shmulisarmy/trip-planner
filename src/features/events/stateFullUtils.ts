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
  setEvents("list2", [...events.list2]);
}

export function change_event_duration(event_accessor_key: string, index: number, amount: number) {
  console.log("change_event_duration", { index, amount });
  const new_events = [...events[event_accessor_key]];
  new_events[index] = {
    ...new_events[index],
    duration: new_events[index].duration + amount,
  };
  setEvents(event_accessor_key, new_events);
}



export function set_event_duration(event_accessor_key: string, index: number, new_duration: number) {
  if (get_difference(new_duration, events[event_accessor_key][index].duration) >= 10) {
    const new_events = [...events[event_accessor_key]];
    new_events[index] = { ...new_events[index], duration: new_duration };
    setEvents(event_accessor_key, new_events);
  }
}



setInterval(() => {
    if (
      !saved_resize_event.completed &&
      saved_resize_event.index != undefined &&
      saved_resize_event.size != undefined &&
      saved_resize_event.events_accessor_key &&
      !mouse.is_down
    ) {
      set_event_duration(saved_resize_event.events_accessor_key, saved_resize_event.index, saved_resize_event.size);
      saved_resize_event.completed = true;
    }
  }
, 10);
