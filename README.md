<h1 align="center">StockFinder</h1>

[View the live project here.]()

StockFinder is an application that allows you to search for a company stock (with an auto-complete search feature), see real time quote data, a graph of the cost of stocks within a certain timeline, see the current news about the company, and see current analysis for the stock.

Add image of project (giphy)

<br/>
<br/>
<br/>

## User Experience (UX)

- ### User stories

  - As a user, I want to be able to search for a company I want to invest in.
  - As a user, I want to see the list of suggested results as I type my query.
  - As a user, I want to see general current market news.
  - As a user, I want to see a graph of the cost of stocks within a certain timeline.
  - As a user, I want to see the current news about the company/stock.
  - As a user, I want to see the current analysis for the stock.
  - As a user, I want to be able to use the application across all devices (PC, tablet, and mobile)

- ### Design

  - #### Colour Scheme
    - The theme colour of the website is #7bcbc4.

- - #### Typography

    - The Lato font is the main font used throughout the whole website and Roboto on the main headings and navigation links, with Sans Serif as the fallback font in case for any reason the font isn't being imported into the site correctly.

  - #### Favicon

    - StockFinder favicon was used to allow user to distinguish the tab when multiple tabs are open in their browser, which allows for a better user experience.

  - #### Animations
    - logo-bounce-animation:
      - When there is a hover on the logo in the header, logo-bounce-animation is applied to let the user know that the logo is a clickable link. The logo-bounce-animation adds some fun to the website.

### Wireframes

- Wireframe for this project are available [here](./public/Stockfinder%20wireframe%2022Feb.png).

## Features

### As a user, I want to be able to search for a company I want to invest in.

- This [API](https://finnhub.io/docs/api/symbol-search) was used to get the data needed.
- A form with an input was used, where the user can type in their query.

### As a user, I want to see the list of suggested results as I type my query.

- Loading
- Auto complete search (dev link)
- Debounce, only call API after 0.5 sec stopping typing (onchange)

### As a user, I want to see general current market news.

- Wrote function that capitalize first letter of category.
- Added conditional rendering on class names of category. If category is top news, its color will be red. If it's business, color is blue.
- Loading - better user expereince. If API hasn't loaded yet, component 'Loading' will be shown to let user know that page is being loaded (show picture)

### As a user, I want to see a graph of the cost of stocks within a certain timeline.

- Price heading
  - call APIs for information
  - convert IPO
  - convert market cap
- Graph
  - too many data on x axis, when window size is smaller than 1000, remove data label. Can hover to see data.

### As a user, I want to see the current news about the company/stock.

### As a user, I want to see the current analysis for the stock.

### As a user, I want to be able to use the application across all devices (PC, tablet, and mobile)

- Ensure responsiveness on all device sizes by using media queries.
- Use of media queries that has various screensize breakpoints to ensure that all the pages of the website looks good at all screen sizes.

### Accessibility

- Ensure accessibility throughout the website by:
  - Adding 'alt' text on all images.
  - Font awesome icons are in an `<i>` tag. A span with a class "sr-only" is added which describes the icons. The "sr-only" class has a display:none in the stylesheet, which hides the text on screen, but allows for screenreader to be read.

### Loading

- loading component when API is being loaded to provide a better visual UX. Used react spinners

<br/>
<br/>

## Technologies Used

### Languages Used

- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)

### Frameworks, Libraries & Programs Used

- [React](https://reactjs.org/)

  - Using React for my project was pre-approved by my mentor, Narender Singh, with the permission from Code Institute.
  - React is a JavaScript library used for building user interfaces through encapsulated components that manage their own state.

  To create a React project, run:

  ```
  npx create-react-app my-app
  cd my-app
  npm start
  ```

- [Finnhub API](https://finnhub.io/docs/api/)

  - Finnhub API was used to create StockFinder project. The API provides access to real-time RESTful APIs for stocks.

- [SASS](https://sass-lang.com/)

  - Sass is a stylesheet language that’s compiled to CSS. It allows you to use variables, nested rules, mixins, functions, and more, all with a fully CSS-compatible syntax. Sass helps keep large stylesheets well-organized and makes it easy to share design within and across projects.

  To add a SASS stylesheet, run:

  ```
  npm install node-sass --save
  ```

- [ES Lint](https://eslint.org/) and [Prettier](https://github.com/prettier/prettier)

  - ESLint was used to statically analyze the code to quickly find problems. It enforces good code-quality.
  - Prettier was used to automatically format the code as it is saved to mitigate code errors/conflicts.

  To install these dependencies, run:

  ```
  npm i --save-dev eslint@6.8.0 prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hook
  ```

  Modify `package.json`

  ```
  {
    "scripts": {
  ... add the following two line
        "lint": "eslint --fix .",
        "lint-check": "eslint ."
    }
  }
  ```

  To configure the linter, create a file named `.eslintrc.js` at the root of the project with the following:

  ```
  module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  ignorePatterns: ['/node_modules/**', '/build/**'],
  rules: {
    'no-unused-vars': ['warn', { args: 'none', argsIgnorePattern: 'req|res|next|val' }],
    'prettier/prettier': ['error'],
  },  settings: {
    react: {
      version: 'detect',
    },
  },
  };
  ```

- [Axios]()

  - XXX

- [react-spinners](https://www.npmjs.com/package/react-spinnershttps://www.npmjs.com/package/react-spinners)

  - loading

- nivo

- Others tools:

- [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
  - Flexbox was mainly used to create the website responsive on all devices such as PCs, tablets and mobiles.
- [Google Fonts:](https://fonts.google.com/)
  - Google fonts were used to import the 'Lato' font into the style.css file which is used on all pages throughout the project, while 'Roboto' was used for headings.
- [Font Awesome:](https://fontawesome.com/)
  - Font Awesome was used throughout the website to add icons for aesthetic and UX purposes.
- [Git](https://git-scm.com/)
  - Git was used for version control to commit to Git and Push to GitHub.
- [GitHub:](https://github.com/)
  - GitHub was used to store the projects code after being pushed from Git.
- Netlify to deploy
- [Visual Studio Code](https://code.visualstudio.com/)
  - Visual studio code was used to write the code.
- [Balsamiq:](https://balsamiq.com/)
  - Balsamiq was used to create the [wireframes]() during the design process.

## Testing

- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- https://jestjs.io/docs/snapshot-testing
- Snapshot Testing
  Snapshot tests are a very useful tool whenever you want to make sure your UI does not change unexpectedly.

A typical snapshot test case renders a UI component, takes a snapshot, then compares it to a reference snapshot file stored alongside the test. The test will fail if the two snapshots do not match: either the change is unexpected, or the reference snapshot needs to be updated to the new version of the UI component.

(old)
The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

- Testing dates in company news

- [W3C Markup Validator](https://validator.w3.org/#validate_by_input)
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input)

During testing, the following errors were found and were rectified:

- Market cap logic in company summary - didn't work on billions due to error in logic.

- XXX

- yarn build, The operation `#7bcbc4 plus 20%` is deprecated and will be an error in future versions.
  Consider using Sass's color functions instead.

- ES Lint

## Deployment

### GitHub Pages

The project was deployed to Netlify using the following steps:

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps:

1. At the top of the Repository, above the "Settings" Button on the menu, locate the "Fork" Button.
2. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Under the repository name, click "Clone or download".
2. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
3. Open Git Bash.
4. Change the current working directory to the location where you want the cloned directory to be made.
5. Type `git clone`, and then paste the URL you copied in Step 2.

```

git clone https://github.com/USERNAME/REPOSITORY

```

## Credits

### Code

- The structure of my React project to ensure best practices was based in this [article](https://www.devaradise.com/react-project-folder-structure?fbclid=IwAR3QkX7MSaZ8L1yxSeRQ-cTemlXv61JUjlVPkwyjALAGSXp9LhwTtxP6W9w).

  - Assets contain XXX
  - Components contain a collection of my UI components.
  - Pages reflects the routes of my application.
  - Services contain my JavaScript function that manages API integration.

- Use of Axios was based in this [article](https://www.digitalocean.com/community/tutorials/react-axios-react).

  - XXX

- Converting time given by API to relative time

  - https://stackoverflow.com/questions/6108819/javascript-timestamp-to-relative-time

- Debounce function in search onChange
  - https://levelup.gitconnected.com/debounce-in-javascript-improve-your-applications-performance-5b01855e086

### Content

- All content was written by the developer.

### Media

- All the information from this project obtained from [Finnhub API](https://finnhub.io/docs/api/symbol-search)

### Acknowledgements

- My mentor for continuous helpful feedback.

```

```

```

```
