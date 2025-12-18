import React from 'react';
import {
  SiPython,
  SiFlask,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiMongodb,
  SiDocker,
  SiExpress,
  SiPostgresql,
  SiRedhatopenshift,
  SiGithub,
  SiNodedotjs,
  SiRedis,
  SiGit,
  SiHtml5,
  SiUbuntu,
  SiGraphql,
} from 'react-icons/si';

const ICON_MAP: Record<string, React.ElementType> = {
  python: SiPython,
  flask: SiFlask,
  javascript: SiJavascript,
  typescript: SiTypescript,
  react: SiReact,
  mongodb: SiMongodb,
  redis: SiRedis,
  docker: SiDocker,
  nodejs: SiNodedotjs,
  github: SiGithub,
  express: SiExpress,
  postgresql: SiPostgresql,
  openshift: SiRedhatopenshift,
  git: SiGit,
  html5: SiHtml5,
  ubuntu: SiUbuntu,
  graphql: SiGraphql,
};

export const getSkillIcon = (slug?: string) => {
  return slug ? ICON_MAP[slug] : undefined;
};

const BRAND_COLORS: Record<string, string> = {
  python: '#3776AB',
  flask: '#3BABC3',
  javascript: '#F7DF1E',
  typescript: '#3178C6',
  react: '#61DAFB',
  nodejs: '#5FA04E',
  mongodb: '#47A248',
  redis: '#FF4438',
  docker: '#2496ED',
  openshift: '#EE0000',
  express: '#000000',
  postgresql: '#4169E1',
  github: '#181717',
  git: '#F05032',
  html5: '#E34F26',
  ubuntu: '#E95420',
  graphql: '#E10098',
};

export const getBrandColor = (slug?: string) => {
  return slug ? BRAND_COLORS[slug] : undefined;
};
