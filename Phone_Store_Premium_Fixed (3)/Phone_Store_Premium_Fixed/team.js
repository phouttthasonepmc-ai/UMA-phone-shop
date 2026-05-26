const phones = [
    {
        id: 1,
        name: "Iphone 17 pro max",
        price: 34000000,
        description: "- ຂະໜາດໜ້າຈໍ:6.9(ຄວາມລະອຽດ 1320x2868)\n- ຄວາມລະອຽດກ້ອງ:48MP\n- RAM:12GB\n- ROM:512GB\n- ລະບົບປະຕິບັດ:iOS26\n- ชິບ:Apple A19 Pro\n- Battery:4823mAh",
        image: "https://www.apple.com/v/iphone-17-pro/e/images/overview/contrast/iphone_17_pro__c4qscr35qsq6_large_2x.jpg"
    },
    {
        id: 2,
        name: "Iphone 17",
        price: 18900000,
        description: "ຂະໜາດໜ້າຈໍ:6.7(ຄວາມລະອຽດ 1206x2662)\n- ຄວາມລະອຽດກ້ອງ:48MP\n- RAM:8GB\n- ROM:512GB\n- ລະບົບປະຕິບັດ:iOS 26\n- ຊິບ:Apple A19\n- Battery:3692mAh",
        image: "https://www.apple.com/v/iphone-17/e/images/overview/contrast/iphone_17__di090vk53j6u_large_2x.jpg"
    },
    {
        id: 3,
        name: "Samsung s26 ultra",
        price: 34000000,
        description: "ຂະໜາດໜ້າຈໍ:6.9(ຄວາມລະອຽດ 1440x3120)\n- ຄວາມລະອຽດກ້ອງ:200MP\n- RAM:16GB\n- ROM:1TB\n- ລະບົບປະຕິບັດ:Android ONE UI 8.5\n- ຊິບ:Snapdragon 8 Elite Gen 5\n- Battery:5000mAh",
        image: "https://images.samsung.com/is/image/samsung/assets/th/s2602/specs/Galaxy-S26-Ultra_Cobalt-Violet_163x346.jpg?$163_346_PNG$"
    },
    {
        id: 4,
        name: "Samsung s26",
        price: 18900000,
        description: "ຂະໜາດໜ້າຈໍ:6.3(ຄວາມລະອຽດ 1080x2340)\n- ຄວາມລະອຽດກ້ອງ:50MP\n- RAM:12GB\n- ROM:512GB\n- ລະບົບປະຕິບັດ:Android ONE UI 8.5\n- ຊິບ:Exynos 2600\n- Battery:4300mAh",
        image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s26.jpg"
    },
    {
        id: 5,
        name: "Xiaomi 17 pro max",
        price: 29000000,
        description: "ຂະໜາດໜ້າຈໍ:6.9(ຄວາມລະອຽດ 1200x2608)\n- ຄວາມລະອຽດก້ອງ:50MP\n- RAM:16GB\n- ROM:1TB\n- ລະບົບປະຕິບັດ:Android HyperOS 3\n- ຊິບ:Snapdragon 8 Elite Gen 5\n- Battery:7500mAh",
        image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-17-pro-max.jpg"
    },
    {
        id: 6,
        name: "Xiaomi 17",
        price: 15000000,
        description: "ຂະໜາດໜ້າຈໍ:6.3(ຄວາມລະອຽດ 1220x2656)\n- ຄວາມລະອຽດກ້ອງ:50MP\n- RAM:16GB\n- ROM:512GB\n- ລະບົບປະຕິບັດ:Android HyperOS 3\n- ຊິບ:Snapdragon 8 Elite Gen 5\n- Battery:7000mAh",
        image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-17.jpg"
    },
    {
        id: 7,
        name: "Vivo x300 pro",
        price: 29000000,
        description: "ຂະໜາດໜ້າຈໍ:6.78(ຄວາມລະອຽດ 1260x2800)\n- ຄວາມລະອຽດກ້ອງ:50MP+200MP\n- RAM:16GB\n- ROM:512GB\n- ລະບົບປະຕິບັດ:Android OriginOS 6.0\n- ຊິບ:MediaTek Dimensity 9500\n- Battery:6510mAh",
        image: "https://fdn2.gsmarena.com/vv/bigpic/vivo-x300-pro.jpg"
    },
    {
        id: 8,
        name: "Vivo x300",
        price: 16000000,
        description: "ຂະໜາດໜ້າຈໍ:6.31(ຄວາມລະອຽດ 1216x2640)\n- ຄວາມລະອຽດກ້ອງ:50MP+200MP\n- RAM:16GB\n- ROM:1TB\n- ລະບົບປະຕິບັດ:Android OriginOS 6.0\n- ຊິບ:MediaTek Dimensity 9500\n- Battery:6040mAh",
        image: "https://fdn2.gsmarena.com/vv/bigpic/vivo-x300.jpg"
    },
    {
        id: 9,
        name: "Oppo Find X9 Pro",
        price: 27000000,
        description: "ຂະໜາດໜ້າຈໍ:6.78(ຄວາມລະອຽດ 1272x2772)\n- ຄວາມລະອຽດກ້ອງ:50MP+200MP\n- RAM:16GB\n- ROM:512GB\n- ລະບົບປະຕິບັດ:Android ColorOS 16\n- ຊິບ:MediaTek Dimensity 9500\n- Battery:7500mAh",
        image: "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x9-pro.jpg"
    },
    {
        id: 10,
        name: "Oppo Find X9",
        price: 16000000,
        description: "ຂະໜາດໜ້າຈໍ:6.59(ຄວາມລະອຽດ 1256x2760)\n- ຄວາມລະອຽດກ້ອງ:50MP\n- RAM:16GB\n- ROM:512GB\n- ລະບົບປະຕິບັດ:Android ColorOS 16\n- ຊິບ:MediaTek Dimensity 9500\n- Battery:7025mAh",
        image: "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x9.jpg"
    },
    {
        id: 11,
        name: "Iphone 17 air",
        price: 25900000,
        description: "- ຂະໜາດໜ້າຈໍ:6.6(ຄວາມລະອຽດ 1260x2740)\n- ຄວາມລະອຽດກ້ອງ:48MP\n- RAM:8GB\n- ROM:256GB\n- ລະບົບປະຕິບັດ:iOS 26\n- ຊິບ:Apple A19\n- Battery:3100mAh",
        image: "https://www.apple.com/v/iphone-17/e/images/overview/contrast/iphone_17__di090vk53j6u_large_2x.jpg"
    },
    {
        id: 12,
        name: "Iphone 17 pro",
        price: 29900000,
        description: "- ຂະໜາດໜ້າຈໍ:6.3(ຄວາມລະອຽດ 1206x2622)\n- ຄວາມລະອຽດກ້ອງ:48MP\n- RAM:12GB\n- ROM:256GB\n- ລະບົບປະຕິບັດ:iOS 26\n- ຊິບ:Apple A19 Pro\n- Battery:3950mAh",
        image: "https://www.apple.com/v/iphone-17-pro/e/images/overview/contrast/iphone_17_pro__c4qscr35qsq6_large_2x.jpg"
    },
    {
        id: 13,
        name: "Iphone 16",
        price: 16900000,
        description: "- ຂະໜາດໜ້າຈໍ:6.1(ຄວາມລະອຽດ 1179x2556)\n- ຄວາມລະອຽດກ້ອງ:48MP\n- RAM:8GB\n- ROM:122GB\n- ລະບົບປະຕິບັດ:iOS 18\n- ຊິບ:Apple A18\n- Battery:3561mAh",
        image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16.jpg"
    },
    {
        id: 14,
        name: "Samsung s26 plus",
        price: 22500000,
        description: "- ຂະໜາດໜ້າຈໍ:6.7(ຄວາມລະອຽດ 1440x3120)\n- ຄວາມລະອຽດກ້ອງ:50MP\n- RAM:12GB\n- ROM:256GB\n- ລະບົບປະຕິບັດ:Android 16 (One UI 8)\n- ຊິບ:Exynos 2600 / Snapdragon 8 Gen 5\n- Battery:4900mAh",
        image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s26-plus.jpg"
    },
    {
        id: 15,
        name: "Samsung fold 7",
        price: 42900000,
        description: "- ຂະໜາດໜ້າຈໍ:7.6(ຄວາມລະອຽດ 1856x2160)\n- ຄວາມລະອຽດກ້ອງ:50MP\n- RAM:12GB\n- ROM:512GB\n- ລະບົບປະຕິບັດ:Android 16 (One UI 8.1.1)\n- ຊິບ:Snapdragon 8 Gen 5\n- Battery:4500mAh",
        image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold6.jpg"
    },
    {
        id: 16,
        name: "Samsung flip 7",
        price: 24900000,
        description: "- ຂະໜາດໜ້າຈໍ:6.7(ຄວາມລະອຽດ 1080x2640)\n- ความละเอียดกล้อง:50MP\n- RAM:12GB\n- ROM:256GB\n- ລະບົບປະຕິບັດ:Android 16 (One UI 8)\n- ຊິບ:Snapdragon 8 Gen 5\n- Battery:4100mAh",
        image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-flip6.jpg"
    },
    {
        id: 17,
        name: "Xiaomi 17 ultra",
        price: 28500000,
        description: "- ຂະໜາດໜ້າຈໍ:6.73(ຄວາມລະອຽດ 1440x3200)\n- ຄວາມລະອຽດກ້ອງ:50MP (Leica Optics)\n- RAM:16GB\n- ROM:512GB\n- ລະບົບປະຕິບັດ:Android 16 (HyperOS 3)\n- ຊິບ:Snapdragon 8 Gen 5\n- Battery:5600mAh",
        image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-17-ultra-global.jpg"
    },
    {
        id: 18,
        name: "Xiaomi redmi 15 pro",
        price: 11500000,
        description: "- ຂະໜາດໜ້າຈໍ:6.67(ຄວາມລະອຽດ 1220x2712)\n- ຄວາມລະອຽດກ້ອງ:50MP\n- RAM:12GB\n- ROM:256GB\n- ລະບົບປະຕິບັດ:Android 15 (HyperOS 2)\n- ຊິບ:MediaTek Dimensity 8400\n- Battery:5500mAh",
        image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-15-pro-global.jpg"
    },
    {
        id: 19,
        name: "Xiaomi poco f8 ultra",
        price: 14900000,
        description: "- ຂະໜາດໜ້າຈໍ:6.67(ຄວາມລະອຽດ 1440x3200)\n- ຄວາມລະອຽດກ້ອງ:50MP\n- RAM:12GB\n- ROM:512GB\n- ລະບົບປະຕິບັດ:Android 16 (HyperOS 3)\n- ຊິບ:Snapdragon 8 Gen 4\n- Battery:6100mAh",
        image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-f6-pro.jpg"
    },
    {
        id: 20,
        name: "Vivo x300 ultra",
        price: 29000000,
        description: "- ຂະໜາດໜ້າຈໍ:6.78(ຄວາມລະອຽດ 1440x3200)\n- ຄວາມລະອຽດກ້ອງ:200MP (ZEISS Optics)\n- RAM:16GB\n- ROM:512GB\n- ລະບົບປະຕິບັດ:Android 16 (OriginOS 6)\n- ຊິບ:Snapdragon 8 Gen 5\n- Battery:5700mAh",
        image: "https://fdn2.gsmarena.com/vv/bigpic/vivo-x100-ultra.jpg"
    },
    {
        id: 21,
        name: "Vivo iqoo 15",
        price: 15500000,
        description: "- ຂະໜາດໜ້າຈໍ:6.78(ຄວາມລະອຽດ 1260x2800)\n- ຄວາມລະອຽດກ້ອງ:50MP\n- RAM:12GB\n- ROM:256GB\n- ລະບົບປະຕິບັດ:Android 15 (Funtouch OS 15)\n- ຊິບ:Snapdragon 8 Gen 4\n- Battery:6100mAh",
        image: "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-15.jpg"
    },
    {
        id: 22,
        name: "Vivo x fold 5",
        price: 39900000,
        description: "- ຂະໜາດໜ້າຈໍ:8.03(ຄວາມລະອຽດ 2200x2480)\n- ຄວາມລະອຽດກ້ອງ:50MP\n- RAM:16GB\n- ROM:512GB\n- ລະບົບປະຕິບັດ:Android 15 (OriginOS 5)\n- ຊິບ:Snapdragon 8 Gen 4\n- Battery:5700mAh",
        image: "https://fdn2.gsmarena.com/vv/bigpic/vivo-x-fold3-pro.jpg"
    },
    {
        id: 23,
        name: "Oppo find x8 pro",
        price: 24500000,
        description: "- ຂະໜາດໜ້າຈໍ:6.78(ຄວາມລະອຽດ 1264x2780)\n- ຄວາມລະອຽດກ້ອງ:50MP (Hasselblad Camera)\n- RAM:16GB\n- ROM:512GB\n- ລະບົບປະຕິບັດ:Android 15 (ColorOS 15)\n- ຊິບ:MediaTek Dimensity 9400\n- Battery:5910mAh",
        image: "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x8-pro.jpg"
    },
    {
        id: 24,
        name: "Oppo find n6",
        price: 38900000,
        description: "- ຂະໜາດໜ້າຈໍ:7.82(ຄວາມລະອຽດ 2268x2440)\n- ຄວາມລະອຽດກ້ອງ:64MP\n- RAM:16GB\n- ROM:512GB\n- ລະບົບປະຕິບັດ:Android 15 (ColorOS 15)\n- ຊິບ:Snapdragon 8 Gen 4\n- Battery:5060mAh",
        image: "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-n3.jpg"
    },
    {
        id: 25,
        name: "Oppo reno15 pro",
        price: 13500000,
        description: "- ຂະໜາດໜ້າຈໍ:6.7(ຄວາມລະອຽດ 1080x2412)\n- ຄວາມລະອຽດກ້ອງ:50MP\n- RAM:12GB\n- ROM:256GB\n- ລະບົບປະຕິບັດ:Android 15 (ColorOS 15)\n- ຊິບ:MediaTek Dimensity 8300\n- Battery:5000mAh",
        image: "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno15-pro-global.jpg"
    }
];

let cart = [];
let currentDiscount = 0; // ປະກາດໄວ້ເທິງສຸດເດີອ້າຍ

function renderPhones(brandFilter = 'all') {
    const container = document.getElementById('phone-container');
    if(!container) return;
    
    const filteredPhones = brandFilter === 'all' 
        ? phones 
        : phones.filter(p => p.name.toLowerCase().includes(brandFilter.toLowerCase()));

    container.innerHTML = filteredPhones.map(p => {
        return `
            <div class="car-card">
                <img src="${p.image}" alt="${p.name}">
                <div class="car-card-content">
                    <h3 class="car-title">${p.name}</h3>
                    <p class="car-price">${p.price.toLocaleString()} Kip</p>
                    <div class="card-buttons-group">
                        <button class="button card-btn" data-id="${p.id}" onclick="addToCart(${p.id}, this)">ເພີ່ມລົງກະຕ່າ</button>
                        <button class="button detail-btn" onclick="showDetails(${p.id})">ລາຍລະອຽດ</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function filterBrand(event, brandName) {
    const items = document.querySelectorAll('.brand-item');
    items.forEach(item => item.classList.remove('active'));
    
    if(event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
    renderPhones(brandName);
}

function addToCart(id, buttonElement) {
    const phone = phones.find(p => p.id === id);
    // ກັອບປີ້ຄ່າໄປ ໂດຍບໍ່ໃຫ້ກະທົບກັບອາເຣລາຍການຫຼັກ
    cart.push({...phone}); 
    
    updateCartUI();

    if (buttonElement) {
        buttonElement.classList.add('added');
        buttonElement.innerText = "ຂອບໃຈນ້ອງຊາຍ";
        buttonElement.style.pointerEvents = "none";

        setTimeout(() => {
            buttonElement.classList.remove('added');
            buttonElement.innerText = "ເພີ່ມລົງກະຕ່າ";
            buttonElement.style.pointerEvents = "auto";
        }, 1000);
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

// 🟢 ປັບປຸງໃຫ້ມັນເອີ້ນຟັງຊັນຄຳນວນສ່ວນຫຼຸດນຳທຸກຄັ້ງທີ່ກະຕ່າປ່ຽນແປງ
function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');

    if(cartCount) cartCount.innerText = cart.length;

    if (cart.length === 0) {
        if(cartItems) cartItems.innerHTML = '<p class="empty-msg">ກະລຸນາເລືອກໂທລະສັບໃສ່ກະຕ່າ.</p>';
        currentDiscount = 0; // ລ້າງສ່ວນຫຼຸດຄືນ
        const msg = document.getElementById('discountResult');
        if(msg) msg.innerText = "";
        const codeInput = document.getElementById('discountInput');
        if(codeInput) codeInput.value = "";
        updateCartTotal();
        return;
    }

    if(cartItems) {
        cartItems.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>${item.price.toLocaleString()} Kip</p>
                </div>
                <span class="remove-btn" onclick="removeFromCart(${index})">ຍົກເລີກ</span>
            </div>
        `).join('');
    }

    updateCartTotal(); // ໄລ່ລາຄາໃໝ່ທັນທີ
}

// 🟢 ຟັງຊັນກວດສອບໂຄ້ດສ່ວນຫຼຸດ
function checkDiscount() {
    const codeInput = document.getElementById('discountInput');
    const msg = document.getElementById('discountResult');
    
    if (!codeInput || !msg) return;

    const code = codeInput.value.trim();
    
    if (code === "LAO2024") {
        currentDiscount = 0.05; // ຫຼຸດ 5%
        msg.innerText = "✓ ໃຊ້ໂຄ້ດສຳເລັດ! ທ່ານໄດ້ຮັບສ່ວນຫຼຸດ 5%.";
        msg.style.color = "green";
    } else {
        currentDiscount = 0;
        msg.innerText = "✗ ລະຫັດສ່ວນຫຼຸດບໍ່ຖືກຕ້ອງ!";
        msg.style.color = "red";
    }
    
    updateCartTotal(); 
}

// 🟢 ຟັງຊັນໄລ່ລາຄາລວມ (ແກ້ໄຂບັນຫາ NaN ແລ້ວ)
function updateCartTotal() {
    // ບວກກົງໆຈາກ item.price ເພາະໃນອາເຣ cart ຂອງອ້າຍເປັນລາຍການແຍກແຖວ
    let total = cart.reduce((sum, item) => sum + item.price, 0);
    let discountAmount = total * currentDiscount;
    let finalTotal = total - discountAmount;
    
    const cartTotalEl = document.getElementById('cart-total');
    if (cartTotalEl) {
        cartTotalEl.innerText = `${finalTotal.toLocaleString()} Kip`;
    }
    
    localStorage.setItem('discountAmount', discountAmount);
    localStorage.setItem('fullPrice', total);
}

// 🟢 ຟັງຊັນກົດຊື້
function checkout() {
    // ດຶງຄ່າຊື່ ແລະ ເບີໂທ ຈາກ Input ໃໝ່
    const name = document.getElementById('customerName').value.trim();
    const phone = document.getElementById('customerPhone').value.trim();

    if (cart.length === 0) {
        alert("ກະຕ່າຂອງທ່ານຍັງຫວ່າງເປົ່າ!");
        return;
    }
    
    // ຖ້າບໍ່ໃສ່ຊື່ ຫຼື ເບີໂທ ຈະບໍ່ໃຫ້ຜ່ານ
    if (!name || !phone) {
        alert("ກະລຸນາປ້ອນ ຊື່ ແລະ ເບີໂທລະສັບ ຂອງທ່ານກ່ອນສັ່ງຊື້!");
        return;
    }

    let total = cart.reduce((sum, item) => sum + item.price, 0);
    let discountAmount = total * currentDiscount;
    let finalTotal = total - discountAmount;

    // ມັດຮວມຂໍ້ມູນທັງໝົດ ລວມທັງຊື່ ແລະ ເບີໂທ
    const orderData = {
        items: cart,
        customerName: name,
        customerPhone: phone,
        total: total,             
        discount: discountAmount,   
        finalTotal: finalTotal,     
        date: new Date().toLocaleString('lo-LA')
    };

    localStorage.setItem('phoneOrder', JSON.stringify(orderData));
    
    // ລ້າງກະຕ່າ
    cart = [];
    updateCartUI();

    window.location.href = 'phone-receipt.html';
}

function showDetails(id) {
    const phone = phones.find(p => p.id === id);
    const modal = document.getElementById('detailModal');
    
    document.getElementById('modalImg').src = phone.image;
    document.getElementById('modalTitle').innerText = phone.name;
    document.getElementById('modalDescription').innerText = phone.description;
    document.getElementById('modalPrice').innerText = `${phone.price.toLocaleString()} Kip`;  
    
    document.getElementById('modalAddBtn').onclick = () => {
        const mainCardBtn = document.querySelector(`button[data-id="${phone.id}"]`);
        addToCart(phone.id, mainCardBtn);
        closeModal();
    };

    modal.style.display = "flex";
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

function closeModal() {
    const modal = document.getElementById('detailModal');
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = "none";
    }, 400); 
}

window.onclick = function(event) {
    const modal = document.getElementById('detailModal');
    if (event.target == modal) closeModal();
}

window.onload = () => {
    renderPhones();
};
function checkout() {
    const name = document.getElementById('customerName').value;
    const phone = document.getElementById('customerPhone').value;

    if (cart.length === 0) {
        alert("ກະຕ່າຂອງທ່ານຍັງຫວ່າງເປົ່າ!");
        return;
    }
    
    // ກວດສອບວ່າໃສ່ຊື່ແລະເບີໂທແລ້ວຫຼືຍັງ
    if (!name || !phone) {
        alert("ກະລຸນາໃສ່ຊື່ ແລະ ເບີໂທລະສັບກ່ອນສັ່ງຊື້!");
        return;
    }

    let total = cart.reduce((sum, item) => sum + item.price, 0);
    let discountAmount = total * currentDiscount;
    let finalTotal = total - discountAmount;

    const orderData = {
        items: cart,
        customerName: name,      // ເກັບຊື່
        customerPhone: phone,    // ເກັບເບີໂທ
        total: total,
        discount: discountAmount,
        finalTotal: finalTotal,
        date: new Date().toLocaleString('lo-LA')
    };

    localStorage.setItem('phoneOrder', JSON.stringify(orderData));
    window.location.href = 'phone-receipt.html';
}