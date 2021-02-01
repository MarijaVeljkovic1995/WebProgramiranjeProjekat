import { igraci } from './igraci.js';
import { mec } from './mec.js';

let igA = new igraci('Novak Djokovic', 2000, 'https://www.espreso.rs/data/images/2020/02/09/13/716391_novak-djokovic01-epa-lukas-coch_ls.jpg', 34);

let igB = new igraci('Raael Nadal', 1998, 'https://www.tennisworldusa.org/imgb/95337/-i-noticed-that-rafael-nadal-only-trained-on-clay-says-top-5.jpg', 33);

let mec1 = new mec('Sidnej', '19:58:56    25.01.2021.', igA, igB, '1 - 0, 6 - 4, -', false);

mec1.crtaj(document.body);

let mec2 = new mec('Roma', ' 10:08:56 13.03.2020.', igA, igB, '1 - 0, 6 - 4, -', false);

mec2.crtaj(document.body);