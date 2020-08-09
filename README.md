# Project Overview

## Project Description

For this project, I plan to make an application that will teach the user about the basics of federal tax law.

## API

https://api.frankfurter.app/latest?from=USD

```{
"amount": 1,
"base": "USD",
"date": "2020-06-25",
"rates": {
"AUD": 1.4572,
"BGN": 1.7462,
"BRL": 5.3582,
"CAD": 1.3645,
"CHF": 0.94973,
"CNY": 7.072,
"CZK": 23.925,
"DKK": 6.6548,
"EUR": 0.89286,
"GBP": 0.80476,
"HKD": 7.7504,
"HRK": 6.7562,
"HUF": 316.38,
"IDR": 14275,
"ILS": 3.4415,
"INR": 75.634,
"ISK": 138.93,
"JPY": 107.37,
"KRW": 1203.33,
"MXN": 22.886,
"MYR": 4.278,
"NOK": 9.7096,
"NZD": 1.5594,
"PHP": 50.067,
"PLN": 3.9869,
"RON": 4.3232,
"RUB": 69.421,
"SEK": 9.3629,
"SGD": 1.3929,
"THB": 30.935,
"TRY": 6.855,
"ZAR": 17.4003
}
}
```

## Wireframes AND Components

Upload images of wireframe to imgur and add the link here with a description of the specific wireframe. Do not include the actual image and have it render on the page.
Component|(https://i.imgur.com/YMZWks7.png)| WireFrame|(https://i.imgur.com/UXZQLag.png)|

## Project Schedule

| Day   | Deliverable                                        | Status     |
| ----- | -------------------------------------------------- | ---------- |
| Day 1 | Project Description                                | inComplete |
| Day 1 | Wireframes / Priority Matrix / Timeline /WorkSheet | inComplete |
| Day 1 | Get Data To Render Responsive                      | inComplete |
| Day 2 | Get Links To Different Currencies                  | inComplete |
| Day 3 | Core Application Structure (HTML, CSS, etc.)       | inComplete |
| Day 4 | MVP & Bug Fixes                                    | inComplete |
| Day 5 | Final Touches                                      | inComplete |
| Day 6 | Present                                            | incomplete |

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP. Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.

#### MVP

- Pull data using api that allows forex to render on the page
- Render data, info, on the page (USD as default)
- Have a nav bar on the left side of the screen
- Allow the user to click in the nav and go straight to a certain currency (except home and about)
- In the individual currency link, the user will see the currency and its exchange rates with other currencies
- have a basic aesthetic design
- make the application responsive
- HAVE NAME OF CURRENCY AND COUNTRY RENDER ON SCREEN (probable post MVP-- not in dataset)
- potentially allow the user to view historical data (probable post MVP)

#### PostMVP

- Allow people to preview their favorite forex searches
- Have people able to contact me via website
- Find data or algorithm that will allow signals in price disparities
- make the webpage more interactive or even change its layout for better optimal viewership
- find standard deviation movements in certain currencies based on historical price movements
- have the flags of countries render next to their currencies
- allow charts

## Functional Components

- The absolute most functionial component had to be the API rendering from European Central Bank database of my various projects
- Also, the page has to be resonsive that depends on what type of device the user is using
- Also, it has to present a clean and representation of my skill as a Reach developer

#### MVP

| Component                          | Priority | Estimated Time | Actual Time Invetsted | Time |
| ---------------------------------- | :------: | :------------: | :-------------------: | :--: |
| API Data Render                    |    H     |     10hrs      |          8hr          |  NA  |
| Skeleton HTML                      |    H     |      3hr'      |          4hr          |  NA  |
| Skeleton CSS for Mobile            |    H     |     3hrs '     |          5hr          |  NA  |
| Hamburger                          |    H     |      1hr       |          3hr          |  NA  |
| Individual Currency Render         |    H     |     3hr '      |          5hr          |  NA  |
| Regular Nav                        |    H     |      H '       |          3hr          |  NA  |
| Adding Form                        |    H     |     3hr '      |          6hr          |  NA  |
| Other sections and flex            |    M     |     4hr '      |          4hr          |  NA  |
| Country & Currency Name            |    H     |     3hrs '     |          3hr          |  NA  |
| Responsive                         |    H     |     3hr '      |          5hr          |  NA  |
| Social Media Icons                 |    L     |     1hr '      |           -           |  NA  |
| Have KEY AND VALUE RENDER TOGETHER |    M     |     5hrs '     |          7hr          |  NA  |
| Styling                            |    M     |     5hrs '     |          7hr          |  NA  |
| Total                              |    H     |     45hrs      |         60hr          | -hrs |

| React Componentss        |                       Description                        |
| ------------------------ | :------------------------------------------------------: |
| App                      |           Set Up App that allows Route Render            |
| Nav                      | Acts as header that has links to different parts of page |
| Footer                   |              footer that also allows links               |
| Main                     |                 main currency rendering                  |
| Individual Currency Link |       Link to individual currency and their rates        |
| Adding Form              |                            H                             |
| Other sections and flex  |                            M                             |
|                          |                            H                             |
| Responsive               |                            H                             |
| Social Media Icons       |                            L                             |
| Styling                  |                            M                             |
| Total                    |                            H                             |

#### PostMVP

| Component              | Priority | Estimated Time | Time Invetsted | Actual Time |
| ---------------------- | :------: | :------------: | :------------: | :---------: |
| Add Favorites          |    L     |      5hr       |      -hr       |     -hr     |
| Historical Charts      |    L     |      1hr       |      -hr       |     -hr     |
| Interactive Everywhere |    M     |      4hr       |      -hr       |     -hr     |
| Materialize            |    H     |      4hr       |      -hr       |     -hr     |
| Bootstrap              |    H     |      4hr       |      -hr       |     -hr     |
| Make own icon          |    L     |      4hr       |      -hr       |     -hr     |
| Total                  |    H     |     20hrs      |      -hrs      |    -hrs     |

## Additional Libraries

React BootStrap, react-chartjs-2

## Code Snippet

I am most proud of the entire Euro historical exchange rate page
code snippet most proud of:

```
 const handleChange2 = (event) => {
    let concat = event.target.value;
    if (event.target.value < 10) {
      concat = "0" + event.target.value;
      props.handleChange2(concat);
    } else {
      props.handleChange2(concat);
    }
  };
  const handleChange3 = (event) => {
    let concat = event.target.value;
    if (event.target.value < 10) {
      concat = "0" + event.target.value;
      props.handleChange3(concat);
    } else {
      props.handleChange3(concat);
    }
  };

```

The way the API was set up, the parameters to access a date in the Euro Historical Pricing was to have it render as '2020-01-01' and JSX would not allow numbers such as 01 to be hardcoded so I had to concatinate in order for the API to get the correct date!

## Issues and Resolutions

**ERROR**:

CONSTANT ERRORS OF CONSOLE LOGS THAT DISPLAYED SUCH AS

```
[]
```

**RESOLUTION**:
simply because the API was incredibily difficult to render data from. It took countless hours and many different combinations to get the data to render despite the fact that it appeared it should have worked.

**ERROR**:

When launching my app, the <Nav.Link/> tag was not working because of BootStrap.

**RESOLUTION**:
BootStrap wanted an href="" in order to switch between pages when I needed a <Link>. The href would actually take you to a different webpage which was not what we wanated. Therefore, I simpy substituted the <Nav.Link> for a <Link> tag and added in the BootStrap class.
