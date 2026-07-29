const inputStyle = `
w-full
rounded-2xl
border
border-gray-200
bg-white
px-5
py-4
outline-none
transition-all
duration-300
focus:border-blue-600
focus:ring-4
focus:ring-blue-100
`;

const AddressForm = () => {

  return (

    <div className="grid gap-6 md:grid-cols-2">

      {/* Address */}

      <div className="md:col-span-2">

        <label className="mb-3 block font-semibold">
          Street Address
        </label>

        <input
          type="text"
          placeholder="123 Main Street"
          className={inputStyle}
        />

      </div>

      {/* Apartment */}

      <div className="md:col-span-2">

        <label className="mb-3 block font-semibold">
          Apartment / Suite (Optional)
        </label>

        <input
          type="text"
          placeholder="Apartment 12B"
          className={inputStyle}
        />

      </div>

      {/* Country */}

      <div>

        <label className="mb-3 block font-semibold">
          Country
        </label>

        <select className={inputStyle}>

          <option>India</option>

          <option>United States</option>

          <option>United Kingdom</option>

          <option>Canada</option>

        </select>

      </div>

      {/* State */}

      <div>

        <label className="mb-3 block font-semibold">
          State
        </label>

        <input
          type="text"
          placeholder="Jammu & Kashmir"
          className={inputStyle}
        />

      </div>

      {/* City */}

      <div>

        <label className="mb-3 block font-semibold">
          City
        </label>

        <input
          type="text"
          placeholder="Srinagar"
          className={inputStyle}
        />

      </div>

      {/* ZIP */}

      <div>

        <label className="mb-3 block font-semibold">
          ZIP Code
        </label>

        <input
          type="text"
          placeholder="190001"
          className={inputStyle}
        />

      </div>

      {/* Landmark */}

      <div className="md:col-span-2">

        <label className="mb-3 block font-semibold">
          Landmark (Optional)
        </label>

        <input
          type="text"
          placeholder="Near City Center"
          className={inputStyle}
        />

      </div>

    </div>

  );

};

export default AddressForm;