import Inputcheckbox from "./Inputcheckbox";

const AvailabilityFilter = () => {

    const categories = [
        
        {
            id: 1,
            name: "In Stock",
        },
        {
            id: 2,
            name: "Out of Stock",
        },
       
    ]



    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-lg font-semibold">Availability</h1>

            <div className="flex flex-col gap-2">

                {categories.map((category)=>(
                    <Inputcheckbox key={category.id} name={category.name} id={category.id} />
                ))}
            </div>


        </div>
    )
}

export default AvailabilityFilter;