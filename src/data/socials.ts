import { type ElementType } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

export interface SocialLink {
  title: string
  link: string
  Icon: ElementType
}

export const socials: SocialLink[] = [
  {
    title: 'GitHub',
    link: 'https://github.com/jipeso',
    Icon: GitHubIcon,
  },
  {
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/joni-pesonen-876b9224b',
    Icon: LinkedInIcon,
  },
]
