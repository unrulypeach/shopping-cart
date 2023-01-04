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
import shinsWtnaAlb from './product-images/shins-wtna-album.webp';
import shinsWtnaCas from './product-images/shins-wtna-casette.webp';
import bohCtbAlb from './product-images/boh-ceasetobegin-album.webp';
import iawOendAlb from './product-images/iaw-ourendlessnumbereddays-album.webp';
import iawTsdAlb from './product-images/iaw-theshepardsdog-album.webp';
import tpsGuAlb from './product-images/tps-giveup-album.webp';
import tpsGuCas from './product-images/tps-giveup-casette.webp';

const ProductsData = [
  {
    id: uniqid(),
    name: 'SUBLIME - self-titled third album[25th anniversary edition]',
    artist: 'Sublime',
    pic: [sublimeAlb, sublimeCas],
    alt: ['back tattooed with the word sublime', 'brown casette with the case that has sublime album art'],
    info: '25th Anniversary special edition cassette of the eponymous third and final studio album by Long Beach, California band Sublime. Featuring numerous hit singles, including "What I Got," "Santeria," and "Wrong Way."',
    price: 29.99,
    date: new Date(1996, 6, 30),
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
    date: new Date(2022, 1, 25),
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
    date: new Date(1989, 5, 15),
    genre: 'Rock',
  },
  {
    id: uniqid(),
    name: 'Nevermind',
    artist: 'Nirvana',
    pic: [nirvNvmAlb, nirvNvmCas],
    alt: ['baby in pool looking at money on fishhook', 'back of nevermind casette in case'],
    info: 'Nevermind is the second studio album by the American rock band Nirvana, released on September 24, 1991, by DGC Records. It was Nirvana\'s first release on a major label and the first to feature drummer Dave Grohl.',
    price: 7.99,
    date: new Date(1991, 8, 24),
    genre: 'Rock',
  },
  {
    id: uniqid(),
    name: 'Depression Cherry',
    artist: 'Beach House',
    pic: [bhDcAlb, bhDcCas],
    alt: ['red cover with album title and artist name'],
    info: 'Depression Cherry is the fifth studio album by the American dream pop duo Beach House. It was co-produced by the group and Chris Coady, and was released on August 28, 2015, by Sub Pop in the US, Bella Union in Europe, Mistletone Records in Australia, Hostess Entertainment in Japan and Arts & Crafts in Mexico.',
    price: 12.99,
    date: new Date(2015, 7, 28),
    genre: 'Indie-pop',
  },
  {
    id: uniqid(),
    name: 'Wincing the Night Away',
    artist: 'The Shins',
    pic: [shinsWtnaAlb, shinsWtnaCas],
    alt: ['illustration of blobs with balck dots', 'casette with case'],
    info: 'Wincing the Night Away is the third studio album by the indie rock group The Shins. It was released by Sub Pop Records on January 23, 2007. It is the band\'s third album, and the last under their contract with Sub Pop.',
    price: 8.99,
    date: new Date(2007, 0, 3),
    genre: 'Indie Rock',
  },
  {
    id: uniqid(),
    name: 'Cease to Begin',
    artist: 'Band of Horses',
    pic: [bohCtbAlb],
    alt: ['crescent moon behind clouds at night over water with words band of horses'],
    info: 'Cease to Begin is the second album by Band of Horses, released on October 9, 2007. This album solidified the band\'s sound and was a critical and commercial success, peaking at number 35 on the US Billboard 200 chart. The singles "Is There a Ghost" and "No One\'s Gonna Love You" appear on the album.',
    price: 13.74,
    date: new Date(2007, 9, 9),
    genre: 'Indie Rock',
  },
  {
    id: uniqid(),
    name: 'Our Endless Numbered Days',
    artist: 'Iron and Wine',
    pic: [iawOendAlb],
    alt: ['illustration of man with beard laying on grass'],
    info: 'Our Endless Numbered Days is the second full-length album from Iron & Wine. Released on March 23, 2004 on Sub Pop, it was the first non-solo effort by Sam Beam under his Iron & Wine moniker. Limited edition copies of the vinyl LP came with a bonus 7" vinyl single.',
    price: 15.62,
    date: new Date(2004, 2, 3),
    genre: 'Indie Folk',
  },
  {
    id: uniqid(),
    name: 'The Shepard\'s Dog',
    artist: 'Iron and Wine',
    pic: [iawTsdAlb],
    alt: ['illustration of dog with title and artist name'],
    info: 'The Shepherd\'s Dog is the third full-length studio album by Iron & Wine, released on September 25, 2007. If bought at select retailers or if pre-ordered through Sub Pop, the album comes with a bonus disc featuring two unreleased tracks.',
    price: 12.99,
    date: new Date(2007, 8, 25),
    genre: 'Indie Folk',
  },
  {
    id: uniqid(),
    name: 'Give Up',
    artist: 'The Postal Service',
    pic: [tpsGuAlb, tpsGuCas],
    alt: ['picture of bedpost with artist and title', 'red casette and casette box with album picture'],
    info: 'Give Up is the only studio album by American electronic duo The Postal Service, released on February 18, 2003, by Sub Pop Records.',
    price: 12.99,
    date: new Date(2003, 1, 19),
    genre: 'Indie Pop',
  },
  /*  {
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
