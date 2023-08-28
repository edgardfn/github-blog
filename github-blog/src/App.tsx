import { ThemeProvider } from 'styled-components'
import './App.css'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <>GITHUB BLOG</>
    </ThemeProvider>
  )
}

export default App
