# Shortify - URL Shortener Application

![Shortify Logo](./frontend/logo.png)

Shortify is a simple URL shortener application that converts long, unwieldy URLs into short and user-friendly links. It provides a clean, easy-to-use interface where users can input a long URL and receive a shortened version that can be easily shared or used elsewhere.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [API Endpoints](#api-endpoints)

---

## Features

- **Shorten Long URLs**: Quickly convert long URLs into short, user-friendly URLs.
- **Copy to Clipboard**: Easily copy the shortened URL with a single click.
- **User-friendly UI**: A clean and responsive interface designed for simplicity.

---

## Demo

You can see the live demo of Shortify [here](http://www.shortify.site/).

---

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v12 or higher)
- [MongoDB](https://www.mongodb.com/) (or any other database you configure)

### Step-by-step Setup

1. **Clone the repository**:

    ```bash
    git clone https://github.com/mishiii06/shortify.git
    cd shortify
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Configure environment variables**:

    Create a `.env` file in the root directory and add the following:

    ```bash
    MONGODB_URI= your URI
    PORT= your port number
    ```

4. **Start the server**:

    ```bash
    npm start
    ```

5. **Access the app**:

    Open your browser and go to your URL:port_number. For Example: `http://localhost:8000`.

---

## Usage

### Shortening a URL

1. Enter a long URL in the input field on the main page.
2. Click **Shorten URL**.
3. The shortened URL will appear in the input field, and a **Copy** button will be available to copy the URL to your clipboard.

---

## Technologies Used

- **Frontend**:
  - HTML5, CSS3, JavaScript

- **Backend**:
  - Node.js and Express.js for server-side logic
  - MongoDB as the database for storing URLs

---

## API Endpoints

Shortify provides a simple API to shorten and retrieve URLs.

### `POST /api/url/shorten`

- **Description**: Shortens a given long URL.
- **Request**:
  ```json
  {
    "longUrl": "https://your-long-url.com/some-path"
  }
- **Response**:
  ```json
  {
    "shortUrl": "https://base-name/hashcode"
  }

