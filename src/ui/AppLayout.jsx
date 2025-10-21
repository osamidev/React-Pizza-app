import {
  Outlet,
  useNavigation,
} from 'react-router-dom';
import CartOverview from '../features/cart/CartOverview';
import Header from './Header';
import Loader from './Loader';
import { useSelector } from 'react-redux';
import Cart from '../features/cart/Cart';

function AppLayout() {
  const cart = useSelector(
    (state) => state.cart.cart,
  );
  const navigation = useNavigation();
  const isLoading =
    navigation.state === 'loading';

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />

      <div className="overflow-auto">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>

      <CartOverview />
      {/* {cart.length && <CartOverview />} */}
    </div>
  );
}

export default AppLayout;
