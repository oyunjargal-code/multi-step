"use client";

import { useState } from "react";

export const Multi = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });

  const [formError, setFormError] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });

  const onChange = (event) => {
    const { name, value } = event.target;

    const newFormData = { ...formData, [name]: value };

    setFormData(newFormData);
  };

  const onSubmit = () => {
    if (formData.firstName === "") {
      setFormError((prev) => ({
        ...prev,
        firstName: "hooson bj bolohgui",
      }));
    } else {
      setFormError((prev) => ({
        ...prev,
        firstName: "",
      }));
    }
    if (formData.lastName === "") {
      setFormError((prev) => ({
        ...prev,
        lastName: "hooson bj bolohgui",
      }));
    } else {
      setFormError((prev) => ({
        ...prev,
        lastName: "",
      }));
    }
    if (formData.userName === "") {
      setFormError((prev) => ({
        ...prev,
        userName: "hooson bj bolohgui",
      }));
    } else {
      setFormError((prev) => ({
        ...prev,
        userName: "",
      }));
    }
    console.log("hi");
  };

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

const Input = (props) => {
  const {
    type = "text",
    value,
    placeholder,
    onChange,
    name,
    label,
    error,
    require,
  } = props;

  return (
    <div className="flex flex-col items-center">
      <div className="flex">
        <label className="">{label}</label>
      </div>
      <input
        className="border"
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
      />
      <p className="text-red-500 text-xs">{error}</p>
    </div>
  );
};
// import { useState } from "react";
// import { Continue } from "./Continue";
// import { FirstName } from "./FirstName";
// import { LastName } from "./LastName";
// import { Username } from "./UserName";

// export const Multi = () => {
//   const [inputFirstValue, setInputFirstValue] = useState("");

//   const inputFirst = () => {};

//   const handleAdd = () => {
//     console.log(inputFirstValue);
//   };

//   return (
//     <div className="bg-[#f4f4f4] h-screen">
//       <div className="flex justify-center items-center min-h-screen">
//         <div className="w-100 h-150 bg-white rounded-sm">
//           <img className="w-10 h-10 mt-8 ml-8" src="/logo.png" alt="logo" />
//           <h1 className="font-bold ml-8 mt-4">Join Us! 😎</h1>
//           <p className="text-sm ml-8 text-[#8e8e8e]">
//             Please provide all current information accurately.
//           </p>
//           <FirstName inputFirst={inputFirst} />
//           <LastName />
//           <Username />
//           <Continue handleAdd={handleAdd} />
//         </div>
//       </div>
//     </div>
//   );
// };

// "use client"

// import { useState } from "react"

// export const Multi= () =>
// {
//   const [count, setCount] = useState(0)
//   const add= () =>
// {
//   setCount((prev)=> prev +1)
// }

//  return ( <div>
//   {count === 0 ? (<EmptyState add={add}/>) : (<Status count={count} add={add}/>)}
//  </div>

//  )
// }

// const Status= ({count, add}) =>

// {

//   return (<div>
//     <div>
// <p>{`Item is: ${count}`}</p>
// <button onClick={add}>Add</button>

//     </div>
//   </div>)
// }

// const EmptyState= ({add}) =>
// {
//   return (
//     <div>
//       <div>
//        <p>No items</p>
//        <button onClick={add}>Add</button>

//       </div>
//     </div>
//   )
// }
