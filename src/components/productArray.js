let productArray = [
    {
        "id": 0,
        "title": "Soothing Lantern Diffuser",
        "description": "The Lantern Ultrasonic Diffuser features exquisite metal and glass construction, three diffusion modes, and 11 light features, including a candle-flicker option to set the ambience in your space.",
        "category": "Essential",
        "image": "https://images.ctfassets.net/qn2nypdyou3x/skuPrimaryImage23700/aa470af4b7c88350386c2326d532bf19/Lantern-Diffuser-SQ.jpg?q=75&fm=jpg&w=1080&h=1080",
        "price": 39
    },
    {
        "id": 1,
        "title": "Hydrating Face Moisturizer",
        "description": "This lightweight gel-cream formula, providing 72 hours of deep, long-lasting hydration. Perfect as part of your everyday routine and to prep skin for makeup. Suitable for all skin types.",
        "category": "Essential",
        "image": "https://cdn.shopify.com/s/files/1/0575/1305/0266/products/dive-in-moisturizer-with-formula_475x.jpg?v=1636136983",
        "price": 36 
    },
    {
        "id": 2,
        "title": "Rose Quartz Facial Massage Roller",
        "description": "This Rose Quartz Facial Massage Roller from My Pooja Box is unlike anything you've ever experienced before. This compact hand-held device boosts collagen production, improves the benefits of serums, and flushes out toxins for a smoother-looking complexion. This facial tool is manufactured with precise craftsmanship, resulting in a fine polished finish that will give a smooth touch to your skin. It is also used to enhance the effectiveness of serums, moisturisers, and face masks.",
        "category": "Essential",
        "image": "https://cdn.shopify.com/s/files/1/1371/8561/products/RoseQuartzCollection-crop_1024x1024.jpg",
        "price": 22 
    },
    {
        "id": 3,
        "title": "Silk Pillowcase + Sleep Mask Set",
        "description": "Luxuriously smooth and breathable, our 100% Mulberry Silk isn’t just easy on the eyes — it’s easy on your hair and skin, too.",
        "category": "Essential",
        "image": "https://caspercontent.imgix.net/3oExSs5jAywr0BK7YnMBbo/7935398f35b9307880c5b00e80004e2d/Overhead_Silk_Pillowcase___Sleep_Mask_set_Oatmilk_0004.jpg?auto=compress,format&q=65&w=900&ar=175:108&fit=crop",
        "price": 45 
    },
    {
        "id": 4,
        "title": "Five Minute Journal",
        "description": "The Five Minute Journal will help you focus on the positive and become more mindful. The ultimate package for a happier, more productive you. Printed on sustainably sourced paper stock from FSC suppliers.",
        "category": "Essential",
        "image": "https://cdn.shopify.com/s/files/1/1186/0402/products/5_Minute_Journal_Ecomm_1_92e33d4a-d624-4f3c-bbb9-a2b286d0ea7d_800x800_crop_center.jpg?v=1637591757",
        "price": 45 
    },
    {
        "id": 5,
        "title": "Everday Powder Blush",
        "description": "A blush that provides fantastic colour with ease and consistency.",
        "category": "Beauty",
        "image": "https://image.tfgmedia.co.za/image/1/process/486x486?source=https://cdn.tfgmedia.co.za/00/ProductImages/10039650.jpg",
        "price": 34 
    },
    {
        "id": 6,
        "title": "Lip Glow Oil",
        "description": "Nourishing lip oil - intense gloss - color-awakening. The Lip Glow lip balm is available as a glossy lip oil that deeply protects and enhances the lips, lastingly bringing out their natural color.",
        "category": "Beauty",
        "image": "https://eco-beauty.dior.com/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw122f4169/assets/Y0124000/Y0124000_C012400001_E01_ZHC.jpg",
        "price": 22 
    },
    {
        "id": 7,
        "title": "Vitamin Nectar Antioxidant Face Serum",
        "description": "A multivitamin skin nutrition serum that boosts skin with essential vitamins C, E & B5, minerals, antioxidants & hydration for a bright, healthy look.",
        "category": "Beauty",
        "image": "https://www.fresh.com/dw/image/v2/BDJQ_PRD/on/demandware.static/-/Sites-fresh_master_catalog/default/dw77d6d1bd/product_images/H00004853_main_pdp.jpg?sw=1350&sh=900&bgcolor=F7F7F8&sfrm=jpg",
        "price": 68 
    },
    {
        "id": 8,
        "title": "Gel Lab Pro Nail Polish",
        "description": "A line of carefully-edited, high quality polishes for the color-resistant. Polishes that consider the gracefulness of hands, and the role of subtle color as an element in the considered wardrobe.",
        "category": "Beauty",
        "image": "https://cdn.shopify.com/s/files/1/2299/7239/products/JHannah_Bottle_Fauna_675x900_crop_center.jpg?v=1597686609",
        "price": 16 
    },
    {
        "id": 9,
        "title": "Layered Opal Necklace",
        "description": "Shoo away your stacking woes with two chains bound seamlessly with a AAA quality cabochon cut opal pendant. Handcrafted in 18k gold vermeil.",
        "category": "Beauty",
        "image": "https://www.lulus.com/images/product/xlarge/5761536_1190231.jpg?w=375",
        "price": 98 
    },
    {
        "id": 10,
        "title": "Relax - The Good Patch",
        "description": "Plant-based wellness patches for when the struggle is real. Infused with Ashwagandha, Rhodiola, and Passionflower. Perfect for unwinding and decompressing after a long day.",
        "category": "Wellness",
        "image": "https://cdn.shopify.com/s/files/1/0054/8955/7622/products/RELAX-FRONT_58838464-30f5-489e-95e1-4a15d02b5307_1000x1122@2x.jpg?v=1615225487",
        "price": 98 
    },
    {
        "id": 11,
        "title": "Weighted Bangles, Set of 2",
        "description": "At 1 pounds each, Bala Bangles add a constant but comfortable resistance to your workout. Wildy versatile, they can be worn on wrists or ankles for training and recreational activities alike. So fold laundry, shred your biceps, go for a walk or train your core. The world just became your gym.",
        "category": "Wellness",
        "image": "https://assets.verishop.com/bala-bangles-1-lb-weighted-bangles-set-of-2/E40023001000250-2881615837.jpg?auto=format&cs=strip&fit=max&w=768&dpr=2",
        "price": 42 
    },
    {
        "id": 12,
        "title": "Matter - Long Term Brain Health",
        "description": "Take charge of your long-term brain health. Matter is a breakthrough product developed in partnership with the University of Oxford. Matter includes superior EPA and DHA omega-3 fatty acids 4x more readily absorbed than standard fish oil and anthocyanin antioxidants to further support cognitive health.",
        "category": "Wellness",
        "image": "https://longevity.technology/lifestyle/wp-content/uploads/2020/06/Elysium-pill-pot-W-1024x626.jpg",
        "price": 60 
    },
    {
        "id": 13,
        "title": "Luxe Weighted Blanket",
        "description": "Upping the ante in organic weighted blankets. Never before has a weighted blanket looked this stunning and felt so amazing. Created with our proprietary knitting technique and using the softest organic cotton, the Luxe Weighted Blanket provides unmatched comfort and best-in-class weight distribution. This is comfort worth weighting for.",
        "category": "Wellness",
        "image": "https://yaasa.com/wp-content/uploads/2021/08/Luxe-Weighted-Blanket-Dune-Dream-CT-00-1500x1500.jpg",
        "price": 69 
    },
    {
        "id": 14,
        "title": "The Silk Sunsscreen",
        "description": "Weightless, hydrating mineral sunscreen provides broad spectrum SPF 50 protection from UVA/UVB rays, visibly evens skin tone, and goes on sheer.",
        "category": "Wellness",
        "image": "https://www.tatcha.com/dw/image/v2/BCFF_PRD/on/demandware.static/-/Sites-master_catalog_tatcha/default/dwd5f48d37/images/large/TAT22_SilkSunscreen_Shot23_CapOn_shadow_1200x1200.jpg?sw=750&sh=750&q=60",
        "price": 69 
    }
]

export default productArray;