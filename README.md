# Netflix Clone

This project is a Netflix clone created using React for the frontend and Firebase for backend services.

## Features

- Responsive design for various devices.
- Dynamic content loading from Firebase.
- User authentication and authorization.
- Streaming of movies and TV shows.

## Tech Stack

- React
- Firebase (Firestore for database, Firebase Authentication for user authentication)
- HTML5, CSS3 (Styled with CSS-in-JS libraries like styled-components)

## Live Project

The live version of this project is accessible at [Netflix Clone Live](https://netflix-clone-9f1b9.web.app/).

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/RiteshTiwari554/Netflixclone.git
    cd Netflixclone
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up Firebase:

    - Create a Firebase project on [Firebase Console](https://console.firebase.google.com/).
    - Set up a Firestore database.
    - Enable Firebase Authentication.
    - Create a `.env` file in the project root and add your Firebase configuration:

        ```env
        REACT_APP_FIREBASE_API_KEY=your_api_key
        REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
        REACT_APP_FIREBASE_PROJECT_ID=your_project_id
        REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
        REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
        REACT_APP_FIREBASE_APP_ID=your_app_id
        ```

4. Run the application:

    ```bash
    npm start
    ```

    The app will be accessible at [http://localhost:3000](http://localhost:3000).

## Usage

1. Open the app in your web browser.
2. Sign in or create an account to access the content.
3. Browse and watch movies and TV shows.

## Deployment

To deploy the application, follow the deployment instructions for React and Firebase.

## Contributing

Feel free to contribute to this project by creating issues or pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
