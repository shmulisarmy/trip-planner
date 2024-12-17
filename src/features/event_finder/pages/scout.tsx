import { createEffect, createSignal, For } from "solid-js";
import { e } from "../../../../dist/assets/index-CAmEd45h";
import styles from "../styles.module.css";
import { createStore } from "solid-js/store";
import createIframeSrc from "../utils/iframe_src";
import { Location } from "../../../types/location";
import { detachedEvents, setDetachedEvents } from "../../../data/detached_events";


function make_full_address(streetNumber: string, streetName: string, city: string, state: string, zipCode: string) {
  return `${streetNumber} ${streetName}, ${city}, ${state} ${zipCode}`;
}




const locations: Location[] = [
  {
    streetNumber: "10",
    streetName: "Atlantic Blvd",
    city: "Atlantic Beach",
    state: "FL",
    zipCode: "32233",
  },
  {
    streetNumber: "907",
    streetName: "Atlantic Blvd",
    city: "Atlantic Beach",
    state: "FL",
    zipCode: "32233",
  },
  {
    streetNumber: "967",
    streetName: "Atlantic Blvd",
    city: "Atlantic Beach", 
    state: "FL",
    zipCode: "32233",
  },
];






export default function Scout() {
  return (
    <>
      <div id={styles.location_container}>
        <For each={locations}>
          {(location) => (
            <div class={styles.location}>
              <iframe
                width="600"
                height="450"
                style="border:0;"
                src={createIframeSrc(
                  make_full_address(
                    location.streetNumber,
                    location.streetName,
                    location.city,
                    location.state,
                    location.zipCode
                ))}
                allowfullscreen
                loading="lazy"
              ></iframe>
              <h1>{location.streetNumber} {location.streetName}</h1>
              <button
                onclick={() =>
                  setDetachedEvents([...detachedEvents, location])
                }
                class={styles.location}
              >
                create event
              </button>
            </div>
          )}
        </For>
      </div>
    </>
  );
}
