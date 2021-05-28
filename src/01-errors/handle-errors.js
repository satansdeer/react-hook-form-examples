import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input {...register("firstName")} placeholder="First Name" />
      </div>
      <div>
        <input {...register("lastName", { required: true })} placeholder="Last Name" />
        {errors.lastName && <div>The Last Name field is required</div>}
      </div>
      <input type="submit" />
    </form>
  );
}
