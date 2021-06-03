import { derived, readable, writable } from "svelte/store";

export const time = readable(new Date(), (set) => {
    const interval = setInterval(() => {
        set(new Date())
    }, 1000)

    return () => {
        clearInterval(interval)
    }
})

const start = new Date()

export const elapsed = derived(
    time,
    $time => Math.round((Number($time) - Number(start)) / 1000)
)

export const count = writable(0)

export const name = writable('world')
export const greetings = derived(
    name,
    $name => `Hello ${$name}`
)

//As long as an object correctly implements the subscribe method, it's a store. Beyond that, anything goes. It's very easy, therefore, to create custom stores with domain-specific logic.