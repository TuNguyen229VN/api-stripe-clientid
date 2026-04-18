const fs = require("fs");

async function fetchData() {
  try {
    const res = await fetch("https://provinces.open-api.vn/api/v2/w/");
    const data = await res.json();

    fs.writeFileSync("wards2.json", JSON.stringify(data, null, 2));

    console.log("✅ Đã lưu data vào provinces.json");
  } catch (err) {
    console.error("❌ Lỗi:", err);
  }
}

fetchData();