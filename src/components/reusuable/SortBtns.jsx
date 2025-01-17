import { Dropdown, DropdownItem } from "flowbite-react";
import PropTypes from 'prop-types';

const SortBtns = ({ setSort }) => {
  return (<Dropdown label="Sort By Age" dismissOnClick={false}>
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