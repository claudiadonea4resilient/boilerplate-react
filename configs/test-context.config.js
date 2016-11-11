var appContext = require.context('../app', true, /\.spec\.js$/);
appContext.keys().forEach(appContext);
