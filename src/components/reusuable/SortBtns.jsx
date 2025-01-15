import { Dropdown, DropdownItem } from "flowbite-react";
import PropTypes from 'prop-types';

const SortBtns = ({sort, setSort}) => {
    return (<Dropdown label="Sort By Age" dismissOnClick={false}>
              <DropdownItem onClick={()=>{
                if(sort==='asc')return;
                setSort('asc')}}>
                <span className="text-lg font-semibold">Ascending</span>
              </DropdownItem>

              <DropdownItem onClick={()=>{
                if(sort==='desc')return;
                setSort('desc')}}>
                <span className="text-lg font-semibold">Descending</span>
              </DropdownItem>
            </Dropdown>);
};

SortBtns.propTypes = {
  sort: PropTypes.string,
  setSort: PropTypes.func
};

export default SortBtns;