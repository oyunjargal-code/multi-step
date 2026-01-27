const { Input } = require("./Input");

export const FormBirthday = ({
  formData,
  onChange,
  formError,
  updateFormError,
  handleNext,
  handlePrev,
}) => {
  const onValidation = () => {
    const { dateOfBirthday, profileImage } = formData;
    const newError = {};

    if (dateOfBirthday === "") {
      newError["dateOfBirthday"] = "хоосон утга оруулахгүй байх";
    }

    if (profileImage === "") {
      newError["profileImage"] = "хоосон утга оруулахгүй байх";
    }

    const isValid = Object.keys(newError).length === 0;

    updateFormError(newError);

    return isValid;
  };

  const onSubmit = () => {
    const isValid = onValidation();

    // if (isValid) {
    //   handleNext();
    // }
  };

  return (
    <div>
      <Input
        name="dateOfBirthday"
        label="Date of birth"
        placeholder="Ognoogoo оруулна уу?"
        value={formData.dateOfBirthday}
        onChange={onChange}
        error={formError.dateOfBirthday}
        require={false}
      />
      <Input
        name="profileImage"
        label="Profile image"
        placeholder="Zuragaa оруулна уу?"
        value={formData.profileImage}
        onChange={onChange}
        error={formError.profileImage}
        require={false}
      />

      <div className="flex justify-center ">
        <button
          onClick={handlePrev}
          className="bg-[#121315] text-white rounded-sm mt-21 p-1"
        >
          back
        </button>
        <button
          onClick={onSubmit}
          className="bg-[#121315] text-white w-80 rounded-sm mt-21 p-1"
        >
          Continue 3/3
        </button>
      </div>
    </div>
  );
};
