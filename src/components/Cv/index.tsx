import {
  Box,
  CssBaseline,
  GlobalStyles,
  Link,
  ThemeProvider,
  Typography,
} from '@mui/material'
import { cvTheme } from '../../theme'
import { type CvContent } from '../../data/cvContent'
import { profile } from '../../data/profile'
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

const pageStyles = {
  '@page': { size: 'A4', margin: '14mm 16mm' },
  '@media screen': { body: { padding: '32px 16px' } },
}

const Cv = ({ cv }: { cv: CvContent }) => (
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
        <Typography color='textSecondary'>{cv.role}</Typography>
        <Typography variant='body2' color='textSecondary' sx={{ mt: 0.5 }}>
          {cv.location}
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

      <CvSection title={cv.headings.experience}>
        {cv.work.map(entry => (
          <CvEntry
            key={entry.title}
            title={`${entry.title}, ${entry.organization}`}
            date={entry.period}
            bullets={entry.highlights}
          />
        ))}
      </CvSection>

      <CvSection title={cv.headings.projects}>
        {cv.projects.map(project => {
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

      <CvSection title={cv.headings.education}>
        {cv.education.map(entry => (
          <CvEntry
            key={entry.title}
            title={`${entry.title}, ${entry.organization}`}
            date={entry.period}
            details={entry.highlights?.join(' · ')}
          />
        ))}
      </CvSection>

      <CvSection title={cv.headings.skills}>
        {cv.skillRows.map(([label, value]) => (
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
