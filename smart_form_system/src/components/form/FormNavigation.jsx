import React from 'react'

import Button from "../common/Button";

const FormNavigation = ({ next, prev, step }) => {
  return (
    <div className="flex justify-between mt-6">
      {step > 1 && (
        <Button variant="secondary" onClick={prev}>
          Back
        </Button>
      )}

      <Button onClick={next}>
        {step === 3 ? "Submit" : "Next"}
      </Button>
    </div>
  );
};

export default FormNavigation