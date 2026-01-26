const { Input } = require("./Input");

const FormUserInfo = ({ formData, onChange, onSubmit }) => {
  return (
    <div>
      <Input
        name="firstName"
        label="First name"
        placeholder="Нэрээ оруулна уу?"
        value={formData.firstName}
        onChange={onChange}
        error={formError.firstName}
        require={false}
      />
      <Input
        name="lastName"
        label="Last name"
        placeholder="Овогоо оруулна уу?"
        value={formData.lastName}
        onChange={onChange}
        error={formError.lastName}
        require={false}
      />
      <Input
        name="userName"
        label="User name"
        placeholder="Хэрэглэгчийн нэрээ оруулна уу?"
        value={formData.userName}
        onChange={onChange}
        error={formError.userName}
        require={false}
      />
      <button onClick={onSubmit}>Continue</button>
    </div>
  );
};
