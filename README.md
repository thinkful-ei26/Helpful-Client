# Helpful

<div align="center"><img src="./public/ico.png" width="150px" /></div>

## Why?

Sometimes finding volunteer work is the hardest part. Helpful aims to bridge the gap between those who need, and those who can give. Connect with Organizations and see events happening in your community.

## What?

Helpful brings community organizations and volunteers together. If you want to make a difference in your community, you can find groups and events that would love to get your help. If you are an organization in need of volunteers, you can post your organization's profile and publicize your events here.

# Screenshots

![Screenshot](./html-wireframes/CAPTURE.png "Screenshot")  
![Screenshot](./html-wireframes/CAPTURE1.png "Screenshot 2")  
![Screenshot](./html-wireframes/CAPTURE2.png "Screenshot 3")

## MVP (v.1.0.0)

<input type="checkbox" disabled checked /> **Create an Organization:** Users can create Volunteer Organizations  
<input type="checkbox" disabled checked /> **Create Events within an Organization:** Organizations can create unlimited events in which users can attend  
<input type="checkbox" disabled checked /> **Rate your favorite Events:** Persistent storage of all events  
<input type="checkbox" disabled checked /> **View relevant opportunities by proximity:** Integration with Google Maps API for proximity based search

## V2 feature list

<input type="checkbox" disabled /> **Export RSVP Data to CSV**  
<input type="checkbox" disabled /> **Leave comments on organization page**  
<input type="checkbox" disabled /> **Gamification:** Add kudos, karma or some awards system to give to users. Shareable badges.  
<input type="checkbox" disabled /> **User availability calendar and active flag**  
<input type="checkbox" disabled /> **Heatmap based on attendee density**  
<input type="checkbox" disabled /> **Frequent User Data**  
<input type="checkbox" disabled /> **Additional styling/accessibility**

### Tech Stack

#### Front End:

-   React (Hooks)
-   React Google Maps
-   Vanilla CSS (No framework)

#### Back End:

-   Node/Express
-   MongoDB/Mongoose
-   JWT/bCrypt

#### Testing:

-   Mocha/Chai
-   Jest/Enzyme

### Links

-   [AGILE SCRUM Board](https://trello.com/b/V23l3j4r/brogrammers)
-   [Twitter](https://twitter.com/Helpful13851836)
-   [ProductHunt](https://www.producthunt.com/posts/helpfull)
-   [Deployed Client](https://helpful-client.herokuapp.com)

#### Team

-   **[Bryan Johnson](https://github.com/Fantosism)** - Marketing Lead
-   **[Michael McKay](https://github.com/mamckay)** - Product Manager
-   **[Codey Worley](https://github.com/CodeyWorley)** - QA Lead
-   **[Barrett Carpenter](https://github.com/carpenter-js)** - Project Manager
-   **[Joaquin Fox](https://github.com/joaquinfox)** - Design Lead

#### Wireframes

-   [Index](./html-wireframes/index.html)
-   [Organization](./html-wireframes/organization.html)
-   [Search](./html-wireframes/search.html)
-   [Dashboard](./html-wireframes/dashboard.html)

#### API

```
/api
├── /users
│   └── GET
│       └── /
│   └── POST
│       └── /register
├── /auth
│   └── POST
│       ├── /login
│       ├── /refresh
├── /org
│   └── GET
│       ├── /all
│       ├── /location/:range/:lat/:lng
│       ├── /:id
│   └── POST
│       └── /
│   └── PUT
│       ├── /
│   └── DELETE
│       ├── /
├── /event
│   └── GET
│       ├── /all
│       ├── /location/:range/:lat/:lng
│       ├── /:id
│       ├── /org/:id
│   └── POST
│       └── /
│   └── PUT
│       └── /
│   └── DELETE
│       └── /
├── /follow
│   └── GET
│       ├── /all
│       ├── /user
│       ├── /following/:id
│       ├── /org/:id
│       ├── /:id
│   └── POST
│       └── /
│   └── PUT
│       └── /
│   └── DELETE
│       └── /
├── /rsvp
│   └── GET
│       ├── /all
│       ├── /user
│       ├── /event/:eventId
│       ├── /:id
│       ├── /specific/:eventId
│   └── POST
│       └── /
│   └── PUT
│       └── /
│   └── DELETE
│       ├── /
│       ├── /user
├── /meetup
│   └── GET
│       ├── /all
│       ├── /owner
│       ├── /:id
│   └── POST
│       └── /
│   └── PUT
│       └── /
│   └── DELETE
│       └── /
├── /rsvpmeetup
│   └── GET
│       ├── /all
│       ├── /user
│       ├── /org/:id
│       ├── /:id
│       ├── /meetup/:id
│   └── POST
│       └── /
│   └── PUT
│       └── /
│   └── DELETE
│       └── /
├── /role
│   └── GET
│       ├── /all
│       ├── /user
│       ├── /org/:id
│       ├── /:id
│   └── POST
│       └── /
│   └── PUT
│       └── /
│   └── DELETE
│       └── /
├── /comments
│   └── GET
│       ├── /
│       ├── /event/:eventId
│       ├── /user/all
│   └── POST
│       └── /
│   └── PUT
│       └── /
│   └── DELETE
│       └── /
├── /orgrating
│   └── GET
│       ├── /
│       ├── /org/:orgId
│       ├── /user/:id
│       ├── /user/all
│   └── POST
│       └── /
│   └── PUT
│       └── /
│   └── DELETE
│       └── /
```
