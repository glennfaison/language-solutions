import {
  ActionTypes,
  copyQuote,
  newQuote as createQuote,
  newQuoteSection,
  copyQuoteSection,
  copyQuoteSectionItem,
  quotesAreEqual
} from "../../constants";

const DefaultState = {
  waiting: false,
  data: null
};

const quoteInFocus = (state = DefaultState, action) => {
  let type = action.type || undefined;
  let sectionIndex, sectionItemIndex, section, sectionItem, newQuote;
  switch (type) {
    case ActionTypes.GetNewQuote:
      console.log(quotesAreEqual(state.data, createQuote()));
      return { waiting: false, data: createQuote() };

    case ActionTypes.SetQuote:
      newQuote = copyQuote(action.payload.quote);
      return { waiting: false, data: newQuote };



    case ActionTypes.AddQuoteSection:
      newQuote = copyQuote(state.data);
      newQuote.quoteSections.push(newQuoteSection());
      return { waiting: false, data: newQuote };



    case ActionTypes.RemoveQuoteSection:
      newQuote = copyQuote(state.data);
      sectionIndex = action.payload.sectionIndex;
      newQuote.quoteSections.splice(sectionIndex, 1);
      return { waiting: false, data: newQuote };



    case ActionTypes.SetQuoteSection:
      newQuote = copyQuote(state.data);
      sectionIndex = action.payload.sectionIndex;
      section = action.payload.section;
      newQuote.quoteSections[sectionIndex] = copyQuoteSection(section);
      return { waiting: false, data: newQuote };



    case ActionTypes.AddQuoteSectionItem:
      newQuote = copyQuote(state.data);
      sectionIndex = action.payload.sectionIndex;
      newQuote.quoteSections[sectionIndex].items.push(newQuoteSection());
      return { waiting: false, data: newQuote };



    case ActionTypes.RemoveQuoteSectionItem:
      newQuote = copyQuote(state.data);
      sectionIndex = action.payload.sectionIndex;
      sectionItemIndex = action.payload.sectionItemIndex;
      newQuote.quoteSections[sectionIndex].items.splice(sectionItemIndex, 1);
      return { waiting: false, data: newQuote };



    case ActionTypes.SetQuoteSectionItem:
      newQuote = copyQuote(state.data);
      sectionIndex = action.payload.sectionIndex;
      sectionItemIndex = action.payload.sectionItemIndex;
      sectionItem = action.payload.sectionItem;
      newQuote.quoteSections[sectionIndex].items.push(copyQuoteSectionItem(sectionItem));
      return { waiting: false, data: newQuote };



    default:
      return state;
  }
};

export default quoteInFocus;