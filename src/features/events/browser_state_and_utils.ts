

export const mouse: {is_down: boolean} = {is_down: false}


window.addEventListener("mousedown", () => {mouse.is_down = true; console.log(`mouse_is_down: ${mouse.is_down}`)})
window.addEventListener("mouseup", () => {
  mouse.is_down = false; console.log(`mouse_is_down: ${mouse.is_down}`)
})