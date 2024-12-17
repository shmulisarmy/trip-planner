import { createEffect, createSignal } from "solid-js";
import Event_ from "./types"
import {createStore} from "solid-js/store"
import { Accessor, Setter } from "solid-js"; // ✅ Correct import.
import {SetStoreFunction} from "solid-js/store"



const initialEvents: {[key: string]: Event_[]} = {}
for (const day of JSON.parse(localStorage.getItem("all-event-days") || "[]")) {
    initialEvents[`events-${day}`] = JSON.parse(localStorage.getItem(`events-${day}`) || "[]")
}


const [events, setEvents] = createStore<{[key: string]: Event_[]}>(
    initialEvents 
);








for (const key in events) {
    createEffect(() => {
        localStorage.setItem(key, JSON.stringify(events[key]))
    })
}


export function add_event_day(day: string){
    
    const all_event_days = JSON.parse(localStorage.getItem("all-event-days") || "[]")
    all_event_days.push(day)
    localStorage.setItem("all-event-days", JSON.stringify(all_event_days))
    
    setEvents(`events-${day}`, [])
    createEffect(() => {  
        localStorage.setItem(`events-${day}`, JSON.stringify(events[`events-${day}`]))
    })
}


export const stuff = {events, setEvents}
