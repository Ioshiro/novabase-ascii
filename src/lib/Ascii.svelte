<script lang="ts">
	import { canvas as colouredPieces, load, mount, type MountOptions, type PieceName } from 'ascii.rest';

	interface Props {
		piece: PieceName;
		options?: MountOptions;
		/** What the piece shows, for screen readers. */
		label: string;
		/** Draw a coloured piece as text in the current ink. */
		mono?: boolean;
		/** Largest font size, in px, a text piece may reach. */
		max?: number;
		class?: string;
	}

	let { piece, options = {}, label, mono = false, max = 15, class: className = '' }: Props = $props();

	const onCanvas = $derived(colouredPieces.has(piece) && !mono);

	let el = $state<HTMLCanvasElement | HTMLPreElement>();
	let cols = $state(0);

	$effect(() => {
		const target = el;
		if (!target) return;
		let stop: (() => void) | undefined;
		let cancelled = false;
		load[piece]().then((mod) => {
			if (cancelled) return;
			cols = mod.meta.cols;
			stop = mount(target, mod, options);
		});
		return () => {
			cancelled = true;
			stop?.();
		};
	});

	// A text piece keeps every row whole: its font size follows the box width
	// (a monospace cell is ~0.6em wide).
	let width = $state(0);
	const fontSize = $derived(cols && width ? Math.min(max, width / (cols * 0.602)) : 0);
</script>

{#if onCanvas}
	<canvas bind:this={el} class={className} aria-label={label || undefined} aria-hidden={label ? undefined : 'true'}>{label}</canvas>
{:else}
	<div class="fit {className}" bind:clientWidth={width}>
		<pre
			bind:this={el}
			role={label ? 'img' : undefined}
			aria-label={label || undefined}
			aria-hidden={label ? undefined : 'true'}
			style:font-size={fontSize ? `${fontSize}px` : undefined}
			style:visibility={fontSize ? 'visible' : 'hidden'}></pre>
	</div>
{/if}

<style>
	.fit {
		width: 100%;
		overflow: hidden;
		display: flex;
		justify-content: center;
	}
	pre {
		margin: 0;
		font-family: var(--mono);
		line-height: 1.15;
		letter-spacing: 0;
		white-space: pre;
		font-variant-ligatures: none;
	}
</style>
