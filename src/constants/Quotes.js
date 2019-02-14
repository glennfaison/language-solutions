
export function newQuote() {
  return {
    dateCreated: null,
    code: null,
    event: null,
    venue: null,
    addressee: null,
    addresser: null,
    quoteSections: [newQuoteSection()],
    get totalPrice() {
      // sum all 'totalPrice' attributes in quoteItems.
      return this.quoteSections.reduce((previous, current) => {
        return (previous.totalPrice || 0) + current.totalPrice;
      }, 0);
    },
  };
};

export function copyQuote(old) {
  let { totalPrice, quoteSections, ...otherSectionKeys } = old;
  let _new = newQuote();
  _new.quoteSections = quoteSections.map(value => copyQuoteSection(value));
  for (let key in otherSectionKeys) {
    _new[key] = otherSectionKeys[key];
  }
  return _new;
};

export function quotesAreEqual(first, second) {
  if ((first === null && second === null) || (first === undefined && second === undefined)) {
    return true;
  }
  else if (!first || !second) {
    return false;
  }
  let { totalPrice, quoteSections, ...otherSectionItemKeys } = first;
  for (let key in otherSectionItemKeys) {
    if (second[key] !== otherSectionItemKeys[key]) {
      return false;
    }
  }
  if(quoteSections.length !== second.quoteSections.length) {
    return false;
  }
  if (!quoteSections.some((item, i) => quoteSectionsAreEqual(item, second.quoteSections[i]))) {
    return false;
  }
  return true;
};



export function newQuoteSection() {
  return {
    title: null,
    description: null,
    items: [newQuoteSectionItem()],
    get totalPrice() {
      // sum all 'totalPrice' attributes in items.
      return this.items.reduce((previous, current) => {
        return (previous.totalPrice || 0) + current.totalPrice;
      }, 0);
    }
  };
};

export function copyQuoteSection(old) {
  let { totalPrice, items, ...otherSectionKeys } = old;
  let _new = newQuoteSection();
  _new.items = items.map(value => copyQuoteSectionItem(value));
  for (let key in otherSectionKeys) {
    _new[key] = otherSectionKeys[key];
  }
  return _new;
};

export function quoteSectionsAreEqual(first, second) {
  let { totalPrice, items, ...otherSectionItemKeys } = first;
  for (let key in otherSectionItemKeys) {
    if (second[key] !== otherSectionItemKeys[key]) {
      return false;
    }
  }
  if(items.length !== second.items.length) { return false; }
  if (!items.some((item, i) => quoteSectionItemsAreEqual(item, second.items[i]))) {
    return false;
  }
  return true;
};



export function newQuoteSectionItem() {
  return {
    description: null,
    unitPrice: 0,
    pricingBasis: 'Daily',
    timeUnits: 1,
    timeBasis: 'Day',
    personnelUnits: 1,
    personnelType: 'Interpreter',
    get totalPrice() {
      return this.unitPrice * this.timeUnits;
    },
  };
};

export function copyQuoteSectionItem(old) {
  let { totalPrice, ...otherSectionItemKeys } = old;
  let _new = newQuoteSectionItem();
  for (let key in otherSectionItemKeys) {
    _new[key] = otherSectionItemKeys[key];
  }
  return _new;
};

export function quoteSectionItemsAreEqual(first, second) {
  let { totalPrice, ...otherSectionItemKeys } = first;
  for (let key in otherSectionItemKeys) {
    if (second[key] !== otherSectionItemKeys[key]) {
      return false;
    }
  }
  return true;
};

// let isSpaceOrEmpty = (str) => {
//   return !str.replace(/\s/g, '').length;
// };