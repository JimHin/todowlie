# todowlie (todowlie)

Une web app de gestion de tâches sur tout vos appareils

## Installation des dependencies
```bash
yarn
```

### Démarrer l'application en mode hotreload
```bash
quasar dev
```

### Build de l'application pour la production
```bash
quasar build
```

### Customiser votre configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).

### Configurer l'environnement de l'appli
## Déclarer un fichier .quasar.env.json avec le contenu suivant et votre configuration pour firebase
{
  "development": {
    "ENV_TYPE": "Running Development",
    "ENV_DEV": "Development",
    "FIREBASE_CONFIG":{
      "apiKey": "QfsjkdhfdkjKJHKUKBKJXSHdsfsdKSJBBNJkjhtck",
      "authDomain": "votre dmoaine.firebaseapp.com",
      "projectId": "le nom de votre app",
      "storageBucket": " xxxxxxxxxxxx",
      "messagingSenderId": "xxxxxxxxxxxxxxxxx",
      "appId": "x:xxxxxxxxx:xxxx:xxxxxx",
      "measurementId": "X-XXXXXXXX"
    }
  },
  "production": {
    "ENV_TYPE": "Running Production",
    "ENV_PROD": "Production",
  },
  "test": {
    "ENV_TYPE": "Running Test",
    "ENV_Test": "Test"
  }
}
