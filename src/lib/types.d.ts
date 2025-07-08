export interface Product {
  id: number;
  name: string;
  model_no: string;
  category: string;
  release_at: string;
  description: string;
};

export interface Media {
  id: number;
  url: string;
  caption: string;
  is_main: boolean;          
  type: string;
};

export interface ProductWithMedia extends Product {
  url:  string,
  caption:  string,
  owner_type: string,
}