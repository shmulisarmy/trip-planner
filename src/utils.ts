export const all_modes = [
    "regular", "dark", "chockboard", "pretty"
]

export function change_mode(new_mode: string){
    all_modes.forEach(mode => {
        document.body.classList.remove(`${mode}-mode`)
    })
    document.body.classList.add(`${new_mode}-mode`)
    localStorage.setItem('selected-mode', new_mode)
}