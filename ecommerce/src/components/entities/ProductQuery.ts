export default interface ProductQuery{
    categoryId?: number;
    priceRange?: number[];
    sortOrder?: string;
    searchText?: string;
}