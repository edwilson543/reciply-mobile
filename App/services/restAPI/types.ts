/** Client error payload interfaces. */

interface BaseError {
  non_field_errors?: Array<string>;
}

export interface CreateRecipeErrors extends BaseError {
  name?: Array<string>;
}
