import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import App from './App.tsx';
import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { queryClient } from './main.tsx';
import theme from './theme.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<ChakraProvider theme={theme}>
				<ColorModeScript initialColorMode={theme.config.initialColorMode} />
				<App />
			</ChakraProvider>
		</QueryClientProvider>
	</React.StrictMode>
);
