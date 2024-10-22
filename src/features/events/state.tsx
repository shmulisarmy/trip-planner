import { Action } from "./classes(uses encapsulation)/actions/swap";

export const saved_resize_event: {
  index: number | undefined;
  size: number | undefined;
  events_accessor_key: string | undefined
  completed: boolean;
} = { events_accessor_key: undefined, index: undefined, size: undefined, completed: true };


export let mouse_is_down = false;

export const dragInfo: {
  dragged_onto: {events_accesor_key: string, index: number} | null;
  grabbing: {events_accesor_key: string, index: number} | null;
} = { dragged_onto: null, grabbing: null };


export const actions: Action[] = [
  
]