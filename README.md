Avocado
===========

> Scraper + lawyers directory powered by Algolia

# [packages/scraper](https://github.com/ababol/avocado/tree/master/packages/scraper)

> This package is a scraper of avocatparis.org

## Install

```
cd packages/scraper
conda install scrapy
pip install -r requirements.txt
```

## Run

```
scrapy crawl avocatparis
```

# [packages/enricher](https://github.com/ababol/avocado/tree/master/packages/enricher)

> This package takes lawyer's email/address and enrich the data

## Install

```
cd packages/enricher
npm install
```

## Run

```
npm start
```

# [packages/algolia](https://github.com/ababol/avocado/tree/master/packages/algolia)

> This package syncs your mongodb with algolia


## Install

```
cd packages/enricher
npm install
```

## Run

```
npm start
```

# [packages/api](https://github.com/ababol/avocado/tree/master/packages/api)

> API rest avocado (https://avocado-api.babol.me)

## Install

```
cd packages/api
yarn install
```

## Run

### Development
```
yarn dev
```

### production
```
yarn start
```

# [packages/front](https://github.com/ababol/avocado/tree/master/packages/front)

> Front avocado (https://avocado.babol.me)

## Install

```
cd packages/front
yarn install
```

## Run

### Development
```
yarn dev
```

### production
```
yarn build
yarn start
```

# Demo

* [Avocado - Best avocado](https://avocado.babol.me)
