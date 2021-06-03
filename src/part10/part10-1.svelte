<script>
import { elasticOut } from "svelte/easing";

import { fade, fly } from "svelte/transition";

    let visible = true
    let status = 'waiting ...'

    function spin(node, {duration}) {
        return {
            duration,
            css: t => {
                const eased = elasticOut(t)
                // ~~ (double tilde) operator is a bitwise operator. In javascript it is used as a "faster" Math.floor. Usually, one should use math.floor for better readability. Should read more about that as well.
                return `
                    transform: scale(${eased}) rotate(${eased * 1080}deg);
                    color: hsl(
                        ${~~(t * 360)},
                        ${Math.min(100, 1000 - 1000 * t)}%,
                        ${Math.min(50, 500 - 500 * t)}%
                    )
                `
            }
        }
    }

    function typewriter(node, {speed = 50}){
        const valid = (node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE)

        if(!valid) throw new Error(`This transition only works on elements with a single text node.`)

        const text = node.textContent
        const duration = text.length * speed

        return {
            duration,
            tick: t => {
                const i = ~~(text.length * t)
                node.textContent = text.slice(0,i)
            }
        }
    }
</script>

<label>
    <input type="checkbox" bind:checked={visible}>
    visible
</label>

<p>status: {status}</p>

{#if visible}
<p transition:fade>
    fades in and out
</p>

<p 
    in:spin={{y: 200, duration: 2000}} out:fade
    on:introstart={() => status = 'intro started'}
    on:outrostart={() => status = 'outro started'}
    on:introend={() => status = 'intro ended'}
    on:outroend={() => status = 'outro ended'}
>
    flies in, fades out
</p>

<p in:typewriter>
    The quick brown fox jumps over the lazy dog
</p>
{/if}