import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/Header/NavBar";
import Panel from "./components/Panel/Panel";
import CategoryTiles from './components/Panel/CategoryTiles';

function App() {
  return (
    <Grid
      templateAreas={{
        lg: `"header header header"
                  "panel panel tiles"
                  "nav main main"
                  "footer footer footer"`,
      }}
      gridTemplateRows={"1fr 4fr 7fr 2fr"}
      gridTemplateColumns={"20% 40% 40%"}
      gap="3"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem area={"header"}>
        <NavBar/>
      </GridItem>
      <GridItem area={"panel"}>
        <Panel/>
      </GridItem>
      <GridItem area={"tiles"}>
        <CategoryTiles/>
      </GridItem>
      <GridItem pl="2" bg="pink.300" area={"nav"}>
        Nav
      </GridItem>
      <GridItem pl="2" bg="green.300" area={"main"}>
        Main
      </GridItem>
      <GridItem pl="2" bg="blue.300" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
