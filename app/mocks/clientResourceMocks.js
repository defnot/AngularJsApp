(function() {
  'use strict';

  // Create 'clientResourceMocks' and added as dependency to the
  // main module(Agrion) so it can be easily disabled and enabled
  angular
    .module('clientResourceMocks', ['ngMockE2E'])
    .run(function($httpBackend) {

      var clients = [{
        id: 1,
        addresses: [{
          city: 'Габрово',
          country: 'България',
          post_code: '8932',
          region: 'Плевен',
          street: 'Сезам 5',
          phone: '+359 888 111 222'
        }],
        client_type: 1,
        first_name: 'Иван',
        middle_name: 'Гошев',
        last_name: 'Иванов',
        display_name: 'Иван Гошев Иванов',
        document_number: '234524354',
        eik: '',
        num_dds: '',
        birth_date: '07/10/1945',
        sex: 'Мъж',
        zp_reg_number: '',
        egn: '4510076400'
      }, {
        risk_groups: [1, 2, 3, 4, 5],
        legal_form: 'Юридическа форма',
        branches: ['Пловдив', 'София', 'Бургас', 'Варна', 'Стара Загора', 'Русе', 'Свиленград'],
        owners_count: 1,
        zp_reg_number: '218453175',
        branch: 'София',
        risk_group: 1,
        starter_date: '25-01-2015',
        id: 2,
        company_name_bg: '3M Company',
        company_name_en: '3M Company',
        company_name_de: '3M Company',
        display_name: '3M Company',
        mol: 'Rene Powell',
        eik: '9366389541',
        notes: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        credit_limit: '4832',
        num_dds: '6411950635',
        vista: '932906862220742',
        number: '1',
        number_accounting: '533225',
        discount_parts: 3,
        discount_work: 10,
        is_active: true,
        is_client: true,
        is_supplier: false,
        is_manifacturer: false,
        is_declared_saglasie: false,
        wholesale_customer: 3,
        client_type: 3,
        client_group: 0,
        client_contact_type: 3,
        addresses: [{
          post_code: '4000',
          country: 'България',
          id: 1,
          type: 1,
          city: 'Пловдив',
          street: 'бул. Дунав 5',
          phone: '+359 88 512 4561',
          fax: '+359 88 512 4562',
          email: 'john@scalefocus.com',
          address_type: 1
        }, {
          id: 2,
          type: 2,
          city: 'София',
          street: 'бул. Цариградско шосе 146',
          phone: '+359 88 132 1234',
          fax: '+359 88 123 1235',
          email: 'jack@scalefocus.com',
          address_type: 2
        }],
        employees: [{
          id: 1,
          title: 2,
          first_name: 'Христина',
          last_name: 'Баева',
          phone: '+359 32 555 555',
          mobile: '+359 88 189 8904',
          company_position: 'Търговски директор'
        }, {
          id: 2,
          title: 1,
          first_name: 'Красимир',
          last_name: 'Тодоров',
          phone: '+359 32 555 556',
          mobile: '+359 88 756 7547',
          company_position: 'Управител'
        }]
      }, {
        risk_groups: [1, 2, 3, 4, 5],
        legal_form: 'Юридическа форма',
        branches: ['Пловдив', 'София', 'Бургас', 'Варна', 'Стара Загора', 'Русе', 'Свиленград'],
        owners_count: 1,
        zp_reg_number: '303988189',
        branch: 'София',
        risk_group: 1,
        starter_date: '25-01-2015',
        id: 3,
        company_name_bg: 'A.G. Edwards Inc.',
        company_name_en: 'A.G. Edwards Inc.',
        company_name_de: 'A.G. Edwards Inc.',
        display_name: 'A.G. Edwards Inc.',
        mol: 'Emma Burton',
        eik: '9563851938',
        notes: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        credit_limit: '2486',
        num_dds: '2062175689',
        vista: '577870619692436',
        number: '2',
        number_accounting: '850036',
        discount_parts: 16,
        discount_work: 5,
        is_active: true,
        is_client: true,
        is_supplier: true,
        is_manifacturer: true,
        is_declared_saglasie: false,
        wholesale_customer: 2,
        client_type: 2,
        client_group: 2,
        client_contact_type: 3,
        addresses: [{
          post_code: '4000',
          country: 'България',
          id: 1,
          type: 1,
          city: 'Пловдив',
          street: 'бул. Дунав 5',
          phone: '+359 88 512 4561',
          fax: '+359 88 512 4562',
          email: 'john@scalefocus.com',
          address_type: 1
        }, {
          id: 2,
          type: 2,
          city: 'София',
          street: 'бул. Цариградско шосе 146',
          phone: '+359 88 132 1234',
          fax: '+359 88 123 1235',
          email: 'jack@scalefocus.com',
          address_type: 2
        }],
        employees: [{
          id: 1,
          title: 2,
          first_name: 'Христина',
          last_name: 'Баева',
          phone: '+359 32 555 555',
          mobile: '+359 88 189 8904',
          company_position: 'Търговски директор'
        }, {
          id: 2,
          title: 1,
          first_name: 'Красимир',
          last_name: 'Тодоров',
          phone: '+359 32 555 556',
          mobile: '+359 88 756 7547',
          company_position: 'Управител'
        }]
      }, {
        risk_groups: [1, 2, 3, 4, 5],
        legal_form: 'Юридическа форма',
        branches: ['Пловдив', 'София', 'Бургас', 'Варна', 'Стара Загора', 'Русе', 'Свиленград'],
        owners_count: 1,
        zp_reg_number: '501056426',
        branch: 'Пловдив',
        risk_group: 1,
        starter_date: '25-01-2015',
        id: 4,
        company_name_bg: 'Abbott Laboratories',
        company_name_en: 'Abbott Laboratories',
        company_name_de: 'Abbott Laboratories',
        display_name: 'Abbott Laboratories',
        mol: 'Bernice Doyle',
        eik: '2194060574',
        notes: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        credit_limit: '4401',
        num_dds: '3831437041',
        vista: '160398099603943',
        number: '3',
        number_accounting: '763062',
        discount_parts: 4,
        discount_work: 9,
        is_active: false,
        is_client: true,
        is_supplier: true,
        is_manifacturer: false,
        is_declared_saglasie: true,
        wholesale_customer: 0,
        client_type: 3,
        client_group: 0,
        client_contact_type: 1,
        addresses: [{
          post_code: '4000',
          country: 'България',
          id: 1,
          type: 1,
          city: 'Пловдив',
          street: 'бул. Дунав 5',
          phone: '+359 88 512 4561',
          fax: '+359 88 512 4562',
          email: 'john@scalefocus.com',
          address_type: 1
        }, {
          id: 2,
          type: 2,
          city: 'София',
          street: 'бул. Цариградско шосе 146',
          phone: '+359 88 132 1234',
          fax: '+359 88 123 1235',
          email: 'jack@scalefocus.com',
          address_type: 2
        }],
        employees: [{
          id: 1,
          title: 2,
          first_name: 'Христина',
          last_name: 'Баева',
          phone: '+359 32 555 555',
          mobile: '+359 88 189 8904',
          company_position: 'Търговски директор'
        }, {
          id: 2,
          title: 1,
          first_name: 'Красимир',
          last_name: 'Тодоров',
          phone: '+359 32 555 556',
          mobile: '+359 88 756 7547',
          company_position: 'Управител'
        }]
      }, {
        risk_groups: [1, 2, 3, 4, 5],
        legal_form: 'Юридическа форма',
        branches: ['Пловдив', 'София', 'Бургас', 'Варна', 'Стара Загора', 'Русе', 'Свиленград'],
        owners_count: 1,
        zp_reg_number: '123062033',
        branch: 'Свиленград',
        risk_group: 1,
        starter_date: '25-01-2015',
        id: 5,
        company_name_bg: 'Abercrombie & Fitch Co.',
        company_name_en: 'Abercrombie & Fitch Co.',
        company_name_de: 'Abercrombie & Fitch Co.',
        display_name: 'Abercrombie & Fitch Co.',
        mol: 'Becky Vargas',
        eik: '4825035194',
        notes: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        credit_limit: '2686',
        num_dds: '3915325179',
        vista: '497708896926613',
        number: '4',
        number_accounting: '811165',
        discount_parts: 3,
        discount_work: 4,
        is_active: false,
        is_client: false,
        is_supplier: false,
        is_manifacturer: false,
        is_declared_saglasie: true,
        wholesale_customer: 3,
        client_type: 3,
        client_group: 2,
        client_contact_type: 1,
        addresses: [{
          post_code: '4000',
          country: 'България',
          id: 1,
          type: 1,
          city: 'Пловдив',
          street: 'бул. Дунав 5',
          phone: '+359 88 512 4561',
          fax: '+359 88 512 4562',
          email: 'john@scalefocus.com',
          address_type: 1
        }, {
          id: 2,
          type: 2,
          city: 'София',
          street: 'бул. Цариградско шосе 146',
          phone: '+359 88 132 1234',
          fax: '+359 88 123 1235',
          email: 'jack@scalefocus.com',
          address_type: 2
        }],
        employees: [{
          id: 1,
          title: 2,
          first_name: 'Христина',
          last_name: 'Баева',
          phone: '+359 32 555 555',
          mobile: '+359 88 189 8904',
          company_position: 'Търговски директор'
        }, {
          id: 2,
          title: 1,
          first_name: 'Красимир',
          last_name: 'Тодоров',
          phone: '+359 32 555 556',
          mobile: '+359 88 756 7547',
          company_position: 'Управител'
        }]
      }, {
        risk_groups: [1, 2, 3, 4, 5],
        legal_form: 'Юридическа форма',
        branches: ['Пловдив', 'София', 'Бургас', 'Варна', 'Стара Загора', 'Русе', 'Свиленград'],
        owners_count: 1,
        zp_reg_number: '990518797',
        branch: 'София',
        risk_group: 1,
        starter_date: '25-01-2015',
        id: 6,
        company_name_bg: 'ABM Industries Incorporated',
        company_name_en: 'ABM Industries Incorporated',
        company_name_de: 'ABM Industries Incorporated',
        display_name: 'ABM Industries Incorporated',
        mol: 'Leona Dennis',
        eik: '8989025957',
        notes: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        credit_limit: '2543',
        num_dds: '7890959980',
        vista: '272147521651887',
        number: '5',
        number_accounting: '518599',
        discount_parts: 4,
        discount_work: 6,
        is_active: true,
        is_client: false,
        is_supplier: false,
        is_manifacturer: true,
        is_declared_saglasie: true,
        wholesale_customer: 1,
        client_type: 2,
        client_group: 1,
        client_contact_type: 0,
        addresses: [{
          post_code: '4000',
          country: 'България',
          id: 1,
          type: 1,
          city: 'Пловдив',
          street: 'бул. Дунав 5',
          phone: '+359 88 512 4561',
          fax: '+359 88 512 4562',
          email: 'john@scalefocus.com',
          address_type: 1
        }, {
          id: 2,
          type: 2,
          city: 'София',
          street: 'бул. Цариградско шосе 146',
          phone: '+359 88 132 1234',
          fax: '+359 88 123 1235',
          email: 'jack@scalefocus.com',
          address_type: 2
        }],
        employees: [{
          id: 1,
          title: 2,
          first_name: 'Христина',
          last_name: 'Баева',
          phone: '+359 32 555 555',
          mobile: '+359 88 189 8904',
          company_position: 'Търговски директор'
        }, {
          id: 2,
          title: 1,
          first_name: 'Красимир',
          last_name: 'Тодоров',
          phone: '+359 32 555 556',
          mobile: '+359 88 756 7547',
          company_position: 'Управител'
        }]
      }, {
        risk_groups: [1, 2, 3, 4, 5],
        legal_form: 'Юридическа форма',
        branches: ['Пловдив', 'София', 'Бургас', 'Варна', 'Стара Загора', 'Русе', 'Свиленград'],
        owners_count: 1,
        zp_reg_number: '743381386',
        branch: 'Русе',
        risk_group: 1,
        starter_date: '25-01-2015',
        id: 7,
        company_name_bg: 'Ace Hardware Corporation',
        company_name_en: 'Ace Hardware Corporation',
        company_name_de: 'Ace Hardware Corporation',
        display_name: 'Ace Hardware Corporation',
        mol: 'Vera Rowe',
        eik: '2851201429',
        notes: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        credit_limit: '4753',
        num_dds: '8897740379',
        vista: '528463372856748',
        number: '6',
        number_accounting: '986722',
        discount_parts: 9,
        discount_work: 11,
        is_active: false,
        is_client: false,
        is_supplier: true,
        is_manifacturer: true,
        is_declared_saglasie: false,
        wholesale_customer: 3,
        client_type: 2,
        client_group: 1,
        client_contact_type: 3,
        addresses: [{
          post_code: '4000',
          country: 'България',
          id: 1,
          type: 1,
          city: 'Пловдив',
          street: 'бул. Дунав 5',
          phone: '+359 88 512 4561',
          fax: '+359 88 512 4562',
          email: 'john@scalefocus.com',
          address_type: 1
        }, {
          id: 2,
          type: 2,
          city: 'София',
          street: 'бул. Цариградско шосе 146',
          phone: '+359 88 132 1234',
          fax: '+359 88 123 1235',
          email: 'jack@scalefocus.com',
          address_type: 2
        }],
        employees: [{
          id: 1,
          title: 2,
          first_name: 'Христина',
          last_name: 'Баева',
          phone: '+359 32 555 555',
          mobile: '+359 88 189 8904',
          company_position: 'Търговски директор'
        }, {
          id: 2,
          title: 1,
          first_name: 'Красимир',
          last_name: 'Тодоров',
          phone: '+359 32 555 556',
          mobile: '+359 88 756 7547',
          company_position: 'Управител'
        }]
      }, {
        risk_groups: [1, 2, 3, 4, 5],
        legal_form: 'Юридическа форма',
        branches: ['Пловдив', 'София', 'Бургас', 'Варна', 'Стара Загора', 'Русе', 'Свиленград'],
        owners_count: 1,
        zp_reg_number: '860455856',
        branch: 'Бургас',
        risk_group: 1,
        starter_date: '25-01-2015',
        id: 8,
        company_name_bg: 'ACT Manufacturing Inc.',
        company_name_en: 'ACT Manufacturing Inc.',
        company_name_de: 'ACT Manufacturing Inc.',
        display_name: 'ACT Manufacturing Inc.',
        mol: 'Adrienne Scott',
        eik: '8880022371',
        notes: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        credit_limit: '4418',
        num_dds: '7100812156',
        vista: '703633047959824',
        number: '7',
        number_accounting: '253223',
        discount_parts: 3,
        discount_work: 18,
        is_active: false,
        is_client: true,
        is_supplier: false,
        is_manifacturer: false,
        is_declared_saglasie: true,
        wholesale_customer: 2,
        client_type: 0,
        client_group: 3,
        client_contact_type: 0,
        addresses: [{
          post_code: '4000',
          country: 'България',
          id: 1,
          type: 1,
          city: 'Пловдив',
          street: 'бул. Дунав 5',
          phone: '+359 88 512 4561',
          fax: '+359 88 512 4562',
          email: 'john@scalefocus.com',
          address_type: 1
        }, {
          id: 2,
          type: 2,
          city: 'София',
          street: 'бул. Цариградско шосе 146',
          phone: '+359 88 132 1234',
          fax: '+359 88 123 1235',
          email: 'jack@scalefocus.com',
          address_type: 2
        }],
        employees: [{
          id: 1,
          title: 2,
          first_name: 'Христина',
          last_name: 'Баева',
          phone: '+359 32 555 555',
          mobile: '+359 88 189 8904',
          company_position: 'Търговски директор'
        }, {
          id: 2,
          title: 1,
          first_name: 'Красимир',
          last_name: 'Тодоров',
          phone: '+359 32 555 556',
          mobile: '+359 88 756 7547',
          company_position: 'Управител'
        }]
      }, {
        risk_groups: [1, 2, 3, 4, 5],
        legal_form: 'Юридическа форма',
        branches: ['Пловдив', 'София', 'Бургас', 'Варна', 'Стара Загора', 'Русе', 'Свиленград'],
        owners_count: 1,
        zp_reg_number: '815361886',
        branch: 'София',
        risk_group: 1,
        starter_date: '25-01-2015',
        id: 9,
        company_name_bg: 'Acterna Corp.',
        company_name_en: 'Acterna Corp.',
        company_name_de: 'Acterna Corp.',
        display_name: 'Acterna Corp.',
        mol: 'Antonio Murphy',
        eik: '1412497871',
        notes: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        credit_limit: '895',
        num_dds: '4435347622',
        vista: '191326909167370',
        number: '8',
        number_accounting: '523619',
        discount_parts: 7,
        discount_work: 2,
        is_active: true,
        is_client: true,
        is_supplier: false,
        is_manifacturer: true,
        is_declared_saglasie: false,
        wholesale_customer: 1,
        client_type: 2,
        client_group: 3,
        client_contact_type: 0,
        addresses: [{
          post_code: '4000',
          country: 'България',
          id: 1,
          type: 1,
          city: 'Пловдив',
          street: 'бул. Дунав 5',
          phone: '+359 88 512 4561',
          fax: '+359 88 512 4562',
          email: 'john@scalefocus.com',
          address_type: 1
        }, {
          id: 2,
          type: 2,
          city: 'София',
          street: 'бул. Цариградско шосе 146',
          phone: '+359 88 132 1234',
          fax: '+359 88 123 1235',
          email: 'jack@scalefocus.com',
          address_type: 2
        }],
        employees: [{
          id: 1,
          title: 2,
          first_name: 'Христина',
          last_name: 'Баева',
          phone: '+359 32 555 555',
          mobile: '+359 88 189 8904',
          company_position: 'Търговски директор'
        }, {
          id: 2,
          title: 1,
          first_name: 'Красимир',
          last_name: 'Тодоров',
          phone: '+359 32 555 556',
          mobile: '+359 88 756 7547',
          company_position: 'Управител'
        }]
      }, {
        risk_groups: [1, 2, 3, 4, 5],
        legal_form: 'Юридическа форма',
        branches: ['Пловдив', 'София', 'Бургас', 'Варна', 'Стара Загора', 'Русе', 'Свиленград'],
        owners_count: 1,
        zp_reg_number: '678270507',
        branch: 'София',
        risk_group: 1,
        starter_date: '25-01-2015',
        id: 10,
        company_name_bg: 'Adams Resources & Energy, Inc.',
        company_name_en: 'Adams Resources & Energy, Inc.',
        company_name_de: 'Adams Resources & Energy, Inc.',
        display_name: 'Adams Resources & Energy, Inc.',
        mol: 'Grady Hogan',
        eik: '4401938627',
        notes: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        credit_limit: '1841',
        num_dds: '5096286718',
        vista: '602548877533132',
        number: '9',
        number_accounting: '691300',
        discount_parts: 0,
        discount_work: 7,
        is_active: true,
        is_client: true,
        is_supplier: false,
        is_manifacturer: false,
        is_declared_saglasie: false,
        wholesale_customer: 1,
        client_type: 2,
        client_group: 0,
        client_contact_type: 3,
        addresses: [{
          post_code: '4000',
          country: 'България',
          id: 1,
          type: 1,
          city: 'Пловдив',
          street: 'бул. Дунав 5',
          phone: '+359 88 512 4561',
          fax: '+359 88 512 4562',
          email: 'john@scalefocus.com',
          address_type: 1
        }, {
          id: 2,
          type: 2,
          city: 'София',
          street: 'бул. Цариградско шосе 146',
          phone: '+359 88 132 1234',
          fax: '+359 88 123 1235',
          email: 'jack@scalefocus.com',
          address_type: 2
        }],
        employees: [{
          id: 1,
          title: 2,
          first_name: 'Христина',
          last_name: 'Баева',
          phone: '+359 32 555 555',
          mobile: '+359 88 189 8904',
          company_position: 'Търговски директор'
        }, {
          id: 2,
          title: 1,
          first_name: 'Красимир',
          last_name: 'Тодоров',
          phone: '+359 32 555 556',
          mobile: '+359 88 756 7547',
          company_position: 'Управител'
        }]
      }, {
        risk_groups: [1, 2, 3, 4, 5],
        legal_form: 'Юридическа форма',
        branches: ['Пловдив', 'София', 'Бургас', 'Варна', 'Стара Загора', 'Русе', 'Свиленград'],
        owners_count: 1,
        zp_reg_number: '103596308',
        branch: 'София',
        risk_group: 1,
        starter_date: '25-01-2015',
        id: 11,
        company_name_bg: 'ADC Telecommunications, Inc.',
        company_name_en: 'ADC Telecommunications, Inc.',
        company_name_de: 'ADC Telecommunications, Inc.',
        display_name: 'ADC Telecommunications, Inc.',
        mol: 'Shirley Herrera',
        eik: '8192073145',
        notes: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        credit_limit: '121',
        num_dds: '2037808101',
        vista: '718799520269010',
        number: '10',
        number_accounting: '921093',
        discount_parts: 12,
        discount_work: 15,
        is_active: false,
        is_client: false,
        is_supplier: false,
        is_manifacturer: false,
        is_declared_saglasie: true,
        wholesale_customer: 1,
        client_type: 2,
        client_group: 3,
        client_contact_type: 3,
        addresses: [{
          post_code: '4000',
          country: 'България',
          id: 1,
          type: 1,
          city: 'Пловдив',
          street: 'бул. Дунав 5',
          phone: '+359 88 512 4561',
          fax: '+359 88 512 4562',
          email: 'john@scalefocus.com',
          address_type: 1
        }, {
          id: 2,
          type: 2,
          city: 'София',
          street: 'бул. Цариградско шосе 146',
          phone: '+359 88 132 1234',
          fax: '+359 88 123 1235',
          email: 'jack@scalefocus.com',
          address_type: 2
        }],
        employees: [{
          id: 1,
          title: 2,
          first_name: 'Христина',
          last_name: 'Баева',
          phone: '+359 32 555 555',
          mobile: '+359 88 189 8904',
          company_position: 'Търговски директор'
        }, {
          id: 2,
          title: 1,
          first_name: 'Красимир',
          last_name: 'Тодоров',
          phone: '+359 32 555 556',
          mobile: '+359 88 756 7547',
          company_position: 'Управител'
        }]
      }];

      var clientsUrl = '/api/clients';
      // TODO: Handle the other request methods like POST, PUT, DELETE
      $httpBackend.whenGET(clientsUrl).respond(clients);

      var clientsUrlRegex = new RegExp(clientsUrl + '/[0-9][0-9]*', '');
      $httpBackend.whenGET(clientsUrlRegex).respond(filterClients);
      $httpBackend.whenDELETE(clientsUrlRegex).respond(deleteClient);
      $httpBackend.whenPOST(clientsUrl).respond(addPhysicalClient);
      $httpBackend.whenPUT(clientsUrlRegex).respond(updateClient);

      // TODO: This code will duplicate with other mocks, find way to extract the code.
      $httpBackend.whenGET(/app/).passThrough();
      $httpBackend.whenGET(/calculateEMI/).passThrough();
      $httpBackend.whenGET(/calculateEPP/).passThrough();
      $httpBackend.whenGET(/makeLogin/).passThrough();
      $httpBackend.whenGET(/makeLogout/).passThrough();
      $httpBackend.whenGET(/allSessions/).passThrough();
      $httpBackend.whenGET(/singleSess/).passThrough();

      function updateClient (method, url, data) {
        console.log('data: %o', data);

        var parameters = url.split('/');
        var length = parameters.length;
        var id = parameters[length - 1];
        var client = JSON.parse(data);

        if (id > 0) {
          for (var i = 0; i < clients.length; i++) {
            if (clients[i].id == id) {
              clients[i] = client;
              break;
            }
          }
        }

        return [200, client, {}];
      }

      function addPhysicalClient(method, url, data) {
        // console.log('create %o', data);

        var c = {
          clientId: 0
        };
        var client = JSON.parse(data);

        // set display name
        client.display_name = client.first_name + ' ' + client.middle_name + ' ' + client.last_name;
        // get the last id and add 1
        client.id = clients[clients.length - 1].id + 1;

        clients.push(client);
        c.clientId = client.id;

        return [200, c, {}];
      }

      function filterClients(method, url, data) {
        var client = {
          clientId: 0
        };
        var parameters = url.split('/');
        var length = parameters.length;
        var id = parameters[length - 1];

        if (id > 0) {
          for (var i = 0; i < clients.length; i++) {
            if (clients[i].id == id) {
              client = clients[i];
              break;
            }
          }
        }

        return [200, client, {}];
      }

      function deleteClient(method, url, data) {
        var parameters = url.split('/');
        var length = parameters.length;
        var id = parameters[length - 1];

        var client = {
          id: id
        };

        angular.forEach(clients, function(elem, idx, arr) {
          if (id == elem.id) {
            arr.splice(idx, 1);
          }
        });

        return [200, client, {}];
      }
    });
}());