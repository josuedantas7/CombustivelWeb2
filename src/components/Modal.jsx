import PropTypes from 'prop-types'

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'

import { GoAlert } from "react-icons/go";

const Modal = ({message, setToggleModal}) => {

    const [isOpen, setIsOpen] = useState(true)
    const [alert, setAlert] = useState(false)


    useEffect(() => {
      lookingAlert()
    },[])

    function lookingAlert(){
      if (message === 'Por favor, preencha todos os campos'){
        setAlert(true)
      }
    }

    function closeModal() {
      setIsOpen(false)
      setTimeout(() => {
        setToggleModal(false)
      },500)
    }

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="mt-2">
                    {alert ? <GoAlert className="text-5xl flex w-full justify-center mb-4 text-red-500"/> : null}
                    <p className="text-sm text-gray-500">
                      {message}
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Fechar
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default Modal

Modal.propTypes = {
    message: PropTypes.string.isRequired,
    setToggleModal: PropTypes.func.isRequired,
}
