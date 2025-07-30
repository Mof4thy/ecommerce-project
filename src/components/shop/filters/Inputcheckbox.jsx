import React from "react";

const Inputcheckbox = React.memo(({name, id , onChange}) => {

    return (
        <div className="flex items-center gap-2" >
            <input type="checkbox" id={id} name={name} onChange={onChange} className="w-5  h-5 border-gray-200 opacity-50 border-1 rounded-sm" />
            <label htmlFor={id} className="text-md font-medium text-gray-500">{name}</label>
        </div>
    )
})

export default Inputcheckbox;

