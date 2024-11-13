# # Stage 1: Compile and Build angular codebase

# # Use official node image as the base image
# FROM node:latest as build

# #Ajout de app
# RUN mkdir /usr/local/app
# # Set the working directory
# WORKDIR /usr/local/app

# # Add the source code to app
# COPY ./ /usr/local/app/

# # Install all the dependencies
# RUN npm install

# # Generate the build of the application
# RUN npm run build


# # Stage 2: Serve app with nginx server

# # Use official nginx image as the base image
# FROM nginx:latest

# # Copy the build output to replace the default nginx contents.
# COPY --from=build /usr/local/app/dist/retry-front /usr/share/nginx/html

# # Expose port 80
# EXPOSE 80


FROM node:20.15.1-alpine3.20
LABEL maintainer="konedieu5@gmail.com"

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Installer Angular CLI globalement
RUN npm install -g @angular/cli

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste de l'application
COPY . .

# Exposer le port 4200
EXPOSE 4200

# Commande pour démarrer l'application Angular
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]
