export const products = [
    {
        name: "Pizza Provinciale",
        price: 8.99,
        dimension:"33cm",
        img:"./assets/img1.png",
        details: "Tomato sauce, Corn, Bacon, Pfefferoni, Olives",
        available: true,
    },
    {
        name: "Pizza Napoletana",
        price: 9.99,
        dimension:"33cm",
        img:"./assets/img2.png",
        details: "Tomato sauce, Mozzarella, Prosciutto Crudo,",
        available: true,
    },
    {
        name: "Pizza Quattro formaggi",
        price: 10.99,
        dimension:"33cm",
        img:"./assets/img3.png",
        details: "Tomato sauce, Mozzarella, Gorgonzola, Parmigiano Reggiano, and Goat cheese.",
        available: true,

    },
    {
        name: "Pizza Vesuvio",
        price: 8.99,
        dimension:"33cm",
        img:"./assets/img4.png",
        details: "Tomato sauce, Corn, Bacon, Pfefferoni, Olives",
        available: false,
    },
    {
        name: "Pizza Margherita",
        price: 6.99,
        dimension:"33cm",
        img:"./assets/img5.png",
        details: "Tomato sauce, Corn, Bacon, Pfefferoni, Olives",
        available: true,
    },
    {
        name: "Pizza Capricciosa",
        price: 6.99,
        dimension:"33cm",
        img:"./assets/img6.png",
        details: "Tomato sauce, Corn, Bacon, Pfefferoni, Olives",
        available: false,
    },
    {
        name: "Pizza Salami",
        price: 10.99,
        dimension:"33cm",
        img:"./assets/img7.png",
        details: "Tomato sauce, Corn, Bacon, Pfefferoni, Olives",
        available: false,
    },
    {
        name: "Pizza Vegetariana",
        price: 9.99,
        dimension:"33cm",
        img:"./assets/img8.png",
        details: "Tomato sauce, Corn, Bacon, Pfefferoni, Olives",
        available: true,
    },
    {
        name: "Pizza Calzone",
        price: 7.99,
        dimension:"33cm",
        img:"./assets/img9.png",
        details: "Tomato sauce, Corn, Bacon, Pfefferoni, Olives",
        available: true,
    },
]

export interface IProduct{
    
    name: string;
    price: number;
    dimension:string;
    img:string;
    details: string;
    available: boolean;

}  

