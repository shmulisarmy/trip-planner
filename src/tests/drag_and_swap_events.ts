import { Action, event_info } from "../features/events/classes(uses encapsulation)/actions/swap";
import { actions } from "../features/events/state";
import { createAction, undo_latest_action } from "../features/events/stateFullUtils";
import { stuff } from "../features/events/data";
const {events, setEvents} = stuff

function get_first_event_list_with_at_least_2_events(): [Array<Event_>, string]{
    let found: [Array<Event_>, string] | undefined = undefined
        Object.entries(events).forEach(([event_list_name]) => {
            const event_list = events[event_list_name]
            if (event_list.length >= 2){
                found  = [event_list, event_list_name]
            }
        })

        if (found){
            return found
        }
}

function get_first_two_event_lists_with_at_least_1_event(): [Array<Event_>, string][]  {
    const found: [Array<Event_>, string][] = [];

    Object.entries(events).forEach(([event_list_name, _]) => {
        console.log({event_list_name})
        const event_list = events[event_list_name]
        console.log({event_list})
        console.log({"length": event_list.length})
        if (event_list.length >= 1) {
            found.push([event_list, event_list_name]);
        }
        console.log({found})
        if (found.length == 2) {
            return; // Stop once we have two valid event lists
        }
    });

    return found.length >= 2 ? found : undefined
}



function sleep(ms = 300) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  

function same_list(listA: Array<any>, listB: Array<any>): boolean{
    console.log({listA})
    console.log({listB})
    for (const [item, index] of listA){
        console.log(item, listB[index])
        if (item != listB[index]){
            return false
        }
    }
    return true
}

export async function test_swap(){
    const [event_list, event_list_name]: [Array<Event_>, string] = get_first_event_list_with_at_least_2_events()
    const event_list_before_actions = events[event_list_name]
    createAction(new Action("swap", new event_info(event_list_name, 0), new event_info(event_list_name, 1)))
    await sleep()
    undo_latest_action()
    // const passed: boolean = same_list(events[event_list_name], event_list_before_actions)
    const passed: boolean = JSON.stringify(events[event_list_name]) == JSON.stringify(event_list_before_actions)
    if (!passed){
        alert("test failed")
    }
}


export async function test_drag(){
    const [[event_listA, event_list_nameA], [event_listB, event_list_nameB]]: [Array<Event_>, string][] = get_first_two_event_lists_with_at_least_1_event()
    const event_lists_before_actions = [events[event_list_nameA], events[event_list_nameB]]
    createAction(new Action("place_on", new event_info(event_list_nameA, 1), new event_info(event_list_nameB, 1)))
    await sleep()
    undo_latest_action()
    // const passed: boolean = same_list(events[event_list_name], event_list_before_actions)
    const passed: boolean = JSON.stringify(event_lists_before_actions) == JSON.stringify([events[event_list_nameA], events[event_list_nameB]])
    if (!passed){
        alert("test failed")
    }
}
