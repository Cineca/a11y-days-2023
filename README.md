# Installazione

Segui i passaggi riportati di seguito per installare le dipendenze e far partire il progetto:

1. Clona il repository sul tuo computer utilizzando il comando Git:  
   git clone https://github.com/Cineca/a11y-days-2023.git

2. Spostati nella directory del progetto

3. Installa le dipendenze del progetto utilizzando npm:
   npm install

# Avvio del server di sviluppo

Una volta completata l'installazione, puoi avviare il server di sviluppo locale utilizzando il seguente comando:
ng serve

Il server di sviluppo avvierà l'applicazione Angular e sarai in grado di visualizzarla nel tuo browser all'indirizzo http://localhost:4200/.

# Avvio di Cypress

Segui i passaggi riportati di seguito per avviare Cypress e eseguire il test di accessibilità nel progetto:

1. Assicurati di aver completato l'installazione delle dipendenze come descritto nella sezione "Installazione"

2. Assicurati di trovarti nella directory principale del progetto.

3. Esegui il comando seguente per avviare Cypress:
   npx cypress open

4. Seleziona E2E Testing

5. Scegli quale browser utilizzare

6. Seleziona il file a11y-full-page
