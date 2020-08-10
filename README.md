# Project Overview

## Project Description

For this project, I plan to make an application that will teach the user about the basics of federal tax law.
I will keep user data in API and utilze 2, possibly 3 relational models in the API using Rails. Also, I will have a
database for tax tables that will calulate taxes for those making less than \$100K. The main goal of this app is
teach others tax knowlege they otherwise wouldn't understand.

## Models

```
create_table "information", force: :cascade do |t|
    t.string "name"
    t.boolean "citizen"
    t.integer "age"
    t.string "marital_status"
    t.string "address"
    t.boolean "dependent"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end
```

POSSIBLY MORE, WE WILL HAVE TO SEE HOW MVP TURNS OUT
I MAY INCLUDE TAX TABLE API WITH MONGO (IT WILL SIMPLY COMPARE WITH USRE INPUT)

## API

API Structure

```
[
  {
    "id": 1,
    "email": "m@gmail.com",
    "password_digest": "$2a$12$O1s5Bl3616IfjKJLYTJTEO/4OOMQrz71cpnx.0xGV/8rm9XkROE7G",
    "created_at": "2020-08-09T21:12:37.746Z",
    "updated_at": "2020-08-09T21:12:37.746Z",
    "information": [
      {
          "id": 1,
          "name": "Kcorb Blansing",
          "citizen": true,
          "age": 25,
          "marital_status": "single",
          "address": "no",
          "dependent": false,
          "created_at": "2020-08-09T21:12:37.986Z",
          "updated_at": "2020-08-09T21:12:37.986Z",
          "user_id": 1
      }
    ]
]


```

## Wireframes AND Components

Upload images of wireframe to imgur and add the link here with a description of the specific wireframe. Do not include the actual image and have it render on the page.
| Before (Expected Layout): |
| (https://imgur.com/aaBMnU5) |
| (https://imgur.com/w2GBeT2) |
| (https://imgur.com/ITnCIzI )|

## Project Schedule

| Day   | Deliverable                                                 | Status     |
| ----- | ----------------------------------------------------------- | ---------- |
| Day 1 | Project Description                                         | inComplete |
| Day 1 | Wireframes / Priority Matrix / Timeline /WorkSheet          | inComplete |
| Day 1 | Complete Backend on Rails                                   | inComplete |
| Day 2 | Allow User Login, Authorization to certain portions of site | inComplete |
| Day 3 | Apply Crud That Will Allow Customization of Profile         | inComplete |
| Day 3 | Apply CSS and Styling                                       | inComplete |
| Day 4 | Get Tables Working                                          | inComplete |
| Day 4 | Start rendering information about tax law                   | inComplete |
| Day 5 | MVP/Post MVP                                                | inComplete |
| Day 5 | Final Touches                                               | inComplete |
| Day 6 | Present                                                     | incomplete |

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP. Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.

#### MVP

- Complete BackEnd with routes using Ruby and Rails
- Get BackEnd Deployed
- Allow User Login / Authorization to certain parts of site
- Allow User to Create their own tax profile that will be storted in db
  such as name, age, dependent, ect
- Have links that explain the basics of tax law

#### PostMVP

- Create tax table that will calculate tax
- Allow User to input their income and spit back their tax liability
- Include other credit that some may be eligible for

## Functional Components

- The absolute most functionial component hads to be the ability to clearly explain the basics of tax law
- Also, the page has to be resonsive that depends on what type of device the user is using
- Also, it has to present a clean and representation of my skill as a React and Rails developer

#### MVP

| Component                          | Priority | Estimated Time | Actual Time Invetsted | Time |
| ---------------------------------- | :------: | :------------: | :-------------------: | :--: |
| API Data Render                    |    H     |     10hrs      |          8hr          |  NA  |
| API Deployment                     |    H     |     10hrs      |          8hr          |  NA  |
| User Login /Authentication         |    H     |     10hrs      |          8hr          |  NA  |
| User CRUD function                 |    H     |     10hrs      |          8hr          |  NA  |
| EXPLAIN TAXES CLEARLY              |    H     |     10hrs      |          8hr          |  NA  |
| API Data Render                    |    H     |     10hrs      |          8hr          |  NA  |
| Skeleton HTML                      |    H     |      3hr'      |          4hr          |  NA  |
| Skeleton CSS for Mobile            |    H     |     3hrs '     |          5hr          |  NA  |
| Hamburger                          |    H     |      1hr       |          3hr          |  NA  |
| Regular Nav                        |    H     |      H '       |          3hr          |  NA  |
| Adding Form                        |    H     |     3hr '      |          6hr          |  NA  |
| Other sections and flex            |    M     |     4hr '      |          4hr          |  NA  |
| Responsive                         |    H     |     3hr '      |          5hr          |  NA  |
| Social Media Icons                 |    L     |     1hr '      |           -           |  NA  |
| Have KEY AND VALUE RENDER TOGETHER |    M     |     5hrs '     |          7hr          |  NA  |
| Styling                            |    M     |     5hrs '     |          7hr          |  NA  |
| Total                              |    H     |      -hrs      |         60hr          | -hrs |

| React Componentss       |                       Description                        |
| ----------------------- | :------------------------------------------------------: |
| App                     |           Set Up App that allows Route Render            |
| Nav                     | Acts as header that has links to different parts of page |
| Footer                  |              footer that also allows links               |
| Main                    |                 main currency rendering                  |
| Adding Form             |                            H                             |
| Other sections and flex |                            M                             |
|                         |                            H                             |
| Responsive              |                            H                             |
| Social Media Icons      |                            L                             |
| Styling                 |                            M                             |
| Total                   |                            H                             |

#### PostMVP

| Component              | Priority | Estimated Time | Time Invetsted | Actual Time |
| ---------------------- | :------: | :------------: | :------------: | :---------: |
| Add Tax Tables         |    L     |      5hr       |      -hr       |     -hr     |
| Calculate Taxes        |    L     |      1hr       |      -hr       |     -hr     |
| Interactive Everywhere |    M     |      4hr       |      -hr       |     -hr     |
| Materialize            |    H     |      4hr       |      -hr       |     -hr     |
| Bootstrap              |    H     |      4hr       |      -hr       |     -hr     |
| Make own icon          |    L     |      4hr       |      -hr       |     -hr     |
| Total                  |    H     |     20hrs      |      -hrs      |    -hrs     |

## Additional Libraries

React BootStrap, bcrypt, Ruby, Rails

## Code Snippet

code snippet most proud of:

```


```

## Issues and Resolutions

**ERROR**:

```
[]
```

**RESOLUTION**:

**ERROR**:

**RESOLUTION**:
