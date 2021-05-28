import { useForm } from "react-hook-form";

export function ProfileFormWithValidation({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="firstName">Имя:</label>
        <input
          id="firstName"
          {...register("firstName", {
            required: {
              value: true,
              message: "Имя обязательно к заполнению",
            },
            maxLength: {
              value: 20,
              message: "Имя может сожержать не больше 20 символов",
            },
          })}
        />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>
      <div>
        <label htmlFor="lastName">Фамилия:</label>
        <input
          id="lastName"
          {...register("lastName", {
            pattern: {
              value: /^[A-Za-z]+$/i,
              message:
                "Фамилия может сожержать только буквы латинского алфавита",
            },
          })}
        />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>
      <div>
        <label htmlFor="age">Возраст:</label>
        <input
          id="age"
          type="number"
          {...register("age", {
            min: {
              value: 18,
              message: "Возраст должен быть больше 18",
            },
            max: {
              value: 99,
              message: "Возраст должен быть меньше 99",
            },
          })}
        />
        {errors.age && <p>{errors.age.message}</p>}
      </div>
      <button>Отправить</button>
    </form>
  );
}
