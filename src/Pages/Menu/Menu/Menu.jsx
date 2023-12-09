import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImage from '../../../assets/menu/banner3.jpg'
import DessertImage from '../../../assets/menu/dessert-bg.jpeg'
import useMenu from '../../../hooks/useMenu/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')

    return (
        <div>
            <Helmet>
                <title>Menu</title>
            </Helmet>
            
            <Cover img={menuImage} title={'our menu'}></Cover>

            {/* main cover  */}
            <SectionTitle subHeading="Dont miss" heading="Todays Offer"></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>

            {/* Dessert Menu Items  */}
            <MenuCategory 
            items={desserts}
            title={'Dessert'}
            img={DessertImage}
            >
            </MenuCategory>

        </div>
    );
};

export default Menu;