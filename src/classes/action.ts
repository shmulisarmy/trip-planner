 class Action{

  eventList_partOf: () => Array<Object>
  type: string
  swapped: Array<number>
  amount: number
  index_of_changed_event: number
  eventList_partOfSetter: (a: Array<Object>) => void
    constructor(eventList_partOf: () => Array<Object>, type: string, swapped: Array<number>, amount: number, index_of_changed_event: number, eventList_partOfSetter: (a: Array<Object>) => void){
        this.eventList_partOf = eventList_partOf
        this.type = type
        this.swapped = swapped
        this.amount = amount
        this.index_of_changed_event = index_of_changed_event
        this.eventList_partOfSetter = eventList_partOfSetter
    }

    undo(){
        const events = this.eventList_partOf
        const setEvents = this.eventList_partOfSetter
        if (this.type == "swap"){
            const ev = [...events()]
          const {swapped} = this
          ev[swapped[0]] = events()[swapped[1]]
          ev[swapped[1]] = events()[swapped[0]]
          setEvents(ev);
        } else if (this.type == "plus"){
          events()[this.index_of_changed_event].total_time-=this.amount
          setEvents([...events()])
        } else if (this.type == "minus"){
          events()[this.index_of_changed_event].total_time+=this.amount
          setEvents([...events()])
        }
      }

    do(){
        const events = this.eventList_partOf
        const setEvents = this.eventList_partOfSetter

        if (this.type == "swap"){
            const ev = [...events()]
          const {swapped} = this
          ev[swapped[0]] = events()[swapped[1]]
          ev[swapped[1]] = events()[swapped[0]]
          setEvents(ev);
        } else if (this.type == "plus"){
          events()[this.index_of_changed_event].total_time+=this.amount
          setEvents([...events()])
        } else if (this.type == "minus"){
          events()[this.index_of_changed_event].total_time-=this.amount
          setEvents([...events()])
        }
      }
}


export {Action}