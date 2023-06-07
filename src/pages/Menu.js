import React from "react";
import { itemList2 } from "../helpers/ItemList";

import GridItem from "../components/GridItem";

function Menu() {
  return (
    <div>
      <GridItem itemList2={itemList2} />
    </div>
  );
}

export default Menu;
