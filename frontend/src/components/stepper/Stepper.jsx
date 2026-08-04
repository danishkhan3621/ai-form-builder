const steps = [
    "Details",
    "Builder",
    "Settings",
    "Finish",
];

export default function Stepper({ currentStep }) {
    return (
        <div className="flex items-center justify-between mb-10">

            {steps.map((step, index) => (

                <div
                    key={step}
                    className="flex-1 flex items-center"
                >

                    <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold

                        ${
                            currentStep === index
                                ? "bg-blue-600 text-white"
                                : "bg-gray-200 text-gray-700"
                        }`}
                    >
                        {index + 1}
                    </div>

                    <span className="ml-3 font-medium">
                        {step}
                    </span>

                    {index !== steps.length - 1 && (
                        <div className="flex-1 h-1 bg-gray-300 mx-5"></div>
                    )}

                </div>

            ))}

        </div>
    );
}