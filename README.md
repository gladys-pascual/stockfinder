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

- Wireframes for this project are available [here](./public/Stockfinder%20wireframe%2022Feb.png).

## Features

### As a user, I want to be able to search for a company I want to invest in.

- This [API](https://finnhub.io/docs/api/symbol-search) was used to get the data needed.
- A form with an input was used, where the user can type in their query.

### As a user, I want to see the list of suggested results as I type my query.

- As the user types in their input, a the first five suggested companies that corresponds to the input will be given, using the onChange in the input.
- To avoid calling the API on every change, which is typing every letter, a debounce function from this [article](https://levelup.gitconnected.com/debounce-in-javascript-improve-your-applications-performance-5b01855e086) was used to ensure that only after 0.5 seconds of onChange will the API be called.
- As the user clicks on the desired stock, handleItemClick function is called, whcih sets the selectedCompany state to the chosen company, and the user is routed to the stock page, with the url of `/quote/${item.symbol}` using react-router-dom. The symbol now available in the URL will be used to call the API needed for the stock page.
- More information about react-router-dom is available in the Frameworks, Libraries & Programs used below.

### As a user, I want to see general current market news.

- The [Market News API from Finnhub](https://finnhub.io/docs/api/market-news) was used to get the latest market news.

  In News.js:

  - A function was written to capatilize the first leter of the category (from line 7).
  - Added conditional rendering on class names of category. If category is top news, its color will be red. If it's business, color is blue. (from line 22)
  - If the Market News API hasn't loaded yet, the LoadingMarketNews.js component will be loaded to let user know that page is being loaded (show picture)

### As a user, I want to see a graph of the cost of stocks within a certain timeline.

- The [Stock Candles](https://finnhub.io/docs/api/stock-candles) API was used to get the data needed to show the cost of stocks within certain timelines.
- By default, 5 day graph is shown. Buttons are used to change between 5 days (5D), 1 month (1M), 3 months (3M), 1 year (1Y) and 5 years (5Y).
- The [Line chart](https://nivo.rocks/line) from nivo was used to plot the graphs of stock prices. To ensure responsiveness, when window is smaller than 1000 px, the x-axis data label is not visible for visual appearance and better user experience.

### As a user, I want to see the current news about the company/stock.

- The [Company News](https://finnhub.io/docs/api/company-news) API was used.
- The News.js component was used for both the Market News, and the Compnay News.

### As a user, I want to see the current analysis for the stock.

- The [Recommendation Trends](https://finnhub.io/docs/api/recommendation-trends) API was used to get informaion about the recommendation of analysts on whether the stock is a strong buy, buy, hold, sell, or strong sell. A [bar chart](https://nivo.rocks/bar/) from nivo library was used to show a percentage of this data.
- Information about the total number of analysts and the date to which the analysis was made is provided as well.
- The recommendation is written in text, which uses the colour that matches its corresponding bar from the chart.

### As a user, I want to be able to use the application across all devices (PC, tablet, and mobile)

- Use of media queries that has various screensize breakpoints to ensure that all the pages of the website looks good at all screen sizes.

### Accessibility

- Ensure accessibility throughout the website by:
  - Adding 'alt' text on all images.
  - Font awesome icons are in an `<i>` tag. A span with a class "sr-only" is added which describes the icons. The "sr-only" class has a display:none in the stylesheet, which hides the text on screen, but allows for screenreader to be read.

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

- [Axios](https://github.com/axios/axios)

  - Axios is a JavaScript library that allows making an HTTP request, and an alternative to the .fetch()
  - Some of the advantages of using axios over the fetch method are that axios performs automatic transforms of JSON data and has better browser support compared to the fetch method.

  To install, run:

  ```
  npm install axios
  ```

- [react-router-dom](https://reactrouter.com/web/guides/quick-start)

  - React is single page application. react-router-dom library allows for the application to navigate between different components, changing the browser URL, modifying the browser history, and keeping the UI state in sync.

  To install:

  ```
  npm install react-router-dom
  ```

- [react-spinners](https://www.npmjs.com/package/react-spinners)

  - React spinners were used for the loading components to provide a visual component when fetching the API, leading to a better user experience.
  - Pacman and SyncLoader were used.

  To install, run:

  ```
  npm install --save react-spinners
  ```

- [nivo](https://nivo.rocks/)

  - Nivo provides a rich set of graph components.
  - [Line chart](https://nivo.rocks/line) for the graphs of stock prices and [bar chart](https://nivo.rocks/bar/) for the analysis were used.

  To install, run:

  ```
  npm install --save @nivo/core @nivo/line @nivo/bar
  ```

### Others tools:

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
- [Netlify](https://www.netlify.com/)
  - Netlify was used to deploy my project.
- [Visual Studio Code](https://code.visualstudio.com/)
  - Visual studio code was used to write the code.
- [Balsamiq](https://balsamiq.com/)
  - Balsamiq was used to create the wireframes during the design process.
- [Trello](https://trello.com/en)
  - Trello was used to organise my user stories and tasks that needed to be completed per sprint. My board is availabe [here](https://trello.com/invite/b/N4jVJMVQ/70cbd729c767477e73aa59626f33f706/stockfinder-milestone-project-2-code-institute).

## Testing

- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

  - Tests were written using the React Testing Library to ensure that the components were rendered as expected. [Snapshot Testing](https://jestjs.io/docs/snapshot-testing) were used.
  - Snapshot tests are a very useful tool whenever you want to make sure your UI does not change unexpectedly.
  - A typical snapshot test case renders a UI component, takes a snapshot, then compares it to a reference snapshot file stored alongside the test. The test will fail if the two snapshots do not match: either the change is unexpected, or the reference snapshot needs to be updated to the new version of the UI component.

  Once the tests are written, run the test by:

  ```
  npm test
  ```

  The following results were obtained:

  ```
  Test Suites: 18 passed, 18 total
  Tests:       18 passed, 18 total
  Snapshots:   18 passed, 18 total
  Time:        4.187 s
  Ran all test suites.
  ```

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

- [W3C Markup Validator](https://validator.w3.org/#validate_by_input)

  - To get the HTML rendered in this project, in the deployed version of the project, I right-clicked and selected inspect. In elements, I right-clicked from the top of the HTML element, selected copy, then copy outer html. Note that when copying, the `<!DOCTYPE html>` was not included in the copy and will therefore give an error when put to W3C validator. The following errors were found:

  - Error: "Attribute exact not allowed on element a at this point"
    `<a exact="true" class="logo" href="/">`

    - The exact="true" prop is needed for react-router to ensure that href="/" will be navigated to home. More information is available in this [article](https://medium.com/@sampath.katari/use-of-exact-prop-for-route-in-react-router-v4-fdbe20e8925d).

  - Missing alt on the images of the news rendered in the News.js component. This was rectified by using the headline as a value for alt.

  ```
  In News.js
  old
    <img src={image} } />
  new
    <img src={image} alt={headline} />
  ```

- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input)

  - To get the CSS rendered in this project, in the deployed version of the project, I right-clicked and selected "View page source". I looked for the CSS stylesheet, which was `<link href="/static/css/main.3f80367c.chunk.css" rel="stylesheet">`, found after the `<title> `and before the `<head>`. I clicked on the link and it gave the rendered CSS.
  - When put to the validator, no errors were found.

- Testing dates in company news

- Manual testing were also performed to ensure that the application works as intended. During this, the following errors were found and were rectified:

  - Market cap logic in company summary - didn't work on billions due to error in logic.
  - The following stocks had an error and were rectified as follows:

    - GGN - When the [Recommendation Trends](https://finnhub.io/docs/api/recommendation-trends) API was called on the GGN stock, the call was successful with a status 200. Although, the API gave an empty array back, which caused an error on the code since there is no information. This error cannot be catched in the try catch async fetchAnalysisData function since the call was successful. Therefore, the length of the array was checked and if it is less than 0, then return null and the Analysis component would not be rendered, avoiding the error.

      ```
      if ((analysisData && analysisData.length === 0) || analysisData === undefined) {
          console.log("No analysis data available for this stock.");
          return null;
      }
      ```

    - AAPL.SN, AAPL.SW, CHC.AX - When the [Stock Candles](https://finnhub.io/docs/api/stock-candles) API was called for AAPL.SN, a status 403 forbidden. An additional state was added on Graph.js of noInfo, which was set to false initially, and that if an error was catched on the try catch async function fetchStockData, the setNoInfo becomes true. If noInfo is true, a `<NoInfo />` component is loaded which says " Unfortunately, information about this stock is not available. Please search for another stock." with search as a link that brings back to the homepage to allow the user be able to search for another stock.

    - FVPIG:65: Similar to GGN but now by calling [Stock Candles](https://finnhub.io/docs/api/stock-candles) gives a successful call with a status 200, but with data of `{ "s": "no_data" }`. If this happens, then return null and the Graph.js component would not be rendered, avoiding the error.

- During the build, `npm build`,it was found that the operation `#7bcbc4 + 20%` was deprecated and will be an error in future versions.

- I removed the percentages and used a specific colour instead.

- During the testing of the deployed version, the following error was found in the console after searching for a specific stock, which has something to do with the nivo library that was used to create the line and bar graphs.

```

FrameLoop.ts:110 TypeError: r.willAdvance is not a function
at FrameLoop.ts:173
at Module.vc (react-dom.production.min.js:244)
at y.advance (FrameLoop.ts:169)
at n (FrameLoop.ts:107)

```

- I tried to follow this [link](https://github.com/plouc/nivo/issues/1290?fbclid=IwAR0Ms4AGDv-8Yd56_DNwvnYQouxLxE8ma-WygPf-gh2Am-JPVrWq4uVMqUM#issue-744319832) to rectify the error by switching to an older version of nivo, but more errors were generated when the older version was used. Nivo was upgraded back to the latest version. The application was throughly tested, both automatically and manually, as outliend above, and all functionalities were working, therefore the latest version of nivo was kept and error was left in the console.

- ES Lint was continually used during the project to ensure that props being passed down are the correct format - ie array, string, object or function.

## Deployment

### Netlify

1. Add my new site by clicking the Add A New Project button.
2. Link my GitHub.
3. Select the repo stockfinder.
4. Configure my settings by deploying the main branch.
5. Build the site.
6. In site settings, click build and deploy, then environment. Add my API key in the environment variables, with the key REACT_APP_API_KEY and value with the API key from Finnhub. This is to ensure that my API key is not publised in my GitHub repository.

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

- Use of Axios was based in this [article](https://www.digitalocean.com/community/tutorials/react-axios-react).

- Converting time given by API to relative time was from this [article](https://stackoverflow.com/questions/6108819/javascript-timestamp-to-relative-time).

- Debounce function in search onChange was from this [article](https://levelup.gitconnected.com/debounce-in-javascript-improve-your-applications-performance-5b01855e086).

### Content

- All content was written by the developer.

### Media

- All the information from this project obtained from [Finnhub API](https://finnhub.io/docs/api/symbol-search).

### Acknowledgements

- My mentor, Narender Singh, for continuous helpful feedback.
