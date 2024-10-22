import { createEffect } from "solid-js";
import { stuff } from "./data";
import { get_difference } from "./utils";
import { saved_resize_event } from "./state";
import {mouse} from "./browser_state_and_utils"
import settings from "./settings";
import {size_to_time_multiplier} from "./settings"
import {dragInfo} from "./state"
import { time_display, insertAt } from "./utils";

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
      saved_resize_event.completed = true;
      set_event_duration(saved_resize_event.events_accessor_key, saved_resize_event.index, saved_resize_event.size*settings.size_to_time_multiplier);
    }
  }
, 10);


export function move_grabbed_data_to_right_spot() {
  if (dragInfo.dragged_onto && dragInfo.grabbing){
    /**
     * @param {}
     */
  }
  const both_events_are_from_same_list = dragInfo.dragged_onto?.events_accesor_key == dragInfo.grabbing?.events_accesor_key;
  if (both_events_are_from_same_list){
    let event_list = [...events[dragInfo.dragged_onto.events_accesor_key]];
    // const temp = ev[dragInfo.grabbing?.index];
    const [event_being_moved] = event_list.splice(dragInfo.grabbing.index, 1)


    if (dragInfo.dragged_onto.index > dragInfo.grabbing.index){
      //we minus off one from the index because we are shrinking down the list and the effect is spreading to the dragged_onto_event since its on top
      insertAt(event_list, dragInfo.dragged_onto.index,  event_being_moved)
    } else{
      insertAt(event_list, dragInfo.dragged_onto.index+1,  event_being_moved)
    }
    
    setEvents(dragInfo.grabbing.events_accesor_key, [...event_list]);
  } else if (dragInfo.grabbing != null && dragInfo.dragged_onto != null) {
    const event_list_of_grabbing_event = [...events[dragInfo.grabbing.events_accesor_key]];
    const event_list_of_dragged_onto_event = [...events[dragInfo.dragged_onto.events_accesor_key]];

    const event_being_moved = event_list_of_grabbing_event[dragInfo.grabbing.index]
    insertAt(event_list_of_dragged_onto_event, dragInfo.dragged_onto.index+1,  event_being_moved)
    
    event_list_of_grabbing_event.splice(dragInfo.grabbing.index, 1)
    setEvents(dragInfo.grabbing.events_accesor_key, event_list_of_grabbing_event);
    setEvents(dragInfo.dragged_onto.events_accesor_key, event_list_of_dragged_onto_event);
  } else {
    console.error("Both indexes must be valid numbers.");
  }
}

/**
 * this function assumes that the two items that you want to swap are in the same list
 * @param event_accessor_key 
 */
export function swap(event_accessor_key: string, indexA: number, indexB: number){
  const event_list = [...events[event_accessor_key]];
  const temp = event_list[indexA]
  event_list[indexA] = event_list[indexB]
  event_list[indexB] = temp
  console.table(event_list)
  setEvents(event_accessor_key, event_list)
}
