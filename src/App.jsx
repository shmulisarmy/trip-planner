import { createSignal, For, Show, createResource } from "solid-js";
import Event_Day from "./features/events/components/events_container";
import { change_mode, all_modes } from "./utils";
import { change_time_to_size_multiplier_component } from "./components/buttons/change_time_to_size_multiplier";

import { toggle_collapse_button } from "./features/events/components/buttons/toggle_collapse";
import logo from "./assets/favicon.ico"

function App() {
  return (
    <>
      <nav>
        <img src={logo} alt="" />
          {change_time_to_size_multiplier_component}
        <div class="drop-down">
          <span>drop down</span>
          <div class="content">
            {toggle_collapse_button}
            {all_modes.map((mode) => (
              <button onclick={() => change_mode(mode)}>{mode} mode</button>
            ))}
          </div>
        </div>

        <div class="links">
          <a href="actions">actions</a>
          <a href="checkpoints">checkpoints</a>
          <a href="backlog">backlog</a>
        </div>
      </nav>

      <Event_Day />
    </>
  );
}

export default App;
