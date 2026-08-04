import Input from "../common/Input";

export default function FormBasics() {

    return (

        <div className="bg-white rounded-xl shadow p-8">

            <h2 className="text-xl font-semibold mb-2">
                Form Basics
            </h2>

            <p className="text-gray-500 mb-6">
                Enter the primary details for your new collection form.
            </p>

            <label className="font-medium">
                Form Title
            </label>

            <Input
                placeholder="Enter form title"
            />

            <div className="text-right text-sm text-gray-400 mt-2">
                0 / 200
            </div>

            <div className="mt-8">

                <label className="font-medium">
                    Public URL
                </label>

                <div className="mt-2 text-blue-600">
                    https://example.com/form/demo
                </div>

            </div>

        </div>

    );
}