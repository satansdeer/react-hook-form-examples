import { useForm } from "react-hook-form";

export function ProfileForm({ formSubmit }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    formSubmit(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Имя:</label>
        <input id="name" {...register("name")} />
      </div>
      <div>
        <label htmlFor="surname">Фамилия:</label>
        <input id="surname" {...register("surname")} />
      </div>
      <button>Отправить</button>
    </form>
  );
}