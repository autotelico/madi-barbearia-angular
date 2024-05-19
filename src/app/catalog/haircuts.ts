import { HaircutOptionType } from './HaircutOptionType';
import { v4 as uuid } from 'uuid';

const haircutOptionList: HaircutOptionType[] = [
  {
    id: uuid(),
    name: 'Franja',
    image:
      'https://static.wixstatic.com/media/ada5da_235ac46b8f3d40548fd020ef780c2c19~mv2.jpg/v1/fill/w_595,h_840,al_c,lg_1,q_85,enc_auto/ada5da_235ac46b8f3d40548fd020ef780c2c19~mv2.jpg',
  },
  {
    id: uuid(),
    name: 'Fade Cut',
    image:
      'https://content.latest-hairstyles.com/wp-content/uploads/short-high-and-tight-skin-fade-haircut-on-black-gentlemen.jpg',
  },
  {
    id: uuid(),
    name: 'Mullet',
    image:
      'https://donalcides.com.br/wp-content/uploads/2021/07/pompadour-mullet.jpg',
  },
];

export { haircutOptionList };
