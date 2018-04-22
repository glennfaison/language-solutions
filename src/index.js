import React from 'react';
import ReactDOM from 'react-dom';
import QuoteCreationPage from './ui-components/pages/create-quote-page/create-quote-page';
import registerServiceWorker from './registerServiceWorker';
// import QuotePrintPreviewPage from './ui-components/pages/print-quote-page/print-quote-page';

ReactDOM.render(<QuoteCreationPage />, document.getElementById('root'));
registerServiceWorker();
