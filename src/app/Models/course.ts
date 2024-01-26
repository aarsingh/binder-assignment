/*
export class Course{
    id: number; 
    title: string; 
    price: number; 
    desc: string; 
    image: string; 
    rating: number; 
    duration: number; 
    author: string;
}
*/

export class Course{
    id: number; 
    courseName: string; 
    quantity: number;
    author: string; 
    actualPrice: number; 
    discountPercentage: number; 
    image: string; 
    tags: any; 
    isInWishlist: boolean;
}