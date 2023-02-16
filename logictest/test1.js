let words = "beever";

// Buatlah skema logika untuk memuat kata diatas menjadi berbentuk seperti berikut :
// b
// be
// bee
// beev
// beeve
// beever

for (let i = 1; i <= words.length; i++) {
  console.log(words.slice(0, i));
}
