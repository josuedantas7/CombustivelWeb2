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

  function onSubmit(){

    let etanolNumber = Number(etanol)
    let gasolinaNumber = Number(gasolina) 

    if (etanolNumber > 1000 && etanol.includes(",")){
      setEtanol(etanol.replace(",", ""))
      console.log('etanol com virgula')
    } else if (gasolinaNumber && gasolina.includes(",")){
      setGasolina(gasolina.replace(",", ""))
      console.log('gasolina com virgula')
    }

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
      <div className='bg-blue-500 h-screen'>
        <img src={logo} className="w-[200px] h-[200px] mx-auto"/>
        <div className="text-2xl my-4 text-white text-center">
          <h1>Você sabe com qual combustível compensa mais abastecer seu carro?</h1>
          <h1>Utilize calculadora abaixo:</h1>
        </div>
        <div className="flex justify-center flex-col items-center">
          <LabelInput label="Preço - litro etanol (R$):" onChange={setEtanol}/>
          <LabelInput label="Preço - litro gasolina (R$):" onChange={setGasolina}/>
          <Button onSubmit={onSubmit}/>
        </div>
      </div>
      {toggleModal ? <Modal setToggleModal={setToggleModal} message={messageModal}/> : null}
    </>
  )
}

export default App
