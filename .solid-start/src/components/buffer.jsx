import styles from "../App.module.css";
import { getDistance } from "../utils";
import { events } from "../data";


function Buffer({ event, index }) {
    return (
      <div
        className={styles.buffer}
        style={`height: ${
          (events()[index + 1].location[1] - event.location[1])/2
        }px`}
      >
        <p>
          distance:{" "}
          {getDistance(
            event.location[0],
            event.location[1],
            events()[index + 1].location[0],
            events()[index + 1].location[1]
          )}
        </p>
      </div>
    );
  }


  export {Buffer}