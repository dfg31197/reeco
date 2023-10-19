const data = [
  {
    id: 134,
    name: "Chicken Breast Fillets, Boneless matuu maMarinated 6 Ounce Raw, Invivid",
    brand: "Hormel Black Labelmany",
    image: "/avo.jpg",
    price: 60.67,
    quantity: 0,
    status: null,
    reason: null,
  },
  {
    id: 135,
    name: "Chicken Breast Fillets, Boneless matuu maMarinated 6 Ounce Raw, Invivid",
    brand: "Hormel Black Labelmany",
    image: "/avo.jpg",
    price: 60.67,
    quantity: 15,
    status: null,
    reason: null,
  },
  {
    id: 136,
    name: "Chicken Breast Fillets, Boneless matuu maMarinated 6 Ounce Raw, Invivid",
    brand: "Hormel Black Labelmany",
    image: "/avo.jpg",
    price: 60.67,
    quantity: 15,
    status: null,
    reason: null,
  },
  {
    id: 137,
    name: "Chicken Breast Fillets, Boneless matuu maMarinated 6 Ounce Raw, Invivid",
    brand: "Hormel Black Labelmany",
    image: "/avo.jpg",
    price: 60.67,
    quantity: 0,
    status: null,
    reason: null,
  },
  {
    id: 138,
    name: "Chicken Breast Fillets, Boneless matuu maMarinated 6 Ounce Raw, Invivid",
    brand: "Hormel Black Labelmany",
    image: "/avo.jpg",
    price: 60.67,
    quantity: 13,
    status: null,
    reason: null,
  },
];

export const getMockData = () => new Promise((resolve, rej) => {
        setTimeout(() => {
               resolve(data) 
        }, 1200)
})
