import { stuff } from "../data";
import { get_distance } from "../utils";
import { createEffect } from "solid-js";
import { event_size_callapse } from "../settings";
import {
  time_to_size_multiplier,
} from "../settings";

const { events } = stuff;
import {Event_C} from "./event"

const car_image_data =
  "data:image/png;base64,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";


function Event_Day() {
  let current_time = 0;
  createEffect(() => {
    events.list;
    current_time = 0;
  });
  console.log(events);
  return (
    <>
      <div id="events">
        {events.list.map((event, index) => {
          const el = (
            <Event_C
              {...event}
              start_time={current_time}
              end_time={current_time + event.duration}
              index={index}
            />
          );
          current_time += event.duration;
          if (index < events.list.length - 1) {
            const buffer_time = get_distance(
              event.location,
              events.list[index + 1].location
            );
            current_time += buffer_time;
            const buffer_style = event_size_callapse
              ? {
                  height: `${Math.round(
                    buffer_time * time_to_size_multiplier
                  )}px`,
                }
              : { height: "100px" };

            return (
              <>
                {el}
                <div style={buffer_style} class="buffer">
                  <img src={car_image_data} alt="" />
                </div>
              </>
            );
          }
          return el;
        })}
      </div>
    </>
  );
}

export default Event_Day;
