import { ActionTypes } from '../../constants';
import { QuotesResource } from '../../httpResources';

export const loadQuotesFromThisUser = userId => dispatch => {
  dispatch({ type: ActionTypes.LoadQuotesByAuthorAttempt });
  QuotesResource.byAuthor(userId)
    .then(res => {
      dispatch({ type: ActionTypes.LoadQuotesByAuthorSuccess, payload: { quoteList: res.body } });
    })
    .catch(err => {
      dispatch({ type: ActionTypes.LoadQuotesByAuthorFailure, payload: {} });
    });
};

export const loadQuoteById = quoteId => dispatch => {
  dispatch({ type: ActionTypes.LoadQuoteByIdAttempt });
  QuotesResource.get(quoteId)
    .then(res => {
      dispatch({ type: ActionTypes.LoadQuoteByIdSuccess, payload: { quote: res.body } });
    })
    .catch(err => {
      dispatch({ type: ActionTypes.LoadQuoteByIdFailure, payload: {} });
    });
};

export const createQuote = quote => dispatch => {
  dispatch({ type: ActionTypes.SaveQuoteAttempt });
  QuotesResource.create(quote)
    .then(res => {
      dispatch({ type: ActionTypes.SaveQuoteSuccess, payload: { quote: res.body } });
    })
    .catch(err => {
      dispatch({ type: ActionTypes.SaveQuoteFailure, payload: {} });
    });
};

export const updateQuote = quote => dispatch => {
  dispatch({ type: ActionTypes.SaveQuoteAttempt });
  QuotesResource.update(quote)
    .then(res => {
      dispatch({ type: ActionTypes.SaveQuoteSuccess, payload: { newQuote: res.body } });
    })
    .catch(err => {
      dispatch({ type: ActionTypes.SaveQuoteFailure, payload: {} });
    });
};

export const getNewQuote = () => dispatch => {
  dispatch({ type: ActionTypes.GetNewQuote });
};

export const addQuoteSection = () => dispatch => {
  dispatch({ type: ActionTypes.AddQuoteSection });
};

export const removeQuoteSection = sectionIndex => dispatch => {
  dispatch({ type: ActionTypes.RemoveQuoteSection, payload: { sectionIndex: sectionIndex } });
};

export const setQuoteSection = (sectionIndex, section) => dispatch => {
  dispatch({
    type: ActionTypes.SetQuoteSection,
    payload: { sectionIndex: sectionIndex, section: section }
  });
};

export const addQuoteSectionItem = (sectionIndex) => dispatch => {
  dispatch({
    type: ActionTypes.AddQuoteSectionItem,
    payload: { sectionIndex: sectionIndex }
  });
};

export const removeQuoteSectionItem = (sectionIndex, sectionItemIndex) => dispatch => {
  dispatch({
    type: ActionTypes.RemoveQuoteSectionItem,
    payload: { sectionIndex: sectionIndex, sectionItemIndex: sectionItemIndex }
  });
};

export const setQuoteSectionItem = (sectionIndex, sectionItemIndex, sectionItem) => dispatch => {
  dispatch({
    type: ActionTypes.SetQuoteSection,
    payload: {
      sectionIndex: sectionIndex, sectionItemIndex: sectionItemIndex,
      quoteSectionItem: sectionItem
    }
  });
};