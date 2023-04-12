import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from '@/store';
const Notification = lazy(
	() => import('@components/notification/Notification')
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Notification />
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
