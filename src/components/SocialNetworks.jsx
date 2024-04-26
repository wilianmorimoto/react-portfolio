import '../styles/components/socialnetworks.sass'

import { FaInstagram, FaGithub } from 'react-icons/fa'

const socialNetworks = [
  {
    icon: <FaInstagram />,
    name: 'instagram',
  },
  {
    icon: <FaGithub />,
    name: 'github',
  },
];

const SocialNetworks = () => {
  return (
    <section id='social-networks'>
        {socialNetworks.map(({ icon, name }) => (
          <a href={`https://${name}.com/wilianmorimoto`} key={name} id={name} className='social-btn' target='_blank'>
            {icon}
          </a>
        ))}
    </section>
  )
}

export default SocialNetworks