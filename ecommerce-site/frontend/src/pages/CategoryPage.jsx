import { useParams } from 'react-router-dom';
import './CategoryPage.css';

// eslint-disable-next-line react/prop-types
const CategoryPage = ({ addToCart }) => {
  const { category } = useParams();

  const products = [
    // Mobiles
    { id: 11, name: 'Samsung Galaxy S23', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSMc3pkxslPGEBmRDqVcgIekl04xy9QTOtgg&s', category: 'mobiles', description: 'Latest flagship from Samsung with 120Hz display', price: '$799' },
    { id: 12, name: 'Apple iPhone 15', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCSyJV0dTU30wfsydfnhD8iEZMtcTQFwJp1w&s', category: 'mobiles', description: 'Apple’s newest iPhone with A17 Bionic chip', price: '$999' },
    { id: 13, name: 'OnePlus 11', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe44qS3XsYY3DsNTObV_QjxYGRvI18DGfEcg&s', category: 'mobiles', description: 'Fast charging with Snapdragon 8 Gen 2 chipset', price: '$749' },
    { id: 14, name: 'Google Pixel 8', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr4iVm7dcXdtwrgr-Ki74qS-a0yMXIUXiw4A&s', category: 'mobiles', description: 'Google’s pure Android experience with advanced AI features', price: '$699' },
    { id: 15, name: 'Xiaomi Mi 13', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvzEz5T-vF1ExAri5MlCkwXFZTJDwdmEHoXg&s', category: 'mobiles', description: 'Xiaomi’s affordable flagship with OLED display', price: '$649' },
    { id: 16, name: 'Samsung Galaxy A54', image: 'https://images.samsung.com/is/image/samsung/p6pim/ae/sm-a546elgcmea/gallery/ae-galaxy-a54-5g-sm-a546-sm-a546elgcmea-thumb-535721964?$480_480_PNG$', category: 'mobiles', description: 'Mid-range phone with Super AMOLED display', price: '$499' },
    { id: 17, name: 'Realme GT 2 Pro', image: 'https://cms-assets.bajajfinserv.in/is/image/bajajfinance/realme-gt-2-price-in-india?scl=1&fmt=png-alpha', category: 'mobiles', description: 'Premium design and Snapdragon 8 Gen 1', price: '$499' },
    { id: 18, name: 'Motorola Edge 40', image: 'https://rukminim2.flixcart.com/image/250/250/xif0q/mobile/2/m/o/edge-40-pay40030in-motorola-original-imagpqzchzhg6fex.jpeg?q=90&crop=false', category: 'mobiles', description: 'Motorola’s flagship with 144Hz OLED display', price: '$699' },
    { id: 19, name: 'Oppo Find X5 Pro', image: 'https://cms-assets.bajajfinserv.in/is/image/bajajfinance/oppo-find-x5-pro-5g-price-in-india-1?scl=1&fmt=png-alpha', category: 'mobiles', description: 'Oppo’s premium phone with Hasselblad camera tech', price: '$899' },
    { id: 20, name: 'Vivo V27 Pro', image: 'https://cms-assets.bajajfinserv.in/is/image/bajajfinance/vivo-v27-pro-1?scl=1&fmt=png-alpha', category: 'mobiles', description: 'Selfie-centric smartphone with a 50MP front camera', price: '$499' },

    // Laptops & Tablets
    { id: 21, name: 'Apple MacBook Pro 16"', image: 'https://cms-assets.bajajfinserv.in/is/image/bajajfinance/apple-macbook-pro-16-inch-2021-price-in-india-DPF-ADP?scl=1&fmt=png-alpha', category: 'laptops & tablets', description: 'Apple’s powerhouse with M1 Pro chip', price: '$2499' },
    { id: 22, name: 'Dell XPS 13', image: 'https://cms-assets.bajajfinserv.in/is/image/bajajfinance/dell-xps-series-price-list-in-india?scl=1&fmt=png-alpha', category: 'laptops & tablets', description: 'Premium ultrabook with Intel Core i7 processor', price: '$1499' },
    { id: 23, name: 'HP Spectre x360', image: 'https://cms-assets.bajajfinserv.in/is/image/bajajfinance/hp-spectre-x360-14-price-in-india?scl=1&fmt=png-alpha', category: 'laptops & tablets', description: '2-in-1 convertible with Intel Core i7 and 4K display', price: '$1799' },
    { id: 24, name: 'Lenovo ThinkPad X1 Carbon', image: 'https://cms-assets.bajajfinserv.in/is/image/bajajfinance/lenovo-thinkpad-x1?scl=1&fmt=png-alpha', category: 'laptops & tablets', description: 'Business laptop with top security features', price: '$2199' },
    { id: 25, name: 'Asus ROG Zephyrus G14', image: 'https://cms-assets.bajajfinserv.in/is/image/bajajfinance/asus-rog-zephyrus-g14-price-in-india?scl=1&fmt=png-alpha', category: 'laptops & tablets', description: 'Gaming laptop with AMD Ryzen 9 processor', price: '$1699' },
    { id: 26, name: 'Microsoft Surface Laptop 5', image: 'https://cms-assets.bajajfinserv.in/is/image/bajajfinance/microsoft-surface-laptop-5?scl=1&fmt=png-alpha', category: 'laptops & tablets', description: 'Lightweight and versatile laptop with Intel Core i7', price: '$1299' },
    { id: 27, name: 'Acer Swift 3', image: 'https://cms-assets.bajajfinserv.in/is/image/bajajfinance/acer-swift3-price?scl=1&fmt=png-alpha', category: 'laptops & tablets', description: 'Affordable laptop with AMD Ryzen 5 processor', price: '$699' },
    { id: 28, name: 'Razer Blade 15', image: 'https://www.bajajfinserv.in/content/dam/bajajfinserv/web/in/en/adp/Images/DPF/Sept/razer-blade-15-laptop-DPF-ADP.png', category: 'laptops & tablets', description: 'High-performance gaming laptop with RTX 3080', price: '$2299' },
    { id: 29, name: 'MSI GE76 Raider', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR01E8GaxOhldVLMaKBJ2XzGGYxoHBqDwW4Gw&s', category: 'laptops & tablets', description: 'Gaming laptop with Intel Core i9 and RTX 3080 Ti', price: '$2799' },
    { id: 30, name: 'Samsung Galaxy Book 3 Pro', image: 'https://images.samsung.com/is/image/samsung/p6pim/in/2302/gallery/in-galaxy-book3-pro-16-inch-np960-np960xfg-kc1in-thumb-534938627?$480_480_PNG$', category: 'laptops & tablets', description: 'Samsung’s sleek laptop with Intel Core i7', price: '$1399' },

    // Televisions
    { id: 31, name: 'LG OLED C1', image: 'https://www.lg.com/content/dam/channel/wcms/in/images/tvs/oled83c3psa_atrg_eail_in_c/OLED83C3PSA_ATRG_EAIL_IN_C-450x450.jpg/jcr:content/renditions/thum-350x350.jpeg', category: 'televisions', description: 'Best OLED TV with perfect blacks and vivid colors', price: '$1999' },
    { id: 32, name: 'Samsung QN90B', image: 'https://images.samsung.com/is/image/samsung/p6pim/in/qa98qn990ckxxl/gallery/in-qled-98qn990c-qa98qn990ckxxl-thumb-538370617?$200_200_PNG$', category: 'televisions', description: 'QLED TV with top-tier brightness and colors', price: '$1799' },
    { id: 33, name: 'Sony Bravia X90K', image: 'https://i.gadgets360cdn.com/large/sony_bravia_55x90j_tv_small_1623304149211.jpg?downsize=278:209&output-quality=80', category: 'televisions', description: 'LED TV with full-array local dimming', price: '$1499' },
    { id: 34, name: 'TCL 6-Series R655', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1fkpA_RPwGeD0z0IfeUtQRumKKzy8FqEegQ&s', category: 'televisions', description: 'Affordable QLED with great value for money', price: '$899' },
    { id: 35, name: 'Vizio 4K Smart TV', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBwGaBUl6CSBbRearW9fDDVpHJkNjP_2MMlw&s', category: 'televisions', description: 'Great smart TV with excellent color accuracy', price: '$599' },
    { id: 36, name: 'Hisense U8G', image: 'https://images-cdn.ubuy.co.in/643738b869d957689f6bc094-hisense-u8g-65-034-4k-ultra-hd-hdr.jpg', category: 'televisions', description: 'High-quality 4K TV with great HDR performance', price: '$899' },
    { id: 37, name: 'Samsung Frame TV', image: 'https://cms-assets.bajajfinserv.in/is/image/bajajfinance/samsung-frame-tv?scl=1&fmt=png-alpha', category: 'televisions', description: 'TV that doubles as artwork', price: '$2499' },
    { id: 38, name: 'LG NanoCell 90 Series', image: 'https://media.us.lg.com/transform/ecomm-PDPGalleryThumbnail-350x350/5eea49df-18fa-4a34-97c0-237bf7ceb923/md08000470-zoom-03-jpg', category: 'televisions', description: 'NanoCell technology for vibrant color reproduction', price: '$999' },
    { id: 39, name: 'Philips Ambilight 4K TV', image: 'https://images.philips.com/is/image/philipsconsumer/15d6d84022c44773867eafb70072c031', category: 'televisions', description: 'TV with Ambilight for immersive viewing experience', price: '$1199' },
    { id: 40, name: 'Sharp AQUOS 8K TV', image: 'https://5.imimg.com/data5/SELLER/Default/2020/11/VP/UC/ZY/3843894/sharp-aquos-127-cm-50-4k-uhd-android-tv-500x500.png', category: 'televisions', description: '8K TV with unrivaled picture clarity', price: '$5999' },
  ];

  const filteredProducts = products.filter((product) => product.category === category);

  return (
    <div className="category-page">
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)} Products</h1>
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <span className="product-price">{product.price}</span>
                <button className="add-to-cart" onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Coming Soon..</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;