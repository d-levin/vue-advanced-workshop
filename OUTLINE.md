## Intro

We often reach for existing libraries when dealing with advanced app features such as routing, state management, form validation and i18n, and a lot of times the implementations behind these libraries can be a black box.

In this workshop we are going to build simple versions of such libraries from the ground up using basic Vue features.

This will help you better understand the nature of these problems and how to better leverage Vue’s reactivity system to come up with elegant solutions.

## Schedule

- 8 hours total
- 9:00  Intro: 15min
- 9:15  Fundamentals - reactivity: 1 hour
        - walk through of reactivity styles (push vs. pull)
        - implementing a simple reactive observer system
          - Object.defineProperty
          - The `Dep` class
          - The `Watcher` class
          - Handling Arrays
- 10:15 Fundamentals - render functions: 1 hour
        - Concept of Virtual DOM
        - Template -> render fn compilation
        - render fn usage
          - the `data` object
        - Example: rendering an element based on prop
        - Example: rendering a dynamic component based on prop
        - Example: enhancing an existing component
        - Example: enhancing a slot child component
- 11:15 Fundamentals - writing a plugin: 15min
        - How Vue instance extension works
        - What is `$options`
        - Working with `$options` in lifecycle hooks
        - extracting the logic into plugins
- 11:15 Lunch Break (1h)
- 12:30 State Management (1h)
        - Shared objects as stores
        - Shared Vue instances as stores
        - Abstracting actions and mutations
        - Using a more functional interface
        - Decoupling store singleton with Dependency Injection
- 1:30  i18n (1h)
- 2:30  Break (30min)
- 3:00  Routing (1h)
        - The simplest router (hashchange + <component :is>)
        - Parsing the URL (the basic way)
        - Using `path-to-regexp`
        - Extracting a route table
        - Navigation with <router-link>
        - Navigation hooks as an async queue
        - Higher-order components and <router-view>
        - Nested routes
- 4:00 Form Validation (1h)
        - Let's build a basic email validation input
        - Extracting the validation logic a bit
        - Plugins: different approaches
          - Markup-based (vee-validate)
          - Model-based (vuelidate)
        - Extracting them into Components
- 5:00  Wrap up

## Before We Dive Into Features

Think about what these systems share in common.

- Routing: URL -> UI state

- State Management: Global/shared state -> UI state

- Form validation: User input -> temp state -> UI state

- i18n: localization data -> UI state

The key is how the state -> UI mapping works, and that means we need to have a solid understanding of two things:

1. The reactivity system in Vue (how data in Vue works)

2. The render system (template compilation and render functions)

