import { Dropdown, DropdownItem } from "flowbite-react";
import PropTypes from 'prop-types';

const theme = {
  "arrowIcon": "ml-2 h-4 w-4 hover:text-lite z-30",
  "floating": {
    "target": "w-fit neomorphism-outset dark:neomorphism-outset-sm-dark text-primary hover:text-lite bg-expand",
  }
}

const SortBtns = ({ setSort }) => {
  return (<Dropdown label={<span className="relative z-20">Sort By Age</span>} dismissOnClick={false} theme={theme}>
    <DropdownItem onClick={() => {
      setSort('asc')
    }}>
      <span className="text-lg font-semibold">Ascending</span>
    </DropdownItem>

    <DropdownItem onClick={() => {
      setSort('desc')
    }}>
      <span className="text-lg font-semibold">Descending</span>
    </DropdownItem>
  </Dropdown>);
};

SortBtns.propTypes = {
  setSort: PropTypes.func
};

export default SortBtns;