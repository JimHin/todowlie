# todowlie (todowlie)

Une web app de gestion de tâches sur tout vos appareils

## Installation des dependencies
```bash
yarn
```
### Configurer l'environnement de l'appli
## Déclarer vos id firebase dans src/boot/firebase.js 
    

      export default async () => {
        const config = {
          apiKey: '',
          authDomain: '',
          projectId: '',
          storageBucket: '',
          messagingSenderId: '',
          appId: '',
          measurementId: ''
        }
        firebaseService.fBInit(config)
        
### Démarrer l'application en mode hotreload
```bash
quasar dev
```
### Navigation

Pour le moment auth n'est pas fonctionnel. Les boutons "SE CONNECTER" et "CREER UN COMPTE" envoi sur la route /todolist
pour afficher la vue de la liste des tâches

### Build de l'application pour la production
```bash
quasar build
```

### Customiser votre configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).



