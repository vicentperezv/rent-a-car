import React, {useState} from 'react'
import CarFormView from './views/CarFormView'
import Theme from './styles/theme'
import CarListView from './views/CarListView'
import Layout from './components/Layout'
import Header from './components/Header'
function App() {
  const [activeComponent, setActiveComponent] = useState('formulario');

  return (
    <>
      <Theme>
          <Header
            activeComponent={activeComponent}
            setActiveComponent={setActiveComponent}
          />
          <Layout>
            {activeComponent === 'formulario' && <CarFormView/>}
            {activeComponent === 'lista' && <CarListView/>}

          </Layout>
          
      </Theme>
    </>
  )
}

export default App
