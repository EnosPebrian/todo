const account = [
  {
    name: "User1",
    password: "pass",
    email: "user1@mail.com",
    tasks: ["mencangkul"],
    subtasks: { mencangkul: ["siram air dulu"] },
  },

  {
    name: "User2",
    password: "pass",
    email: "user2@mail.com",
    tasks: [`main burung`, "macul", "perang", "makan", "mukul-orang"],
    subtasks: {
      macul: ["siram air dulu", "pake ganco"],
      "main burung": [],
      perang: [],
      makan: [],
      "mukul-orang": [],
    },
  },
];

export default account;
