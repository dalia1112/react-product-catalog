export interface Product{
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    }  }
export interface productState{
  products:Product[];
  item:Product | null
  status:"idle" | "loading" | "succeeded" | "failed";
  error:string|null

}