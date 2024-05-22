import { ListData } from "./ListDescription";

const fakeData: ListData = {
  Type: { value: ["Bog"], type: "standard" },
  Sprog: { value: ["Dansk"], type: "standard" },
  Bidragsydere: { value: ["Karsten Sand Iversen"], type: "link" },
  Originaltitel: { value: ["Ulysses (1922)"], type: "standard" },
  ISBN: { value: ["9788763814584"], type: "standard" },
  Udgave: { value: ["Udgave, 2. oplag (2015)"], type: "standard" },
  Omfang: { value: ["795 sider"], type: "standard" },
  Forlag: { value: ["Rosinante"], type: "standard" },
  Målgruppe: { value: ["Voksenmateriale"], type: "standard" },
  Pris: {
    value: ["Standard: 65 kr.", "Børn: Gratis"],
    type: "standard",
    layout: "column",
  },
  Indhold: {
    value: [
      "Something to Do",
      "Lie to Me",
      "People Are People",
      "It Doesn't Matter",
      "Stories of Old",
      "Somebody",
      "Master and Servant",
      "If You Want",
      "Blasphemous Rumours",
    ],
    type: "list",
  },
};

export default fakeData;
