"use client";

import { useState } from "react";

// import { useState } from "react";
// import { FormUserInfo } from "./FormUserInfo";
// import { FormEmailPassport } from "./FormEmailPassport";
// import { FormBirthday } from "./FormBirthday";

// export const Form = () => {
//   const [step, setStep] = useState(1);

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     userName: "",
//     eMail: "",
//     phoneNumber: "",
//     password: "",
//     confirmPassword: "",
//     dateOfBirthday: "",
//     profileImage: "",
//   });

//   const [formError, setFormError] = useState({
//     firstName: "",
//     lastName: "",
//     userName: "",
//     eMail: "",
//     phoneNumber: "",
//     password: "",
//     confirmPassword: "",
//     dateOfBirthday: "",
//     profileImage: "",
//   });

//   const onChange = (event) => {
//     const { name, value } = event.target;

//     const newFormData = { ...formData, [name]: value };
//     setFormData(newFormData);
//     updateFormError({ [name]: "" });
//   };

//   const updateFormError = (error) => {
//     setFormError({ ...formError, ...error });
//   };

//   const handleNext = () => {
//     setStep(step + 1);
//     // setStep((prev) => prev + 1);
//   };

//   const handlePrev = () => {
//     setStep(step - 1);
//     // setStep((prev) => prev - 1);
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
//           <div>
//             {step === 1 && (
//               <FormUserInfo
//                 formData={formData}
//                 onChange={onChange}
//                 formError={formError}
//                 updateFormError={updateFormError}
//                 handleNext={handleNext}
//                 handlePrev={handlePrev}
//               />
//             )}
//             {step === 2 && (
//               <FormEmailPassport
//                 formData={formData}
//                 onChange={onChange}
//                 formError={formError}
//                 updateFormError={updateFormError}
//                 handlePrev={handlePrev}
//                 handleNext={handleNext}
//               />
//             )}
//             {step === 3 && (
//               <FormBirthday
//                 formData={formData}
//                 onChange={onChange}
//                 formError={formError}
//                 updateFormError={updateFormError}
//                 handlePrev={handlePrev}
//               />
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export const Form = () => {
  const [inputValue, setInputValue] = useState();
  const [items, setItems] = useState([]);

  const add = () => {
    setItems([...items, inputValue]);
    setInputValue("");
    console.log([...items, inputValue]);
  };
  const onChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };
  return (
    <div>
      <input
        value={inputValue}
        className="border"
        type="text"
        onChange={(e) => onChange(e)}
      />
      <button onClick={add}>submit</button>
      <ul>
        {items.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};
