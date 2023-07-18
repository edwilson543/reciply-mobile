// Recipes

interface RecipeBasePayload {
  id: number;
  name: string;
  description: string;
}

export interface RecipeListPayload extends RecipeBasePayload {
  hero_image_source: string;
}

export interface RecipeDetailsPayload extends RecipeBasePayload {
  created_at: string;
  updated_at: string;
}
