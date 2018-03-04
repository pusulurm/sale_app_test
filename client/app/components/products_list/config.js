"use strict";

export const productsBaseUrl = "https://sephora-api-frontend-test.herokuapp.com/products";

export const sortOptions = [
    { label: "Name (A to Z)", value: "name" },
    { label: "Name (Z to A)", value: "-name" },
    { label: "Price Low to High", value: "sale_price" },
    { label: "Price High to Low", value: "-sale_price" }
];

export var defaultFilters = {
    sortBy: { label: "Name (A to Z)", value: "name" },
    pageSize: 30,
    pageNumber : 1,
    category: "makeup,brushes,tools"
}

export const productCategories = [{
    "value": "Face", value1: "markup,brushes,tools", "collapsed": true, "children": [
        { "value": "Makeup", value1: "markup", "children": [] },
        { "value": "Brushes", value1: "brushes", "children": [] },
        { "value": "Tools", value1: "tools", "children": [] }
    ]
}];

export const priceRanges123 = [
    "Under $25",
    "$25 - $50",
    "$50 - $100",
    "$100 - $150",
    "$150 - $300s",
    "Above $300"
];

export const priceRanges = [
    {label : "Under $25", value : {lt : 26}},
    {label : "$25 - $50", value : {lt : 51, gt: 25}},
    {label : "$50 - $100", value : {lt : 101, gt: 50}},
    {label : "$100 - $150", value : {lt : 151, gt: 100}},
    {label : "$150 - $300", value : {lt : 301, gt: 150}},
    {label : "Above $300", value : {gt : 300}}
];

export const queryStringOptions = {
    filter: {
        equlCategory: "&filter[category_eq]=",
        inCategories: "&filter[category_in]=",
        priceLessThan : "&filter[sale_price_lt]=",
        priceGreaterThan : "&filter[sale_price_gt]="
    },
    sort: "&sort=",
    pageSize: "&page[size]=",
    pageNumber : "&page[number]="
}

export const pageNumberQueryString = "page[number]="