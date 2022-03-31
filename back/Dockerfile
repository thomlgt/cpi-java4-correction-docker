FROM node:12.17.0-alpine

# Dossier contenant l'application finale
WORKDIR /usr/src/app

# Import des fichiers package.json, package-lock.json qui listent les dépendances nécessaires au
# projet
COPY package*.json ./

# Installation des dépendances
RUN npm install

# On choisit de copier les sources de l'application dans le conteneur directement. Le versionage de
# l'application sera ainsi liée au versionnage du conteneur.
# Il est toujours possible de monter les sources lors de docker run ou dans le docker-compose.
COPY . .

# Ici on ne définit pas d'entrypoint. L'image de base (node) définit un entrypoint particulier, qui 
# est plus pratique qu'un simple "bash". Voir le lien qui suit pour cet entrypoint.
# https://github.com/nodejs/docker-node/blob/3101ce6b5b3a0308b58d464eef141e0043c3bf5b/12/alpine3.14/docker-entrypoint.sh
CMD [ "npm", "run", "start" ]