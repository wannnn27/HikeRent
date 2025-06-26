const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Mock data
let items = [
    {
      "id": 1,
      "img": "/src/assets/alat/Tenda.png",
      "name": "Tenda Dome 2 Orang",
      "price": 40000,
      "availability": true,
      "aosDelay": 100
    },
    {
      "id": 2,
      "img": "/src/assets/alat/Careel.png",
      "name": "Carrier 50L",
      "price": 45000,
      "availability": true,
      "aosDelay": 200
    },
    {
      "id": 3,
      "img": "/src/assets/alat/sleeping bag.png",
      "name": "Sleeping Bag",
      "price": 30000,
      "availability": false,
      "aosDelay": 300
    },
    {
      "id": 4,
      "img": "/src/assets/alat/Matras.png",
      "name": "Matras",
      "price": 20000,
      "availability": true,
      "aosDelay": 400
    },
    {
      "id": 5,
      "img": "/src/assets/alat/sepatu.png",
      "name": "Sepatu",
      "price": 25000,
      "availability": true,
      "aosDelay": 400
    },
    {
      "id": 6,
      "img": "/src/assets/alat/Kompor.png",
      "name": "Kompor Portable",
      "price": 15000,
      "availability": true,
      "aosDelay": 500
    },
    {
      "id": 7,
      "img": "/src/assets/alat/headlamp.png",
      "name": "Headlamp",
      "price": 10000,
      "availability": true,
      "aosDelay": 600
    },
    {
      "id": 8,
      "img": "/src/assets/alat/backpack.png",
      "name": "Backpack 30L",
      "price": 35000,
      "availability": true,
      "aosDelay": 700
    },
    {
      "id": 9,
      "img": "/src/assets/alat/topi.png",
      "name": "Backpack 30L",
      "price": 10000,
      "availability": true,
      "aosDelay": 700
    },
    {
      "id": 10,
      "img": "/src/assets/alat/kacamata1.png",
      "name": "Backpack 30L",
      "price": 5000,
      "availability": true,
      "aosDelay": 700
    },
    {
      "id": 11,
      "img": "/src/assets/alat/kacamata2.png",
      "name": "Backpack 30L",
      "price": 5000,
      "availability": true,
      "aosDelay": 700
    },
    {
      "id": 12,
      "img": "/src/assets/alat/trekking pole.png",
      "name": "Backpack 30L",
      "price": 20000,
      "availability": true,
      "aosDelay": 700
    },
    {
      "id": 13,
      "img": "/src/assets/alat/jaket1.png",
      "name": "Backpack 30L",
      "price": 30000,
      "availability": true,
      "aosDelay": 700
    },
    {
      "id": 14,
      "img": "/src/assets/alat/jaket2.png",
      "name": "Backpack 30L",
      "price": 30000,
      "availability": true,
      "aosDelay": 700
    },
    {
      "id": 15,
      "img": "/src/assets/alat/jaket3.png",
      "name": "Backpack 30L",
      "price": 30000,
      "availability": true,
      "aosDelay": 700
    },
    {
      "id": 16,
      "img": "/src/assets/paket/paket.png",
      "name": "Paket 1",
      "price": 150000,
      "availability": true,
      "aosDelay": 800
    },
    {
      "id": 17,
      "img": "/src/assets/paket/paket.png",
      "name": "Paket 2",
      "price": 200000,
      "availability": true,
      "aosDelay": 900
    },
    {
      "id": 18,
      "img": "/src/assets/paket/paket.png",
      "name": "Paket 3",
      "price": 250000,
      "availability": false,
      "aosDelay": 1000
    },
    {
      "id": 19,
      "img": "/src/assets/paket/paket.png",
      "name": "Paket 4",
      "price": 270000,
      "availability": true,
      "aosDelay": 1100
    }
  ]
  
// Routes
// GET all items
app.get('/items', (req, res) => {
  res.json(items);
});

// GET single item by ID
app.get('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find((i) => i.id === id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

// POST create new item
app.post('/items', (req, res) => {
  const newItem = { id: items.length + 1, ...req.body };
  items.push(newItem);
  res.status(201).json(newItem);
});

// PUT update item by ID
app.put('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = items.findIndex((i) => i.id === id);
  if (index !== -1) {
    items[index] = { id, ...req.body };
    res.json(items[index]);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

// DELETE item by ID
app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = items.findIndex((i) => i.id === id);
  if (index !== -1) {
    const deletedItem = items.splice(index, 1);
    res.json(deletedItem);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
