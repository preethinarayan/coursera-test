# Module 4 Solution

Home page has a link to the categories in the menu app. This is the default state of the application. Clicking on the link to see all categories will load the 'categories' state. This state ensures that all categories are fetched via the data service and allow the controller to initialize them. The template rendered by the state in turn calls the categories component where the view is rendered. Te flow is similar for the items in a particular category as well.