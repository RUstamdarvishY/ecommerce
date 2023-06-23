const filterOptions = [
  {
    id: 1,
    category: "cd/dvd диски",
    filters: [
      { id: 1, title: "Тип диска", options: ["CD", "DVD"] },
      { id: 2, title: "Объем памяти", options: ["512mb", "1048mb", "2gb"] },
    ],
  },
  {
    id: 2,
    category: "usb хабы",
    filters: [
      { id: 1, title: "Колличество разъемов", options: ["1", "2", "3", "4"] },
    ],
  },
  {
    id: 3,
    category: "батарейки",
    filters: [
      {
        id: 1,
        title: "Бренд",
        options: [
          "Camelion",
          "SmartBuy",
          "GP",
          "Panasonic",
          "Космос",
          "Toshiba",
          "Minamoto",
        ],
      },
      {
        id: 2,
        title: "Тип батарейки",
        options: [
          "АА (пальчики)",
          "AAA (мини пальчики)",
          "Крона",
          "R20",
          "R16",
          "AG1-13",
          "CR2025",
          "CR2016",
          "CR2032",
        ],
      },
    ],
  },
  {
    id: 4,
    category: "Зажигалки",
    filters: [
      {
        id: 1,
        title: "Тип зажигалки",
        options: ["Газовая", "Бензиновая", "USB", "Жидкость для заправки"],
      },
    ],
  },
  {
    id: 5,
    category: "Зарядки",
    filters: [
      {
        id: 1,
        title: "Комплектация",
        options: ["Провод", "Гнездо", "Провод и Гнездо"],
      },
      {
        id: 2,
        title: "Тип",
        options: [
          "USB/Type-C",
          "Type-C/Type-C",
          "USB/lightning",
          "Type-C/lighting",
          "USB/MicroUSB",
        ],
      },
    ],
  },
];

export default filterOptions;
