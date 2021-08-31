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
      data: [
        {
          id: "Q2",
          value: "Robusta",
          description:
            "The coffee caniphora species is also particularly tolerant of its environment.",
        },
        {
          id: "Q2",
          value: "Liberica",
          description:
            "Liberica coffee beans are a rare treat. They’re grown in very specific climates with production being far too scarce.",
        },
        {
          id: "Q2",
          value: "Excelsa",
          description:
            "Excelsa is technically a member of the Liberica family, but its species is actually incredibly distinct.",
        },
      ],
    },

    {
      option: "Quantity",
      question: "How much coffee do you want ?",
      data: [
        {
          id: "Q3",
          value: "500g",
          description:
            "Perfect for the solo drinker. Yields about 24 delicious cups.",
        },
        {
          id: "Q3",
          value: "1000g",
          description:
            "Perfect option for a couple. Yields about 50 delectable cups.",
        },
        {
          id: "Q3",
          value: "1500g",
          description:
            "Perfect for offices and events. Yields about 95 delightful cups.",
        },
      ],
    },

    {
      option: "Grind Options",
      question: "How you want us to grind them ?",
      data: [
        {
          id: "Q4",
          value: "Whole Bean",
          description:
            "Best choice if you cherish the full sensory experience.",
        },
        {
          id: "Q4",
          value: "AeroPress",
          description:
            "The AeroPress is particularly capable and flexible with a variety of grind sizes, water temperatures, and contact times.",
        },
        {
          id: "Q4",
          value: "Siphon",
          description:
            "This method calls for a medium-fine grind size. A siphon typically has two chambers, with the first filled with water.",
        },
      ],
    },
  ],
};

export default BuyOptionsData;
