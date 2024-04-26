import Avatar from '../img/me.jpg'

import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer'

import SocialNetworks from './SocialNetworks'

const Sidebar = () => {
  return (
    <aside id='sidebar'>
      <img src={Avatar} alt="Imagem de perfil Wilian" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworks/>
      <InformationContainer/>
      <a className='btn' href="">Download do currículo</a>
    </aside>
  )
}

export default Sidebar