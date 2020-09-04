<h1 align="center">
  <a href="https://mirrorkey.dev/Sprout/">
    <img width=400 src="https://user-images.githubusercontent.com/35010111/91670328-38c94380-ead1-11ea-9967-f82124ca5e92.png" alt="SPROUT">
  </a>
</h1>

> A dashboard that displays real-time statistics about my plants and their environment.

## 🌱 Features
[Sprout](https://mirrorkey.dev/Sprout/) offers:
- Soil moisture charts for each plant connected to Sprout
- Environmental statistics about the plants' environment, including temperature, pressure, and light levels.
- A cute design :)

## ⚡ Technologies

#### Frontend
Sprout's frontend was written using [Vue.js](https://vuejs.org/). The charts were made using [vue-echarts](https://github.com/ecomfe/vue-echarts). The icons and overall design are original.

#### Backend
Sprout's business logic consists of [an API](https://github.com/mirrorkeydev/SproutServerless) implemented using AWS Lambda and Serverless that is periodically polled by the frontend. This API retrieves the necessary data from a MongoDB instance hosted on Atlas, does a small amount of processing to reduce the number of data points, and returns it to the frontend.

#### Data collection
The data collection is handled by [AzureSpherePlantMonitor](https://github.com/prototypicalpro/AzureSpherePlantMonitor), which is an [Azure Sphere MT3620](https://www.element14.com/community/community/designcenter/azure-sphere-starter-kits/) hooked up to [Chirp!](https://www.adafruit.com/product/1965) soil moisture sensors. This setup is currently deployed in my room, where it continues to gather new data every 2 minutes and publish its findings to the MongoDB Atlas instance every 10 minutes.
<div align=center>
  <img height=600 src="https://user-images.githubusercontent.com/35010111/92289626-f84d3980-eec5-11ea-805c-3dd078c05163.jpg" alt="SPROUT">
</div>

## 👥 Authors
This project is a collaboration between [@mirrorkeydev](https://github.com/mirrorkeydev) (dashboard + api) and [@prototypicalpro](https://github.com/prototypicalpro) (api + IoT data collection).

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
gh-pages -d dist // if deploying to GitHub pages
```

#### Lints and fixes files
```
npm run lint
```

#### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
