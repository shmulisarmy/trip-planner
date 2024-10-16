import { events, setEvents } from "../data.js";
import { createSignal } from "solid-js";


function undo(){
    const latest_action = actions().pop()
    setActions([...actions()])
    if (latest_action.type == "swap"){
      const ev = [...events()]
      const {swapped} = latest_action
      ev[swapped[0]] = events()[swapped[1]]
      ev[swapped[1]] = events()[swapped[0]]
      setEvents(ev);
    } else if (latest_action.type == "plus"){
      events()[latest_action.index_of_changed_event].total_time-=latest_action.amount
      setEvents([...events()])
    } else if (latest_action.type == "minus"){
      events()[latest_action.index_of_changed_event].total_time+=latest_action.amount
      setEvents([...events()])
    }
  }


const [actions, setActions] = createSignal(JSON.parse(localStorage.getItem("actions") || "[]"))

  


  export {undo, actions, setActions}