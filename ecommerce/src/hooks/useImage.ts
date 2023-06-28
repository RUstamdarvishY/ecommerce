import productImages from "../components/entities/ProductImages"

interface ProductImage{
    id: number
    title: string
    src: string[]
}  

const useImage = (productId: number): ProductImage | undefined => {
    const image = productImages.find(image => image.id === productId)

  return image
};

export default useImage;
