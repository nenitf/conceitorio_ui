import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
