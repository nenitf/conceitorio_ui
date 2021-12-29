import 'react-toastify/dist/ReactToastify.css';
import 'bulma/css/bulma.min.css';

import { GlobalStyle } from './styles/global'

import Routes from 'routes'

export function App(){
  return (
    <>
      <Routes />
      <GlobalStyle />
    </>
  )
}
