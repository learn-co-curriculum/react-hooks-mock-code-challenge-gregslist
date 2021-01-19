# React Mock Code Challenge: gregslist

## Solution Walkthrough

[View on YouTube](https://www.youtube.com/watch?v=dFMDK1LHZPo&list=PLc6AmvC5Zybwdqx2mqyXEDpyJk5uV03u9&index=1)

## Demo

Use this gif as an example of how the app should work.

![Demo GIF](https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-mock-code-challenge-gregslist/master/demo.gif)

## Instructions

Welcome to gregslist, a community site for finding free items near you.

The designers have put together the components and CSS. Now it's up to you to
bring the features to life by adding stateful logic as well as persisting data
to the backend via our API.

Your job will be to make our app work according to the user stories you will
find the [Core Deliverables](#Core-Deliverables) section.

## Setup

1. Fork and clone this repository.
2. Run `npm start`. This will open both your React page on port 6002 and your
   backend on port 6001.

## Core Deliverables

As a user:

1. When the app starts, I can see all listings.
2. I can "favorite" and "unfavorite" a listing on the frontend by clicking the
   star icon. This feature doesn't need backend persistence.
3. I can remove a listing from the page by clicking the trash can icon. This
   change should be persisted in the backend.
4. I can search for listings by their name.

### Endpoints for Core Deliverables

The base URL for your backend is: `http://localhost:6001`.

#### GET /listings

Example Response:

```json
[
  {
    "id": 1,
    "description": "heater",
    "image": "./images/heater.jpg",
    "location": "BROOKLYN"
  },
  {
    "id": 2,
    "description": "2019 Toyota Tacoma grill",
    "image": "./images/toyota-grill.jpg",
    "location": "Williamsburg"
  }
]
```

#### DELETE `/listings/:id`

Example Response:

```json
{}
```

## Advanced Deliverables

These deliverables are not required to pass the code challenge, but if you have
the extra time, or even after the code challenge, they are a great way to
stretch your skills.

You'll have to add additional elements for these features. Feel free to style
them however you see fit!

> Note: If you are going to attempt these advanced deliverables, please be sure
> to have a working commit with all the Core Deliverables first!

As a user:

1. I can sort the listings alphabetically by location.
2. I can create a new listing by submitting a form, and persist the changes to
   the backend.

### Endpoints for Advanced Deliverables

#### POST /listings

Required Headers:

```js
{
  "Content-Type": "application/json"
}
```

Request Object:

```json
{
  "description": "heater",
  "image": "./images/heater.jpg",
  "location": "BROOKLYN"
}
```

Example Response:

```json
{
  "id": 1,
  "description": "heater",
  "image": "./images/heater.jpg",
  "location": "BROOKLYN"
}
```
