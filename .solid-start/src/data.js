import { createSignal } from "solid-js";


const event_starter_data = [{
  name: 'Adventure Awaits',
  hours: [0, 400],
  description: 'An exhilarating journey of exploration.',
  total_time: 100,
  location: [3, 15],
  color: 'red',
},
{
  name: 'Culinary Delights',
  hours: [300, 600],
  description: 'A feast for the senses with local flavors.',
  total_time: 300,
  location: [30, 2],
  color: 'blue',
},
{
  name: 'Creative Sparks',
  hours: [90, 190],
  description: 'An inspiring workshop to unleash your creativity.',
  total_time: 90,
  location: [3, 5],
  color: 'green',
},
{
  name: 'Mindful Moments',
  hours: [80, 180],
  description: 'A relaxing retreat to rejuvenate your mind and body.',
  total_time: 80,
  location: [1, 2],
  color: 'purple',
},
{
  name: 'Fitness Fiesta',
  hours: [330, 630],
  description: 'An energetic day filled with fun workouts and activities.',
  total_time: 330,
  location: [3, 5],
  color: 'yellow',
},
]

const [events, setEvents] = createSignal(JSON.parse(localStorage.getItem('events')) || event_starter_data);



export { events, setEvents };
