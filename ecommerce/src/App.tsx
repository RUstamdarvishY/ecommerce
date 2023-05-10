import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/Header/NavBar";
import Panel from "./components/Panel/Panel";

function App() {
  return (
    <Grid
      templateAreas={{
        lg: `"header header"
                  "panel panel"
                  "nav main"
                  "footer footer"`,
      }}
      gridTemplateRows={"1fr 3fr 5fr 1fr"}
      gridTemplateColumns={"25% 75%"}
      gap="3"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem pl="2" area={"header"}>
        <NavBar/>
      </GridItem>
      <GridItem pl="2" area={"panel"}>
        <Panel/>
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
