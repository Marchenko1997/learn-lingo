# Learn Lingo App

This project was bootstrapped with [Vite + React](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react). To get acquainted and configure additional features [refer to documentation](https://vitejs.dev).

## Overview

Learn Lingo App is a web application that allows users to browse language-teachers and book trial lesson. The platform provides a catalog of available language-teachers, with options to filter by language, level of knowledge and price. Users can also add teachers to their favorites list. Additionally, the project incorporates a responsive design approach to ensure optimal viewing across different devices.

## Preview

Include demo GIF to visually showcase the application.

![Preview](/public/preview.gif)

## Features

- **User Authentication:** Register securely with unique credentials. Login easily to access your account.
- **Teacher Browsing:**
  Browse a catalog of available language-teachers, filtering by language, level of knowledge and price.
- **Favorites:**
  Add teachers to your favorites list for quick access.
- **User-Friendly Interface:**
  Enjoy a seamless experience with an intuitive, attractive and responsive design.
- **Accent Color Customization:**
  Personalize your experience by choosing your preferred accent color for the application interface.

## Back-end

User authorization and working with the collection are implemented using [firebase] (https://firebase.google.com/).

For work with REST i used [firebase documentation](https://firebase.google.com/docs/reference).

In Realtime Database (by firebase) a collection of teachers is created with the following fields: name, surname, languages, levels, rating, reviews, price_per_hour, lessons_done, avatar_url, lesson_info, conditions, experience.

## Libraries

- React + Vite
- Redux Toolkit
- Axios
- Yup
- React-hook-form
- Redux-persist
- React-hot-toast
- Next-themes and etc.

## Deploy

- [Vercel](https://vercel.com/)

## Development

To install and launch the project, you need:

- Install [VSCode](https://code.visualstudio.com/Download) or similar
 code editor.

- Clone the repository and launch the code editor.

 - Sequence of actions through the terminal:

```bash
git clone https://github.com/MolchanovaOlga/learn-lingo.git

cd your project
```

- To set command execution dependencies:

```
install npm
```

- Configure environment variables for Firebase

- Run the project in development mode (npm)":

```
npm run dev
```

or (yarn):

```
npm start
```

### Setting environment variables for Firebase

The project uses [Firebase](https://firebase.google.com/) for the backend, so it is necessary to configure the environment variables for correct operation of ['firebaseConfig'](./src/services/firebaseConfig.js).

- Create an '.env' file in the root directory of the project and add the following variables:

```
VITE_API_KEY=<Your API key>;
VITE_AUTH_DOMAIN=<Authentication domain for Firebase>
VITE_DATABASE_URL=<URL of your database>;
VITE_PROJECT_ID=<Your Firebase project ID>
VITE_STORAGE_BUCKET=<Firebase storage bucket>
VITE_MESSAGING_SENDER_ID=<Messaging sender ID>;
VITE_APP_ID=<Your Firebase app ID>
VITE_MEASUREMENT_ID=<Measurement ID for analytics>;
```

- Use variables in file ['firebaseConfig'](./src/services/firebaseConfig.js). For example:

 ```
 const firebaseConfig = {
 apiKey: import.meta.env.VITE_API_KEY,
 //...
 }
 ```

- Don't forget to add .env to .gitignore file to prevent accidental commit of confidential data to the repository.


## Contact information

- Halyna Marchenko

- email: marchenkohalyna888@gmail.com
- Linkedin: https://www.linkedin.com/in/halyna-marchenko/
