# World Population Race Chart

## Description

This is a data visualization with barchart race to show Ranking World population data 1950 - 2021

-   Using NextJS, D3.js chart library, Prisma and PostgreSQL
-   Using NextJS API Routes for API services

## Demo

-   WEB : https://population-visual-chart.vercel.app/
-   API : https://population-visual-chart.vercel.app/api/

---

## API ENDPOINT

### /api/population

-   **GET /api/population**
    -   Description: get population data from table
    -   Parameters:
        -   take (query, number): limit data rows [default: 10]
        -   skip (query, number): skip data rows [default: 0]
        -   type (query, strine): type of population data [default: population]
    -   Responses:
        -   200: OK
    -   Response:

```json
{
    "type": "success",
    "status": 200,
    "message": "get all population",
    "length": 20,
    "data": [
        {
            "id": 3240,
            "country_name": "China",
            "region": "Asia",
            "flag": "https://public.flourish.studio/country-flags/svg/cn.svg",
            "year": 2021,
            "population": 1425893500
        },
        {
            "id": 3239,
            "country_name": "China",
            "region": "Asia",
            "flag": "https://public.flourish.studio/country-flags/svg/cn.svg",
            "year": 2020,
            "population": 1424929800
        },
        {
            "id": 3238,
            "country_name": "China",
            "region": "Asia",
            "flag": "https://public.flourish.studio/country-flags/svg/cn.svg",
            "year": 2019,
            "population": 1421864100
        },
        ...more data...
    ]
}
```

-   **GET /api/population/type**
    -   Description: get population type
    -   Responses:
        -   200: OK
    -   Response:

```json
{
    "type": "success",
    "status": 200,
    "message": "get all population type for filter",
    "length": 22,
    "data": [
        "population",
        "population_of_children_under_the_age_of_1",
        "population_of_children_under_the_age_of_5",
        "population_of_children_under_the_age_of_15",
        "population_under_the_age_of_25",
        "population_aged_15_to_64_years",
        "population_older_than_15_years",
        "population_older_than_18_years",
        "population_at_age_1",
        "population_aged_1_to_4_years",
        "population_aged_5_to_9_years",
        "population_aged_10_to_14_years",
        "population_aged_15_to_19_years",
        "population_aged_20_to_29_years",
        "population_aged_30_to_39_years",
        "population_aged_40_to_49_years",
        "population_aged_50_to_59_years",
        "population_aged_60_to_69_years",
        "population_aged_70_to_79_years",
        "population_aged_80_to_89_years",
        "population_aged_90_to_99_years",
        "population_older_than_100_years"
    ]
}
```

-   **GET /api/population/year**
    -   Description: get population grouped by year andd country
    -   Parameters:
        -   take (query, number): limit data rows [default: 10]
        -   type (query, strine): type of population data [default: population]
    -   Responses:
        -   200: OK
    -   Response:

```json
{
  "type": "success",
  "status": 200,
  "message": "get top population each year",
  "length": 72,
  "data": [
    {
      "year": 1950,
      "countries": [
        {
          "country_name": "China",
          "region": "Asia",
          "flag": "https://public.flourish.studio/country-flags/svg/cn.svg",
          "population": 543979200
        },
        {
          "country_name": "India",
          "region": "Asia",
          "flag": "https://public.flourish.studio/country-flags/svg/in.svg",
          "population": 357021120
        },
        {
          "country_name": "United States",
          "region": "Americas",
          "flag": "https://public.flourish.studio/country-flags/svg/us.svg\r\n",
          "population": 148281550
        },
        ....more data....
      ]
    },
    {
      "year": 1951,
      "countries": [ ... ]
    },
    {
      "year": 1952,
      "countries": [ ... ]
    },
    ....more data....
  ]
}
```
