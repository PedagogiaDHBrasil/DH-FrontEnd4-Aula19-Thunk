import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { saveOrder } from "./actions";

function App({ products, saveOrder }) {
  return (
    <div>
      <p>{products.length} produto(s)</p>
      <button onClick={() => saveOrder()}>Salvar Pedido</button>
    </div>
  );
}

const mapStateToProps = (store) => ({
  products: store.orderReducer.products,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      saveOrder,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
