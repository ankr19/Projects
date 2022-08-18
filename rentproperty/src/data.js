const data = [
  {
    name: "House 1",
    address: "53 El Camino Loop in Woodrow, Staten Island, 10309",
    address_new: {
      city: "Staten Island",
      country: "USA",
      county: "Richmond",
      county_needed_for_uniq: false,
      lat: 40.53755,
    },
    baths: "1",
    baths_full: 1,
    beds: "1",
    listing_id: "2945085432",
    lon: -74.213419,
    photo:
      "https://ap.rdcpix.com/9697d400f7659e8d67927ff484c7bda0l-m1356521217s.jpg",
    price: "$1,450/mo",
    price_raw: 1450,
    prop_status: "for_rent",
    short_price: "$1,450/mo",
    sqft: "1,726 sq ft",
  },
  {
    name: "House 2",
    address:
      "530 Parkside Ave Apt 3M in Prospect Lefferts Gardens, Brooklyn, 11226",
    address_new: {
      city: "Brooklyn",
      country: "USA",
      county: "Kings",
      county_needed_for_uniq: false,
      lat: 40.655679,
    },
    baths: "1",
    baths_full: 1,
    beds: "S",
    listing_id: "607859245",
    lon: -73.95562,
    photo:
      "https://ap.rdcpix.com/fb13461577a7541d797d9a074439b2d2l-m2627080983s.jpg",
    price: "$1,450/mo",
    price_raw: 1450,
    prop_status: "for_rent",
    short_price: "$1,450/mo",
    sqft: "sq ft N/A",
  },
  {
    name: "House 3",
    address: "2501 Morris Ave Apt 2B in Fordham Manor, Bronx, 10468",
    address_new: {
      city: "Bronx",
      country: "USA",
      county: "Bronx",
      county_needed_for_uniq: false,
      lat: 40.863675,
    },
    baths: "1",
    baths_full: 1,
    beds: "S",
    listing_id: "2945666542",
    lon: -73.899256,
    photo:
      "https://ap.rdcpix.com/48c06685f951861836def719fda7eeebl-m834761132s.jpg",
    price: "$1,450/mo",
    price_raw: 1450,
    prop_status: "for_rent",
    short_price: "$1,450/mo",
    sqft: "sq ft N/A",
  },
  {
    name: "House 4",
    address:
      "2299 Adam Clayton Powell Jr Blvd Unit D4 in Central Harlem, New York City, 10030",
    address_new: {
      city: "New York City",
      country: "USA",
      county: "New York",
      county_needed_for_uniq: false,
      lat: 40.815053,
    },
    baths: "1",
    baths_full: 1,
    beds: "S",
    photo:
      "https://ap.rdcpix.com/5ff0316e3d739cf0b9d395f1255455b1l-m3177139511s.jpg",
    prop_status: "for_rent",
    price: "$1,453/mo",
    price_raw: 1453,
    short_price: "$1,453/mo",
    sqft: "8,585 sq ft",
  },
  {
    name: "House 5",
    address:
      "2110 Westbury Ct Apt 3S in Prospect Lefferts Gardens, Brooklyn, 11225",
    address_new: {
      city: "Brooklyn",
      country: "USA",
      county: "Kings",
      county_needed_for_uniq: false,
      lat: 40.656446,
    },
    baths: "1",
    baths_full: 1,
    beds: "S",
    listing_id: "2945037734",
    lon: -73.960485,
    price: "$1,455/mo",
    price_raw: 1455,
    prop_status: "for_rent",
    short_price: "$1,455/mo",
    sqft: "550 sq ft",
  },
  {
    name: "House 6",
    address: "28 St Nicholas Pl Unit Brn in Hamilton Heights, Manhattan, 10031",
    address_new: {
      city: "Manhattan",
      country: "USA",
      county: "New York",
      county_needed_for_uniq: false,
      lat: 40.827994,
    },
    baths: "1",
    baths_full: 1,
    beds: "1",
    listing_id: "2938826253",
    price: "$1,467/mo",
    price_raw: 1467,
    lon: -73.941455,
    prop_status: "for_rent",
    short_price: "$1,467/mo",
    sqft: "600 sq ft",
  },
  {
    name: "House 7",
    address: "3111 Aurelia Ct Apt 216 in Flatlands, Brooklyn, 11210",
    address_new: {
      city: "Brooklyn",
      country: "USA",
      county: "Kings",
      county_needed_for_uniq: false,
      lat: 40.630107,
    },
    baths: "1",
    baths_full: 1,
    beds: "S",
    listing_id: "2933709501",
    lon: -73.946231,
    price: "$1,475/mo",
    price_raw: 1475,
    prop_status: "for_rent",
    short_price: "$1,475/mo",
    sqft: "500 sq ft",
  },
  {
    name: "House 8",
    address: "131-11 Kew Gardens Rd Unit 1L, Kew Gardens, 11415",
    address_new: {
      city: "Kew Gardens",
      country: "USA",
      county: "Queens",
      county_needed_for_uniq: false,
      line: "131-11 Kew Gardens Rd Unit 1L",
    },
    baths: "1",
    baths_full: 1,
    beds: "S",
    listing_id: "2944554704",
    lon: -73.828111,
    photo:
      "https://ap.rdcpix.com/44442c7b60fbf79c32e220c4719af5a0l-m2318680892s.jpg",
    price: "$1,475/mo",
    price_raw: 1475,
    prop_status: "for_rent",
    short_price: "$1,475/mo",
    sqft: "sq ft N/A",
  },
  {
    name: "House 8",
    address: "922 E 15th St Apt 1D in Midwood, Brooklyn, 11230",
    address_new: {
      city: "Brooklyn",
      country: "USA",
      county: "Kings",
      county_needed_for_uniq: false,
      lat: 40.627015,
    },
    baths: "1",
    baths_full: 1,
    beds: "2",
    listing_id: "2945465840",
    lon: -73.961874,
    photo:
      "https://ap.rdcpix.com/643d5dd28bf7e785e5bb6272b3eedaeal-m1073687900s.jpg",
    price: "$1,475/mo",
    price_raw: 1475,
    prop_status: "for_rent",
    short_price: "$1,475/mo",
    sqft: "725 sq ft",
  },
  {
    name: "House 9",
    address: "9833 64th Ave in Rego Park, Rego Park, 11374",
    address_new: {
      city: "Rego Park",
      country: "USA",
      county: "Queens",
      county_needed_for_uniq: false,
      lat: 40.731004,
    },
    baths: "1",
    baths_full: 1,
    beds: "1",
    photo:
      "https://ap.rdcpix.com/1f1bebd8939f3b12865ff3511e18c278l-m3356640641s.jpg",
    price: "$1,475/mo",
    price_raw: 1475,
    prop_status: "for_rent",
    short_price: "$1,475/mo",
    sqft: "sq ft N/A",
  },
  {
    name: "House 10",
    address: "164-20 Highland Ave Unit 3N in Jamaica Hills, Jamaica, 11432",
    address_new: {
      city: "Jamaica",
      country: "USA",
      county: "Queens",
      county_needed_for_uniq: false,
      lat: 40.710023,
    },
    baths: "1",
    baths_full: 1,
    beds: "S",
    listing_id: "2942463806",
    lon: -73.798946,
    photo:
      "https://ap.rdcpix.com/f7c765da4e95870dc4a95997dd482463l-m1253747213s.jpg",
    price: "$1,490/mo",
    price_raw: 1490,
    prop_status: "for_rent",
    short_price: "$1,490/mo",
    sqft: "600 sq ft",
  },
];
export default data;
