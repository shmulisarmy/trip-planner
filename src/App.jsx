import { createSignal, For, Show, createResource } from "solid-js";
import Event_Week from "./features/events/components/events_container";
import { change_mode, all_modes } from "./utils";
import { change_time_to_size_multiplier_component } from "./components/buttons/change_time_to_size_multiplier";

import { toggle_collapse_button } from "./features/events/components/buttons/toggle_collapse";
import logo from "./assets/favicon.ico";
import { undo_latest_action } from "./features/events/stateFullUtils";

import { dropDown } from "./components/drop-down";

const in_testing_mode = true;

const tests = {} 


const [testsLoaded, setTestsLoaded] = createSignal(false)

if (in_testing_mode) {
  import("./tests/drag_and_swap_events").then((t) => {
    console.log({t})
    tests.test_drag = t.test_drag
    tests.test_swap = t.test_swap
    console.log({tests});
    setTestsLoaded(true)
  });
}


function App() {
  return (
    <>
      <nav>
        <img src={logo} alt="" />
        {change_time_to_size_multiplier_component}

        <Show when={testsLoaded()}>
          {dropDown(
            "run tests",
            <>
              <button onclick={tests.test_swap}>test swap functionalilty</button>
              <button onclick={tests.test_drag}>test drag functionalilty</button>
            </>
          )}
        </Show>

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
