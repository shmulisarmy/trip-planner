import settings from "./settings"
import {render_events} from "./stateFullUtils"

export function change_time_to_size_multiplier(amount: number){
    settings.time_to_size_multiplier+=amount
    settings.size_to_time_multiplier = 1/settings.time_to_size_multiplier
    render_events()
}