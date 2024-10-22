import { createEffect } from "solid-js";
import { stuff } from "./data";
import { get_difference } from "./utils";
import { actions, saved_resize_event } from "./state";
import {mouse} from "./browser_state_and_utils"
import settings from "./settings";
import {dragInfo} from "./state"
import { time_display, insertAt } from "./utils";
import { Action, event_info } from "./classes(uses encapsulation)/actions/swap";

const { events, setEvents } = stuff;

createEffect(() => {
  console.table(events.list);
});

export function render_events() {
  setEvents("list", [...events.list]);
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
      saved_resize_event.completed = true;
      set_event_duration(saved_resize_event.events_accessor_key, saved_resize_event.index, saved_resize_event.size*settings.size_to_time_multiplier);
    }
  }
, 10);


export function move_grabbed_data_to_right_spot() {
  createAction(new Action("place_on", new event_info(dragInfo.grabbing?.events_accesor_key, dragInfo.grabbing?.index), new event_info(dragInfo.dragged_onto?.events_accesor_key, dragInfo.dragged_onto?.index)))
}


// replaced with actions
// /**
//  * this function assumes that the two items that you want to swap are in the same list
//  * @param event_accessor_key 
//  */
// export function swap(event_accessor_key: string, indexA: number, indexB: number){
//   const event_list = [...events[event_accessor_key]];
//   const temp = event_list[indexA]
//   event_list[indexA] = event_list[indexB]
//   event_list[indexB] = temp
//   console.table(event_list)
//   setEvents(event_accessor_key, event_list)
// }

export function createAction(action: Action){
  actions.push(action)
  action.do()
  console.table(actions)
}


export function undo_latest_action(){
  const latest_action = actions.pop()
  latest_action?.undo()
}