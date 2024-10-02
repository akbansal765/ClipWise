////// Implementing toggle class on first component buttons //////////
const buttons = document.querySelectorAll('.first_box_btn');

buttons.forEach(btn => {
  btn.addEventListener('mouseover', () => {
    buttons.forEach(btn => btn.classList.remove('first_box_btn_active'));
    btn.classList.add('first_box_btn_active');
  });

  btn.addEventListener('mouseout', () => {
    btn.classList.remove('first_box_btn_active');
  });
});


////////////////////////// Implementing scroll behaviour ///////////////
document.querySelector(".scroll_btn").addEventListener("click", function() {
    document.querySelector(".second_component").scrollIntoView({ behavior: "smooth" });
  });

//////////////////////////  Displaying Cards ////////////////////////////////
const cardContainer = document.querySelector('.cards_box');

const cardArray = [
  {
    image: 'card_image.png',
    title: 'CRYSTAL AGATE PHONE GRIP',
    price: '18.99'
  },
  {
    image: 'card_image.png',
    title: 'CRYSTAL AGATE PHONE GRIP',
    price: '18.99'
  },
  {
    image: 'card_image.png',
    title: 'CRYSTAL AGATE PHONE GRIP',
    price: '18.99'
  },
  {
    image: 'card_image.png',
    title: 'CRYSTAL AGATE PHONE GRIP',
    price: '18.99'
  },
  {
    image: 'card_image.png',
    title: 'CRYSTAL AGATE PHONE GRIP',
    price: '18.99'
  },
  {
    image: 'card_image.png',
    title: 'CRYSTAL AGATE PHONE GRIP',
    price: '18.99'
  },
  {
    image: 'card_image.png',
    title: 'CRYSTAL AGATE PHONE GRIP',
    price: '18.99'
  },
  {
    image: 'card_image.png',
    title: 'CRYSTAL AGATE PHONE GRIP',
    price: '18.99'
  },
];

cardArray.forEach(obj => {
   const card  = `
                <div class="card_content flex-align-center">
                    <div class="card_img_box flex-align-justify-center">
                      <img src=${obj.image} alt="img">
                    </div>
                    <p class="card_title">${obj.title}</p>
                    <p class="card_price">${obj.price}$</p>
                    <button class="card_button">BUY NOW</button>
                </div>
                `;
    cardContainer.insertAdjacentHTML('beforeend', card);    
});

