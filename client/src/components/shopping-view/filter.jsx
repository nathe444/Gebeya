import { Fragment } from "react";
import { filterOptions } from "@/config";
import { Checkbox } from "../ui/checkbox";
import { Separator } from "../ui/separator";

const ProductFilter = ({ filters, handleFilter }) => {
  return (
    <div>
      <div className="p-4 border-b mb-4">
        <h2 className="text-2xl font-bold">Filters</h2>
      </div>
      <div>
        {Object.keys(filterOptions).map((key) => {
          return (
            <Fragment>
              <div>
                <h3 className="text-lg font-semibold mt-6">{key}</h3>
              </div>
              <div>
                {filterOptions[key].map((option) => {
                  return (
                    <div
                      key={option.id}
                      className="flex items-center gap-2 py-[2px] my-1"
                    >
                      <Checkbox
                        onCheckedChange={() => handleFilter(key, option.id)}
                        checked={
                          filters &&
                          Object.keys(filters).length > 0 &&
                          filters[key] &&
                          filters[key].indexOf(option.id) > -1
                        }
                      />
                      <label>{option.label}</label>
                    </div>
                  );
                })}
              </div>
              <Separator />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default ProductFilter;
