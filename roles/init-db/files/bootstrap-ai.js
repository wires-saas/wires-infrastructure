db.gpts.drop();
db.gpt_requests.drop();

db.gpts.insertMany([
  {
    _id: ObjectId("66e48d0bee83a61331f19d06"),
    model: "gemini-1.5-flash",
    organization: "alphabet",
    usage: {
      requestsUsage: 0,
      requestsLimit: 5000,
      tokensUsage: 0,
      tokensLimit: 1000000,
      lastRequest: ISODate("2024-09-13T20:30:55.093Z"),
      createdAt: ISODate("2024-09-13T20:30:55.113Z"),
      updatedAt: ISODate("2024-09-13T20:30:55.113Z"),
    },
    authentication: {
      type: "apiKey",
      apiKey: "{{ dev_gemini_flash_api_key }}",
    },
    createdAt: ISODate("2024-09-13T19:05:47.738Z"),
    updatedAt: ISODate("2024-09-13T20:30:55.113Z"),
    __v: 0,
  },
  {
    _id: ObjectId("66e48d0bee83a61331f19d07"),
    model: "gemini-1.5-flash",
    organization: "wires",
    usage: {
      requestsUsage: 0,
      requestsLimit: 5000,
      tokensUsage: 0,
      tokensLimit: 1000000,
      lastRequest: ISODate("2024-09-13T20:30:55.093Z"),
      createdAt: ISODate("2024-09-13T20:30:55.113Z"),
      updatedAt: ISODate("2024-09-13T20:30:55.113Z"),
    },
    authentication: {
      type: "apiKey",
      apiKey: "{{ dev_gemini_flash_api_key }}",
    },
    createdAt: ISODate("2024-11-13T19:05:47.738Z"),
    updatedAt: ISODate("2024-11-13T20:30:55.113Z"),
    __v: 0,
  },
]);

db.organizations.updateOne(
  { _id: "alphabet" },
  { $set: { gpt: ObjectId("66e48d0bee83a61331f19d06") } }
);
db.organizations.updateOne(
  { _id: "wires" },
  { $set: { gpt: ObjectId("66e48d0bee83a61331f19d07") } }
);
