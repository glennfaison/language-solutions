import React from 'react';
import ReactDOM from 'react-dom';
//import QuoteForm from './ui-components/quote-form/quote-form';
//import QuoteSection from './ui-components/quote-section/quote-section';
import QuoteCreationPage from './ui-components/pages/create-quote-page/create-quote-page';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<QuoteCreationPage />, document.getElementById('root'));
registerServiceWorker();
