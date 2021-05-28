import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          {...register("firstName", {
            required: true,
            maxLength: { message: "Too long", value: 20 },
          })}
          placeholder="First name"
        />
      </div>
      <div>
        <input
          {...register("lastName", {
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "Contains non latin characters",
            },
          })}
          placeholder="Last name"
        />
      </div>
      <div>
        <input
          {...register("age", {
            min: { value: 18, message: "Too young" },
            max: { value: 99, message: "Too old" },
          })}
          type="number"
          placeholder="Age"
        />
      </div>
      <input type="submit" />
    </form>
  );
}
