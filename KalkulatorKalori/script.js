document.getElementById("formData").addEventListener("submit", function (e) {
  e.preventDefault();

  const berat = parseFloat(document.getElementById("berat").value);
  const tinggi = parseFloat(document.getElementById("tinggi").value);
  const usia = parseFloat(document.getElementById("usia").value);
  const gender = document.querySelector("input[name='gender']:checked").value;
  const aktivitas = parseFloat(document.getElementById("aktivitas").value);

  let bmr;

  if (gender === "male") {
    bmr = 66 + (13.7 * berat) + (5 * tinggi) - (6.8 * usia);
  } else {
    bmr = 655 + (9.6 * berat) + (1.8 * tinggi) - (4.7 * usia);
  }

  const tdee = bmr * aktivitas;

  const karbo = Math.round((0.5 * tdee) / 4); 
  const protein = Math.round((0.2 * tdee) / 4); 
  const lemak = Math.round((0.3 * tdee) / 9); 

  const saran = [
    `🍚 Karbohidrat (${karbo}g): nasi, kentang, roti gandum, oatmeal, ubi`,
    `🍗 Protein (${protein}g): ayam tanpa kulit, telur, tahu/tempe, ikan, daging sapi tanpa lemak`,
    `🥑 Lemak (${lemak}g): alpukat, kacang-kacangan, minyak zaitun, biji-bijian`
  ];

  document.getElementById("kaloriTotal").textContent = tdee.toFixed(0);
  document.getElementById("karbo").textContent = karbo;
  document.getElementById("protein").textContent = protein;
  document.getElementById("lemak").textContent = lemak;

  if (!document.getElementById("saranMakanan")) {
    const saranList = document.createElement("ul");
    saranList.id = "saranMakanan";
    saranList.className = "mt-3";
    saran.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      saranList.appendChild(li);
    });
    document.getElementById("hasilCard").appendChild(saranList);
  } else {
    const list = document.getElementById("saranMakanan");
    list.innerHTML = "";
    saran.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });
  }

  document.getElementById("hasilCard").style.display = "block";
});
