import React from 'react'
import './Inscription.css'
import {Form , Button} from 'react-bootstrap'
const Inscription = () => {
  return (
    <div>
        <img src=""/>
        <Form>
        <div class="Label_input">
         <label htmlFor="CIN">CIN:</label>
         <input type="text"  placeholder='Entrer votre num cin'/> 
        </div>
        <div class="Label_input">
         <label htmlFor="Nom">Nom:</label>
         <input type="text"  placeholder='Entrer votre nom'/> 
        </div>
        <div class="Label_input">
         <label htmlFor="Prénom">Prénom:</label>
         <input type="text"  placeholder='Entrer votre prénom'/>
        </div>
        <div class="Label_input">
        <label htmlFor="Sexe">Sexe: </label>
        {['radio'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
      <Form.Check 
        type={type}
        id={`default-${type}`}
        label={`Masculin`}
      />
        </div>))}
        {['radio'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
      <Form.Check 
        type={type}
        id={`default-${type}`}
        label={`Feminin`}
      />
        </div>))}  </div>
        <div class="Label_input">
         <label htmlFor="Date_de_naissance">Date de naissance:</label>
         <input type="date" name="" id=""  placeholder='jj/mm/aaaa'/>
        </div>
        <div class="Label_input">
         <label htmlFor="email">e-mail:</label>
         <input type="email" name="" id="" placeholder='Entrer votre @mail'/>
         </div>
        <div class="Label_input">
         <label htmlFor="Téléphone">Téléphone:</label>
         <input type="text"  placeholder='Entrer votre num Tel'/>
        </div> 
        <div class="Label_input">
         <label htmlFor="Photo">Photo:</label>
         <input type="file" name="" id="" />
        </div>
        <div class="Label_input">
         <label htmlFor="Spécialité"> Spécialité:</label>
         <input type="checkbox" name="" id="" /> Langues
         <input type="checkbox" name="" id="" /> Informatique 
        </div>
        <div class="Label_input">
         <label htmlFor="Informations">Informatios supplémentaires:
         <textarea name="" id="" cols="20" rows="4"></textarea></label>
        </div>
        <div class="Btn">
         <Button variant="success">Envoyer</Button>
         <Button variant="danger">Annuler</Button>
        </div>
        </Form></div>
  )
}

export default Inscription