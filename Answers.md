1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
Filter, map and concat do not produce side effects. Object.assign allows the creation of a new object and the extension of another objects properties.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
The store is a javascript object that contains the state for the application. Actions are objects with a required property known as type and are how we modify the state in the store. A reducer takes the current state and a given action then returns the new state to the store.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is the state contained in the redux store and consists of the application data. Component state can be shared throughout the application or can remain localized to just that component. An example of localized component state would be the state within a form component.

1.  What is middleware?
Middleware is code that runs between two processes to give some new added functionality.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux-thunk allows the application to handle asynchronous requests. It inserts a function(known as a thunk) that can be invoked and is also passed a dispatch function. This allows for an async operation to occur and then the action can be dispatched.

1.  Which `react-redux` method links up our `components` with our `redux store`?
the connect method