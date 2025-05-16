import React from "react";

function Input({label, name, register, ...props}) {
  const baseStyle = "border-b-2 border-gray-300 p-2 rounded outline-none";

  if (props.type === "radio") {
    return (
      <div className="flex flex-col border border-green-400 shadow-md mt-4 p-5 rounded w-full">
        <label htmlFor={name} className="font-bold">
          {props.required ? (
            <p className="flex gap-1">
              {label}
              <p className="text-red-400">*</p>
            </p>
          ) : (
            label
          )}
        </label>
        <div>
          {props.values.map((value) => {
            return (
              <div key={value} className="flex gap-3 my-3">
                <input
                  type={props.type}
                  id={value}
                  {...register(name)}
                  value={value}
                />
                <label htmlFor={value}>{value}</label>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (props.type === "checkbox") {
    return (
      <div className="flex flex-col border border-green-400 shadow-md mt-4 p-5 rounded w-full">
        <label htmlFor={name} className="font-bold">
          {props.required ? (
            <p className="flex gap-1">
              {label}
              <p className="text-red-400">*</p>
            </p>
          ) : (
            label
          )}
        </label>
        <div>
          {props.values.map((value) => {
            return (
              <div key={value} className="flex gap-3 my-3">
                <input
                  type={props.type}
                  id={value}
                  {...register(name)}
                  value={value}
                />

                <label htmlFor={value}>{value}</label>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col border border-green-400 shadow-md mt-4 p-5 rounded w-full">
      <label htmlFor={name} className="font-bold">
        {props.required ? (
          <p className="flex gap-1">
            {label}
            <p className="text-red-400">*</p>
          </p>
        ) : (
          label
        )}
      </label>
      <p className="text-sm text-gray-500">{props.desc ? props.desc : ""}</p>
      <input
        type={props.type}
        id={name}
        name={name}
        className={[baseStyle].join(" ")}
        {...props}
      />
    </div>
  );
}

export default Input;
