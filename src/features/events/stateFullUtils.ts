import { createEffect } from "solid-js";
import { stuff } from "./data";
import { get_difference } from "./utils";
import { saved_resize_event, mouse_is_down } from "./state";



const {events, setEvents} = stuff


createEffect(() => {
    console.table(events.list)
})

export function render_events(){
    setEvents("list", [...events.list])
}

export function change_event_duration(index: number, amount: number){
    console.log("change_event_duration", {index, amount})
    const new_events = [...events.list]
    new_events[index] = {...new_events[index], duration: new_events[index].duration+amount}
    setEvents("list", new_events)
}

let last_resized_event: undefined|Date;


const two_seconds = 2000


export function set_event_duration(index: number, new_duration: number){
    console.log("change_event_duration", {index, new_duration})
    const now = new Date();
    if (last_resized_event){
        const time_since_last_resized_event = now - last_resized_event;
        if (time_since_last_resized_event < two_seconds){
            return
        }
    }
    if (get_difference(new_duration, events.list[index].duration) >= 10){
        const new_events = [...events.list]
        new_events[index] = {...new_events[index], duration: new_duration}
        setEvents("list", new_events)

        last_resized_event = new Date()
    }
}

let lastMouseUp: Date|undefined = undefined

// window.addEventListener("mousedown", () => {mouse_is_down = true; console.log(`mouse_is_down: ${mouse_is_down}`)})
window.addEventListener("mouseup", () => {
    const now = new Date()
    if (lastMouseUp - now < 1000 && saved_resize_event.index && saved_resize_event.size){
        set_event_duration(saved_resize_event.index, saved_resize_event.size)
        lastMouseUp = now
    }
})
