import React from "react";

const Loader: React.FC = () => {
    return (
        <div className="flex justify-center items-center bg-black  overflow-y-hidden min-h-screen bg-all-black bg-cover bg-no-repeat">
            <img className="animate-loading" src="src/assets/fb-colored.png" alt="Fabrício Bahiense"
                width={150}
                height={150}
            />
        </div>
    )

}

export default Loader;

// animate-appear