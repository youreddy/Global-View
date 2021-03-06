[![Stories in Ready](https://badge.waffle.io/field-sun/Global-View.png?label=ready&title=Ready)](http://waffle.io/field-sun/Global-View)
[![Build Status](https://travis-ci.org/field-sun/Global-View.svg?branch=master)](https://travis-ci.org/field-sun/Global-View)
# Project Name
Vantage
> Vantage aggregates social and traditional media using place and time to provide a panoramic view of interesting events.

## Team

  - __Product Owner__: Jason Erpenbeck
  - __Scrum Master__: Richard Avendaño
  - __Development Team Members__: Jamon Douglas, Kia Winslow, Richard Avendaño, Jason Erpenbeck, Greg Ferrell, Josh Lankford, Urvashi Reddy
  
## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Usage

> TBD

## Requirements

- Node 0.10.x
- Express 4.x
- Lo-Dash 2.4.x
- Grunt
- Bootstrap
- Cheerio
- Body Parser
- queryString
- Angular
- API access to Twitter, Instagram, Google

## Development

### Installing Dependencies

From within the root directory:

```sh
sudo npm install -g bower
sudo npm install -g jsdoc@"<=3.3.0"
npm install
bower install

Signup for a Twitter API Developer Key
Make a file named twitterKeys.js and place in server/
Use the following format:
module.exports.keys = {
  instaClientID: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
  instaClientKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  instaToken: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
};

Signup for an instagram API Developer Key.
Make a file named instaKeys.js and place in server/
Use the following format in file: 

module.exports = {
  consumerKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
  consumerSecret: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  accessToken: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  accessTokenSecret: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
};

```

To Utilize JSDocs:
```sh
grunt docs
```
Open docs/index.html to view JSDocs



### Reference 

See [Reference.md](https://github.com/EXPLOSIVE-FALCON/Global-View/blob/master/reference.md) for reference.

<!-- ### Roadmap

View the project roadmap [here](LINK_TO_PROJECT_ISSUES) -->


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
