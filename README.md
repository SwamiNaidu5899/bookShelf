# Book Search and Personal Bookshelf App

This is a simple React application that allows users to search for books using the Open Library API and add selected books to their personal bookshelf. The app consists of two main pages: the Book Search page and the Personal Bookshelf page. 

## Features

### Book Search Page

- **Real-time Search:** As the user types in the book's name in the input field, search results are displayed in real-time.
- **Open Library API Integration:** Fetches book results from the Open Library API.
- **Search Results Display:** The first 10 results from page 1 are displayed in a list of cards. Each card represents a book result.
- **Add to Bookshelf:** Users can add books from the search results to their personal bookshelf.

### Personal Bookshelf Page

- **Bookshelf Display:** A separate page that displays the user's personal bookshelf.
- **Persistent Storage:** Utilizes the Web Storage API (localStorage) to store the user's bookshelf persistently.
- **Navigation:** A button on the search results page directs users to their personal bookshelf page.

## Tech Stack

- **React:** Initialized using Create React App (CRA).
- **CSS:** You are free to use any approach for styling - CSS-in-JS, CSS modules, or regular CSS classnames.
- **Client-side Rendering:** Only client-side rendering is used.

## Bonus Features

- **Responsive Design:** The application pages are responsive and adapt to different screen sizes.

## Setup Instructions

### Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x) or yarn (>= 1.22.x)

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/book-search-bookshelf-app.git
    cd book-search-bookshelf-app
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

### Running the Application Locally

1. **Start the development server:**
    ```bash
    npm start
    ```
    or
    ```bash
    yarn start
    ```

2. **Open your browser and navigate to:**
    ```
    http://localhost:3000
    ```

### Building the Application for Production

1. **Build the application:**
    ```bash
    npm run build
    ```
    or
    ```bash
    yarn build
    ```

2. The build output will be located in the `build` directory. You can deploy this to any static hosting provider of your choice.

## Deployment

This project can be deployed on any hosting platform such as Netlify, Vercel, or GitHub Pages. Here are the steps for deploying to Netlify:

1. **Create a new site in Netlify.**
2. **Connect your GitHub repository to Netlify.**
3. **Set the build command to:**
    ```
    npm run build
    ```
    or
    ```
    yarn build
    ```
4. **Set the publish directory to:**
    ```
    build
    ```
5. **Deploy the site.**

After deployment, you will get a live URL for your application.

## Project Structure

- `src/`: Contains the source code of the application.
  - `components/`: Reusable React components.
  - `pages/`: Pages of the application (Book Search and Personal Bookshelf).
  - `App.js`: Main application component.
  - `index.js`: Entry point of the application.
- `public/`: Static assets.
- `README.md`: Project documentation.

## Contributing

Feel free to open issues or submit pull requests if you find any bugs or have new features to propose. Contributions are always welcome!

## License

This project is licensed under the MIT License.

---

Thank you for using the Book Search and Personal Bookshelf App! Happy reading!
#   b o o k S h e l f  
 