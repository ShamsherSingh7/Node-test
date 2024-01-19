const array1 = ["tpubD8szuhbEMy3YsXcfREnurMrKu8b5mNS6iXkoPoPj3pdkHEX9wjgNAs4zgG56tEYiNQUjCQ9L4UUxsniaSvQyDVfzG86n8mAmNcyE7ppPzCL", "tpubD8szuhbEMy3YsXcfREnurMrKu8b5mNS6iXkoPoPj3pdkHEX9wjgNAs4zgG56tEYiNQUjCQ9L4UUxsniaSvQyDVfzG86n8mAmNcyE7ppPzCL-[legacy]"];
const array2 = ["HnKZ7xcEMBq9n1iNiLKz8soLwGezS3r7ErgbAbAGSZ9y", "Ars6dcaC2sKSQL7dJ88JHDx8ewS1DdDh5VuXotWypqVu"];

const result = {
  "btc": [
    {"store": array2[0], "xpub": array1[0]},
    {"store": array2[1], "xpub": array1[1]}
  ]
};

const resultJSON = JSON.stringify(result, null, 2);
console.log(resultJSON);