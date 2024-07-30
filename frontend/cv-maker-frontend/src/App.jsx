import { useState } from 'react'
import "./cv.css"

function App() {
  return (
    <>

      <section>
        <div class="photo">
          <img src="https://www.pierre-giraud.com/wp-content/uploads/2019/07/cv-profil.jpg" alt="Ma photo de profil" />
        </div>
        <div class="prez">
          <h2>Qui suis-je ?</h2>
          <p>Diplômé d'un master 2 "Entrepreneuriat et Innovation" (Programme Grande
            Ecole EDHEC), je me tourne ensuite vers le développement informatique et les
            thématiques liées au web comme l'optimisation du référencement (SEO).</p>
        </div>
        <div class="contact">
          <h2>Informations de contact</h2>
          <div class="contact-flex">
            <p>Nom : </p>
            <p>GIRAUD Pierre</p>
          </div>
          <div class="contact-flex">
            <p>Adresse : </p>
            <p>115 Avenue des Lilas - 83000 Toulon</p>
          </div>
          <div class="contact-flex">
            <p>Téléphone :</p>
            <p>06 36 65 65 65</p>
          </div>
          <div class="contact-flex">
            <p>Mail : </p>
            <p><a href="mailto:pierre.giraud@edhec.com">pierre.giraud@edhec.com</a></p>
          </div>
          <div class="contact-flex">
            <p>Permis :</p>
            <p>B</p>
          </div>
          <div class="social">
            <a href="#"><img src="#" alt="Logo Fb" /></a>
            <a href="#"><img src="#" alt="Logo Tw" /></a>
            <a href="#"><img src="#" alt="Logo Lk" /></a>
            <a href="#"><img src="#" alt="Logo Yt" /></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
