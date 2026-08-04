import PageHeader from "../../components/layout/PageHeader";
import Stepper from "../../components/stepper/Stepper";
import FormBasics from "../../components/details/FormBasics";
import Button from "../../components/common/Button";

export default function FormBuilder() {

    return (

        <div className="max-w-6xl mx-auto p-10">

            <PageHeader />

            <Stepper currentStep={0} />

            <FormBasics />

            <div className="flex justify-end gap-4 mt-8">

                <Button variant="secondary">
                    Cancel
                </Button>

                <Button>
                    Next Builder
                </Button>

            </div>

        </div>

    );

}