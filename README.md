# TP Application Angular
Ce sujet contient une application angularJS, avec front et backend. L'application fait aussi appel à une base de données MongoDB.

Des dockerfiles ont été crées pour le back et le front. L'image officielle de MongoDB peut directement être utilisée pour la base de données.

La première étape est de construire le docker compose permettant de lancer l'application.

La deuxième étape est d'optimiser le Dockerfile du frontend. La taille du conteneur frontend peut être __fortement__ réduite, grâce aux dockerfiles multi-stage (cette partie est uniquement bonus, et sera expliquée pendant la correction).

## Notes
La base de données correspond à l'image `mongo:5.0.5`.

Le dossier `dump/test` est un _dump_ de la base de données utilisée par l'application, qu'il faudra restaurer. Pour cela, le script `dump/mongorestore.sh` peut être utilisé.

Les données du dump sont nécessaires au fonctionnement de l'application, mais il faut aussi préserver le contenu de la base de données si le conteneur est supprimé.

Le backend peut utiliser les variables `MONGO_HOST`, qui indique le nom de l'hôte contenant la base de données et `PORT` qui indique le port utilisé. Cependant, le front ne peux qu'envoyer des requêtes vers le port 8080.