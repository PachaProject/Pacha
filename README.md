# :corn: Call for Code solution Zero hunger: PACHA :earth_americas:

[![DEMO](https://img.shields.io/badge/View-Website-blue)](https://haydeeesthefany.github.io/pacha_app_FE/#/inicio)

With more than [250 million people potentially on the brink of starvation](https://www.wfp.org/stories/risk-hunger-pandemic-coronavirus-set-almost-double-acute-hunger-end-2020) rapid action is needed to provide food globally. 
At the same time, a profound change in the global agri-food system is needed if we are to feed the more than 820 million hungry people and the [2 billion more people who will be living in the world by 2050](https://www.un.org/development/desa/en/news/population/world-population-prospects-2019.html)! Increased agricultural productivity and sustainable food production are crucial to help alleviate the risks of hunger.

> A world without hunger is possible, let's make it a reality. [ZERO HUNGER](https://www.un.org/sustainabledevelopment/hunger/).

## Contents

- [Project](#submission-or-project-name)
  - [Contents](#contents)
  - [Short description](#short-description)
    - [What's the problem?](#whats-the-problem)
    - [How can technology help?](#how-can-technology-help)
    - [The idea](#the-idea)
  - [Demo video](#demo-video)
  - [The architecture](#the-architecture)
  - [Long description](#long-description)
  - [Project roadmap](#project-roadmap)
  - [Getting started](#getting-started)
  - [Live demo](#live-demo)
  - [Built with](#built-with)
  - [Contributing](#contributing)
  - [Versioning](#versioning)
  - [Authors](#authors)
  - [License](#license)
  - [Acknowledgments](#acknowledgments)

## Short description

### What's the problem?

One in nine people in the world is currently undernourished; that is, about 815 million people in the world. Most of the people suffering from hunger live in developing countries such as Peru or Colombia, where 12.9 percent of the population is undernourished. This nutrition problem causes 45% of deaths in children under 5 years of age, three thousand children every year.

### How can technology help?

Technology can help in many ways. By providing farmers with information about possible droughts, floods, price variations of their products in the market and consumption trends through Artificial Intelligence and Blockchain, which will allow the farmer to be more assertive when deciding what to produce, obtaining the most out of their products.

### The idea :fire:

With the aim of directly connecting farmers and consumers without the need for intermediaries, Pacha is born, a web platform designed to help farmers make their products more visible to the final consumer, making available to the producer tools based on watson studio and supported by IBM Cloud, taking advantage of market and weather data to develop a price recommendation system for their products and giving suggestions on possible future crops, improving their competitiveness and profitability through Blockchain and artificial intelligence.

## Demo video

[![Watch the video](./images/PachaPich.jpg)](https://youtu.be/bGMUnxtkux8)

## The architecture

![Video transcription/translation app](./images/architecturePACHA.jpg)

1. The farmer registers on the website, and registers the products that he produces.
2. The farmer's information is stored in the database.
3. The information on products, locations and prices is fed into the recommendation system.
4. The necessary information is consumed from different sources through the apis.
5. The apis created are used to feed the prediction model with meteorological data and data on the farmer's products.
6. The information obtained is sent to the prediction board for the farmer and to the list of recommendations for the consumer.
7. The required information is displayed to the farmer and the consumer through a graphical interface. 

## Long description

[More detail is available here](./docs/DESCRIPTION.md)

## Project roadmap :rocket:

Pacha is a project with ample growth, which can even provide suggestions to farmers on products to grow, taking into account consumer demand and other data collected by the platform, all this relying on IBM Cloud technologies, Artificial Intelligence and Blockchain.

- within our short-term planning, we seek to integrate small farmers in a vertical integration with large supermarkets and final consumers,     cutting out intermediaries.

- It seeks to increase the competitiveness and profitability of farmers by providing them with relevant information such as weather forecasts, possible prices depending on seasonal variations and costs, and crop suggestions in relation to the demand in their area.

- in the long term, we seek to work with entities such as insurance companies or large-scale companies that will benefit from information on market prices or climatic variations that affect crops or producers. 

![Roadmap](./images/RoudmapPacha.jpg)

## Getting started

In this section you will find instructions on how to run the project on your local machine for development and testing purposes. You will also find instructions to deploy our project on IBM CLOUD.


- [Test our demo](./pacha_app_Frontend/)

## Live demo

You can find a running system to test at [Pacha.com](https://haydeeesthefany.github.io/pacha_app_FE/#/inicio).

## Built with

- [IBM Watson Studio](https://www.ibm.com/cloud/watson-studio)
- [IBM Cloud Functions](https://cloud.ibm.com/catalog?search=cloud%20functions#search_results)
- [IBM Cloudant](https://cloud.ibm.com/docs/Cloudant?topic=cloudant-getting-started-with-cloudant&mhsrc=ibmsearch_a&mhq=cloudant)
- [FLows Node-RED](https://flows.nodered.org/flow/b5b7d5da14d24e71de447e6aa290937e/in/rekJJdGYekDB)
- [Google Maps API](https://www.google.com/maps/@4.8608817,-74.2531461,15z)
- [React.js](https://es.reactjs.org/)

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available

## Authors :v:

* [Andres Forero](https://www.linkedin.com/in/andres-david-forero-martinez/)
* [Thania Colán](https://www.linkedin.com/in/thaniaacp/)
* [Arturo Gómez](https://www.linkedin.com/in/arturo-g%C3%B3mez-carlos-2230671b2/)
* [Haydeeé Sebastian](https://www.linkedin.com/in/haydeeesthefanysebastianmeza/)
* [Romel Arce](https://www.linkedin.com/in/romel-arce-romero/)

<a href="https://github.com/PachaProject/Pacha/graphs/contributors">
  <img src="./images/Authors.png" />
</a>

## License

This project is licensed under the Apache 2 License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Based on [Billie Thompson's README template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2).
