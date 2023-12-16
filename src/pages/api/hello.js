export default function handler(req, res) {
  const marvelCharacters = {
    personajes_marvel: [
      {
        nombre: 'Iron Man',
        alias: 'Tony Stark',
        poderes: ['Genius-level intellect', 'Powered armor suit'],
        afiliacion: 'Avengers',
        imagen: 'url_de_imagen_iron_man.jpg',
      },
      {
        nombre: 'Thor',
        alias: 'Thor Odinson',
        poderes: ['Superhuman strength', 'Control of lightning and storms'],
        afiliacion: 'Avengers',
        imagen: 'url_de_imagen_thor.jpg',
      },
      {
        nombre: 'Black Widow',
        alias: 'Natasha Romanoff',
        poderes: ['Master martial artist', 'Espionage expert'],
        afiliacion: 'Avengers',
        imagen: 'url_de_imagen_black_widow.jpg',
      },
      {
        nombre: 'Hulk',
        alias: 'Bruce Banner',
        poderes: ['Superhuman strength', 'Regenerative healing factor'],
        afiliacion: 'Avengers',
        imagen: 'url_de_imagen_hulk.jpg',
      },
      {
        nombre: 'Spider-Man',
        alias: 'Peter Parker',
        poderes: ['Wall-crawling', 'Spider sense', 'Superhuman strength'],
        afiliacion: 'Avengers',
        imagen: 'url_de_imagen_spider_man.jpg',
      },
    ],
  };
  
  res.status(200).json(marvelCharacters);
}
