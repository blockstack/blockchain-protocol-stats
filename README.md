Blockstack Stats
============

A live version of this site can be found online at https://stats.blockstack.org.


### Installation

```
$ git clone git@github.com:blockstack/blockstack-stats.git
$ npm install
```

Clone this repo locally, then run `npm install` from the root directory.

### Development

```
$ gulp dev
```

To run the site in development mode, run `gulp dev` (this may require installing Gulp globally `npm install gulp -g`). Your browser will automatically be opened and directed to the browser-sync proxy address.

Now that `gulp dev` is running, the server is up as well and serving files from the `/build` directory. Any changes in the `/app` directory will be automatically processed by Gulp and the changes will be injected to any open browsers pointed at the proxy address.

### Deployment

```
$ gulp prod
$ firebase deploy
```

To prepare assets for production, run `gulp prod`. This will fill the `/build` directory with the full site.

*Note: the production task does not fire up the browser-sync server and won't provide you with browser-sync's live reloading. Simply use `gulp dev` during development to utilize this functionality.*

Once the build has been produced, deploy the site to firebase by running `firebase deploy`.

### Languages and Tools

- ReactJS (along with React Router and RefluxJS)
- SASS
- Gulp (using best practices from Gulp Starter)
- Browserify