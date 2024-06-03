import 'core-js/stable';
import 'regenerator-runtime';

import {
  APP_INIT_ERROR, APP_READY, subscribe, initialize,
} from '@edx/frontend-platform';
import { AppProvider, ErrorPage } from '@edx/frontend-platform/react';
import ReactDOM from 'react-dom';

import Header from '@edx/frontend-component-header';
import Footer from '@edx/frontend-component-footer';
import messages from './i18n';

import './index.scss';
import GuestPlugin from './guest-plugin/GuestPlugin';

subscribe(APP_READY, () => {
  ReactDOM.render(
    <AppProvider>
      <Header />
      <main>
        <p>
          This page is not shared with the host, but can be used for local development without it.
        </p>
        <p>
          The `exposes` configuration in the ModuleFederationPlugin has to be removed to get HMR to work in this mode.
        </p>
        <GuestPlugin />
      </main>
      <Footer />
    </AppProvider>,
    document.getElementById('root'),
  );
});

subscribe(APP_INIT_ERROR, (error) => {
  ReactDOM.render(<ErrorPage message={error.message} />, document.getElementById('root'));
});

initialize({
  messages,
  handlers: {
    auth: () => {}, // This MFE turns off auth so it can run independently of edx-platform.
  },
});
