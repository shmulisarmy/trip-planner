export function get_distance(locationA: number[], locationB: number[]): number {
  const yDistance = get_difference(locationA[0], locationB[0]);
  const xDistance = get_difference(locationA[1], locationB[1]);

  return yDistance + xDistance;
}

export function get_difference(locationA: number, locationB: number): number {
  return locationA > locationB ? locationA - locationB : locationB - locationA;
}

export function time_display(time_as_int: number): string {
  const hour = Math.floor(time_as_int / 60);
  const minute = Math.floor(time_as_int % 60);

  return `${hour}:${minute < 10 ? `0${minute}` : minute}`;
}

export function insertAt(arr: Array<any>, index: number, element: any) {
    if (index < 0 || index > arr.length) {
        console.error("Invalid index: out of bounds.");
        return;
    }
    arr.splice(index, 0, element);
}