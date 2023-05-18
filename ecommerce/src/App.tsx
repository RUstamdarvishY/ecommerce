import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/Header/NavBar";
import Panel from "./components/MainPage/Panel/Panel";
import CategoryTiles from "./components/MainPage/CategoryTiles";
import PopularProductsList from "./components/MainPage/PopularProductsList";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Grid
      templateAreas={{
        lg: `"header header"
                  "panel tiles"
                  "main main"
                  "footer footer"`,
      }}
      // gridTemplateRows={"1fr 4fr 7fr 2fr"}
      gridTemplateRows="auto"
      gridTemplateColumns={"60% 40%"}
      gap="3"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem area={"header"}>
        <NavBar />
      </GridItem>
      <GridItem area={"panel"}>
        <Panel />
      </GridItem>
      <GridItem area={"tiles"}>
        <CategoryTiles />
      </GridItem>
      <GridItem area={"main"}>
        <PopularProductsList />
      </GridItem>
      <GridItem area={"footer"}>
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default App;
