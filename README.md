## BabyFootManager

est une mini application web en temps réel pour la gestion des parties BabyFoots.
L'application est basé sur les fonctionalités suivantes :
● Pouvoir créer une partie.
● Pouvoir supprimer une partie.
● Pouvoir terminer une partie.
● Dans la liste, différencier des autres les parties terminées.
● Avoir un compteur des parties non terminées.
● À chaque modification, création ou suppression, il doit y avoir propagation en temps
réel sur les autres clients connectés.

# Technologies utilisées :

● Backend :
    - NodeJs en utilisant la framework Express.js
    - Websocket en utilisant socket.io
● Frontend :
    -HTML
    -CSS
    -JavaScript
● Base des données :
    -PostgreSQL en utilisant pgAdmin pour la creation du table et checker les données.

## Instalation : 

● Cloner le projet :

git clone https://github.com/Adel-Bn06/BabyFootManager.git
cd BabyFootManager

● Installer les dépendences :

npm install express cors dotenv pg socket.io

● Configuration :

les données de la base des données sont trouvées dans le fichier ".env"

● Lancer l'application coté backend :
    - npm node server.js
