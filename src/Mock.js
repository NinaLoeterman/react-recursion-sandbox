const mockData = {
  name: "Home",
  id: 9,
  items: [
    {
      name: "Desktop",
      id: 1,
      items: [
        {
          name: "Pics",
          id: 2,
          items: [],
        },
        {
          name: "Documents",
          id: 3,
          items: [
            {
              name: "CV",
              id: 4,
              items: [],
            },
            { name: "Family Tree", id: 5, items: [] },
          ],
        },
      ],
    },
    {
      name: "Downloads",
      id: 6,
      items: [
        { name: "internet pic", id: 7, items: [] },
        {
          name: "other internet pic",
          id: 8,
          items: [],
        },
      ],
    },
  ],
};

export { mockData };
