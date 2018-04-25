export default function QuoteSectionState() {
  return {
    title: "INTERPRETER'S FEE:",
    description: `Delectus quisquam hic ullam provident harum fugit libero rem dolor perferendis nihil at tempore, suscipit unde magni qui perspiciatis! Hic, corrupti neque?
    Consequatur ullam quis unde culpa vitae, eum molestiae pariatur ipsam odit mollitia sequi sed aliquam repellat beatae reprehenderit maxime voluptate adipisci incidunt?`,
    id: 1,
    columns: {
      event: {
        id: 1,
        content: ["Interpreter's Conference",]
      },
      venue: {
        id: 2,
        content: ["DLM, wherever that is",]
      },
      timeUnit: {
        id: 3,
        content: ["day",]
      },
      time: {
        id: 4,
        content: [3,]
      },
      personnelUnit: {
        id: 5,
        content: ["Interpreter",]
      },
      personnel: {
        id: 6,
        content: [1,]
      },
      unitPrice: {
        id: 7,
        content: [350000,]
      },
      total: {
        id: 8,
        content: [1050000,]
      }
    },
    sectionTotal: 1050000,
  };
}