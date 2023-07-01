import { Box, Grid, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import CategoryTiles from "./CategoryTiles";
import PanelCardSlider from "./PanelCardSlider";
import PopularProductsCard from "./PopularProductsCard";
import useProducts from "../../hooks/useProducts";

function HomePage() {
  const { data: products } = useProducts();

  return (
    <Grid
      templateAreas={{
        lg: `"panel tiles"
              "main main"`,
      }}
      gridTemplateRows="auto"
      gridTemplateColumns={"60% 40%"}
      gap="3"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem area={"panel"}>
        <PanelCardSlider />
      </GridItem>
      <GridItem area={"tiles"}>
        <CategoryTiles />
      </GridItem>
      <GridItem area={"main"}>
        <Text marginTop="10vh" marginBottom="5vh" fontSize="2xl">
          Популярные товары
        </Text>
        <SimpleGrid
          spacing={4}
          gridTemplateRows="auto"
          gridTemplateColumns="repeat(3, 1fr)"
          gap={10}
          rowGap={12}
        >
          {products?.slice(0, 12).map((p) => (
            <Box key={p.id}>
              <PopularProductsCard products={p} />
            </Box>
          ))}
        </SimpleGrid>
      </GridItem>
    </Grid>
  );
}

export default HomePage;
