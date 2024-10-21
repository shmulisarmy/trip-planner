import { createEffect } from "solid-js";
import { stuff } from "./data";



const {events, setEvents} = stuff


createEffect(() => {
    console.log("haha i have changed the events.list")
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