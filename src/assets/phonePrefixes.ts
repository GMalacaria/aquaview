// src/data/phonePrefixes.ts

export interface PhonePrefix {
  src: string;
  prefix: string;
  country: string;
  sigla: string;
}

export const PHONE_PREFIXES: PhonePrefix[] = [
  {
    src: '//upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Flag_of_Afghanistan_%282013%E2%80%932021%29.svg/20px-Flag_of_Afghanistan_%282013%E2%80%932021%29.svg.png',
    prefix: '+93',
    country: 'Afghanistan',
    sigla: 'AFG',
  },
];
