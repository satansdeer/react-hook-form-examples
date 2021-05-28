import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <input {...register("fruit")} type="checkbox" value="banana" />
        Банан
      </label>
      <label>
        <input {...register("fruit")} type="checkbox" value="apple" />
        Яблоко
      </label>
      <label>
        <input {...register("fruit")} type="checkbox" value="orange" />
        Апельсин
      </label>
      <button>Отправить</button>
    </form>
  );
}

export default App;
