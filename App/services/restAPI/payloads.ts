interface BaseError {
  non_field_errors?: Array<string>;
}

// Auth
export interface RegisterPayload {
  username: string;
  email: string;
  password1: string;
  password2: string;
}

// Recipes

interface RecipeBasePayload {
  id: number;
  name: string;
  description: string;
}

export interface RecipeListPayload extends RecipeBasePayload {
  hero_image_source: string;
}

interface RecipeImage {
  id: number;
  is_hero: boolean;
  image_source: string;
}

export interface RecipeDetailsPayload extends RecipeBasePayload {
  images: Array<RecipeImage>;
  created_at: string;
  updated_at: string;
}

export interface CreateRecipeErrors extends BaseError {
  name?: Array<string>;
}
