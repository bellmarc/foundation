---
title: ASOIAF React Project
tags: Templates, Talk
description: View the slide with "Slide Mode".
---

# Game Of Thrones Fanpage Project

<!-- Put the link to this slide here so people can follow -->
slide: https://hackmd.io/p/template-talk-slide

---
<img src="https://i.imgur.com/ea4n1vP.png" width="680" height="480"/>

---
### What I Built:
A Game Of Thrones fanpage for users of the HBO series, featuring all houses, Sworn Members of each House, character search and Westeros/Essos world map.

---

## Technologies Included

- ReactJS, Node, Axios, JSX, CSS, and two APIs.


---

### MVP(Minimum Viable Product):
- Splash page video with Toggle On/Off music button.
- Main page featuring every house with pagination, when clicked, the house displays all associated members with basic information.
- Note: Images were not included in asoiaf api so I had to link the endpoint to a second API and placeholders present until images loaded (if image is available).
- Search function by character name (first and last required)
- Map of Westeros (linked to interactive map)


#### User stories
- User views landing page and can mute/play intro music if desired. Icon indicates sound ability.
- User is prompted to click 'See More' button to enter Main page.
- User views navigation bar featuring 'Home', About', 'Search icon', & 'Westeros Map'
- Home page displays 3 x 3 card-like layout of Houses cards, linked to a separate page of character cards
- If User selects a House card, they may view all characters with origin ties to the House.
- If User decides to search on the Home page navbar, they may find a particular character and information on them.



##### Other features to be added:
- Optimize load time of APi images
- Add functionality to favorite character via local Storage.
- Develop more flexiblity in search parameters for characters who don't meet criteria of a first or last name.
- Build an interactive map (PostGres DB via tutorial)of Westeros/Essos integrated onto Map page.

---

## Content script

- useContext
- Topics
- React Components:
    - Home, About, Search, CharacterByHouse, CharacterByName, Map, Music
- Added context (Music & Character Providers)
- Use Lifecycle methods (HTTP requests)
    - i.e: componentDidMount
- Incorporate render-props and HOC's
  - added
---

### Wrap up

- Fanpage of Game of Thrones HBO series created for users to explore houses and characters associated with each and also search and save favorite characters.


---

### :computer: API

This project will be built using Two API's of Ice and Fire & :

-  [An API of Ice and Fire](https://anapioficeandfire.com/)

-  [GOT-API](https://api.got.show/doc/)

- [GitHub](https://github.com/bellmarc)

