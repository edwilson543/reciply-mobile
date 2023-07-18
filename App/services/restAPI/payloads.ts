interface RecipeBase {
  id: number;
  name: string;
  description: string;
}

export interface RecipePreview extends RecipeBase {
  // TODO -> get rid o
  imageSource: string;
}

export interface RecipeListPreview extends RecipeBase {
  hero_image_source: string;
}
