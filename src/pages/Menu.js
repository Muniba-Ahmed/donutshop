import React from "react";
import { itemDetailsList } from "../helpers/ItemDetailsList";

import GridItem from "../components/GridItem";

function Menu() {
  return (
    <div>
      <GridItem itemDetailsList={itemDetailsList} />
    </div>
  );
}

export default Menu;
