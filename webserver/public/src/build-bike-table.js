(async ()=>{
  const bike = await getAllBike();
  console.log(bike);
  if (bike.length) {
    const div = document.getElementById('bike');
    const loadingDiv = div.childNodes[1];

    const tr = document.createElement('tr');
    div.replaceChild(tr, loadingDiv); // <- order is important here!
    bike.map((bike) => {
      // building blocks
      const th = document.createElement('th');
      th.className = 'bike-item';
      const block = document.createElement('div');
      block.className = 'bike-item-block';

      const checkboxSpan = document.createElement('span');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkboxSpan.className = 'bike-checkbox';
      checkboxSpan.appendChild(checkbox);
  
      const nameSpan = document.createElement('span');
      nameSpan.className = 'bike-name';
      nameSpan.innerText = bike.bike_name;
  
      const descriptionSpan = document.createElement('span');
      descriptionSpan.className = 'bike-description';
      descriptionSpan.innerText = bike.description;
  
      const rentPriceSpan = document.createElement('span');
      rentPriceSpan.className = 'rent_price';
      rentPriceSpan.innerText = bike.rent_price;

     

 
  
        // add list item
      block.appendChild(checkboxSpan);
      block.appendChild(nameSpan);
      block.appendChild(descriptionSpan);
      block.appendChild(rentPriceSpan);
  
      th.appendChild(block);
      tr.appendChild(th);
      });
    }
  })();



  


