import * as Sentry from "@sentry/deno";

Sentry.init({
  dsn: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  sendDefaultPii: true,
  tracesSampleRate: 1.0,
  enableLogs: true,
});
