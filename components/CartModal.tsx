export default function CartModal() {
  return (
    <section>
      <div>
        <h3>
          Cart <span>(3)</span>
        </h3>
        <button>Remove all</button>
      </div>
      <div>
        <div>{/* <Image /> */}</div>
        <div>
          <p>XX99 MARK II</p>
          <p>$ 2,999</p>
        </div>
        <div>
          <button>-</button>
          <p>1</p>
          <button>+</button>
        </div>
      </div>
      <div>
        <p>TOTAL</p>
        <p>$ 2,999</p>
      </div>
      <button>CHECKOUT</button>
    </section>
  );
}
