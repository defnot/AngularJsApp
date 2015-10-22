var ApplicationMocks = (function () {
'use strict';

  //generated from http://beta.json-generator.com/
  var applications = [
  {
    "offerType": "Намаляващи вноски",
    "loanPeriodYears": 2,
    "paymentsPerYear": 11,
    "annualInterest": 0,
    "operatorId": 1932,
    "egn": "4510076400",
    "dds": "2062175689",
    "eik": "9563851938",
    "region": "Arizona",
    "branch": "Caln",
    "address": "581 Ridgewood Avenue, Cassel, Puerto Rico, 8270",
    "phone": "+359 89 940 0215",
    "email": "duke.mcgee@puria.us",
    "company": "PURIA",
    "lastName": "Mcgee",
    "firstName": "Duke",
    "currency": "EUR",
    "loan": 55028,
    "status": "изчакващ",
    "userId": "29097491-e8f1-4c05-a2be-2df1f95d0509",
    "dateAdded": "2014-08-24 19:08",
    "id": 0,
    "clientType" : 1
  },
  {
    "offerType": "Анюитетни вноски",
    "loanPeriodYears": 28,
    "paymentsPerYear": 5,
    "annualInterest": "5.32",
    "operatorId": 4156,
    "egn": "0412215062",
    "dds": "2062175689",
    "eik": "9563851938",
    "region": "Texas",
    "branch": "Lund",
    "address": "367 Noel Avenue, Muse, Palau, 4214",
    "phone": "+359 86 155 7396",
    "email": "fowler.hernandez@printspan.com",
    "company": "PRINTSPAN",
    "lastName": "Hernandez",
    "firstName": "Fowler",
    "currency": "USD",
    "loan": 56334,
    "status": "изчакващ",
    "userId": "06fb3639-5f27-4218-a668-0de1793b0203",
    "dateAdded": "2014-06-07 01:06",
    "id": 1,
    "clientType" : 0
  },
  {
    "offerType": "Анюитетни вноски",
    "loanPeriodYears": 30,
    "paymentsPerYear": 4,
    "annualInterest": "13.08",
    "operatorId": 6116,
    "egn": "2308250124",
    "dds": "2062175689",
    "eik": "9563851938",
    "region": "South Dakota",
    "branch": "Boomer",
    "address": "569 Maujer Street, Foxworth, Wyoming, 4075",
    "phone": "+359 95 141 9253",
    "email": "katharine.odom@viocular.co.uk",
    "company": "VIOCULAR",
    "lastName": "Odom",
    "firstName": "Katharine",
    "currency": "EUR",
    "loan": 76038,
    "status": "одобрен",
    "userId": "4a13e023-0785-4a74-940d-f2ae77f338ae",
    "dateAdded": "2015-01-10 03:01",
    "id": 2,
    "clientType" : 1
  },
  {
    "offerType": "Намаляващи вноски",
    "loanPeriodYears": 21,
    "paymentsPerYear": 7,
    "annualInterest": "3.99",
    "operatorId": 729,
    "egn": "1712077808",
    "dds": "2062175689",
    "eik": "9563851938",
    "region": "Idaho",
    "branch": "Callaghan",
    "address": "742 Montgomery Street, Adelino, Vermont, 9146",
    "phone": "+359 84 849 4262",
    "email": "chapman.farley@unq.me",
    "company": "UNQ",
    "lastName": "Farley",
    "firstName": "Chapman",
    "currency": "BGN",
    "loan": 7205,
    "status": "изчакващ",
    "userId": "b863a5ad-6b91-4320-991a-a2dd770d3c77",
    "dateAdded": "2014-11-04 03:11",
    "id": 3,
    "clientType" : 1
  },
  {
    "offerType": "Намаляващи вноски",
    "loanPeriodYears": 1,
    "paymentsPerYear": 9,
    "annualInterest": "5.65",
    "operatorId": 4035,
    "egn": "0902242238",
    "dds": "2062175689",
    "eik": "9563851938",
    "region": "Minnesota",
    "branch": "Finderne",
    "address": "300 Matthews Court, Fredericktown, Illinois, 2233",
    "phone": "+359 82 243 3214",
    "email": "gladys.farmer@cujo.tv",
    "company": "CUJO",
    "lastName": "Farmer",
    "firstName": "Gladys",
    "currency": "BGN",
    "loan": 97102,
    "status": "отказан",
    "userId": "c3e62430-c744-44d9-a609-9b919c2ee270",
    "dateAdded": "2014-04-30 20:04",
    "id": 4,
    "clientType" : 0
  },
  {
    "offerType": "Анюитетни вноски",
    "loanPeriodYears": 18,
    "paymentsPerYear": 4,
    "annualInterest": "1.48",
    "operatorId": 7113,
    "egn": "2308250124",
    "dds": "2062175689",
    "eik": "9563851938",
    "region": "Nevada",
    "branch": "Riner",
    "address": "312 Chapel Street, Thynedale, Maryland, 4765",
    "phone": "+359 94 154 7291",
    "email": "hampton.workman@imant.org",
    "company": "IMANT",
    "lastName": "Workman",
    "firstName": "Hampton",
    "currency": "BGN",
    "loan": 16140,
    "status": "одобрен",
    "userId": "cf5e8c4e-4d5f-4dba-a1ca-d50e740df813",
    "dateAdded": "2014-10-27 07:10",
    "id": 5,
    "clientType" : 1
  },
  {
    "offerType": "Анюитетни вноски",
    "loanPeriodYears": 18,
    "paymentsPerYear": 10,
    "annualInterest": "6.34",
    "operatorId": 1040,
    "egn": "2911079214",
    "dds": "2062175689",
    "eik": "9563851938",
    "region": "Louisiana",
    "branch": "Ilchester",
    "address": "307 Prospect Avenue, Bath, Marshall Islands, 8558",
    "phone": "+359 87 047 0269",
    "email": "sheree.pacheco@uxmox.net",
    "company": "UXMOX",
    "lastName": "Pacheco",
    "firstName": "Sheree",
    "currency": "USD",
    "loan": 76432,
    "status": "усвоен",
    "userId": "9c3ac2cb-badb-403f-9bc0-4f3d5d93e5f9",
    "dateAdded": "2015-04-14 06:04",
    "id": 6,
    "clientType" : 0
  },
  {
    "offerType": "Анюитетни вноски",
    "loanPeriodYears": 18,
    "paymentsPerYear": 9,
    "annualInterest": "13.33",
    "operatorId": 3113,
    "egn": "3002134215",
    "dds": "2062175689",
    "eik": "9563851938",
    "region": "Oklahoma",
    "branch": "Westerville",
    "address": "286 Benson Avenue, Teasdale, Mississippi, 8870",
    "phone": "+359 83 254 2211",
    "email": "gray.mcgowan@magmina.biz",
    "company": "MAGMINA",
    "lastName": "Mcgowan",
    "firstName": "Gray",
    "currency": "USD",
    "loan": 15207,
    "status": "изчакващ",
    "userId": "19edbab1-7b04-4395-902d-131239ea9641",
    "dateAdded": "2014-02-02 06:02",
    "id": 7,
    "clientType" : 1
  },
  {
    "offerType": "Намаляващи вноски",
    "loanPeriodYears": 22,
    "paymentsPerYear": 6,
    "annualInterest": "3.62",
    "operatorId": 2715,
    "egn": "6208318110",
    "dds": "2062175689",
    "eik": "9563851938",
    "region": "New Jersey",
    "branch": "Soudan",
    "address": "553 Montague Terrace, Convent, North Carolina, 2795",
    "phone": "+359 81 541 2319",
    "email": "angelique.bennett@flumbo.info",
    "company": "FLUMBO",
    "lastName": "Bennett",
    "firstName": "Angelique",
    "currency": "BGN",
    "loan": 37495,
    "status": "отказан",
    "userId": "d2fcadab-a896-4c09-8c68-4b99e8cb8792",
    "dateAdded": "2015-01-01 09:01",
    "id": 8,
    "clientType" : 1
  },
  {
    "offerType": "Намаляващи вноски",
    "loanPeriodYears": 13,
    "paymentsPerYear": 5,
    "annualInterest": 13,
    "operatorId": 44,
    "egn": "7906082399",
    "dds": "2062175689",
    "eik": "9563851938",
    "region": "Utah",
    "branch": "Accoville",
    "address": "112 Montana Place, Enlow, New Mexico, 356",
    "phone": "+359 90 749 8212",
    "email": "shepherd.meyer@lotron.biz",
    "company": "LOTRON",
    "lastName": "Meyer",
    "firstName": "Shepherd",
    "currency": "BGN",
    "loan": 48291,
    "status": "усвоен",
    "userId": "2beb17e2-84d7-4bcf-a052-fa5f4b2504dd",
    "dateAdded": "2014-08-05 15:08",
    "id": 9,
    "clientType" : 1
  },
  {
    "offerType": "Анюитетни вноски",
    "loanPeriodYears": 3,
    "paymentsPerYear": 1,
    "annualInterest": "1.29",
    "operatorId": 7105,
    "egn": "8602161037",
    "dds": "2062175689",
    "eik": "9563851938",
    "region": "Washington",
    "branch": "Belleview",
    "address": "620 Huron Street, Elizaville, Hawaii, 3838",
    "phone": "+359 90 742 6225",
    "email": "porter.stewart@satiance.name",
    "company": "SATIANCE",
    "lastName": "Stewart",
    "firstName": "Porter",
    "currency": "BGN",
    "loan": 68479,
    "status": "изчакващ",
    "userId": "2a3adf8a-a6fa-4e33-9e8e-e94618cb30d2",
    "dateAdded": "2015-03-22 22:03",
    "id": 10,
    "clientType" : 1
  },
  {
    "offerType": "Намаляващи вноски",
    "loanPeriodYears": 12,
    "paymentsPerYear": 10,
    "annualInterest": "2.36",
    "operatorId": 3753,
    "egn": "8806081282",
    "dds": "2062175689",
    "eik": "9563851938",
    "region": "Kansas",
    "branch": "Oneida",
    "address": "831 Voorhies Avenue, Hannasville, Massachusetts, 8863",
    "phone": "+359 99 055 5324",
    "email": "amanda.moses@vidto.io",
    "company": "VIDTO",
    "lastName": "Moses",
    "firstName": "Amanda",
    "currency": "BGN",
    "loan": 21221,
    "status": "одобрен",
    "userId": "2f164f51-155b-4f5a-83bc-5e3f973c402e",
    "dateAdded": "2015-09-24 02:09",
    "id": 11,
    "clientType" : 0
  },
  {
    "offerType": "Намаляващи вноски",
    "loanPeriodYears": 12,
    "paymentsPerYear": 4,
    "annualInterest": "13.36",
    "operatorId": 7132,
    "egn": "9001213460",
    "dds": "2062175689",
    "eik": "9563851938",
    "region": "North Dakota",
    "branch": "Statenville",
    "address": "565 Hastings Street, Enoree, Wisconsin, 5040",
    "phone": "+359 86 159 4245",
    "email": "suzette.hahn@securia.us",
    "company": "SECURIA",
    "lastName": "Hahn",
    "firstName": "Suzette",
    "currency": "EUR",
    "loan": 22512,
    "status": "изчакващ",
    "userId": "ce0e947d-a27d-4b37-8174-4eaa25209e28",
    "dateAdded": "2014-10-21 10:10",
    "id": 12,
    "clientType" : 1
  },
  {
    "offerType": "Намаляващи вноски",
    "loanPeriodYears": 16,
    "paymentsPerYear": 9,
    "annualInterest": "3.13",
    "operatorId": 133,
    "egn": "9801302145",
    "dds": "2062175689",
    "eik": "9563851938",
    "region": "Tennessee",
    "branch": "Beaulieu",
    "address": "615 Lake Street, Haring, California, 5212",
    "phone": "+359 94 759 2345",
    "email": "jeri.barber@recognia.com",
    "company": "RECOGNIA",
    "lastName": "Barber",
    "firstName": "Jeri",
    "currency": "BGN",
    "loan": 14340,
    "status": "усвоен",
    "userId": "ae568bf1-00dc-4db6-820b-cf43e633dcb5",
    "dateAdded": "2015-09-30 22:09",
    "id": 13,
    "clientType" : 0
  },
  {
    "offerType": "Анюитетни вноски",
    "loanPeriodYears": 3,
    "paymentsPerYear": 9,
    "annualInterest": "4.18",
    "operatorId": 4165,
    "egn": "9810261162",
    "dds": "2062175689",
    "eik": "9563851938",
    "region": "Connecticut",
    "branch": "Canoochee",
    "address": "895 Sunnyside Court, Wadsworth, New York, 7807",
    "phone": "+359 96 555 8336",
    "email": "young.cunningham@aquafire.co.uk",
    "company": "AQUAFIRE",
    "lastName": "Cunningham",
    "firstName": "Young",
    "currency": "BGN",
    "loan": 60470,
    "status": "одобрен",
    "userId": "4fe636a1-4078-4e72-b8c2-4273955a00bc",
    "dateAdded": "2015-07-29 20:07",
    "id": 14,
    "clientType" : 1
  }
];


return {
  applications: applications
};

})();