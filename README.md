# Some explanation

- Implement Bulma
- Get URL params in dynamic pages

---

## Implement Bulma

First of all you want to donwload all the packages that will be used.

> npm i -D bulma (moment chart.js rollup-plugin-css-only)
> (npm i axios)

1. In `rollup.config.js` you should `import css from 'rollup-plugin-css-only` on the top. Then, in the **client plugins** add a new one: `css({ output: 'static/extra.css' })`. To not forget to comma.
1. In `src/client.js` you can `import 'bulma/css/bulma.min.css`. I just discovered I can track what I'm importing, I just have to take a walk in the node_modules.
1. Finally insert `<link rel="stylesheet" href="extra.css" />` in `src/template.html`.
1. Run the dev-server and drop a look in the _network_ tab; `extra.css` should be donwloaded with the rest. If so, _Bulba_ is correctly implemented in your project.

## Get URL params in dynamic pages

1. You create a `[state].svelte` in the routes folder.

```html
<script context="module">
  export async function preload(page) {
    console.log(page);
    return { state: page.params["state"] };
  }
</script>

<script>
   export let state
</script>

<h1>{state}</h1>
```

If you get to `/my-test` on the page there will be written *my-test*