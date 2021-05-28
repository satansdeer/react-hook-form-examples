import { useForm } from "react-hook-form";

export function ImageUploadForm({ uploadData }) {
  const { register, handleSubmit } = useForm({});

  const onSubmit = async (data) => {
    uploadData(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Картинка:
        <input {...register("picture")} type="file" />
      </label>
      <button>Отправить</button>
    </form>
  );
}
