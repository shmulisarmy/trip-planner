import { stuff } from "../../data";
const { events, setEvents } = stuff;
import {insertAt} from "../../utils"

export class event_info {
  event_accessor_key: string; //the reason this is passed in is becuase when we call setEvents(event_accessor_key, -->newState<--) event_accessor_key is used not only for the to retrieve the list but also to set the new data
  index: number;
  constructor(event_accessor_key: string, index: number) {
    this.event_accessor_key = event_accessor_key;
    this.index = index;
  }
}

export class Action {
  eventA: event_info;
  event_or_spotB: event_info;
  type: string
  constructor(type: string, eventA: event_info, event_or_spotB: event_info) {
    this.type = type
    this.eventA = eventA;
    this.event_or_spotB = event_or_spotB;
  }
  do(){
    if (this.type == "swap"){
      this.do_swap()
    } else if (this.type == "place_on"){
      this.do_place_on()
    }
  }
  do_place_on(){
    const both_events_are_from_same_list = this.eventA.event_accessor_key == this.event_or_spotB.event_accessor_key;
    if (both_events_are_from_same_list){
      let event_list = [...events[this.eventA.event_accessor_key]];
      // const temp = ev[dragInfo.grabbing?.index];
      const [event_being_moved] = event_list.splice(this.eventA.index, 1)
  
  
      if (this.event_or_spotB.index > this.eventA.index){
        //we minus off one from the index because we are shrinking down the list and the effect is spreading to the dragged_onto_event since its on top
        insertAt(event_list, this.event_or_spotB.index,  event_being_moved)
      } else{
        insertAt(event_list, this.event_or_spotB.index+1,  event_being_moved)
      }
      
      setEvents(this.eventA.event_accessor_key, [...event_list]);
    }
     else {
      const event_list_of_grabbing_event = [...events[this.eventA.event_accessor_key]];
      const event_list_of_dragged_onto_event = [...events[this.event_or_spotB.event_accessor_key]];
  
      const [event_being_moved] = event_list_of_grabbing_event.splice(this.eventA.index, 1)
      insertAt(event_list_of_dragged_onto_event, this.event_or_spotB.index+1,  event_being_moved)
      
      setEvents(this.eventA.event_accessor_key, event_list_of_grabbing_event);
      setEvents(this.event_or_spotB.event_accessor_key, event_list_of_dragged_onto_event);
    }

  
  }
  undo_place_on(){
    const both_events_are_from_same_list = this.eventA.event_accessor_key == this.event_or_spotB.event_accessor_key;
    if (both_events_are_from_same_list){
      let event_list = [...events[this.eventA.event_accessor_key]];
      // const temp = ev[dragInfo.grabbing?.index];
      const [event_being_moved] = event_list.splice(this.event_or_spotB.index, 1)
  
  
      if (this.eventA.index > this.event_or_spotB.index){
        //we minus off one from the index because we are shrinking down the list and the effect is spreading to the dragged_onto_event since its on top
        insertAt(event_list, this.eventA.index-1,  event_being_moved)
      } else{
        insertAt(event_list, this.eventA.index,  event_being_moved)
      }
      
      setEvents(this.event_or_spotB.event_accessor_key, [...event_list]);
    } else {
      const event_list_of_grabbing_event = [...events[this.eventA.event_accessor_key]];
      const event_list_of_dragged_onto_event = [...events[this.event_or_spotB.event_accessor_key]]; 
  
      const index_where_the_event_got_dropped_onto: number = this.event_or_spotB.index+1 //becuase it got dropped on top of the event
      const [event_being_moved] = event_list_of_dragged_onto_event.splice(index_where_the_event_got_dropped_onto, 1)

      console.log({index_where_the_event_got_dropped_onto})
      
      const original_index_of_dragged_event: number = this.eventA.index;
      insertAt(event_list_of_grabbing_event, original_index_of_dragged_event,  event_being_moved)

      console.log({original_index_of_dragged_event})
      
      setEvents(this.eventA.event_accessor_key, event_list_of_grabbing_event);
      setEvents(this.event_or_spotB.event_accessor_key, event_list_of_dragged_onto_event);
    }
  }
  do_swap() {
    const both_events_are_from_same_list =
      this.eventA.event_accessor_key == this.eventA.event_accessor_key;
    if (both_events_are_from_same_list) {
      this.same_list_swap();
    } else {
      this.different_list_swap()
    }
  }
  undo() {
    if (this.type == "place_on"){
      this.undo_place_on()
    } else if(this.type == "swap"){

      const both_events_are_from_same_list =
      this.eventA.event_accessor_key == this.eventA.event_accessor_key;
      if (both_events_are_from_same_list) {
        this.same_list_swap();
      } else {
        this.different_list_swap
      }
    }
  }

  /**
   * this function assumes that both events are from the same list
   */
  same_list_swap() {
    const event_list = [...events[this.eventA.event_accessor_key]];
    const temp = event_list[this.eventA.index];
    event_list[this.eventA.index] = event_list[this.event_or_spotB.index];
    event_list[this.event_or_spotB.index] = temp;
    console.table(event_list);
    setEvents(this.eventA.event_accessor_key, event_list);
  }
  /**
   * this function assumes that both events are from the different lists
   */
  different_list_swap() {
    const eventA_list = [...events[this.eventA.event_accessor_key]];
    const event_or_spotB_list = [...events[this.event_or_spotB.event_accessor_key]];

    const temp = eventA_list[this.eventA.index];
    eventA_list[this.eventA.index] = event_or_spotB_list[this.event_or_spotB.index];
    event_or_spotB_list[this.event_or_spotB.index] = temp;
    console.table(eventA_list);
    console.table(event_or_spotB_list);
    setEvents(this.eventA.event_accessor_key, eventA_list);
    setEvents(this.event_or_spotB.event_accessor_key, event_or_spotB_list);
  }
  undo_same_list_swap() {
    /**
     * this function assumes that both events are from the same list
     */
    const shared_index: number = this.eventA.index;
    const event_list = [...events[this.eventA.event_accessor_key]];
    const temp = event_list[shared_index];
    event_list[shared_index] = event_list[shared_index];
    event_list[shared_index] = temp;
    console.table(event_list);
    setEvents(this.eventA.event_accessor_key, event_list);
  }

 
}

