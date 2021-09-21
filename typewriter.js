const sentence = "hello there from lighthouse labs";

for (let i = 0; i < sentence.length; i++) {
  const delay = 500 * (i + 1)
  setTimeout(() => {
    process.stdout.write(sentence[i] + "\n");
  }, delay) 
}