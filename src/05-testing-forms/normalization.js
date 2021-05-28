import { useForm } from "react-hook-form";

const normalizeCardNumber = (value) => {
  return (
    value
      .replace(/\s/g, "")
      .match(/.{1,4}/g)
      ?.join(" ")
      .substr(0, 19) || ""
  );
};

export const CreditCardForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  const cardNumber = register("cardNumber")

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="cardNumber">Номер карты:</label>
        <input
          {...register("cardNumber")}
          placeholder="0000 0000 0000 0000"
          type="tel"
          inputMode="numeric"
          autoComplete="cc-number"
          id="cardNumber"
          ref={cardNumber.ref}
          onBlur={cardNumber.onBlur}
          onChange={(event) => {
            cardNumber.onChange(event)
            event.target.value = normalizeCardNumber(event.target.value)
          }}
        />
      </div>
      <button>Отправить</button>
    </form>
  );
}
