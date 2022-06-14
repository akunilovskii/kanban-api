let cards = [
  {id: '1', name: 'First card', status: 'todo', priority: 1},
  {id: '2', name: 'Second card', status: 'in progress', priority: 2},
  {id: '3', name: 'Next', status: 'review', priority: 1},
];

function routes(app) {
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });
  app.get('/cards', (req, res) => {
    res.send(cards);
  });
  app.delete('/cards/:cardId', (req, res) => {
    const {cardId} = req.params;
    cards = cards.filter((el) => el.id !== cardId);
    res.status(200).send(cards);
  });

  app.post('/cards', (req, res) => {
    const card = req.body;
    cards.push(card);
    res.send('Card created');
  });
  app.patch('/cards/:cardId', (req, res) => {
    const card = req.body;
    const {cardId} = req.params;
    cards = cards.map((c) => (c.id == cardId ? {id: c.id, ...card} : c));
    res.send('Cards updated');
  });
}

module.exports = routes;
