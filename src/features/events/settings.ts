import {render_events} from "./stateFullUtils"
export function toggle_event_size_callapse(){
    event_size_callapse = !event_size_callapse
    localStorage.setItem("event_size_callapse?", JSON.stringify(event_size_callapse))
    render_events()
}
export let event_size_callapse: boolean = JSON.parse(localStorage.getItem("event_size_callapse?") || "false") 
/**
 * @type {number} this is used to dictate for every event while in event_size_callapse false mode how much to big the height should be in comparision to to the event duration and the same idea is true with the buffer
 */
export let time_to_size_multiplier: number = .6