
export function newQuote() {
  return {
    dateCreated: Date.now(),
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
  _new.items = quoteSections.map(value => copyQuoteSection(value));
  for (let key in otherSectionKeys) {
    _new[key] = otherSectionKeys[key];
  }
  return _new;
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

// let isSpaceOrEmpty = (str) => {
//   return !str.replace(/\s/g, '').length;
// };