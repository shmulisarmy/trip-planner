export const saved_resize_event: {
  index: number | undefined;
  size: number | undefined;
  completed: boolean;
} = { index: undefined, size: undefined, completed: true };


export let mouse_is_down = false;

export const dragInfo: {
  dragged_onto_index: number | null;
  grabbing_index: number | null;
} = { dragged_onto_index: null, grabbing_index: null };
