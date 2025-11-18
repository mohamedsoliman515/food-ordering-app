import CartItem from "./_components/CartItems";
import CheckoutForm from "./_components/CheckoutForm";

const CartPage = () => {
  return (
    <main>
      <section className="section-gap"></section>
      <div className="container">
        <h1 className="text-primary text-center font-bold text-4xl italic mb-10">
          Cart
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <CartItem />
          <CheckoutForm />
        </div>
      </div>
    </main>
  );
};

export default CartPage;
