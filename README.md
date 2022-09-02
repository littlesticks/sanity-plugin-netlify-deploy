# sanity-plugin-sanity-netlify-deploy

## Installation

```
npm install --save sanity-plugin-sanity-netlify-deploy
```

or

```
yarn add sanity-plugin-sanity-netlify-deploy
```

## Usage
Add it as a plugin in sanity.config.ts (or .js):

```
 import {createConfig} from 'sanity'
 import {myPlugin} from 'sanity-plugin-sanity-netlify-deploy'

 export const createConfig({
     /...
     plugins: [
         myPlugin({})
     ]
 })
```
## License

MIT © White Pine Studio LLC

See LICENSE

