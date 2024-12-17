import { createEffect, createSignal, For, Show } from "solid-js";
import styles from "./detached_events.module.css";
import { createStore } from "solid-js/store";
import { Location } from "../types/location";
import { detachedEvents, setDetachedEvents } from "../data/detached_events";
import { A, Router } from "@solidjs/router";



function DetachedEvent({ location, index }: {location: Location, index: number}) {
    return (
      <div class={styles.detached_event}>
        <h3>{location.streetNumber} {location.streetName}</h3>
        <button onclick={() => setDetachedEvents(detachedEvents => detachedEvents.filter((_, i) => i !== index))}>remove</button>
      </div>
    );
  }
  
  export default function DetachedEvents() {
    return (
      <div class="content" id={styles.detached_events}>
        <Show when={detachedEvents.length > 0} fallback={<p>you have no detached events, you can create some at <a href="/scout"> this page</a></p>}>
          <p >each of these events can be dragged and dropped into your event calendar at <a href="/event_calender">this page</a></p>
        </Show>
          {Array.from(detachedEvents).map((location, index) => <DetachedEvent key={index} index={index} location={location} />)}
      </div>
    );
  }