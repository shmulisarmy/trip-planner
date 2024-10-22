import { createSignal, For, Show, createResource } from "solid-js";
import Event_Week from "./features/events/components/events_container";
import { change_mode, all_modes } from "./utils";
import { change_time_to_size_multiplier_component } from "./components/buttons/change_time_to_size_multiplier";

import { toggle_collapse_button } from "./features/events/components/buttons/toggle_collapse";
import logo from "./assets/favicon.ico";
import { undo_latest_action } from "./features/events/stateFullUtils";

import { test_swap, test_drag } from "./tests/drag_and_swap_events";

function dropDown(tag, content) {
  return (
    <div class="drop-down">
      <span>{tag}</span>
      <div class="content">{content}</div>
    </div>
  );
}

function App() {
  return (
    <>
      <nav>
        <img src={logo} alt="" />
        {change_time_to_size_multiplier_component}

        {dropDown(
          "tests",
          <>
            <button onclick={test_swap}>test swap functionalilty</button>
            <button onclick={test_drag}>test drag functionalilty</button>
          </>
        )}

        {dropDown(
          "settings",
          <>
            {toggle_collapse_button}
            {dropDown(
              "change mode",
              <>
                {all_modes.map((mode) => (
                  <button onclick={() => change_mode(mode)}>{mode} mode</button>
                ))}
              </>
            )}
          </>
        )}

        {dropDown(
          "actions",
          <button onclick={undo_latest_action}>undo (crtl z)</button>
        )}

        <div class="links">
          <a href="checkpoints">checkpoints</a>
          <a href="backlog">backlog</a>
        </div>
      </nav>

      <Event_Week />
    </>
  );
}

export default App;
