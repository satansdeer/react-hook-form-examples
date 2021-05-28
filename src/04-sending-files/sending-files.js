import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit } = useForm({});

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("files", data.picture[0], data.picture[0].name);

    const res = await fetch("http://coconut-tungsten-wrist.glitch.me/picture", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());
    alert(JSON.stringify(res));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("picture")} type="file" />
      <button>Submit</button>
    </form>
  );
}

export default App;