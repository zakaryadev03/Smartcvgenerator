import { useState } from 'react'
import PhotoInput from './components/PhotoInput'
import "./index.css"
import HiddenInput from './components/HiddenInput'
import TextArea from './components/TextArea'
import Button from './components/Button'
function App() {
  return (
    <>
      <form className='mt-32  bg-white'>
        <section className='sectionClass mx-auto'>

          <div className="photo">
            <PhotoInput />
          </div>
          <div className="prez flex flex-col">
            <h2>Qui suis-je ?</h2>
            <button className='btn btn-outline max-w-28 self-end my-2 '>ReWrite with AI</button>
            <TextArea />
          </div>
          <div className="contact">
            <h2>Informations de contact</h2>
            <div className="flex">
              <p>Nom : </p>
              <HiddenInput />
            </div>
            <div className="flex">
              <p>Adresse : </p>
              <HiddenInput />
            </div>
            <div className="flex">
              <p>Téléphone :</p>
              <HiddenInput />
            </div>
            <div className="flex">
              <p>Mail : </p>
              <HiddenInput />
            </div>
            <div className="flex">
              <p>Permis :</p>
              <HiddenInput />
            </div>
            <br />
            <div className="">
              <div className="flex">
                <p>facebook :</p>
                <HiddenInput />
              </div>
              <div className="flex">
                <p>linkedIn :</p>
                <HiddenInput />
              </div>
              <div className="flex">
                <p>instagram :</p>
                <HiddenInput />
              </div>
              <div className="flex">
                <p>portfolio :</p>
                <HiddenInput />
              </div>

            </div>
          </div>
        <Button />
        </section>
      </form>
    </>
  )
}

export default App
