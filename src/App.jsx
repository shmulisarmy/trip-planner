import { createSignal, For, Show, createResource } from "solid-js";
import Event_Day from "./features/events/components/events_container";
import { change_mode, all_modes } from "./utils";

import {toggle_collapse_button} from "./features/events/components/buttons/toggle_collapse"

const [count, setCount] = createSignal(0);
function App() {
  return (
    <>
      {toggle_collapse_button}
      <button onclick={() => setCount(count() + 1)}>{count()}</button>
      {all_modes.map((mode) => (
        <button onclick={() => change_mode(mode)}>{mode} mode</button>
      ))}
      <Event_Day />
    </>
  );
}

export default App;
