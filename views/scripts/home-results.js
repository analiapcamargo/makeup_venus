
url = "https://makeup-api.herokuapp.com/api/v1/products.json";

const fetchProducts = async () => {
   const res = await fetch(url);
   const data = await res.json();

  let products=[778,529,555,851,745,778,529,555,851,745,778,529,555,851,745,778];
  let products2=[444,60,123,191,77,444,60,123,191,77,444,60,123,191,77,444];
  
  for (i = 1; i <= 16; i++) {
    //let id2 = Math.floor(Math.random() * 1000);
    id=products[i-1];
    id2=products2[i-1];

    console.log(data[id]?.image_link,data[id]?.name,data[id]?.brand,data[id]?.price);
    if (data[id2]?.image_link &&data[id2]?.name &&data[id2]?.brand && data[id2]?.price != null) 
    {
      document.getElementById("prod-img" + i).src = data[id].image_link;
      document.getElementById("prod-name" + i).innerHTML = data[id].name;
      const capitalized =data[id].brand.charAt(0).toUpperCase() + data[id].brand.slice(1);
      document.getElementById("prod-brand" + i).innerHTML = capitalized;
      document.getElementById("prod-price" + i).innerHTML = `$ ${data[id].price}`;
      console.log(data[id].id);

      document.getElementById("prod-img" + (i+16)).src = data[id2].image_link;
      document.getElementById("prod-name" + (i+16)).innerHTML = data[id2].name;
      const capitalized2 =data[id2].brand.charAt(0).toUpperCase() + data[id2].brand.slice(1);
      document.getElementById("prod-brand" + (i+16)).innerHTML = capitalized2;
      document.getElementById("prod-price" + (i+16)).innerHTML = `$ ${data[id2].price}`;
      console.log(data[id2].id);

    } else {
      i--;
    }


  }
};

fetchProducts();
