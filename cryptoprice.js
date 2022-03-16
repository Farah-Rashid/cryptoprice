const ul = document.querySelector ('#price');
const form = document.querySelector('#form'); 
form.addEventListener('submit',async function (e) {
    e.preventDefault();
    let searchTerm = form.elements.query.value;
    const res  = await axios.get (`https://api.cryptonator.com/api/ticker/${ searchTerm }-usd`);
    const newData= res.data.ticker.price;
    const newLi= document.createElement('li');
    newLi.append( `Current value of ${searchTerm} is ${newData}.`);
    ul.append(newLi);
    
    });
    