db.products.insertOne(
    { 
        item: "television", 
        price: 41999, 
        brand: "SONY", 
        specifications: { size: 43, screen: "LED", resolution: "4k" } 
    }
)

db.products.insertOne(
    { 
        item: "refrigerator", 
        price: 27990, 
        brand: "LG", 
        specifications: { capacity: "246 Litres", configuration: "Freezer on top" } 
    }
)

db.products.insertOne(
    { 
        item: "phone",
        price: 19999, 
        brand: "APPLE", 
        specifications: { color: "deep purple", size: "128 GB", camera: "48MP", OS: "iOS" } 
    }
)

db.products.insertOne(
    { 
        item: "controller",
        price: 1599, 
        brand: "Redgear", 
        specifications: { color: "black", connectivity: "bluetooth" } 
    }
)

db.products.insertOne(
    { 
        item: "Airdopes 170",
        price: 1299, 
        brand: "boAt", 
        specifications: { color: "black", connectivity: "bluetooth", playtime: "50H" } 
    }
)

db.products.insertOne(
    { 
        item: "Microwave",
        price: 10290, 
        brand: "Panasonic", 
        specifications: { color: "black", capacity: "23L", type: "convection" } 
    }
)

db.products.insertOne(
    { 
        item: "Smart Watch",
        price: 3498, 
        brand: "Noise", 
        specifications: { color: "rose pink", display: "AMOLED", screen_size: "1.78 inches", battery: "7 days", connectivity: "bluetooth" } 
    }
)

db.products.insertOne(
    { 
        item: "Speaker",
        price: 2999, 
        brand: "JBL", 
        specifications: { color: "blue", battery: "5 hours", connectivity: "bluetooth", port: "type C" } 
    }
)

db.products.insertOne(
    { 
        item: "laptop",
        price: 52999, 
        brand: "Acer", 
        specifications: { 
            color: "gray", 
            screen_size: "15.6 inches", 
            processor: "Intel Core i5 12th gen", 
            RAM: "8GB", 
            ROM: "512 GB", 
            OS: "Windows 11 home", 
            weight: "1.8kg",
            graphics: "NVIDIA GeForce RTX 2050"
        } 
    }
)

db.products.insertOne(
    { 
        item: "Juicer",
        price: 1978, 
        brand: "NutriPro", 
        specifications: { color: "silver", feature: "light weight", speeds: 2 , watts: 500 } 
    }
)

db.products.insertOne(
    {
        item: "Headphones",
        price: 4990, 
        brand: "SONY", 
        specifications: { color: "Taupe", connectivity: "bluetooth", playtime: "50 hours", formfactor: "On ear" } 
    }
)



db.products.insertOne(
    {
        item: "Mouse",
        price: 299, 
        brand: "Zebronics", 
        specifications: { color: "Black", connectivity: "wired", port: "Gold Plated USB", type: "Gaming", LED: "Multi-color LED lights" } 
    }
)