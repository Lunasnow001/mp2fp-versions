/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const FilterSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    category: "",
    employee: "",
    color: "",
    type: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100,
  });

  const [priceRange, setPriceRange] = useState([0, 100]);
  const categories = ["Black White", "Colors"];
  const colors = [
    "Red",
    "Blue",
    "Black",
    "Green",
    "Yellow",
    "Gray",
    "White",
    "Pink",
    "Beige",
    "Navy",
  ];
  const types = ["FF", "UF", "FAI", "FIF", "SP"];
  // const materials = [
  //   "Cotton",
  //   "Wool",
  //   "Denim",
  //   "Polyester",
  //   "Silk",
  //   "Linen",
  //   "Viscose",
  //   "Fleece",
  // ];
  const brands = ["MP2FP Brand", "VN Brand", "Pattaya Brand"];
  // const employees = ["John", "Jame"];

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);

    setFilters({
      category: params.category || "",
      employee: params.employee || "",
      color: params.color || "",
      type: params.type ? params.type.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: params.minPrice || 0,
      maxPrice: params.maxPrice || 100,
    });
  }, [searchParams]);

  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;
    // console.log({ name, value, checked, type });
    let newFilters = { ...filters };

    if (type === "checkbox") {
      if (checked) {
        newFilters[name] = [...(newFilters[name] || []), value];
      } else {
        newFilters[name] = newFilters[name].filter((item) => item != value);
      }
    } else {
      newFilters[name] = value;
    }
    setFilters(newFilters);
    updateURLParams(newFilters);
    // console.log(newFilters);
  };

  const updateURLParams = (newFilters) => {
    const params = new URLSearchParams();

    Object.keys(newFilters).forEach((key) => {
      if (Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
        params.append(key, newFilters[key].join(","));
      } else if (newFilters[key]) {
        params.append(key, newFilters[key]);
      }
    });
    setSearchParams(params);
    navigate(`?${params.toString()}`);
  };

  const handlePriceChange = (e) => {
    const newPrice = e.target.value;
    setPriceRange([0, newPrice]);
    const newFilters = { ...filters, minPrice: 0, maxPrice: newPrice };
    setFilters(filters);
    updateURLParams(newFilters);
  };

  return (
    <div className="p-4">
      <h3 className="mb-4 font-medium text-gray-800 text-xl">Filter</h3>

      {/* Category */}
      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-900">Category</label>
        {categories.map((category) => (
          <div key={category} className="items-center mb-1 flxe">
            <input
              type="radio"
              name="category"
              value={category}
              onChange={handleFilterChange}
              checked={filters.category === category}
              className="mr-2 border-gray-300 focus:ring-blue-400 w-4 h-4 text-blue-500"
            />
            <span className="text-gray-700">{category}</span>
          </div>
        ))}
      </div>

      {/* employee */}
      {/* <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-900">Employee</label>
        {employees.map((employee) => (
          <div key={employee} className="items-center mb-1 flxe">
            <input
              type="radio"
              name="employee"
              value={employee}
              onChange={handleFilterChange}
              checked={filters.employee === employee}
              className="mr-2 border-gray-300 focus:ring-blue-400 w-4 h-4 text-blue-500"
            />
            <span className="text-gray-700">{employee}</span>
          </div>
        ))}
      </div> */}

      {/* Colors */}
      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-600">Color</label>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color}
              name="color"
              value={color}
              onClick={handleFilterChange}
              className={`border-gray-300 border rounded-full w-8 h-8 transition cursor-pointer hover:scale-105 ${
                filters.color === color ? "ring-2 ring-blue-500" : ""
              }`}
              style={{ backgroundColor: color.toLowerCase() }}
            ></button>
          ))}
        </div>
      </div>

      {/* Types */}
      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-600">Type</label>
        {types.map((type) => (
          <div key={type} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="type"
              value={type}
              onChange={handleFilterChange}
              checked={filters.type.includes(type)}
              className="mr-2 border-gray-300 focus:ring-blue-400 w-4 h-4 text-blue-500"
            />
            <span className="text-gray-700">{type}</span>
          </div>
        ))}
      </div>

      {/* Material */}
      {/* <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-600">Material</label>
        {materials.map((material) => (
          <div key={material} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="material"
              value={material}
              onChange={handleFilterChange}
              checked={filters.material.includes(material)}
              className="mr-2 border-gray-300 focus:ring-blue-400 w-4 h-4 text-blue-500"
            />
            <span className="text-gray-700">{material}</span>
          </div>
        ))}
      </div> */}

      {/* Brand */}
      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-600">Brand</label>
        {brands.map((brand) => (
          <div key={brand} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="brand"
              value={brand}
              onChange={handleFilterChange}
              checked={filters.brand.includes(brand)}
              className="mr-2 border-gray-300 focus:ring-blue-400 w-4 h-4 text-blue-500"
            />
            <span className="text-gray-700">{brand}</span>
          </div>
        ))}
      </div>

      {/* Price Range */}
      <div className="mb-8">
        <label className="block mb-2 font-medium text-gray-600">
          Price Range
        </label>
        <input
          type="range"
          name="priceRange"
          min={0}
          max={100}
          value={priceRange[1]}
          onChange={handlePriceChange}
          className="bg-gray-300 rounded-lg w-full h-2 appearance-none cursor-pointer"
        />
      </div>
      <div className="flex justify-between mt-2 text-gray-600">
        <span>$0</span>
        <span>${priceRange[1]}</span>
      </div>
    </div>
  );
};

export default FilterSidebar;
