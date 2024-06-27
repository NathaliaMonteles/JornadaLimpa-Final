import React, { useState } from 'react';
import { Mailbox, LinktreeLogo, LinkedinLogo, GithubLogo } from '@phosphor-icons/react'
import './Contato.css';


const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telefone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <>
        <div className='card-img'>
            <h1 className='titulo font-serif font-bold gradient'>Contato</h1>
            <p className='texto font-serif font-bold'>Nos mande uma mensagem pelo formulário abaixo que te responderemos o mais rápido possível.</p>
                <div className="contact-form-container">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <label>
                    Nome
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    </label>
                    <label>
                    Email
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    </label>
                    <label>
                    Telefone
                    <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} />
                    </label>
                    <label>
                    Assunto
                    <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
                    </label>
                    <button type="submit">Enviar</button>
                </form>
                <div className="contact-links">
                    <button className="contact-button email shadow-inner">
                    <Mailbox size={32} />Email</button>
                    <button className="contact-button whatsapp shadow-inner">
                    <LinktreeLogo size={32} />Linktree</button>
                    <button className="contact-button linkedin shadow-inner">
                    <LinkedinLogo size={32} />LinkedIn</button>
                    <button className="contact-button github shadow-inner">
                    <GithubLogo size={32} />GitHub</button>
                </div>
            </div>
        </div>

    </>

  );
};


export default ContactForm;

