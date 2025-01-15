import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from './components/ui/provider.jsx'
import { defaultSystem } from "@chakra-ui/react"
import Theme from './theme/theme.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AudioProvider } from './context/audioContext.jsx'


// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}


// 3. Pass the `theme` prop to the `ChakraProvider`

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Provider>
      <AudioProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </AudioProvider>
    </Provider>
  </React.StrictMode>,
)