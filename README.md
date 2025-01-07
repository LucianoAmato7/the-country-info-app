# Country Info App

This project is built with Next.js, Tailwind CSS and React Icons for the frontend, and Node.js with Express and Axios for the backend.

## Installation

To install the necessary dependencies, navigate to both the frontend and backend directories and run:

`npm install`

## Running the Application

### Backend

To start the backend server, run:

`npm start`

The backend will be available at [http://localhost:5000/api](http://localhost:5000/api).

#### Endpoints:

- **GET /api/countries**: Retrieves a list of countries.
- **GET /api/country/:CountryCode**: Retrieves detailed information about the selected country.

### Frontend

To start the frontend server, run:

`npm run dev`

The frontend will be available at [http://localhost:3000](http://localhost:3000).

## Testing the Application

### Backend Testing

1. Start the backend server:

    `npm start`
    
2. In a separate terminal, run the tests:

    `npm test`

Jest and Supertest are used to test the API.

## Technologies Used

- **Frontend**:
  - [Next.js](https://nextjs.org/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [React Icons](https://react-icons.github.io/react-icons/)

- **Backend**:
  - [Express](https://expressjs.com/)
  - [Axios](https://axios-http.com/)