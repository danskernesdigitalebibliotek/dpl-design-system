import { MenuItemsProps } from "./HeaderMenuListData";

interface MenuItemListProps {
  menuItems: MenuItemsProps[];
}

const MenuItemList: React.FC<MenuItemListProps> = ({ menuItems }) => {
  return (
    <ul className="header__menu-navigation">
      {menuItems.map((item, index) => (
        <li key={index} className="header__menu-navigation-item">
          <a
            href={item.href}
            className="header__menu-navigation-link text-body-medium-regular hide-linkstyle"
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MenuItemList;
