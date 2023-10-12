import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React, { FC } from "react";

type searchCategoryProps = {
  searchCategory: string
  handleChange: any
};
const Category: FC<searchCategoryProps> = ({searchCategory,handleChange}) => {

  
  return (
    <Box sx={{ minWidth: 200 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Категория продукт</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={searchCategory}
              label="Категория продукт"
              onChange={handleChange}
              >
              <MenuItem value={"men's clothing"}>men's clothing</MenuItem>
              <MenuItem value={"jewelery"}>jewelery</MenuItem>
              <MenuItem value={"women's clothing"}>women's clothing</MenuItem>
              <MenuItem value={"electronics"}>electronics</MenuItem>
            </Select>
          </FormControl>
          </Box>
  )
}

export default Category