db.providers.drop();
db.providers.insertMany([
  {
    _id: {
      provider: "66e48d0bee83a61331f19d08",
      organization: "alphabet",
    },

    type: "ContactsProvider",
    implementation: "mailjet",

    displayName: "WiresContacts",
    description: "Gestion des contacts et création de listes",

    isDefault: true,
    isVerified: true,

    authentication: {
      type: "apiKeyWithSecret",
      apiKey: "{{ dev_mailjet_api_key }}",
      secretKey: "{{ dev_mailjet_secret_key }}",
    },
    createdAt: ISODate("2024-09-13T20:30:55.113Z"),
    updatedAt: ISODate("2024-09-13T20:30:55.113Z"),
    __v: 0,
  },
  {
    _id: {
      provider: "66e48d0bee83a61331f19d09",
      organization: "alphabet",
    },
    type: "EmailsProvider",
    implementation: "mailjet",

    displayName: "WiresMail",
    description: "Authentification de domaine et gestion des expéditeurs",

    isDefault: true,
    isVerified: true,

    senders: [
      { email: "antoine@alphabet.wires.fr", name: "Antoine from Wires" },
      { email: "bat@wires.fr", name: "Wires - BAT" },
      { email: "test@wires.fr", name: "Wires - Test" },
    ],

    authentication: {
      type: "apiKeyWithSecret",
      apiKey: "{{ dev_mailjet_api_key }}",
      secretKey: "{{ dev_mailjet_secret_key }}",
    },

    createdAt: ISODate("2024-09-13T20:30:55.113Z"),
    updatedAt: ISODate("2024-09-13T20:30:55.113Z"),
    __v: 0,
  },
  {
    _id: {
      provider: "66e48d0bee83a61331f19d10",
      organization: "wires",
    },

    type: "ContactsProvider",
    implementation: "mailjet",

    displayName: "WiresContacts",
    description: "Gestion des contacts et création de listes",

    isDefault: true,
    isVerified: false,

    authentication: {
      type: "apiKeyWithSecret",
      apiKey: "{{ dev_mailjet_api_key }}",
      secretKey: "{{ dev_mailjet_secret_key }}",
    },
    createdAt: ISODate("2024-09-13T20:30:55.113Z"),
    updatedAt: ISODate("2024-09-13T20:30:55.113Z"),
    __v: 0,
  },
  {
    _id: {
      provider: "66e48d0bee83a61331f19d11",
      organization: "wires",
    },
    type: "EmailsProvider",
    implementation: "mailjet",

    displayName: "WiresMail",
    description: "Authentification de domaine et gestion des expéditeurs",

    isDefault: true,
    isVerified: true,

    senders: [
      { email: "team@wires.fr", name: "Wires" },
      { email: "bat@wires.fr", name: "Wires - BAT" },
      { email: "test@wires.fr", name: "Wires - Test" },
    ],

    authentication: {
      type: "apiKeyWithSecret",
      apiKey: "{{ dev_mailjet_api_key }}",
      secretKey: "{{ dev_mailjet_secret_key }}",
    },

    createdAt: ISODate("2024-09-13T20:30:55.113Z"),
    updatedAt: ISODate("2024-09-13T20:30:55.113Z"),
    __v: 0,
  },
]);
