import { useForm } from "react-hook-form"

export default function App() {
  const { handleSubmit, register } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input {...register("name")}/>
      </div>
      <div>
        <input {...register("surname")} />
      </div>
      <button>Отправить</button>
    </form>
  );
}
