// ========================================
// RELUX - Premium Shoe Store
// JavaScript Functionality
// ========================================

// WhatsApp Numbers
const WHATSAPP_1 = '593980919560';
const WHATSAPP_2 = '593958760697';

// Products Database
// TODO: Replace with actual product data from user
const products = {
    jordan: [
        { 
            id: 1, 
            name: 'Nike Air Jordan 1 Retro OG x Travis Scott High Mocha', 
            price: '$169.99', 
            image: 'images/jordan/travis-scott-mocha.jpg', 
            sizes: ['38', '39', '40', '41', '42', '43', '44'], 
            description: 'Edición limitada de las icónicas Air Jordan 1, diseñada en colaboración con Travis Scott. Con una mezcla de gamuza marrón mocha, cuero negro y detalles en blanco, estas zapatillas destacan por su diseño exclusivo y detalles como el swoosh negro y el logo "Cactus Jack" en el talón.',
            colors: 'Mocha, Negro, Blanco'
        },
        { 
            id: 2, 
            name: 'Air Jordan 1 Retro High Obsidian UNC', 
            price: '$159.99', 
            image: 'images/jordan/obsidian-unc.jpg', 
            sizes: ['38', '39', '40', '41', '42', '43', '44'], 
            description: 'Las Air Jordan 1 Retro High Obsidian UNC combinan lo mejor del estilo clásico y moderno. Con una mezcla de gamuza y cuero en tonos obsidianos y azules, junto con el icónico swoosh, rindiendo homenaje a los colores de la Universidad de Carolina del Norte.',
            colors: 'Obsidiano, Azul, Blanco'
        },
        { 
            id: 3, 
            name: 'Air Jordan 1 High OG Dior', 
            price: '$199.99', 
            image: 'images/jordan/dior.jpg', 
            sizes: ['38', '39', '40', '41', '42', '43', '44'], 
            description: 'La colaboración más exclusiva entre Nike y Dior presenta las Air Jordan 1 High OG Dior. Cuentan con cuero de alta calidad en tonos grises y blancos, junto con el swoosh de Dior en un patrón distintivo y una suela transparente.',
            colors: 'Gris, Blanco, Negro'
        },
        { 
            id: 4, 
            name: 'Air Jordan 3 "J Balvin - Rio"', 
            price: '$149.99', 
            image: 'images/jordan/jbalvin-rio.jpg', 
            sizes: ['38', '39', '40', '41', '42', '43'], 
            description: 'Las Air Jordan 3 "J Balvin - Rio" combinan el icónico estilo de Jordan con la energía vibrante del cantante colombiano J Balvin. Con parte superior de cuero negro y detalles en tonos rojos y amarillos en la entresuela.',
            colors: 'Negro, Rojo, Amarillo'
        },
        { 
            id: 5, 
            name: 'Air Jordan 3 Black Cat', 
            price: '$149.99', 
            image: 'images/jordan/black-cat.jpg', 
            sizes: ['38', '39', '40', '41', '42', '43', '44'], 
            description: 'Las Air Jordan 3 Black Cat presentan un diseño oscuro y sofisticado con parte superior de cuero negro combinado con detalles en la famosa textura "elephant print" en gris. Ideal para quienes buscan una zapatilla versátil.',
            colors: 'Negro, Gris'
        },
        { 
            id: 6, 
            name: 'Air Jordan 3 Retro', 
            price: '$149.99', 
            image: 'images/jordan/retro-white.jpg', 
            sizes: ['38', '39', '40', '41', '42', '43'], 
            description: 'Las Air Jordan 3 Retro presentan una versión renovada de las clásicas Jordan 3, con parte superior de cuero blanco de alta calidad y detalles en la icónica textura "elephant print" en gris. Estilo limpio y sofisticado.',
            colors: 'Blanco, Gris'
        },
        { 
            id: 7, 
            name: 'Air Jordan 3 "Lucky Shorts"', 
            price: '$157.99', 
            image: 'images/jordan/lucky-shorts.jpg', 
            sizes: ['38', '39', '40', '41', '42', '43'], 
            description: 'Las Air Jordan 3 "Lucky Shorts" presentan un diseño fresco y deportivo, con parte superior de cuero blanco y detalles en tonos beige y azul. Se inspira en la moda casual y veraniega.',
            colors: 'Blanco, Beige, Azul'
        },
        { 
            id: 8, 
            name: 'Air Jordan 1 Low SE', 
            price: '$129.99', 
            image: 'images/jordan/low-se-blue.jpg', 
            sizes: ['38', '39', '40', '41', '42', '43', '44'], 
            description: 'Las Air Jordan 1 Low SE presentan un diseño fresco y deportivo, con parte superior de cuero blanco y detalles en azul que aportan un toque vibrante y moderno. Silueta baja clásica versátil y cómoda.',
            colors: 'Blanco, Azul'
        },
        { 
            id: 9, 
            name: 'Air Jordan 4 Retro "Aluminum"', 
            price: '$129.99', 
            image: 'images/jordan/aluminum.jpg', 
            sizes: ['38', '39', '40', '41', '42', '43', '44'], 
            description: 'Las Air Jordan 4 Retro "Aluminum" presentan una combinación elegante y fresca, con parte superior de cuero blanco y detalles en un suave tono azul aluminio. Diseño de malla en los laterales para ventilación.',
            colors: 'Blanco, Azul'
        },
        { 
            id: 10, 
            name: 'Air Jordan 1 High OG "Hyper Royal"', 
            price: '$189.99', 
            image: 'images/jordan/hyper-royal.jpg', 
            sizes: ['38', '39', '40', '41', '42', '43', '44'], 
            description: 'Las Air Jordan 1 High OG "Hyper Royal" combinan un diseño fresco y vibrante con la clásica silueta de Jordan 1. Parte superior de cuero y gamuza en tonos azules y blancos con swoosh plateado.',
            colors: 'Azul, Blanco, Gris'
        }
    ],
    nike: [
        { 
            id: 1, 
            name: 'Nike Calm', 
            price: '$43.99', 
            image: 'images/nike/calm.jpg', 
            sizes: ['38', '39', '40', '41', '42', '43', '44'], 
            description: 'Las Nike Calm son sandalias de estilo cómodo y moderno, perfectas para los días de descanso. Con una estructura simple y minimalista, cuentan con una tira ancha y suela de goma antideslizante.',
            colors: 'Negro'
        },
        { 
            id: 2, 
            name: 'Nike Air Max Plus', 
            price: '$159.99', 
            image: 'images/nike/air-max-plus.jpg', 
            sizes: ['38', '39', '40', '41', '42', '43', '44'], 
            description: 'Las Nike Air Max Plus combinan un diseño innovador con comodidad excepcional. Parte superior de malla negra y detalles en material sintético brillante con unidad Air-Sole en la suela.',
            colors: 'Negro'
        },
        { 
            id: 3, 
            name: 'Nike Blazer Mid \'77 Vintage', 
            price: '$109.99', 
            image: 'images/nike/blazer-mid-77.jpg', 
            sizes: ['38', '39', '40', '41', '42', '43'], 
            description: 'Las Nike Blazer Mid \'77 Vintage ofrecen un estilo retro clásico con parte superior de cuero blanco y detalles en negro, manteniendo el diseño original de los años 70 con un toque moderno.',
            colors: 'Blanco, Negro'
        },
        { 
            id: 4, 
            name: 'Nike Air Max 90', 
            price: '$115.99', 
            image: 'images/nike/air-max-90.jpg', 
            sizes: ['38', '39', '40', '41', '42', '43'], 
            description: 'Las Nike Air Max 90 ofrecen una combinación única de estilo y comodidad. Parte superior de malla y sintético en tonos grises, negros y verdes, con detalles en naranja.',
            colors: 'Gris, Negro, Verde, Naranja'
        },
        { 
            id: 5, 
            name: 'Nike Shox TL Fade Metallic Silver', 
            price: '$129.99', 
            image: 'images/nike/shox-tl.jpg', 
            sizes: ['39', '40', '41', '42', '43', '44'], 
            description: 'Las Nike Shox TL Fade Metallic Silver combinan un diseño futurista con las famosas cápsulas Shox en la suela para una amortiguación superior y un estilo único.',
            colors: 'Plateado, Gris'
        },
        { 
            id: 6, 
            name: 'Nike Pacific', 
            price: '$169.99', 
            image: 'images/nike/pacific-green.jpg', 
            sizes: ['38', '39', '40', '41', '42', '43'], 
            description: 'Las Nike Pacific presentan un diseño retro y elegante, con parte superior de lona blanca combinada con detalles en cuero sintético verde. Inspiradas en zapatillas clásicas de running.',
            colors: 'Blanco, Verde, Marrón'
        },
        { 
            id: 7, 
            name: 'Nike Air Max DN', 
            price: '$147.99', 
            image: 'images/nike/air-max-dn.jpg', 
            sizes: ['38', '39', '40', '41', '42', '43', '44'], 
            description: 'Las Nike Air Max DN combinan un diseño audaz con la tecnología más avanzada. Parte superior de malla azul con cápsulas de aire expuestas en la suela.',
            colors: 'Azul, Negro'
        },
        { 
            id: 8, 
            name: 'Nike Court Royale', 
            price: '$107.99', 
            image: 'images/nike/court-royale.jpg', 
            sizes: ['38', '39', '40', '41', '42', '43'], 
            description: 'Las Nike Court Royale presentan un diseño sencillo y elegante, inspirado en las zapatillas de tenis clásicas. Parte superior de cuero blanco con swoosh negro destacado.',
            colors: 'Blanco, Negro'
        },
        { 
            id: 9, 
            name: 'Nike Killshot 2 Leather', 
            price: '$79.99', 
            image: 'images/nike/killshot-2.jpg', 
            sizes: ['38', '39', '40', '41', '42', '43'], 
            description: 'Las Nike Killshot 2 Leather ofrecen un diseño limpio y clásico, con parte superior de cuero blanco combinado con detalles en negro y suela de goma marrón. Estilo retro de tenis.',
            colors: 'Blanco, Negro, Marrón'
        },
        { 
            id: 10, 
            name: 'Nike Pacific Classic', 
            price: '$119.99', 
            image: 'images/nike/pacific-classic.jpg', 
            sizes: ['38', '39', '40', '41', '42', '43', '44'], 
            description: 'Las Nike Pacific ofrecen un diseño elegante y versátil con parte superior de lona blanca combinada con detalles en cuero negro y gamuza gris. Silueta deportiva y ligera.',
            colors: 'Blanco, Negro, Gris, Marrón'
        }
    ],
    airforce: [
        { 
            id: 1, 
            name: 'Air Force 1 Low "Drake NOCTA - Certified Lover Boy"', 
            price: '$139.99', 
            image: 'images/airforce/drake-nocta.jpg', 
            sizes: ['38', '39', '40', '41', '42', '43', '44'], 
            description: 'Las Air Force 1 Low "Drake NOCTA - Certified Lover Boy" combinan el diseño icónico de las Air Force 1 con el estilo exclusivo de Drake y su línea NOCTA. Un toque de lujo y autenticidad.',
            colors: 'Blanco'
        },
        { 
            id: 2, 
            name: 'Air Force 1 Low "Panda"', 
            price: '$159.99', 
            image: 'images/airforce/panda.jpg', 
            sizes: ['38', '39', '40', '41', '42', '43', '44'], 
            description: 'Las Air Force 1 Low "Panda" presentan una combinación de blanco y negro que crea un contraste visual impresionante. Silueta clásica con swoosh negro en el lateral.',
            colors: 'Blanco, Negro'
        },
        { 
            id: 3, 
            name: 'Nike Air Force 1 Black', 
            price: '$139.99', 
            image: 'images/airforce/black.jpg', 
            sizes: ['38', '39', '40', '41', '42', '43', '44'], 
            description: 'Las Nike Air Force 1 Black ofrecen un diseño elegante y minimalista en todo negro. Parte superior de cuero suave y suela de goma resistente.',
            colors: 'Negro'
        },
        { 
            id: 4, 
            name: 'Nike Air Force 1', 
            price: '$109.99', 
            image: 'images/airforce/classic.jpg', 
            sizes: ['38', '39', '40', '41', '42', '43', '44'], 
            description: 'Las Nike Air Force 1 mantienen el diseño clásico con parte superior de cuero blanco y swoosh negro. Tecnología de amortiguación Air-Sole para máximo confort.',
            colors: 'Blanco, Negro'
        },
        { 
            id: 5, 
            name: 'Nike Air Force 1 Low Off-White Green', 
            price: '$179.99', 
            image: 'images/airforce/off-white-green.jpg', 
            sizes: ['38', '39', '40', '41', '42', '43'], 
            description: 'Las Nike Air Force 1 Low Off-White Green ofrecen un estilo audaz con parte superior de cuero verde brillante y detalles exclusivos de Off-White con su característica etiqueta.',
            colors: 'Verde, Blanco'
        },
        { 
            id: 6, 
            name: 'Nike Air Force 1 Low Off-White Yellow', 
            price: '$179.99', 
            image: 'images/airforce/off-white-yellow.jpg', 
            sizes: ['38', '39', '40', '41', '42', '43'], 
            description: 'Las Nike Air Force 1 Low Off-White Yellow destacan por su llamativa parte superior de cuero amarillo, con detalles de Off-White incluyendo la famosa etiqueta de tela.',
            colors: 'Amarillo, Blanco'
        },
        { 
            id: 7, 
            name: 'Nike Air Force 1 Low Off-White Blue', 
            price: '$179.99', 
            image: 'images/airforce/off-white-blue.jpg', 
            sizes: ['38', '39', '40', '41', '42', '43'], 
            description: 'Las Nike Air Force 1 Low Off-White Blue presentan un diseño atractivo con parte superior de cuero azul y detalles exclusivos de Off-White. Estilo único y moderno.',
            colors: 'Azul, Blanco'
        },
        { 
            id: 8, 
            name: 'Air Force 107', 
            price: '$106.99', 
            image: 'images/airforce/af107.jpg', 
            sizes: ['38', '39', '40', '41', '42', '43', '44'], 
            description: 'Las Air Force 107 presentan un diseño sencillo y limpio con parte superior de cuero blanco y detalles en verde. Perfectas para un look casual con el estilo clásico de Nike.',
            colors: 'Blanco, Verde'
        }
    ],
    dunk: [
        { 
            id: 1, 
            name: 'Air Jordan 1 Low Travis Scott x Fragment', 
            price: '$169.99', 
            image: 'images/dunk/travis-fragment.jpg', 
            sizes: ['38', '39', '40', '41', '42', '43', '44'], 
            description: 'Las Air Jordan 1 Low Travis Scott x Fragment presentan una colaboración icónica que combina el estilo inconfundible de Travis Scott y la legendaria marca Fragment. Diseño exclusivo con detalles únicos.',
            colors: 'Blanco, Negro, Azul'
        },
        { 
            id: 2, 
            name: 'StrangeLove x Nike Dunk Low SB Valentine\'s Day', 
            price: '$159.99', 
            image: 'images/dunk/strangelove-valentine.jpg', 
            sizes: ['36', '37', '38', '39', '40', '41', '42'], 
            description: 'Las StrangeLove x Nike Dunk Low SB Valentine\'s Day son una colaboración única que celebra el amor. Parte superior de gamuza en tonos rosados con detalles románticos.',
            colors: 'Rosa, Blanco'
        },
        { 
            id: 3, 
            name: 'Nike Dunk Low Retro', 
            price: '$99.99', 
            image: 'images/dunk/low-retro.jpg', 
            sizes: ['38', '39', '40', '41', '42', '43', '44'], 
            description: 'Las Nike Dunk Low Retro ofrecen un estilo clásico con parte superior de cuero blanco y negro, y el swoosh negro en el lateral. Diseño atemporal perfecto para uso urbano.',
            colors: 'Blanco, Negro'
        },
        { 
            id: 4, 
            name: 'Nike Dunk Low Classic', 
            price: '$115.99', 
            image: 'images/dunk/low classic.jpg', 
            sizes: ['38', '39', '40', '41', '42', '43'], 
            description: 'Las Nike Dunk Low tienen parte superior de cuero blanco con detalles en negro, versátiles y perfectas para el uso diario. Swoosh negro y suela de goma para un look clásico.',
            colors: 'Blanco, Negro'
        },
        { 
            id: 5, 
            name: 'Nike Dunk Low Coast UCLA', 
            price: '$189.99', 
            image: 'images/dunk/coast-ucla.jpg', 
            sizes: ['38', '39', '40', '41', '42', '43', '44'], 
            description: 'Las Nike Dunk Low Coast UCLA Basketball Shoes rinden homenaje al equipo de baloncesto de UCLA, con parte superior de cuero blanco y detalles en azul y dorado.',
            colors: 'Blanco, Azul, Dorado'
        },
        { 
            id: 6, 
            name: 'Nike SB Dunk Bear', 
            price: '$129.99', 
            image: 'images/dunk/sb-bear.jpg', 
            sizes: ['38', '39', '40', '41', '42', '43'], 
            description: 'Las Nike SB Dunk Bear presentan un diseño único inspirado en el mundo animal, combinando colores vibrantes y parte superior de gamuza suave. Perfecto para amantes del skate.',
            colors: 'Marrón, Beige, Negro'
        },
        { 
            id: 7, 
            name: 'Nike Dunk Low Next Nature', 
            price: '$89.99', 
            image: 'images/dunk/next-nature.jpg', 
            sizes: ['36', '37', '38', '39', '40', '41', '42'], 
            description: 'Las Nike Dunk Low Next Nature combinan un diseño ecológico con estilo urbano. Parte superior de materiales sostenibles con compromiso medioambiental.',
            colors: 'Rosa, Blanco'
        },
        { 
            id: 8, 
            name: 'Nike Dunk Low Orange', 
            price: '$109.99', 
            image: 'images/dunk/low-orange.jpg', 
            sizes: ['38', '39', '40', '41', '42', '43', '44'], 
            description: 'Las Nike Dunk Low presentan un diseño simple pero elegante con parte superior de cuero de calidad en tonos claros. Perfectas para un look casual y cómodo.',
            colors: 'Naranja, Blanco'
        }
    ],
    adidas: [
        { 
            id: 1, 
            name: 'Adidas Campus Light Bad Bunny', 
            price: '$179.99', 
            image: 'images/adidas/campus-bad-bunny.jpg', 
            sizes: ['38', '39', '40', '41', '42', '43', '44'], 
            description: 'Las Adidas Campus Light Bad Bunny presentan un diseño minimalista con parte superior de cuero blanco, inspirada en el estilo único del famoso artista. Exclusividad y comodidad.',
            colors: 'Blanco'
        },
        { 
            id: 2, 
            name: 'Adidas Forum Buckle Low x Bad Bunny', 
            price: '$219.99', 
            image: 'images/adidas/forum-bad-bunny.jpg', 
            sizes: ['38', '39', '40', '41', '42', '43'], 
            description: 'Las Adidas Forum Buckle Low "White" son una colaboración con Bad Bunny. Diseño elegante y deportivo con parte superior de cuero blanco y cierre con hebilla único.',
            colors: 'Blanco'
        },
        { 
            id: 3, 
            name: 'Adidas Samba OG "White / Black"', 
            price: '$69.99', 
            image: 'images/adidas/samba-og.jpg', 
            sizes: ['38', '39', '40', '41', '42', '43', '44'], 
            description: 'Las Adidas Samba OG presentan una silueta clásica que combina un diseño atemporal con parte superior de cuero blanco y detalles en negro. Perfectas para look urbano.',
            colors: 'Blanco, Negro'
        },
        { 
            id: 4, 
            name: 'Adidas Yeezy v3', 
            price: '$119.99', 
            image: 'images/adidas/yeezy-v3.jpg', 
            sizes: ['39', '40', '41', '42', '43', '44'], 
            description: 'Las Adidas Yeezy v3 presentan diseño futurista con parte superior de materiales sintéticos en tonos gris y negro. Tecnología de amortiguación para máximo confort.',
            colors: 'Gris, Negro'
        },
        { 
            id: 5, 
            name: 'Adidas Gazelle', 
            price: '$89.99', 
            image: 'images/adidas/gazelle.jpg', 
            sizes: ['38', '39', '40', '41', '42', '43'], 
            description: 'Las Adidas Tenis Gazelle ofrecen un diseño retro con parte superior de gamuza negra y detalles blancos. Estilo vintage con toque urbano.',
            colors: 'Negro, Blanco'
        }
    ],
    newbalance: [
        { 
            id: 1, 
            name: 'New Balance 550', 
            price: '$139.99', 
            image: 'images/newbalance/nb-550.jpg', 
            sizes: ['38', '39', '40', '41', '42', '43', '44'], 
            description: 'Las New Balance 550 presentan un diseño clásico y deportivo, con parte superior de cuero blanco combinada con detalles en verde. Suela de goma duradera con estilo retro moderno.',
            colors: 'Blanco, Verde'
        },
        { 
            id: 2, 
            name: 'New Balance 9060 "Sea Salt Raincloud"', 
            price: '$139.99', 
            image: 'images/newbalance/nb-9060.jpg', 
            sizes: ['38', '39', '40', '41', '42', '43', '44'], 
            description: 'Las New Balance 9060 "Sea Salt Raincloud" combinan diseño moderno y minimalista, con parte superior de gamuza y malla en tonos gris claro y blanco. Tecnología de amortiguación premium.',
            colors: 'Gris, Blanco'
        }
    ]
};

// Brand Names
const brandNames = {
    jordan: 'Jordan',
    nike: 'Nike',
    airforce: 'Air Force One',
    dunk: 'Dunk',
    adidas: 'Adidas',
    newbalance: 'New Balance'
};

// DOM Elements
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const brandCards = document.querySelectorAll('.brand-card');
const brandsSection = document.querySelector('.brands-section');
const productsSection = document.querySelector('.products-section');
const productsGrid = document.getElementById('productsGrid');
const brandTitle = document.getElementById('brandTitle');
const backBtn = document.getElementById('backBtn');
const modal = document.getElementById('productModal');
const modalClose = document.getElementById('modalClose');

// Mobile Menu Toggle
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Brand Card Click - Show Products
brandCards.forEach(card => {
    card.addEventListener('click', () => {
        const brand = card.dataset.brand;
        showProducts(brand);
    });
});

// Back Button - Return to Brands
backBtn.addEventListener('click', () => {
    productsSection.classList.remove('active');
    brandsSection.style.display = 'block';
    
    // Scroll to brands section
    brandsSection.scrollIntoView({ behavior: 'smooth' });
});

// Show Products for a Brand
function showProducts(brand) {
    const brandProducts = products[brand];
    const brandName = brandNames[brand];
    
    // Update title
    brandTitle.textContent = brandName;
    
    // Clear grid
    productsGrid.innerHTML = '';
    
    // Populate products
    brandProducts.forEach(product => {
        const productCard = createProductCard(product, brand);
        productsGrid.appendChild(productCard);
    });
    
    // Show products section
    brandsSection.style.display = 'none';
    productsSection.classList.add('active');
    
    // Scroll to products
    productsSection.scrollIntoView({ behavior: 'smooth' });
}

// Create Product Card Element
function createProductCard(product, brand) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="product-placeholder" style="display: none;">
                <span>${brandNames[brand].charAt(0)}</span>
            </div>
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">${product.price}</p>
        </div>
    `;
    
    // Click to open modal
    card.addEventListener('click', () => {
        openModal(product, brand);
    });
    
    return card;
}

// Open Product Modal
function openModal(product, brand) {
    const modalImage = document.getElementById('modalImage');
    const modalName = document.getElementById('modalName');
    const modalBrand = document.getElementById('modalBrand');
    const modalPrice = document.getElementById('modalPrice');
    const modalDescription = document.getElementById('modalDescription');
    const modalSizes = document.getElementById('modalSizes');
    const whatsapp1 = document.getElementById('whatsapp1');
    const whatsapp2 = document.getElementById('whatsapp2');
    
    // Set image
    modalImage.src = product.image;
    modalImage.alt = product.name;
    modalImage.onerror = function() {
        this.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect fill="%231A1A1A" width="400" height="400"/><text x="50%" y="50%" font-family="serif" font-size="48" fill="%23C9A962" text-anchor="middle" dy=".3em">' + brandNames[brand].charAt(0) + '</text></svg>';
    };
    
    // Set info
    modalName.textContent = product.name;
    modalBrand.textContent = brandNames[brand];
    modalPrice.textContent = product.price;
    modalDescription.textContent = product.description;
    
    // Set sizes and colors
    let sizesHtml = '';
    if (product.sizes && product.sizes.length > 0) {
        sizesHtml += `
            <h4>Tallas disponibles</h4>
            <div class="sizes-grid">
                ${product.sizes.map(size => `<span class="size-tag">${size}</span>`).join('')}
            </div>
        `;
    }
    if (product.colors) {
        sizesHtml += `
            <h4 style="margin-top: 1rem;">Colores</h4>
            <p style="color: var(--white-muted);">${product.colors}</p>
        `;
    }
    modalSizes.innerHTML = sizesHtml;
    
    // Set WhatsApp links with product info
    const message = encodeURIComponent(`Hola RELUX! Me interesa cotizar: ${product.name} - Precio: ${product.price} - Marca: ${brandNames[brand]}. Esta disponible?`);
    
    const whatsapp1Url = `https://wa.me/${WHATSAPP_1}?text=${message}`;
    const whatsapp2Url = `https://wa.me/${WHATSAPP_2}?text=${message}`;
    
    whatsapp1.href = whatsapp1Url;
    whatsapp2.href = whatsapp2Url;
    
    // Remove any previous handlers
    whatsapp1.onclick = null;
    whatsapp2.onclick = null;
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Modal
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header background on scroll
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        header.style.background = 'linear-gradient(180deg, rgba(10,10,10,0.98) 0%, rgba(10,10,10,0.9) 100%)';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe brand cards for animation
document.querySelectorAll('.brand-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
    observer.observe(card);
});

// Initialize - Handle image errors gracefully
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        // Handle broken images
        if (this.classList.contains('logo-img')) {
            this.style.display = 'none';
            const logoText = this.nextElementSibling;
            if (logoText) logoText.style.display = 'block';
        }
    });
});

console.log('🚀 RELUX Store initialized successfully!');
console.log('📱 WhatsApp 1:', WHATSAPP_1);
console.log('📱 WhatsApp 2:', WHATSAPP_2);

