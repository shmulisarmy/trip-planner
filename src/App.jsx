import { createSignal, For, Show, createResource } from "solid-js";
import Events_C from "./features/events/component";
import { change_mode, all_modes } from "./utils";

import { place_holder_value } from "./on_start";

const [count, setCount] = createSignal(0);
function App() {
  return (
    <>
      <button onclick={() => setCount(count() + 1)}>{count()}</button>
      {all_modes.map((mode) => (
        <button onclick={() => change_mode(mode)}>{mode} mode</button>
      ))}
      <Events_C />
    </>
  );
}

export default App;
