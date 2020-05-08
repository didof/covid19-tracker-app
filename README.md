First of all you want to donwload all the packages that will be used.

> npm i -D bulma moment chart.js rollup-plugin-css-only
> npm i axios

# Implement Bulma

1. In `rollup.config.js` you should `import css from 'rollup-plugin-css-only` on the top. Then, in the **client plugins** add a new one: `css({ output: 'static/extra.css' })`. To not forget to comma.
1. In `src/client.js` you can `import 'bulma/css/bulma.min.css`. I just discovered I can track what I'm importing, I just have to take a walk in the node_modules.
1. Finally insert `<link rel="stylesheet" href="extra.css" />` in `src/template.html`.
1. Run the dev-server and drop a look in the *network* tab; `extra.css` should be donwloaded with the rest. If so, *Bulba* is correctly implemented in your project.