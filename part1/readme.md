# Part 1
In this assignment I made a web app based on the provided layout and requirements.

---
## Structure of the project
The app is bootstrapped via Vite, a modern and robust alternative to Webpack. 
I decided to use Vite because it's easier to setup for small projects like this. 

Same as `create-react-app`, Vite supports CSS Modules out of the box. 
I used basic CSS Modules, because I think it's the best way to demonstrate the way I write CSS.
I created separate CSS files — `reset.css`, `variables.css` and `typography.css`. 
I believe this structure is easier to understand and implement.

I added `eslint`, `prettier` and `stylelint` to keep my code tidy. 
I used `stylelint` specifically to enforce the order for the CSS properties.  

---
## Features of the app
The app displays the list of contracts. The list is fetched from mock api service Beeceptor. 
The response is the JSON provided in the assignment. 
The request is made via Redux Toolkit Query, which integrates with Redux Toolkit store and provides useful hooks for working with async requests.

The list is sorted from newest to oldest in the `transformResponse` method of Redux Toolkit Query. 
I decided to sort the results there, which might raise questions. I thought that maybe if in the future we will implement pagination,
it might come handy. But I might be wrong on this one. :)

The app has an input field. You can sort the list of contracts by contractor's name or their address.

Basic responsiveness is implement. However, there is work to be done 
(maybe centering the elements when the screen is small, so it would look better?). 
But these examples were not provided in the tutorial, so I decided not to implement them on my own.

For prices and currency I used method `toLocaleString`. I made the transformations outside the JSX code to improve readability.

I will be glad to answer any questions regarding the exercise!
