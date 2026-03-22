const fs = require('fs');
const txt = fs.readFileSync('constants.ts', 'utf8');
const header = `import { Zap, FlaskConical, Dna, Calculator, Monitor } from 'lucide-react';
import { SubjectData, SubjectType, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/home' },
  { label: 'Subjects', path: '/subjects' },
  { label: 'AI Tutor', path: '/tutor' },
  { label: 'Brainstorm', path: '/brainstorm' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const SUBJECTS: SubjectData[] = [
  {
    id: 'physics',
    name: SubjectType.PHYSICS,
    icon: Zap,
    color: 'blue',
`;
const fixed = header + txt.substring(txt.indexOf('    hex:'));
fs.writeFileSync('constants.ts', fixed, 'utf8');
console.log('Fixed constants.ts!');
