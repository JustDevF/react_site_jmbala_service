import React  from 'react'
import './Contact.css'
import { VscVerified } from 'react-icons/vsc'
import emailjs from 'emailjs-com'
import {useNavigate} from 'react-router-dom'

//La page Contact 

//Le composant de la page
const Contact = () => {

  const history = useNavigate ()

  //API emailjs
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_bahpx0t', 'template_7legbyy', e.target, 'user_NOmEJNy2vqsT2YJhWiRJ5')
      .then((result) => {
          //console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      history.push('/contactSubmit')
  }

  return (
    <main>
      <div  className="containerContact">
            <div className="ContainerHeader">
                <h3 className="textTittleContact">Stay in touch</h3>
                <ul className="textDescContact">
                    <li><VscVerified/> Pragmatique</li>
                    <li><VscVerified/> Autonome</li>
                    <li><VscVerified/> Travail en équipe</li>
                </ul>
            </div> 
            <div className="containerForm">
                <section>
                    <h2>Contact</h2>
                    <form className="containerForm-form"  onSubmit={sendEmail} >
                      <input className="form-control" type="name" placeholder="Nom complet" required name="name"/>
                      <input className="form-control" type="email" placeholder="Adresse Email" required name="email" />
                      <input className="form-control" type="phone" placeholder="Téléphone" required name="phone"/>
                      <input className="form-control" type="text" placeholder="Projet" required name="project"/>
                      <textarea placeholder="Message" name="message" ></textarea>
                     <button type="submit" className="button-submit">Envoyer le message</button>
                    </form>
            </section>
            </div>             
      </div>
    </main>
    )
  }

export default Contact