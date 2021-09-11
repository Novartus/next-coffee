const BuyOptionsData = {
  data: [
    {
      option: "Preferences",
      question: "How do you drink your coffee ?",
      data: [
        {
          id: "Q1",
          value: "Drip Brew",
          description:
            "Ground coffee is added to a brew basket and placed in an automatic coffee machine for this brewing style.",
        },
        {
          id: "Q1",
          value: "Cold Brew",
          description:
            "Coarsely ground coffee is placed in room temperature water and allowed to steep for an extended period of time.",
        },
        {
          id: "Q1",
          value: "Espresso",
          description:
            "To achieve an espresso brew, you'll need an espresso or cappuccino machine.",
        },
      ],
    },

    {
      option: "Bean Type",
      question: "What kind of beans do you use ?",
      type: "bean",
      data: [
        {
          id: "Q2",
          value: "Robusta",
          description:
            "The coffee caniphora species is also particularly tolerant of its environment.",
          price: 2.03,
        },
        {
          id: "Q2",
          value: "Liberica",
          description:
            "Liberica coffee beans are a rare treat. They’re grown in very specific climates.",
          price: 2.47,
        },
        {
          id: "Q2",
          value: "Excelsa",
          description:
            "Excelsa is technically a member of the Liberica family, but its species is actually incredibly distinct.",
          price: 3.57,
        },
      ],
    },

    {
      option: "Quantity",
      question: "How much coffee do you want ?",
      data: [
        {
          id: "Q3",
          value: "1000g",
          description:
            "Perfect for the solo drinker. Yields about 48 delicious cups.",
          weight: 1,
        },
        {
          id: "Q3",
          value: "2000g",
          description:
            "Perfect option for a couple. Yields about 100 delectable cups.",
          weight: 2,
        },
        {
          id: "Q3",
          value: "2500g",
          description:
            "Perfect for offices and events. Yields about 200 delightful cups.",
          weight: 2.5,
        },
      ],
    },

    {
      option: "Grind Options",
      question: "How you want us to grind them ?",
      type: "grind",
      data: [
        {
          id: "Q4",
          value: "Whole Bean",
          description:
            "Best choice if you cherish the full sensory experience.",
          fees: 1.6,
        },
        {
          id: "Q4",
          value: "AeroPress",
          description:
            "This is flexible with a variety of grind sizes, water temperatures, and contact times.",
          fees: 1.7,
        },
        {
          id: "Q4",
          value: "Siphon",
          description:
            "This method calls for a medium-fine grind size. A siphon typically has two chambers.",
          fees: 1.4,
        },
      ],
    },
  ],
};

export default BuyOptionsData;
