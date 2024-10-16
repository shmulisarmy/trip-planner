import styles from "../App.module.css";

function Action_component({action}) {
    let el
    if (action.type == "swap"){
     

      el =  (<>
       <div className={styles.action}>
        
        <p>swapped {action.swapped[0]} with {action.swapped[1]}</p>
        <details>
          <summary>time</summary>
          <p>{action.time}</p>
        </details>
        </div>
      </>
      );
      } else if(action.type == "plus") {
        el = <div className={styles.action}>
          
          added: {action.amount} to event #{action.index_of_changed_event}
          <details>
          <summary>time</summary>
          <p>{action.time}</p>
        </details>
        </div>
      } else if(action.type == "minus") {
        el = <div className={styles.action}>
          removed: {action.amount} from event #{action.index_of_changed_event}
          <details>
          <summary>time</summary>
          <p>{action.time}</p>
        </details>
        </div>
      } 
      return el
  }


  export {Action_component}