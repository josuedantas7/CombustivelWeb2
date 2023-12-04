import Button from "./components/Button"
import LabelInput from "./components/LabelInput"
import { useState } from 'react'
import Modal from "./components/Modal"

import logo  from './assets/combustivel.png'

function App() {

  const [etanol, setEtanol] = useState(null)
  const [gasolina, setGasolina] = useState(null)
  const [toggleModal, setToggleModal] = useState(false)
  const [messageModal, setMessageModal] = useState('')

  function onSubmit(e){
    e.preventDefault()
    if (etanol === null || gasolina === null || etanol === '' || gasolina === '' || etanol === 0 || gasolina === 0){
      setToggleModal(true)
      setMessageModal('Por favor, preencha todos os campos')
      return 
    }
    if(etanol/gasolina < 0.7){
      setToggleModal(true)
      setMessageModal(`O calculo será igual a ${(etanol/gasolina).toFixed(2)}, Portanto compensa mais abastecer com etanol`)
    }else{
      setToggleModal(true)
      setMessageModal(`O calculo será igual a ${(etanol/gasolina).toFixed(2)}, Portanto compensa mais abastecer com gasolina`)
    }
  }

  return (
    <>
      <div className='bg-blue-500 h-screen px-48 max-[990px]:px-16 max-[600px]:px-3 p-3'>
        <div className="w-full h-[600px] border-2 rounded-2xl">
          <img src={logo} className="w-[200px] h-[200px] mx-auto"/>
          <div className="text-2xl my-4 text-white text-center max-[430px]:text-lg">
            <h1>Você sabe com qual combustível compensa mais abastecer seu carro?</h1>
            <h1 className="mt-2">Utilize calculadora abaixo:</h1>
          </div>
          <div className="flex justify-center flex-col items-center">
            <LabelInput onSubmit={(e) => onSubmit(e)} label="Preço - litro etanol (R$):" onChange={setEtanol}/>
            <LabelInput onSubmit={(e) => onSubmit(e)} label="Preço - litro gasolina (R$):" onChange={setGasolina}/>
            <Button onSubmit={(e) => onSubmit(e)}/>
          </div>
        </div>
        {toggleModal ? <Modal setToggleModal={setToggleModal} message={messageModal}/> : null}
        </div>
    </>
  )
}

export default App
