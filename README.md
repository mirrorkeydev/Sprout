# 🌱[Sprout](https://mirrorkey.dev/Sprout/)
> A dashboard that shows real-time statistics about my plants and their environment.

## Features
Sprout offers:
- Soil moisture charts for each plant connected to Sprout
- Environmental statistics about the plants' environment, including temperature, humidity, and light levels.
- A cute design :)

## Technologies

#### Frontend
Sprout's frontend was written using [Vue.js](https://vuejs.org/). The charts were made using [vue-echarts](https://github.com/ecomfe/vue-echarts). The icons and overall design are original.

#### Backend
Sprout's business logic consists of [an API](https://github.com/mirrorkeydev/SproutServerless) implemented using AWS Lambda and Serverless that is periodically polled by the frontend. This API retrieves the necessary data from a MongoDB instance hosted on Atlas, does a small amount of processing to reduce the number of data points, and returns it to the frontend.

#### Data collection
The data collection is handled by [AzureSpherePlantMonitor](https://github.com/prototypicalpro/AzureSpherePlantMonitor), which is an Azure Sphere hooked up to soil moisture sensors. This set up is currently deployed in my room, where it continues to gather new data every 2 minutes and publish its findings to the MongoDB Atlas instance every 10 minutes.

## Authors
This project is a collaboration between [Melanie Gutzmann](https://github.com/mirrorkeydev) (dashboard + api) and [Noah Koontz](https://github.com/prototypicalpro) (api + IoT data collection).

## Project setup
```
npm install
```

#### Compiles and hot-reloads for development
```
npm run serve
```

#### Compiles and minifies for production
```
npm run build
```

#### Lints and fixes files
```
npm run lint
```

#### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
