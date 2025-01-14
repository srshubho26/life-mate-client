import { Dropdown, DropdownItem } from "flowbite-react";
import PropTypes from 'prop-types';

const SortBtns = props => {
    return (<Dropdown label="Sort By Age" dismissOnClick={false}>
              <DropdownItem>
                <span className="text-lg font-semibold">Ascending</span>
              </DropdownItem>

              <DropdownItem>
                <span className="text-lg font-semibold">Descending</span>
              </DropdownItem>
            </Dropdown>);
};

SortBtns.propTypes = {
    
};

export default SortBtns;