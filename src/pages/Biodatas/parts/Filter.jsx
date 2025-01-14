import { Label, RangeSlider, Select, Tooltip } from "flowbite-react";
import { useState } from "react";

const tooltipTheme = {
    "target": "",

  }

const Filter = () => {
    const [minAge, setMinAge] = useState(0);
    const [maxAge, setMaxAge] = useState(0);

    return (<form className="sticky bg-white top-0 p-2 z-50">
        <h3 className="text-lg font-semibold text-text dark:text-text-dark border-b border-primary pb-2">
        Filter Biodatas
        </h3>

      <div className="my-5">
        <div className="mb-1 block">
          <Label value="Minimum Age" className="text-base font-semibold text-text dark:text-text-dark" />
        </div>

        <Tooltip theme={tooltipTheme} content={minAge}>
        <RangeSlider className="w-full" min={0} max={70} value={minAge} onChange={e=>setMinAge(e.target.value)} />
    </Tooltip>
        
      </div>

      <div className="my-5">
        <div className="mb-1 block">
          <Label value="Maximum Age"  className="text-base font-semibold text-text dark:text-text-dark"/>
        </div>

        <Tooltip theme={tooltipTheme} content={maxAge}>
        <RangeSlider className="w-full" min={0} max={70} value={maxAge} onChange={e=>setMaxAge(e.target.value)} />
        </Tooltip>
      </div>

      <div className="my-5">
      <div className="mb-2 block">
        <Label value="Type"  className="text-base font-semibold text-text dark:text-text-dark"/>
      </div>

      <Select id="countries" required>
        <option>Type</option>
        <option>Male</option>
        <option>Female</option>
      </Select>
    </div>

    <div className="my-5">
      <div className="mb-2 block">
        <Label value="Division" className="text-base font-semibold text-text dark:text-text-dark"/>
      </div>

      <Select id="countries" required>
        <option>Division</option>
        <option>Dhaka</option>
        <option>Chattagra</option>
        <option>Rangpur</option>
        <option>Barisal</option>
        <option>Khulna</option>
        <option>Mymensingh</option>
        <option>RangpuSylhetr</option>
      </Select>
    </div>

    <button className="text-lg border border-primary rounded-md px-5 py-2 uppercase text-primary hover:bg-primary hover:text-lite transition-colors font-semibold">
        Apply Filter
        </button>
    </form>);
};

export default Filter;