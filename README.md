# Vue Advanced Workshop

This is the companion repository to the Vue Advanced Workshop.

## Prerequisites

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/) version 6+

## Setup

1. Clone this repo:

  ``` bash
  git clone https://github.com/yyx990803/vue-advanced-workshop.git
  ```

2. Install dependencies (for automated tests):

  ``` bash
  cd vue-advanced-workshop
  npm install
  ```

## Usage

### Progressing Through Topics via Git Branches

- This repo contains a branch for each topic as the workshop progresses. You can view all available branches by running:

  ``` bash
  git branch
  ```

  To jump to a given topic, use the following git command:

  ``` bash
  git checkout 1.1
  ```

  This will put you at the starting step of topic 1.1. Locate and open the HTML file that starts with 1.1 (e.g. `1-reactivity/1.1-getter-setter.html`) - it will contain the corresponding code exercise for that topic. You are expected to provide the implementation that fulfills the requirements outlined in the description.

- You can checkout the hints for a given exercise (if it exists) with:

  ``` bash
  git checkout 1.1-hints
  ```

- And view the reference implementation of an exercise with:

  ``` bash
  git checkout 1.1-ref
  ```

- The `master` branch contains all exercises with full hints and reference implementations.



### Saving Your Work

As you work on the exercise, you will leave un-commited changes to the repo. Make sure to commit your changes before checking out a different branch:

``` bash
git add -A
git commit -m 'working on exercise 1.1'
```

After viewing the hints or reference in a different branch, you can then go back to the original branch to continue the exercise.

### Automated Tests

For each exercise there will be an automated test case to check if your implementation meets the requirements. To run the test for a given exercise (e.g. 1.1), run:

``` bash
npm test -- -t 1.1
```

You can also run the test in watch mode (which automatically re-runs the tests as you edit the files) with:

``` bash
npm run watch
```
