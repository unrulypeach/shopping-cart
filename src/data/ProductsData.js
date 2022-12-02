import uniqid from 'uniqid';
import sublimeAlb from './product-images/Sublime-self-titled-third-album-cover-820_large.jpg';
import sublimeCas from './product-images/Sublime-casette.webp';
import clownsAlb from './product-images/clownsounds-album.webp';
import clownsCas from './product-images/clownsounds-casette.webp';
import nirvBleachAlb from './product-images/nirvana-bleach-album.jpg';
import nirvBleachCas from './product-images/nirvana-bleach-casette.webp';
import nirvNvmAlb from './product-images/nirvana-nevermind-album.jpg';
import nirvNvmCas from './product-images/nirvana-nevermind-casette.webp';
import bhDcAlb from './product-images/beachhouse-dc-album.webp';
import bhDcCas from './product-images/beachhouse-dc-casette.jpg';

const ProductsData = [
  {
    id: uniqid(),
    name: 'SUBLIME - self-titled third album[25th anniversary edition]',
    artist: 'Sublime',
    pic: [sublimeAlb, sublimeCas],
    alt: ['back tattooed with the word sublime', 'brown casette with the case that has sublime album art'],
    info: '25th Anniversary special edition cassette of the eponymous third and final studio album by Long Beach, California band Sublime. Featuring numerous hit singles, including "What I Got," "Santeria," and "Wrong Way."',
    price: 29.99,
    genre: 'ska',
  },
  {
    id: uniqid(),
    name: 'Born Under a Bad Sigh',
    artist: 'Clown Sounds',
    pic: [clownsAlb, clownsCas],
    alt: ['drawn album art with black cat, ace of spades and friday 13', 'clownsounds green casette over box'],
    info: 'Production sounds big and loud, songwriting is catchy as always. This is killing! It\'s got all of your vocal melody hooks, but adds more guitar riffy stuff than usual which gives it a good extra dimension. Can\'t Balance and Started Too Late are both like a whole new kind of approach for you guys. The vocal melodies are so strong throughout, really no wasted space here at all. Stellar!" - Blag Dahlia',
    price: 12.00,
    genre: 'Electronic',
  },
  {
    id: uniqid(),
    name: 'Bleach',
    artist: 'Nirvana',
    pic: [nirvBleachAlb, nirvBleachCas],
    alt: ['highcontrast img of band members jamming', 'black casette next to case'],
    info: 'Bleach is the debut studio album by American rock band Nirvana, released on June 15, 1989, by Sub Pop. After the release of their debut single "Love Buzz" on Sub Pop in November 1988, Nirvana rehearsed for two to three weeks in preparation for recording a full-length album. ',
    price: 16.99,
    genre: 'Rock',
  },
  {
    id: uniqid(),
    name: 'Bleach',
    artist: 'Nevermind',
    pic: [nirvNvmAlb, nirvNvmCas],
    alt: ['baby in pool looking at money on fishhook', 'back of nevermind casette in case'],
    info: 'Nevermind is the second studio album by the American rock band Nirvana, released on September 24, 1991, by DGC Records. It was Nirvana\'s first release on a major label and the first to feature drummer Dave Grohl.',
    price: 17.99,
    genre: 'Rock',
  },
  {
    id: uniqid(),
    name: 'Depression Cherry',
    artist: 'Beach House',
    pic: [bhDcAlb, bhDcCas],
    alt: [],
    info: '',
    price: 12.99,
    genre: 'Indie-pop',
  },
  /* {
    id: uniqid(),
    name:
    artist:
    pic: [],
    alt: [],
    info:
    price:
    genre:
  }, */
];

export default ProductsData;
