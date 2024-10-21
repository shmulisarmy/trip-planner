import { createEffect } from "solid-js";
import { stuff } from "./data";



const {events, setEvents} = stuff


createEffect(() => {
    console.table(events())
})

export function render_events(){
    setEvents([...events()])
}