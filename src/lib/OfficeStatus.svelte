<script lang="ts">
	// Office hours from novabase.it: Monday to Friday, 9:00–17:00, Europe/Rome.
	let now = $state(new Date());

	$effect(() => {
		const id = setInterval(() => (now = new Date()), 30_000);
		return () => clearInterval(id);
	});

	const rome = $derived.by(() => {
		const parts = new Intl.DateTimeFormat('it-IT', {
			timeZone: 'Europe/Rome',
			weekday: 'short',
			hour: '2-digit',
			minute: '2-digit',
			hourCycle: 'h23'
		}).formatToParts(now);
		const get = (t: string) => parts.find((p) => p.type === t)?.value ?? '';
		return { day: get('weekday'), hour: +get('hour'), minute: get('minute') };
	});

	const open = $derived(
		!['sab', 'dom'].includes(rome.day.toLowerCase().slice(0, 3)) && rome.hour >= 9 && rome.hour < 17
	);
</script>

<p class="status" class:open>
	<span class="dot" aria-hidden="true">●</span>
	A Lavis sono le {String(rome.hour).padStart(2, '0')}:{rome.minute}
	— {open ? 'ufficio aperto, chiamaci' : 'ufficio chiuso, scrivici'}
</p>

<style>
	.status {
		font-family: var(--mono);
		font-size: 0.8125rem;
		color: var(--ink-soft);
		font-variant-numeric: tabular-nums;
	}
	.dot {
		color: var(--slate);
		margin-right: 0.4em;
	}
	.open .dot {
		color: var(--gold);
	}
</style>
