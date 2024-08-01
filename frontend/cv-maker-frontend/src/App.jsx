import { useState } from 'react'

import PhotoInput from './components/PhotoInput'
import HiddenInput from './components/HiddenInput'
import TextArea from './components/TextArea'
import Button from './components/Button'

import "./index.css"

function App() {
  const SERVER_POST_URL = "http://localhost:3000/submit-form"

  const [profileImg, setProfileImg] = useState();
  const [dataTosend, setDataTosend] = useState();
  async function SubmitHandler(e) {
    e.preventDefault()
    console.log(profileImg);
    // to transfer data from binary to base64
    const fr = new FileReader()
    fr.addEventListener("load", async () => {
      const base64Data = fr.result
      console.log(base64Data);
      let data = {
        photo: base64Data,
        name: e.target.name.value,
        address: e.target.address.value,
        phone: e.target.phone.value,
        mail: e.target.mail.value,
        permis: e.target.permis.value,
        URL_fb: e.target.URL_fb.value,
        URL_LinkedIn: e.target.URL_LinkedIn.value,
        URL_Insta: e.target.URL_Insta.value,
        URL_portfolio: e.target.URL_portfolio.value,
      }
      console.log(data);
      const res = await fetch(SERVER_POST_URL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json"
        }
      })
  
      download(await res.blob())
    })
    fr.readAsDataURL(profileImg)
  }

  
  function download(blob, filename) {
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.style.display = "none"
    a.href = url
    a.download = filename;
    document.body.appendChild(a)
    a.click()
    document.removeChild(a)
    window.URL.revokeObjectURL(url)
  }

  return (
    <>
      <form onSubmit={SubmitHandler} className='mt-32  bg-white'>
        <section className='sectionClass mx-auto'>
          <div className="photo">
            <PhotoInput inputName="profilePhoto" profileImg={profileImg} setProfileImg={setProfileImg} />
          </div>
          <div className="prez flex flex-col">
            <h2>Qui suis-je ?</h2>
            <button type='button' className='btn btn-outline max-w-28 self-end my-2 '>ReWrite with AI</button>
            <TextArea name='description' />
          </div>
          <div className="contact">
            <h2>Informations de contact</h2>
            <div className="flex">
              <p>Nom : </p>
              <HiddenInput name={"name"} />
            </div>
            <div className="flex">
              <p>Adresse : </p>
              <HiddenInput name={"address"} />
            </div>
            <div className="flex">
              <p>Téléphone :</p>
              <HiddenInput name={"phone"} />
            </div>
            <div className="flex">
              <p>Mail : </p>
              <HiddenInput name={"mail"} />
            </div>
            <div className="flex">
              <p>Permis :</p>
              <HiddenInput name={"permis"} />
            </div>
            <br />
            <div >
              <div className="flex">
                <p>facebook :</p>
                <HiddenInput name={"URL_fb"} />
              </div>
              <div className="flex">
                <p>linkedIn :</p>
                <HiddenInput name={"URL_LinkedIn"} />
              </div>
              <div className="flex">
                <p>instagram :</p>
                <HiddenInput name={"URL_Insta"} />
              </div>
              <div className="flex">
                <p>portfolio :</p>
                <HiddenInput name={"URL_portfolio"} />
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
