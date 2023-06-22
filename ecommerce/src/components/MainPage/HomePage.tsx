import { Grid, GridItem } from "@chakra-ui/react";
import CategoryTiles from "./CategoryTiles";
import PanelCardSlider from "./PanelCardSlider";
import PopularProductsList from "./PopularProductsList";

function HomePage() {
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
        <PopularProductsList />
      </GridItem>
    </Grid>
  );
}

export default HomePage;
