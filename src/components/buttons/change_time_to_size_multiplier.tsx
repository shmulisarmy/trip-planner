import { change_time_to_size_multiplier } from "../../features/events/stateFullSettings";

export const change_time_to_size_multiplier_component = (
  <div class="change_time_to_size_multiplier">
    <p>change box sizes</p>
    <button onclick={() => change_time_to_size_multiplier(-0.1)}>-</button>
    <button onclick={() => change_time_to_size_multiplier(0.1)}>+</button>
  </div>
);
