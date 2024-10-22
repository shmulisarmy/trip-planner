import { actions } from "../state";
import { For } from "solid-js";

function Actions_C() {
  return (
    <div id="actions">
      <For each={actions}>{(action, index) => <div class="action">
            <h3>{action.type}</h3>
        
        </div>}</For>
    </div>
  );
}
