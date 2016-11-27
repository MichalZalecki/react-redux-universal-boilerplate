# react-redux-universal-boilerplate

Setup for universal React apps. Working with Heroku/Dokku out of the box.

* Webpack (dev and production configs)
* Webpack Dashboard
* React Hot Loader 3
* Redux
* Server-side rendering
* ESLint (Airbnb config)
* PostCSS

## Installation

```
cp .env-example .env
npm install
```

## Usage

Start **express** (serving files in production).

```bash
npm start
```

Start **express with webpack-dev-middleware** (in development).

```bash
npm run start:dev
```

You can specify `PORT` for both: development and production server (default to `8080`).

```
PORT=5000 npm start
PORT=8081 npm run start:dev
```

Start **express with webpack-dev-middleware and webpack-dashboard** (for SWAG).

```bash
npm run start:dashboard
```

Build (also run in `postinstall`). Make sure you are creating React bundle in `production`
environment by setting NODE_ENV or editing `.env` file.

```bash
npm run build
```

Run linter for `.js` and `.jsx` in `src`.

```bash
npm run lint
```
