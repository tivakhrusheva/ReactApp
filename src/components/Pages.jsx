import { Header } from './Header/index';
// import { Button } from './components/Button';
import { Body } from './Body/index';
import { Footer } from './Footer/index';
import { CartMainSection } from './CartMainSection/index';
import { CartSection } from './CartSection/index';
import { CartButton } from './CartButton/index';
import { SubHeader } from './SubHeader/index';
import { CardTotal } from './CardTotal/index';
// import { useTodos } from './hooks';

export const PageOne = () => {

    return (
        <div className="container">
  
            <Header />

            <Body />
       
            <Footer />
        </div>
    );
};

export const PageTwo = () => {
    return (
        <div className="container">
            <Header />
            <SubHeader />
            <CartMainSection />
            <CartSection />
            <CartButton />
            <CartButton /> 
            <CardTotal />
            <Footer />
        </div>
    );
};