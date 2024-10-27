import { Router, Route, A } from "@solidjs/router";

function Event_schedular() {
  return (
    <main>
      <div class="events">event1</div>
      <div class="events">event2</div>
      <div class="events">event3</div>
    </main>
  );
}



function Event_picker(){
    const events = [
        "park", "zoo", "shop"
    ]
    return (
        <>
        <nav>
            {Object.keys(routes).map(route => 

                <A href={route}>{route}</A>
            )}
        </nav>
        <main>
            <div id="events">
                {events.map(event => 
                    <div class="event">{event}</div>
                )}
            </div>
        </main>
                </>
    )
}


const routes = {
    "events": _,
    "event_picker": _,
}

export default function Routes() {
  return (
    <section style={{ color: "white" }}>
      <Router>
        <Route path="/events" component={Event_schedular} />
        <Route path="/event_picker" component={Event_picker} />
      </Router>
    </section>
  );
}
