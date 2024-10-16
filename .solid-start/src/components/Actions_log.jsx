import {actions} from "../utils/undo.js"
import {Action_component} from "./Action.jsx"

function Actions_log(){
    return (
      <div id="actions">
        {actions().map((action) => <div className="action">
          <Action_component   action={action}  />
        </div>)}
      </div>
    )
  }

  export {Actions_log}