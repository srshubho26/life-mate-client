import { Label, RangeSlider, Select } from "flowbite-react";
import PropTypes from 'prop-types';
import { useState } from "react";
import swal from "sweetalert";

const Filter = ({setFilter, setCurrentPage}) => {
    const [_minAge, _setMinAge] = useState(0);
    const [_maxAge, _setMaxAge] = useState(0);

    const handleSubmit = e=>{
        e.preventDefault();
        const form = e.target;
        const filter={}
        const type = form.type.value;
        const division = form.division.value;
        if(type!=='Type')filter.type=type;
        if(division!=='Division')filter.division = division;
        if(_minAge>0)filter.minAge = _minAge;
        if(_maxAge>0)filter.maxAge = _maxAge;

        if(_minAge && _maxAge && _minAge>_maxAge){
            swal("Error!", "Invalid filter input!", "error");
            return;
        }

        setFilter(filter);
        setCurrentPage(1);
    }

    return (<form onSubmit={handleSubmit} className="sticky top-0 p-2 z-50">
        <h3 className="text-lg font-semibold text-text dark:text-text-dark border-b border-primary pb-2">
        Filter Biodatas
        </h3>

      <div className="my-5">
        <div className="mb-1 block">
          <Label value="Minimum Age:" className="text-base font-semibold text-text dark:text-text-dark" />
          <span className="text-primary ml-2 font-bold">{_minAge}</span>
        </div>

        <RangeSlider min={0} max={70} defaultValue={0} onChange={e=>_setMinAge(parseInt(e.target.value))} />
        
      </div>

      <div className="my-5">
        <div className="mb-1 block">
          <Label value="Maximum Age:"  className="text-base font-semibold text-text dark:text-text-dark"/>
          <span className="text-primary ml-2 font-bold">{_maxAge}</span>
        </div>

        <RangeSlider min={0} max={70} defaultValue={0} onChange={e=>_setMaxAge(parseInt(e.target.value))} />
      </div>

      <div className="my-5">
      <div className="mb-2 block">
        <Label value="Type"  className="text-base font-semibold text-text dark:text-text-dark"/>
      </div>

      <Select required name="type">
        <option>Type</option>
        <option>Male</option>
        <option>Female</option>
      </Select>
    </div>

    <div className="my-5">
      <div className="mb-2 block">
        <Label value="Division" className="text-base font-semibold text-text dark:text-text-dark"/>
      </div>

      <Select name="division" required>
        <option>Division</option>
        <option>Dhaka</option>
        <option>Chattagram</option>
        <option>Rangpur</option>
        <option>Barisal</option>
        <option>Khulna</option>
        <option>Mymensingh</option>
        <option>Sylhet</option>
      </Select>
    </div>

    <div className="flex gap-2">
    <button className="grow text-sm rounded-md px-4 py-2 uppercase text-primary-dark transition-colors hover:text-lite font-semibold relative bg-expand neomorphism-outset dark:neomorphism-outset-dark">
        <span className="relative z-20">Apply Filter</span>
        </button>

        <button 
        type="reset"
        onClick={()=>{
            _setMaxAge(0);
            _setMinAge(0);
            setFilter({});
        }}
         className="grow text-sm rounded-md px-4 py-2 uppercase text-secondary transition-colors hover:text-text font-semibold relative bg-expand-secondary neomorphism-outset dark:neomorphism-outset-dark">
            <span className="relative z-20">Clear Filter</span>
            </button>
    </div>
    </form>);
};

Filter.propTypes = {
    setFilter: PropTypes.func,
    setCurrentPage: PropTypes.func
}

export default Filter;