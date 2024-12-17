import { createSignal, For, Show, createResource } from "solid-js";
import Event_Week from "./features/events/components/events_container";
import { change_mode, all_modes } from "./utils";
import { change_time_to_size_multiplier_component } from "./components/buttons/change_time_to_size_multiplier";

import { toggle_collapse_button } from "./features/events/components/buttons/toggle_collapse";
import logo from "./assets/favicon.ico";
import { undo_latest_action } from "./features/events/stateFullUtils";

import { DropDown, SingleItemDropDown } from "./components/drop-down";
import Scout from "./features/event_finder/pages/scout";

import { Router, Route, A } from "@solidjs/router";
import DetachedEvents from "./pages/detached_events";

const in_testing_mode = true;

const tests = {};

const [testsLoaded, setTestsLoaded] = createSignal(false);

if (in_testing_mode) {
  import("./tests/drag_and_swap_events.test").then((t) => {
    console.log({ t });
    tests.test_drag = t.test_drag;
    tests.test_swap = t.test_swap;
    console.log({ tests });
    setTestsLoaded(true);
  });
}

function Nav() {
  return (
    <div id="nav-position-holder">
      <nav>
        <img src={logo} alt="" />
        {change_time_to_size_multiplier_component}

        <Show when={testsLoaded()}>
          <DropDown
            tag="tests"
            children={
              <>
                <button onclick={tests.test_swap}>
                  test swap functionality
                </button>
                <button onclick={tests.test_drag}>
                  test drag functionality
                </button>
              </>
            }
          />
        </Show>

        <DropDown
          tag="settings"
          children={
            <>
              {toggle_collapse_button}
              <DropDown
                tag="change mode"
                children={
                  <>
                    {all_modes.map((mode) => (
                      <button onclick={() => change_mode(mode)}>
                        {mode} mode
                      </button>
                    ))}
                  </>
                }
              />
            </>
          }
        />

        <DropDown
          tag="actions"
          children={
            <>
              <button onclick={undo_latest_action}>undo (ctrl+z)</button>
            </>
          }
        />
        <SingleItemDropDown tag="detached events">
          <DetachedEvents/>
        </SingleItemDropDown>

        <div class="links">
          <a href="checkpoints">checkpoints</a>
          <a href="backlog">backlog</a>
          <A href="/event_calender">events</A>
          <A href="/scout">scout</A>
        </div>
      </nav>
    </div>
  );
}


function InAllRoutes() {
  return (
    <>
      <Nav />
    </>
  );
}

function App() {
  return (
    <>
      <Router>
        <Route
          path="/scout"
          component={() => (
            <>
              <InAllRoutes/>
              <Scout />
            </>
          )}
        />
        <Route
          path="/event_calender"
          component={() => (
            <>
              <InAllRoutes/>
              <Event_Week />
            </>
          )}
        />
      </Router>
    </>
  );
}

export default App;
