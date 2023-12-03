import { Bank, CreditCard, MapPinLine, Money } from "@phosphor-icons/react";
import {
  Container,
  FotterFormContainer,
  TransactionType,
  TransactionTypeButton,
} from "./styles";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const newPaymentSchema = z.object({
  cep: z.string(),
  street: z.string(),
  neighborhood: z.string(),
  city: z.string(),
  number: z.number(),
  complement: z.string().optional(),
  uf: z.string(),
  typePayment: z.enum(["creditCard", "money", "debitCard"]),
});

type newPaymentFormInputs = z.infer<typeof newPaymentSchema>;

export function FormPayment() {
  const navigate = useNavigate();
  const { handleAddPaymentInfo, cartGames } = useContext(CartContext);
  const inicialValue: number = 0;

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<newPaymentFormInputs>({
    resolver: zodResolver(newPaymentSchema),
  });

  function handleCreateNewPayment(data: newPaymentFormInputs) {
    if (cartGames.length === 0) {
      reset();
      return window.alert("Nenhum jogo no carrinho");
    }

    handleAddPaymentInfo(data);
    navigate("/delivery");
    reset();
  }

  return (
    <Container>
      <header>
        <MapPinLine size={24} weight="regular" />
        <div>
          <h4>Endereço de Entrega</h4>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </header>

      <form onSubmit={handleSubmit(handleCreateNewPayment)}>
        <div className="divWithInput">
          <input type="text" placeholder="CEP" required {...register("cep")} />
          <input
            type="text"
            placeholder="Rua"
            required
            {...register("street")}
          />
          <input
            type="number"
            placeholder="Número"
            required
            {...register("number", { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Complemento (Opcional)"
            {...register("complement")}
          />
          <input
            type="text"
            placeholder="Bairro"
            required
            {...register("neighborhood")}
          />
          <input
            type="text"
            placeholder="Cidade"
            required
            {...register("city")}
          />
          <input type="text" placeholder="UF" required {...register("uf")} />
        </div>
        <div className="methodsPaymeny">
          <h2 style={{ display: "block" }}>Formas de pagamento</h2>
        </div>
        <Controller
          control={control}
          name="typePayment"
          render={({ field }) => {
            return (
              <>
                <TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton value="creditCard">
                    <CreditCard size={18} />
                    Cartão de crédito
                  </TransactionTypeButton>
                  <TransactionTypeButton value="debitCard">
                    <Bank size={18} />
                    Cartao de débito
                  </TransactionTypeButton>
                  <TransactionTypeButton value="money">
                    <Money size={18} />
                    Dinheiro
                  </TransactionTypeButton>
                </TransactionType>
              </>
            );
          }}
        />

        <FotterFormContainer>
          <div>
            <p>Total: </p>
            <span>
              {" "}
              <span>
                R$&nbsp;
                {cartGames
                  .reduce((acc, item) => {
                    return 12 + (acc + 100 * item.quantity);
                  }, inicialValue)
                  .toFixed(2)}
              </span>
            </span>
          </div>

          <button type="submit" disabled={isSubmitting}>
            Confirmar pedido
          </button>
        </FotterFormContainer>
      </form>
    </Container>
  );
}
