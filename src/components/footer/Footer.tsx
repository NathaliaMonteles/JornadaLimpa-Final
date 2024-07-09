
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
        <div className="flex column justify-between bg-indigo-900 text-white">
          <div className="container flex flex-col items-start py-4 ml-10">
            <h2 className='text-xl font-bold'>Sobre Nós</h2>
            <p className='text-lg'>
            <a href="/sobre">Quem Somos</a>
            </p>
            <p className='text-lg'>
            <a href="/Contato">Contato</a>
            </p>
            <p className='text-lg'>
            <a href="/Entrega">Entregas</a>
            </p>
            <p className='text-lg'>
            <a href="/Compra">Como comprar</a>
            </p>
            <p className='text-lg'>
            <a href="/Trocas">Trocas e Devoluções</a>
            </p>
            <p className='text-lg'>
            <a href="/Seguranca">Segurança de dados</a>
            </p>
          </div>

          <div className="container flex flex-col items-center py-4">
            <h2 className='text-xl font-bold mb-4'>Meios de Pagamento</h2>
            <div className="flex justify-center gap-4">
              <img src="/src/assets/bradesco@2x.png" alt="" className='img1' width={48} height={30}/>
              <img src="/src/assets/elo@2x.png" alt="" className='img1' width={48} height={30}/>
              <img src="/src/assets/visa@2x.png" alt="" className='img1' width={48} height={30}/>
              <img src="/src/assets/mastercard@2x.png" alt="" className='img1' width={48} height={30}/>
              <img src="/src/assets/pix@2x.png" alt="" className='img1' width={48} height={30}/>
            </div>
          </div>

          <div className="container flex flex-col items-end py-4 mr-10">
            <h2 className='text-xl font-bold'>Endereço</h2>
            <p className='text-lg'>Rua Maria, 0000</p>
            <p className='text-lg'>Bela Vista - São Paulo, SP</p>
            <p className='text-lg'>(11)99999-9999</p>
          </div>
          </div>

        <div className="flex column justify-center bg-indigo-900 text-white">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold'>Um projeto realizado na Generation | Copyright©️: Jornada Limpa </p>
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