const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 250,
    img: "./images/item-1.jpeg",
    desc: `Right from oven just handmade for you only. `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 500,
    img: "./images/item-2.jpeg",
    desc: `Perfect lunch for two `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 180,
    img: "./images/item-3.jpeg",
    desc: `Finish it if you can`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 150,
    img: "./images/item-4.jpeg",
    desc: `Fill your morning cravings`,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 200,
    img: "./images/item-5.jpeg",
    desc: `For eggmania lovers `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 250,
    img: "./images/item-6.jpeg",
    desc: `Blended oreoness with love`,
  },
  {
    id: 7,
    title: "Cheese overflow",
    category: "breakfast",
    price: 150,
    img: "./images/item-7.jpeg",
    desc: `For Morning cheese lovers `,
  },
  {
    id: 8,
    title: "Indian classic",
    category: "lunch",
    price: 600,
    img: "./images/item-8.jpeg",
    desc: `For every Indian Cuisine maniacs for two`,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 300,
    img: "./images/item-9.jpeg",
    desc: `Two tower shakes for couples`,
  },
  {
    id: 10,
    title: "Perfect Dinner",
    category: "dinner",
    price: 700,
    img: "./images/item-10.jpeg",
    desc: `The only perfection you can find`,
  },
];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">Rs.${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
