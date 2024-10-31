const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());


app.get('/api/products', (req, res) => {
  const products = [
    { 
      id: 1, 
      name: 'samsum galaxi', 
      oldPrice: 37500, 
      price: 35000, 
      urlImg: 'data:image/jpeg;base64,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'
    },
    {
      id: 2, 
      name: 'Campera Keyboard programador',  
      oldPrice: 11500, 
      price: 11200, 
      urlImg: 'https://purodiseno.lat/wp-content/uploads/2023/04/CAMPERA-TECLADO-2-821x1024.jpg' 
    },
    { 
      id: 3, 
      
      name: 'juan anselmo',  
      oldPrice: 18500, 
      price: 18000, 
      urlImg: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQwqHX1fVP2DUn6mEw05ukydZ6KOgkf0w3N3ZEHHJnDUW7WtxSEzdOZ73YxCn-FBC5kYxGeF4wy9zakpXVDOXbjQouNAmyH1LTbzkyuK2t0u9We1eAqfkFFDw&usqp=CAE' 
    },
    { 
      id: 3, 
      name: 'Taza Código De Programacion',  
      oldPrice: 3500, 
      price: 2200, 
      urlImg: 'https://http2.mlstatic.com/D_NQ_NP_786656-MLA46832914211_072021-O.webp' 
    },
    
    
  ];

  res.json(products);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});