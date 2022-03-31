# Ce dockerfile est particulier. Il utilise une technique appellée le multi-staging. Un premier
# conteneur est utilisé pour "compiler" l'application d'angular vers du javascript natif.

# La première étape est de lancer un conteneur node, qui va lancer la commande npm run build pour
# compiler.
# Notons la syntaxe FROM .. as .., qui donne un alias à toute cette section (jusqu'au prochain FROM)
FROM node:14-alpine3.12 as build

# On se déplace vers le dossier de l'application
WORKDIR /usr/local/app

# On importe les sources
COPY ./ /usr/local/app/

# On installe les dépendances, depuis les fichiers package
RUN npm install

# On compile
RUN npm run build

# On utilise un nouveau FROM pour importer une image de serveur Web.
# Puisqu'on à compilé l'application au dessus, nginx est capable de servir nativement tout le front.
FROM nginx:1.21.4

# On va copier, DEPUIS le _stage_ build (cf FROM .. as .. au dessus et --from=buil, les , les 
# fichiers compilés par npm (dans /usr/local/app/dist/express-gaumont) VERS ce stage, dans
# /usr/share/nginx/html.
COPY --from=build /usr/local/app/dist/express-gaumont /usr/share/nginx/html

# On copie aussi le fichier de configuration de nginx vers le bon dossier.
COPY /nginx.conf  /etc/nginx/conf.d/default.conf
