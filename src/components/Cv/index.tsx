import {
  Box,
  CssBaseline,
  GlobalStyles,
  Link,
  ThemeProvider,
  Typography,
} from '@mui/material'
import { cvTheme } from '../../theme'
import { education, work } from '../../data/experience'
import { profile, spokenLanguages } from '../../data/profile'
import { projects } from '../../data/projects'
import { skillCategories } from '../../data/skills'
import { socials } from '../../data/socials'
import CvSection from './CvSection'
import CvEntry from './CvEntry'

const displayUrl = (url: string) =>
  url.replace(/^https:\/\/(www\.)?/, '').replace(/\/$/, '')

const contacts = [
  { label: profile.email, href: `mailto:${profile.email}` },
  ...socials.map(({ link }) => ({ label: displayUrl(link), href: link })),
  { label: displayUrl(profile.url), href: profile.url },
]

const skillRows = [
  ...skillCategories.map(([category, skills]) => [category, skills.join(', ')]),
  ['Spoken languages', spokenLanguages.join(', ')],
]

const pageStyles = {
  '@page': { size: 'A4', margin: '14mm 16mm' },
  '@media screen': { body: { padding: '32px 16px' } },
}

const Cv = () => (
  <ThemeProvider theme={cvTheme}>
    <CssBaseline />
    <GlobalStyles styles={pageStyles} />
    <Box component='main' sx={{ maxWidth: '178mm', mx: 'auto' }}>
      <Box
        component='header'
        sx={{
          pb: 1.5,
          textAlign: 'center',
          borderBottom: 1,
          borderColor: 'divider',
        }}
      >
        <Typography variant='h1'>{profile.name}</Typography>
        <Typography color='textSecondary'>{profile.role}</Typography>
        <Typography variant='body2' color='textSecondary' sx={{ mt: 0.5 }}>
          {profile.location}
          {contacts.map(({ label, href }) => (
            <span key={href}>
              {' · '}
              <Link href={href} color='inherit' underline='none'>
                {label}
              </Link>
            </span>
          ))}
        </Typography>
      </Box>

      <CvSection title='Experience'>
        {work.map(entry => (
          <CvEntry
            key={entry.title}
            title={`${entry.title}, ${entry.organization}`}
            date={entry.period}
            bullets={entry.highlights}
          />
        ))}
      </CvSection>

      <CvSection title='Projects'>
        {projects
          .filter(project => project.onCv)
          .map(project => {
            const link = project.production ?? project.repository
            return (
              <CvEntry
                key={project.title}
                title={project.title}
                date={String(project.year)}
                details={
                  <>
                    {project.skills.join(', ')}
                    {link && (
                      <>
                        {' · '}
                        <Link href={link} color='inherit' underline='none'>
                          {displayUrl(link)}
                        </Link>
                      </>
                    )}
                  </>
                }
                summary={project.description}
                bullets={project.highlights}
              />
            )
          })}
      </CvSection>

      <CvSection title='Education'>
        {education.map(entry => (
          <CvEntry
            key={entry.title}
            title={`${entry.title}, ${entry.organization}`}
            date={entry.period}
            details={entry.highlights?.join(' · ')}
          />
        ))}
      </CvSection>

      <CvSection title='Skills'>
        {skillRows.map(([label, value]) => (
          <Typography key={label}>
            <Box component='span' sx={{ fontWeight: 600 }}>
              {label}:
            </Box>{' '}
            {value}
          </Typography>
        ))}
      </CvSection>
    </Box>
  </ThemeProvider>
)

export default Cv
