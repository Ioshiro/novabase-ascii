<script lang="ts">
	import Ascii from '#lib/Ascii.svelte';
	import OfficeStatus from '#lib/OfficeStatus.svelte';
	import type { MountOptions, PieceName } from 'ascii.rest';

	const principles = [
		{
			title: 'Realizzazioni custom',
			text: 'Uno dei nostri punti di forza è la possibilità di personalizzare al 100% ogni progetto in base alle esigenze del cliente.'
		},
		{
			title: 'Affidabilità',
			text: 'Abbiamo un’esperienza decennale nell’elaborazione di software per l’automazione dei processi produttivi, soprattutto nelle industrie alimentari.'
		},
		{
			title: 'All in one',
			text: 'Progetto, sviluppo, installazione e supporto: grazie al nostro know-how seguiamo il progetto in ogni fase, facilitandone di molto la realizzazione.'
		}
	];

	interface Service {
		id: string;
		title: string;
		tag: string;
		text: string;
		href: string;
		piece: PieceName;
		options?: MountOptions;
		label: string;
		caption: string;
	}

	const services: Service[] = [
		{
			id: 'sonde',
			title: 'Sonde wireless a batteria',
			tag: 'BTW',
			text: 'Sonde di monitoraggio sviluppate interamente in Novabase, per il controllo in tempo reale di variabili ambientali. Resistenti e a batteria, rendono il monitoraggio comodo anche in ambienti ostili.',
			href: 'https://www.novabase.it/sonde/',
			piece: 'gauge',
			options: { label: 'sonda btw', unit: '°C', min: -40, max: 260 },
			label: 'Quadrante ascii di una sonda BTW che oscilla tra le letture di temperatura',
			caption: 'Lettura dimostrativa'
		},
		{
			id: 'custom',
			title: 'Elettronica e software custom',
			tag: 'Su misura',
			text: 'Progettiamo e sviluppiamo software ed elettronica custom, dal classico gestionale ai pannelli operatori bordo macchina, con supporto post-vendita per eventuali necessità o aggiornamenti.',
			href: 'https://www.novabase.it/elettronica-custom/',
			piece: 'boot-log',
			label: 'Log di avvio ascii di una scheda elettronica che esegue il self test',
			caption: 'Self test di una scheda, illustrativo'
		},
		{
			id: 'taratura',
			title: 'Servizio di taratura sonde',
			tag: 'Presso il cliente',
			text: 'Tariamo e calibriamo le sonde di temperatura presso la vostra sede, anche se integrate in impianti esistenti, con un fornetto ad olio portatile dotato di termometro primario. Al termine rilasciamo un certificato.',
			href: 'https://www.novabase.it/taratura-sonde/',
			piece: 'progress-bar',
			options: { labels: ['fornetto', 'stabile', 'confronto', 'scarto', 'certifica'] },
			label: 'Barre di avanzamento ascii delle fasi di una taratura',
			caption: 'Fasi di taratura, illustrative'
		},
		{
			id: 'mappatura',
			title: 'Servizio di mappatura impianti',
			tag: 'Con sonde BTW',
			text: 'Con le nostre sonde BTW mappiamo l’interno di forni e celle, a vuoto o con il prodotto, individuando punti caldi e freddi per ottimizzare la produzione e migliorare la qualità dei prodotti.',
			href: 'https://www.novabase.it/mappatura/',
			piece: 'contour-map',
			label: 'Mappa a curve di livello ascii che si rimodella lentamente',
			caption: 'Curve isoterme, illustrative'
		}
	];

	const scadaSeries = {
		series: [
			{ label: 'forno 1', unit: '°C', lo: 182, hi: 228 },
			{ label: 'cella 3', unit: '°C', lo: -24, hi: -17, digits: 1 },
			{ label: 'umidità', unit: '%', lo: 58, hi: 86 }
		]
	};
</script>

<svelte:head>
	<title>Novabase srl — Software industriale personalizzato</title>
	<meta
		name="description"
		content="Software SCADA NovaNet, sonde di temperatura wireless a batteria, elettronica e software custom, taratura sonde e mappatura impianti. Lavis (TN)."
	/>
</svelte:head>

<a class="skip" href="#main">Vai al contenuto</a>

<header class="top">
	<a class="wordmark" href="#main" aria-label="Novabase, torna all'inizio">
		<span aria-hidden="true">●</span>novabase
	</a>
	<nav aria-label="Principale">
		<a href="#novanet">NovaNet</a>
		<a href="#servizi">Prodotti e servizi</a>
		<a href="#contatti" class="nav-cta">Contattaci</a>
	</nav>
</header>

<main id="main">
	<section class="hero" aria-labelledby="hero-title">
		<div class="hero-art">
			<Ascii
				piece="alpine-dawn"
				label="Alba sulle montagne: cime innevate che prendono la prima luce sopra un lago di montagna"
			/>
		</div>
		<div class="hero-copy">
			<h1 id="hero-title">
				Software ed elettronica industriale, <em>su misura</em>, dalle montagne del Trentino.
			</h1>
			<div class="hero-foot">
				<p class="lede">
					Novabase si occupa di smart solutions: progettiamo e sviluppiamo software e hardware elettronico,
					seguendo ogni progetto dall’idea all’assistenza.
				</p>
				<div class="hero-scramble" aria-hidden="true">
					<Ascii
						piece="scramble"
						max={14}
						label=""
						options={{
							phrases: [
								'novanet scada',
								'sonde wireless btw',
								'elettronica custom',
								'taratura sonde',
								'mappatura impianti'
							]
						}}
					/>
				</div>
				<div class="actions">
					<a class="btn primary" href="#contatti">Parliamo del tuo impianto</a>
					<a class="btn" href="#novanet">Scopri NovaNet</a>
				</div>
			</div>
		</div>
	</section>

	<section class="why wrap" aria-labelledby="why-title">
		<h2 id="why-title">Perché Novabase</h2>
		<ol class="principles">
			{#each principles as p}
				<li>
					<h3>{p.title}</h3>
					<p>{p.text}</p>
				</li>
			{/each}
		</ol>
	</section>

	<section id="novanet" class="novanet wrap" aria-labelledby="novanet-title">
		<div class="novanet-copy">
			<h2 id="novanet-title">NovaNet, lo SCADA per la tua azienda</h2>
			<p>
				NovaNet è uno <strong>SCADA potente e flessibile</strong>, interamente sviluppato in Novabase con
				tecnologia .NET.
			</p>
			<p>
				Comunica con <strong>qualsiasi pannello operatore o PLC</strong> presente sul mercato e offre la
				<strong>visualizzazione centralizzata</strong> di tutti i dispositivi monitorati. Si usa da qualsiasi
				dispositivo, anche cellulare o tablet, per un accesso comodo e intuitivo in ogni momento.
			</p>
			<a class="btn" href="https://youtu.be/8M6UqUdKPMA" target="_blank" rel="noopener">
				Guarda il video di NovaNet <span aria-hidden="true">↗</span>
			</a>
		</div>
		<figure class="console">
			<div class="console-bar" aria-hidden="true">
				<span>novanet · vista centralizzata</span>
				<span class="live">● live</span>
			</div>
			<div class="console-body">
				<Ascii
					piece="sparkline"
					options={scadaSeries}
					label="Tre andamenti ascii in tempo reale: temperatura di un forno, di una cella e umidità"
				/>
			</div>
			<figcaption>Valori dimostrativi</figcaption>
		</figure>
	</section>

	<section id="servizi" class="services wrap" aria-labelledby="servizi-title">
		<h2 id="servizi-title">Una software house dinamica, sempre alla ricerca di soluzioni personalizzate</h2>
		{#each services as s, i}
			<article id={s.id} class="service" class:flip={i % 2 === 1}>
				<div class="service-copy">
					<p class="tag">{s.tag}</p>
					<h3>{s.title}</h3>
					<p>{s.text}</p>
					<a class="more" href={s.href} target="_blank" rel="noopener">
						Approfondisci<span class="sr"> su {s.title}</span> <span aria-hidden="true">→</span>
					</a>
				</div>
				<figure class="instrument">
					<Ascii piece={s.piece} options={s.options} label={s.label} />
					<figcaption>{s.caption}</figcaption>
				</figure>
			</article>
		{/each}
	</section>

	<section class="quote wrap" aria-label="La nostra filosofia">
		<blockquote>
			<p>
				Qualità e personalizzazione delle soluzioni software e hardware sono alla base di
				<em>ogni nostro prodotto</em>.
			</p>
		</blockquote>
	</section>

	<section id="contatti" class="contact" aria-labelledby="contatti-title">
		<div class="wrap contact-grid">
			<div>
				<h2 id="contatti-title">Contattaci</h2>
				<OfficeStatus />
			</div>
			<dl class="contact-list">
				<div>
					<dt>Sede</dt>
					<dd>
						<a
							href="https://www.google.com/maps/search/?api=1&query=Via+Francesco+Filos+25+38050+Lavis+TN"
							target="_blank"
							rel="noopener">Via Francesco Filos, 25<br />38050 Lavis (TN)</a
						>
					</dd>
				</div>
				<div>
					<dt>Orari</dt>
					<dd>Lunedì – venerdì<br />9:00 – 17:00</dd>
				</div>
				<div>
					<dt>Telefono</dt>
					<dd>
						<a href="tel:+390461243405">+39 0461 243405</a><br />
						<a href="tel:+390461245622">+39 0461 245622</a>
					</dd>
				</div>
				<div>
					<dt>Email</dt>
					<dd><a class="mail" href="mailto:info@novabase.it">info@novabase.it</a></dd>
				</div>
			</dl>
		</div>
		<div class="horizon" aria-hidden="true">
			<Ascii piece="ruled-mountains" max={20} label="" />
		</div>
	</section>
</main>

<footer class="foot wrap">
	<p>Novabase srl · P.I. 01775770223 · Codice univoco M5UXCR1</p>
	<p>
		<a href="https://www.novabase.it/?page_id=2323">Privacy policy</a> ·
		<a href="https://www.novabase.it/?page_id=2328">Cookies</a> · Arte ascii:
		<a href="https://ascii.rest" target="_blank" rel="noopener">ascii.rest</a>
	</p>
</footer>

<style>
	.wrap {
		width: min(100% - 2 * var(--gutter), var(--max));
		margin-inline: auto;
	}

	.skip {
		position: absolute;
		left: 1rem;
		top: -3rem;
		z-index: 10;
		padding: 0.5rem 0.75rem;
		background: var(--gold);
		color: var(--ground);
	}
	.skip:focus {
		top: 1rem;
	}

	.sr {
		position: absolute;
		width: 1px;
		height: 1px;
		overflow: hidden;
		clip-path: inset(50%);
		white-space: nowrap;
	}

	/* ── header ─────────────────────────────── */
	.top {
		position: absolute;
		inset: 0 0 auto;
		z-index: 5;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding: 1.25rem var(--gutter);
	}
	.wordmark {
		font-family: var(--mono);
		font-weight: 500;
		font-size: 1.0625rem;
		letter-spacing: 0.02em;
		text-decoration: none;
		color: var(--snow);
	}
	.wordmark span {
		color: var(--gold);
		margin-right: 0.45em;
	}
	nav {
		display: flex;
		align-items: center;
		gap: clamp(0.75rem, 2.5vw, 2rem);
		font-family: var(--mono);
		font-size: 0.8125rem;
	}
	nav a {
		text-decoration: none;
		color: var(--haze);
	}
	.nav-cta {
		padding: 0.45rem 0.85rem;
		border: 1px solid var(--slate);
		border-radius: 999px;
	}
	.nav-cta:hover {
		border-color: var(--gold);
	}

	/* ── hero ───────────────────────────────── */
	.hero {
		position: relative;
		display: grid;
		min-height: 100svh;
		align-content: end;
		overflow: hidden;
	}
	.hero-art {
		position: absolute;
		inset: 0;
		display: grid;
		align-items: start;
		/* The scene is 2:1; on a tall screen it is cropped from the sides, never letterboxed. */
	}
	.hero-art :global(canvas) {
		width: max(100%, 200svh) !important;
		justify-self: center;
		mask-image: linear-gradient(to bottom, #000 70%, transparent 100%);
	}
	.hero-copy {
		position: relative;
		width: min(100% - 2 * var(--gutter), var(--max));
		margin: 0 auto;
		padding-block: 0 clamp(2rem, 5vw, 4rem);
		display: grid;
		gap: clamp(1.25rem, 3vw, 2rem);
	}
	.hero-copy::before {
		content: '';
		position: absolute;
		inset: -40% calc(-1 * var(--gutter)) 0;
		z-index: -1;
		background:
			linear-gradient(to right, rgb(9 12 24 / 0.78), rgb(9 12 24 / 0.45) 45%, transparent 75%),
			linear-gradient(to bottom, transparent, rgb(9 12 24 / 0.82) 45%, var(--ground));
		pointer-events: none;
	}
	h1 {
		font-family: var(--serif);
		font-size: clamp(2.5rem, 6.4vw, 5.75rem);
		line-height: 1;
		letter-spacing: -0.02em;
		color: var(--snow);
		max-width: 15ch;
		/* Separates the letterforms from the dot field behind them. */
		text-shadow:
			0 2px 6px rgb(9 12 24 / 0.9),
			0 4px 28px rgb(9 12 24 / 0.85);
	}
	h1 em {
		/* Gold, not peach: the peaks behind are rose/peach, gold stays distinct. */
		color: var(--gold);
	}
	.hero-foot {
		display: grid;
		grid-template-columns: minmax(0, 34rem) minmax(0, 1fr) auto;
		align-items: end;
		gap: 1.5rem 3rem;
	}
	.lede {
		color: var(--haze);
		max-width: 46ch;
	}
	.hero-scramble {
		color: var(--gold);
		max-width: 26rem;
		justify-self: center;
		width: 100%;
	}
	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	.btn {
		display: inline-flex;
		align-items: center;
		gap: 0.5em;
		padding: 0.8rem 1.2rem;
		border: 1px solid var(--slate);
		border-radius: 999px;
		font-family: var(--mono);
		font-size: 0.8125rem;
		text-decoration: none;
		color: var(--snow);
		white-space: nowrap;
		transition:
			background-color 0.2s,
			border-color 0.2s,
			color 0.2s;
	}
	.btn:hover {
		border-color: var(--gold);
		color: var(--gold);
	}
	.btn.primary {
		background: var(--rose);
		border-color: var(--rose);
		color: var(--ground);
	}
	.btn.primary:hover {
		background: var(--gold);
		border-color: var(--gold);
		color: var(--ground);
	}

	/* ── why ────────────────────────────────── */
	h2 {
		font-family: var(--serif);
		font-size: clamp(2rem, 4vw, 3.25rem);
		line-height: 1.05;
		letter-spacing: -0.015em;
		color: var(--snow);
	}
	.why {
		padding-block: clamp(5rem, 10vw, 8rem) clamp(3rem, 6vw, 5rem);
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 2.2fr);
		gap: 2rem 4rem;
	}
	.principles {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.principles li {
		display: grid;
		grid-template-columns: minmax(10rem, 14rem) minmax(0, 1fr);
		gap: 0.5rem 2rem;
		padding-block: 1.5rem;
		border-top: 1px dotted var(--slate);
	}
	.principles li:last-child {
		border-bottom: 1px dotted var(--slate);
	}
	h3 {
		font-family: var(--mono);
		font-size: 0.9375rem;
		font-weight: 500;
		color: var(--peach);
		line-height: 1.5;
	}
	.principles p {
		color: var(--ink-soft);
		max-width: 60ch;
	}

	/* ── novanet ────────────────────────────── */
	.novanet {
		padding-block: clamp(4rem, 8vw, 7rem);
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 1.25fr);
		align-items: center;
		gap: 3rem clamp(2rem, 6vw, 6rem);
	}
	.novanet-copy {
		display: grid;
		gap: 1.25rem;
		justify-items: start;
	}
	.novanet-copy p {
		color: var(--ink-soft);
		max-width: 52ch;
	}
	.novanet-copy strong {
		color: var(--ink);
		font-weight: 500;
	}
	.novanet-copy h2 {
		margin-bottom: 0.5rem;
	}
	.console {
		margin: 0;
		border: 1px solid var(--rule);
		border-radius: 14px;
		background: var(--night);
		box-shadow: 0 30px 60px -30px rgb(0 0 0 / 0.7);
		overflow: hidden;
	}
	.console-bar {
		display: flex;
		justify-content: space-between;
		padding: 0.7rem 1rem;
		border-bottom: 1px solid var(--rule);
		font-family: var(--mono);
		font-size: 0.75rem;
		color: var(--mist);
	}
	.live {
		color: var(--gold);
	}
	.console-body {
		padding: clamp(0.75rem, 2vw, 1.5rem);
		color: var(--haze);
	}
	figcaption {
		font-family: var(--mono);
		font-size: 0.6875rem;
		letter-spacing: 0.04em;
		color: var(--mist);
	}
	.console figcaption {
		padding: 0 1rem 0.8rem;
	}

	/* ── services ───────────────────────────── */
	.services {
		padding-block: clamp(4rem, 8vw, 7rem);
		border-top: 1px dotted var(--slate);
	}
	.services > h2 {
		max-width: 22ch;
		margin-bottom: clamp(3rem, 6vw, 5rem);
	}
	.service {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr);
		align-items: center;
		gap: 2rem clamp(2rem, 6vw, 6rem);
		padding-block: clamp(2.5rem, 5vw, 4rem);
	}
	.service + .service {
		border-top: 1px dotted var(--rule);
	}
	.service.flip .service-copy {
		order: 2;
	}
	.service-copy {
		display: grid;
		gap: 0.9rem;
		justify-items: start;
	}
	.service-copy h3 {
		font-family: var(--serif);
		font-weight: 400;
		font-size: clamp(1.75rem, 3vw, 2.375rem);
		line-height: 1.1;
		color: var(--snow);
	}
	.service-copy p:not(.tag) {
		color: var(--ink-soft);
		max-width: 52ch;
	}
	.tag {
		font-family: var(--mono);
		font-size: 0.75rem;
		color: var(--ground);
		background: var(--mist);
		padding: 0.15rem 0.55rem;
		border-radius: 4px;
	}
	.more {
		font-family: var(--mono);
		font-size: 0.8125rem;
		color: var(--peach);
		margin-top: 0.25rem;
	}
	.instrument {
		margin: 0;
		display: grid;
		gap: 0.75rem;
		justify-items: center;
		color: var(--haze);
	}
	.instrument :global(.fit) {
		max-width: 36rem;
	}
	#sonde .instrument {
		color: var(--peach);
	}
	#taratura .instrument {
		color: var(--gold);
	}

	/* ── quote ──────────────────────────────── */
	.quote {
		padding-block: clamp(4rem, 9vw, 8rem);
		border-top: 1px dotted var(--slate);
	}
	blockquote {
		margin: 0 auto;
		max-width: 52rem;
		text-align: center;
	}
	blockquote p {
		font-family: var(--serif);
		font-size: clamp(2rem, 4.6vw, 3.75rem);
		line-height: 1.1;
		letter-spacing: -0.015em;
		color: var(--snow);
	}
	blockquote em {
		color: var(--peach);
	}

	/* ── contact ────────────────────────────── */
	.contact {
		padding-top: clamp(4rem, 8vw, 6rem);
		background: linear-gradient(to bottom, var(--ground), var(--night));
	}
	.contact-grid {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
		gap: 2.5rem 4rem;
	}
	.contact-grid h2 {
		font-size: clamp(2.5rem, 5vw, 4rem);
		margin-bottom: 1rem;
	}
	.contact-list {
		margin: 0;
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 2rem 3rem;
	}
	dt {
		font-family: var(--mono);
		font-size: 0.75rem;
		color: var(--mist);
		margin-bottom: 0.4rem;
	}
	dd {
		margin: 0;
		font-size: 1.125rem;
		color: var(--ink);
		font-variant-numeric: tabular-nums;
	}
	.mail {
		color: var(--peach);
	}
	.horizon {
		margin-top: clamp(3rem, 6vw, 5rem);
		color: var(--slate);
		width: min(100%, 90rem);
		margin-inline: auto;
		mask-image: linear-gradient(to bottom, #000 40%, transparent);
	}

	/* ── footer ─────────────────────────────── */
	.foot {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 0.5rem 2rem;
		padding-block: 1.5rem 2rem;
		font-family: var(--mono);
		font-size: 0.75rem;
		color: var(--mist);
	}
	.foot a {
		color: var(--haze);
	}

	/* ── responsive ─────────────────────────── */
	@media (max-width: 64rem) {
		.hero-foot {
			grid-template-columns: minmax(0, 1fr) auto;
		}
		.hero-scramble {
			display: none;
		}
		.why,
		.novanet,
		.contact-grid {
			grid-template-columns: minmax(0, 1fr);
		}
		.service {
			grid-template-columns: minmax(0, 1fr);
		}
		.service.flip .service-copy {
			order: 0;
		}
	}

	@media (max-width: 40rem) {
		nav a:not(.nav-cta) {
			display: none;
		}
		.hero {
			min-height: auto;
			align-content: start;
		}
		.hero-art {
			position: relative;
			inset: auto;
			margin-top: 4rem;
		}
		.hero-art :global(canvas) {
			width: 170% !important;
		}
		.hero-copy {
			margin-top: -4rem;
		}
		.hero-foot {
			grid-template-columns: minmax(0, 1fr);
		}
		.principles li {
			grid-template-columns: minmax(0, 1fr);
		}
		.contact-list {
			grid-template-columns: minmax(0, 1fr);
		}
	}
</style>
