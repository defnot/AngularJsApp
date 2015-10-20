(function () {
	'use strict';

	angular
		.module('Agrion')
		.controller('ReportsCtrl', ReportsCtrl);

    //ReportsCtrl.$inject = ['$filter'];

	var applications = [
  {
    'address': '514 Dahlgreen Place, Kaka, Iowa, 8502',
    'phone': '+359 97 545 4260',
    'email': 'carter.copeland@comvene.ca',
    'company': 'COMVENE',
    'lastName': 'Copeland',
    'firstName': 'Carter',
    'currency': 'EUR',
    'ammount': 198365.72,
    'status': 'усвоен',
    'userId': 'adaca175-531e-403c-a5c8-bec0d6540e03',
    'dateAdded': '2015-06-09 22:06',
    'id': 0
  },
  {
    'address': '414 Grattan Street, Abiquiu, Oklahoma, 6063',
    'phone': '+359 97 854 9213',
    'email': 'annette.sellers@zyple.me',
    'company': 'ZYPLE',
    'lastName': 'Sellers',
    'firstName': 'Annette',
    'currency': 'USD',
    'ammount': 246733.67,
    'status': 'изчакващ',
    'userId': '8b921c86-10e3-4ea3-941d-10b3ff79964a',
    'dateAdded': '2015-03-06 22:03',
    'id': 1
  },
  {
    'address': '283 Kenmore Court, Riegelwood, Virgin Islands, 6507',
    'phone': '+359 94 140 6371',
    'email': 'dina.downs@kongene.biz',
    'company': 'KONGENE',
    'lastName': 'Downs',
    'firstName': 'Dina',
    'currency': 'BGN',
    'ammount': 359192.30,
    'status': 'изчакващ',
    'userId': '83df5454-a61e-4186-bfd2-f5e0fe76953e',
    'dateAdded': '2015-04-08 21:04',
    'id': 2
  },
  {
    'address': '695 Fillmore Place, Carrizo, Texas, 3385',
    'phone': '+359 82 654 6350',
    'email': 'noel.jackson@manufact.info',
    'company': 'MANUFACT',
    'lastName': 'Jackson',
    'firstName': 'Noel',
    'currency': 'USD',
    'ammount': 477297.94,
    'status': 'усвоен',
    'userId': 'a670a712-a0ba-409a-946b-c10828ade3c4',
    'dateAdded': '2014-03-10 04:03',
    'id': 3
  },
  {
    'address': '277 Seabring Street, Detroit, Alaska, 4532',
    'phone': '+359 95 348 2271',
    'email': 'chrystal.peck@zorromop.us',
    'company': 'ZORROMOP',
    'lastName': 'Peck',
    'firstName': 'Chrystal',
    'currency': 'USD',
    'ammount': 149397.50,
    'status': 'изчакващ',
    'userId': 'bb196db7-b064-4bcf-ab33-70b6940195ba',
    'dateAdded': '2014-03-22 11:03',
    'id': 4
  },
  {
    'address': '653 Preston Court, Retsof, Georgia, 5381',
    'phone': '+359 87 158 7348',
    'email': 'shannon.day@enormo.com',
    'company': 'ENORMO',
    'lastName': 'Day',
    'firstName': 'Shannon',
    'currency': 'USD',
    'ammount': 197924.97,
    'status': 'одобрен',
    'userId': '01f97441-492e-4475-abc0-c7237dfbbe11',
    'dateAdded': '2015-06-10 01:06',
    'id': 5
  },
  {
    'address': '832 Dunham Place, Sehili, Kansas, 202',
    'phone': '+359 99 960 0366',
    'email': 'juliana.ellison@zanity.io',
    'company': 'ZANITY',
    'lastName': 'Ellison',
    'firstName': 'Juliana',
    'currency': 'EUR',
    'ammount': 55721.76,
    'status': 'усвоен',
    'userId': 'b1bcfa4a-146d-4feb-a3df-7ae04e5a1ade',
    'dateAdded': '2014-08-21 00:08',
    'id': 6
  },
  {
    'address': '180 Borinquen Pl, Dodge, Kentucky, 8084',
    'phone': '+359 81 252 4263',
    'email': 'sybil.hancock@mantro.net',
    'company': 'MANTRO',
    'lastName': 'Hancock',
    'firstName': 'Sybil',
    'currency': 'USD',
    'ammount': 193244.69,
    'status': 'изчакващ',
    'userId': 'f4d1276a-f447-4e95-91a0-bcea11163354',
    'dateAdded': '2014-03-27 10:03',
    'id': 7
  },
  {
    'address': '992 Anthony Street, Salix, Idaho, 6279',
    'phone': '+359 86 147 7289',
    'email': 'brown.landry@exovent.co.uk',
    'company': 'EXOVENT',
    'lastName': 'Landry',
    'firstName': 'Brown',
    'currency': 'USD',
    'ammount': 304770.61,
    'status': 'одобрен',
    'userId': 'ebc9ab62-b410-4075-a830-647c93541742',
    'dateAdded': '2015-01-18 01:01',
    'id': 8
  },
  {
    'address': '261 Miller Avenue, Greenock, Utah, 9544',
    'phone': '+359 98 353 6341',
    'email': 'boyle.mcmillan@amril.org',
    'company': 'AMRIL',
    'lastName': 'Mcmillan',
    'firstName': 'Boyle',
    'currency': 'BGN',
    'ammount': 286266.66,
    'status': 'отказан',
    'userId': '347255f7-1763-4c62-83af-fa85ccf1b642',
    'dateAdded': '2014-11-30 20:11',
    'id': 9
  },
  {
    'address': '805 Plymouth Street, Welch, Marshall Islands, 5556',
    'phone': '+359 95 940 5397',
    'email': 'chen.lawson@junipoor.tv',
    'company': 'JUNIPOOR',
    'lastName': 'Lawson',
    'firstName': 'Chen',
    'currency': 'BGN',
    'ammount': 106801.17,
    'status': 'отказан',
    'userId': '92d778aa-7343-47ef-bf20-005ac2cc5c71',
    'dateAdded': '2015-10-17 15:10',
    'id': 10
  },
  {
    'address': '871 Vandam Street, Winfred, Louisiana, 3896',
    'phone': '+359 83 059 7326',
    'email': 'flora.gross@quantalia.biz',
    'company': 'QUANTALIA',
    'lastName': 'Gross',
    'firstName': 'Flora',
    'currency': 'BGN',
    'ammount': 86283.99,
    'status': 'отказан',
    'userId': '8170c746-f3d0-4664-a3a8-38416b8ffd7a',
    'dateAdded': '2014-07-18 12:07',
    'id': 11
  },
  {
    'address': '195 Boerum Place, Lydia, North Carolina, 4550',
    'phone': '+359 93 448 3324',
    'email': 'alyssa.blankenship@envire.ca',
    'company': 'ENVIRE',
    'lastName': 'Blankenship',
    'firstName': 'Alyssa',
    'currency': 'EUR',
    'ammount': 106773.26,
    'status': 'усвоен',
    'userId': '4314af02-7ace-4e81-81d7-07cdc7b26c3b',
    'dateAdded': '2014-04-29 17:04',
    'id': 12
  },
  {
    'address': '938 Herkimer Place, Fingerville, West Virginia, 3425',
    'phone': '+359 83 949 3332',
    'email': 'nelson.leon@aquafire.me',
    'company': 'AQUAFIRE',
    'lastName': 'Leon',
    'firstName': 'Nelson',
    'currency': 'BGN',
    'ammount': 448135.68,
    'status': 'одобрен',
    'userId': 'e2c0b80b-8ebd-4a64-88f2-49b5d11030f0',
    'dateAdded': '2014-08-03 13:08',
    'id': 13
  },
  {
    'address': '173 Cyrus Avenue, Stewartville, Maine, 7796',
    'phone': '+359 97 051 6369',
    'email': 'madelyn.matthews@proxsoft.biz',
    'company': 'PROXSOFT',
    'lastName': 'Matthews',
    'firstName': 'Madelyn',
    'currency': 'USD',
    'ammount': 299242.40,
    'status': 'отказан',
    'userId': 'be622b3a-76a3-4dab-bd1e-eb80bdf10a06',
    'dateAdded': '2014-09-27 11:09',
    'id': 14
  }
];

	function ReportsCtrl() {
		var vm = this;
		vm.applications = applications;
	}

})();
