# novabase-ascii

Proof of concept: il sito di [Novabase srl](https://www.novabase.it/) ripensato in pixel/ascii art, con la scena animata [alpine dawn](https://ascii.rest/alpine-dawn/) di [ascii.rest](https://ascii.rest) (MIT) come pezzo principale.

SvelteKit (Svelte 5) prerenderizzato con `adapter-static`, pubblicato su GitHub Pages da `.github/workflows/deploy.yml` a ogni push su `main`.

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # sito statico in build/
```

`BASE_PATH` imposta il percorso base (la action usa `/<nome-repo>`); in locale resta vuoto.

I valori mostrati negli strumenti ascii (sonde, SCADA, taratura) sono dimostrativi.
