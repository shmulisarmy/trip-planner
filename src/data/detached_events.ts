import { createEffect, createSignal, For } from "solid-js";
import { createStore } from "solid-js/store";
import { Accessor, Setter } from "solid-js"; // ✅ Correct import.
import {SetStoreFunction} from "solid-js/store"

const [detachedEvents_, setDetachedEvents_] = createStore<Location[]>(
    JSON.parse(localStorage.getItem("detachedEvents") || "[]") as Location[]
  );
  


export const detachedEvents = detachedEvents_
export const setDetachedEvents = setDetachedEvents_

createEffect(() => {
    localStorage.setItem("detachedEvents", JSON.stringify(detachedEvents));
  });

  