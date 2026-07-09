// ============================================================
// CHALLENGES: Convert .then().catch() → async/await + try/catch
// ============================================================
// Rule: Do NOT change the core functions (fetchUser, savePost etc.)
//       Only rewrite the part marked "YOUR TASK"
// ============================================================


// ---- CHALLENGE 1: Basic — Single fetch ----------------------
// Difficulty: ⭐

const getWeather = (city) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { karachi: "32°C", lahore: "28°C" };
      const result = data[city];
      if (result) resolve({ city, temp: result });
      else reject(new Error(`Weather not found for: ${city}`));
    }, 500);
  });
};

// YOUR TASK: rewrite this using async/await + try/catch
// getWeather("kar")
//   .then((data) => console.log(`${data.city}: ${data.temp}`))
//   .catch((err) => console.log("Error:", err.message));


const getCityWeather = async (cityName) => {
    try {
        const data  = await getWeather(cityName)
        console.log(`${data.city}: ${data.temp}`)
    } catch (error) {
        console.log("Error: ", error.message)
    }
}

getCityWeather('lahore')


// ---- CHALLENGE 2: Chained — Result of first used in second --
// Difficulty: ⭐⭐

const fetchUser = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = { 1: { id: 1, name: "Ali" }, 2: { id: 2, name: "Bilal" } };
      const user = users[userId];
      if (user) resolve(user);
      else reject(new Error(`User ${userId} not found`));
    }, 600);
  });
};

const fetchOrders = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const orders = { 1: ["Order#101", "Order#102"], 2: ["Order#201"] };
      const result = orders[userId];
      if (result) resolve(result);
      else reject(new Error(`No orders for user ${userId}`));
    }, 400);
  });
};

// YOUR TASK: rewrite this using async/await + try/catch
// fetchUser(1)
//   .then((user) => {
//     console.log("User:", user.name);
//     return fetchOrders(user.id);
//   })
//   .then((orders) => {
//     console.log("Orders:", orders);
//   })
//   .catch((err) => console.log("Error:", err.message));


// ---- CHALLENGE 3: Triple chain — 3 dependent steps ----------
// Difficulty: ⭐⭐⭐

const getProduct = (productId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const products = { 10: { id: 10, name: "Laptop", sellerId: 5 } };
      const p = products[productId];
      if (p) resolve(p);
      else reject(new Error(`Product ${productId} not found`));
    }, 500);
  });
};

const getSeller = (sellerId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const sellers = { 5: { id: 5, name: "TechStore", warehouseId: 9 } };
      const s = sellers[sellerId];
      if (s) resolve(s);
      else reject(new Error(`Seller ${sellerId} not found`));
    }, 400);
  });
};

const getWarehouse = (warehouseId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const warehouses = { 9: { id: 9, location: "Lahore" } };
      const w = warehouses[warehouseId];
      if (w) resolve(w);
      else reject(new Error(`Warehouse ${warehouseId} not found`));
    }, 300);
  });
};

// YOUR TASK: rewrite this using async/await + try/catch
// getProduct(10)
//   .then((product) => {
//     console.log("Product:", product.name);
//     return getSeller(product.sellerId);
//   })
//   .then((seller) => {
//     console.log("Seller:", seller.name);
//     return getWarehouse(seller.warehouseId);
//   })
//   .then((warehouse) => {
//     console.log("Ships from:", warehouse.location);
//   })
//   .catch((err) => console.log("Error:", err.message))
//   .finally(() => console.log("Product lookup complete."));


// ---- CHALLENGE 4: Express route — wrap in asyncHandler ------
// Difficulty: ⭐⭐⭐

// Assume these exist:
// - User model with User.findById(id)
// - asyncHandler wrapper

// YOUR TASK: rewrite this route using async/await inside asyncHandler
// const getUserRoute = asyncHandler((req, res) => {
//   return User.findById(req.params.id)
//     .then((user) => {
//       if (!user) {
//         return res.status(404).json({ message: "User not found" });
//       }
//       return res.status(200).json(user);
//     })
//     .catch((err) => {
//       res.status(500).json({ message: err.message });
//     });
// });


// ---- CHALLENGE 5: Multiple independent fetches --------------
// Difficulty: ⭐⭐⭐⭐
// Hint: these fetches are NOT dependent on each other.
//       Look up Promise.all() — you can still use it with await.

const fetchStats = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ visits: 1200, sales: 340 }), 700);
  });
};

const fetchNotifications = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["New order", "Low stock alert"]), 500);
  });
};

const fetchAnnouncement = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Announcement service down")), 300);
  });
};

// YOUR TASK: rewrite using async/await + try/catch
// Bonus: what happens to stats and notifications if announcement fails?
//        How would you handle partial failure?
// Promise.all([fetchStats(), fetchNotifications(), fetchAnnouncement()])
//   .then(([stats, notifications, announcement]) => {
//     console.log("Stats:", stats);
//     console.log("Notifications:", notifications);
//     console.log("Announcement:", announcement);
//   })
//   .catch((err) => console.log("Dashboard error:", err.message));