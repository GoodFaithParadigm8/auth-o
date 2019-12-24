// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  auth: {
    CLIENT_ID: 'UsvH5i2tIM7BTRs0RoJrXhV1_QTkduua',
    CLIENT_DOMAIN: 'goodfaithparadigm.auth0.com', // e.g., 'you.auth0.com'
    AUDIENCE: 'https://autho-express-now.now.sh/api/',
    REDIRECT: 'https://oauth.z19.web.core.windows.net/callback',
    LOGOUT_URL: 'https://oauth.z19.web.core.windows.net/'
  }
};
