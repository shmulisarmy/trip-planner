interface Person {
    name: string;
    age: number;
    occupation: string;
}

const person: Person = {
        name: "John Doe",
        age: 30,
        occupation: "Software Engineer",
}

interface Event_ {
    name: string;
    description: string;
    location: [number, number];
    hours: [number, number];
}


const events: Event_[] = [
    {
        name: "Culinary Delights",
        description: "A feast for the senses with local flavors.",
        location: [30, 2],
        hours: [300, 600],
    },
    {
        name: "Creative Sparks",
        description: "An inspiring workshop to unleash your creativity.",
        location: [3, 5],
        hours: [90, 190],
    },
    {
        name: "Mindful Moments",
        description: "An experience to calm your mind.",
        location: [3, 15],
        hours: [0, 400],
    },
    {
        name: "Adventure Awaits",
        description: "An exhilarating journey of exploration.",
        location: [3, 15],
        hours: [0, 400],
        }
    ]



console.table(events)