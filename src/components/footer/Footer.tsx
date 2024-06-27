import React from 'react'
import { GithubLogo, LinkedinLogo, Mailbox, LinktreeLogo } from '@phosphor-icons/react'


function Footer() {
    const githubLink = 'https://github.com/Jornada-Limpa';
    const linkedinLink = 'https://www.linkedin.com/in/Jornada-limpa-170435313';
    const linktreeLink = 'https://linktr.ee/jornadalimpa';

    const openEmailClient = () => {
        const emailAddress = 'jornadalimpa123@gmail.com';
        window.location.href = `mailto:${emailAddress}`;
      };


  return (
    <>
        <div className="flex justify-center bg-indigo-900 text-white">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold'>Jornada Limpa - um projeto realizado na Generation | Copyright©️: </p>
            <p className='text-lg'>Acesse nossas redes sociais</p>
            <div className='flex gap-2'>
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                    <GithubLogo size={48} weight='bold' />
                </a>
                <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                    <LinkedinLogo size={48} weight='bold' />
                </a>
                <button onClick={openEmailClient} style={{ border: 'none', background: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                    <Mailbox size={48} weight='bold' />
                        </button>
                <a href={linktreeLink} target="_blank" rel="noopener noreferrer">
                    <LinktreeLogo size={48} weight='bold' />
                </a>
            </div>
          </div>
        </div>
      </>
  )
}

export default Footer