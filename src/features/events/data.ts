import { createEffect, createSignal } from "solid-js";
import Event_ from "./types"
import {createStore} from "solid-js/store"
import { Accessor, Setter } from "solid-js"; // ✅ Correct import.


const [events, setEvents]: [Accessor<Event_[]>, Setter<Event_[]>] = createSignal(
    JSON.parse(localStorage.getItem("events") || "null") || [
    {
        name: "Party",
        duration: 120,
        location: [2, 5],
    },
    {
        name: "Concert",
        duration: 180,
        location: [10, 12],
    },
    {
        name: "Workshop",
        duration: 90,
        location: [3, 8],
    },
    {
        name: "Meetup",
        duration: 60,
        location: [34, -118],
    },
    
]);

const eventsForDay2: Event_[] = [
    {
        name: "Hackathon",
        duration: 480,
        location: [37, -122],
    },
    {
        name: "Festival",
        duration: 600,
        location: [51, 0],
    },
    {
        name: "Networking Event",
        duration: 45,
        location: [41, -87],
    },
    {
        name: "Webinar",
        duration: 90,
        location: [48, 2], // Example remote location
    },
    {
        name: "Board Meeting",
        duration: 240,
        location: [35, 139],
    }
]

createEffect(() => {
    localStorage.setItem("events", JSON.stringify(events()))
})

console.log(events);

export const stuff = {events, setEvents}
