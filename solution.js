const inputArray = {
    "eth": [["HnKZ7xcEMBq9n1iNiLKz8soLwGezS3r7ErgbAbAGSZ9y", "0x1cf4e5001ab8d369d2d76b87658ee719f85e2d6e"]],
    "ethTokens": [["HnKZ7xcEMBq9n1iNiLKz8soLwGezS3r7ErgbAbAGSZ9y", "0x1cf4e5001ab8d369d2d76b87658ee719f85e2d6e", "DAI"], ["HnKZ7xcEMBq9n1iNiLKz8soLwGezS3r7ErgbAbAGSZ9y", "0x1cf4e5001ab8d369d2d76b87658ee719f85e2d6e", "USDT"]],
    "bch": [["HnKZ7xcEMBq9n1iNiLKz8soLwGezS3r7ErgbAbAGSZ9y", "tpubD6NzVbkrYhZ4XQucnzr7LNP8MrMjASTn7h1Xz9Eqj8rnq3bxL31qZF1t9k9vJ4GQJKQA63b1RZQixmwxhaX74xzWR4Hm9t8mBAoquxrNLQh"]],
    "eos": [["HnKZ7xcEMBq9n1iNiLKz8soLwGezS3r7ErgbAbAGSZ9y", "proxyrozy123"]],
    "eosTokens": [["HnKZ7xcEMBq9n1iNiLKz8soLwGezS3r7ErgbAbAGSZ9y", "eedae1dair5w", "IQ"], ["HnKZ7xcEMBq9n1iNiLKz8soLwGezS3r7ErgbAbAGSZ9y", "eedae1dair5w", "TLOS"]],
    "trx": [["HnKZ7xcEMBq9n1iNiLKz8soLwGezS3r7ErgbAbAGSZ9y", "419ad6fcdd3b423843d1b7077e3f08e50f02fa911c"]],
    "trxTokens": [["HnKZ7xcEMBq9n1iNiLKz8soLwGezS3r7ErgbAbAGSZ9y", "419ad6fcdd3b423843d1b7077e3f08e50f02fa911c", "TWJ"], ["HnKZ7xcEMBq9n1iNiLKz8soLwGezS3r7ErgbAbAGSZ9y", "419ad6fcdd3b423843d1b7077e3f08e50f02fa911c", "BTT"], ["HnKZ7xcEMBq9n1iNiLKz8soLwGezS3r7ErgbAbAGSZ9y", "419ad6fcdd3b423843d1b7077e3f08e50f02fa911c", "ANTE"], ["HnKZ7xcEMBq9n1iNiLKz8soLwGezS3r7ErgbAbAGSZ9y", "419ad6fcdd3b423843d1b7077e3f08e50f02fa911c", "TWM"], ["HnKZ7xcEMBq9n1iNiLKz8soLwGezS3r7ErgbAbAGSZ9y", "419ad6fcdd3b423843d1b7077e3f08e50f02fa911c", "USDT"], ["HnKZ7xcEMBq9n1iNiLKz8soLwGezS3r7ErgbAbAGSZ9y", "419ad6fcdd3b423843d1b7077e3f08e50f02fa911c", "WIN"]],
    "xmr": [["HnKZ7xcEMBq9n1iNiLKz8soLwGezS3r7ErgbAbAGSZ9y", "xxx", "544abeb63b8e250a43903a6520ef1f54888655b1ae7d87d0a76f09404f61730c"]],
    "btc": ["HnKZ7xcEMBq9n1iNiLKz8soLwGezS3r7ErgbAbAGSZ9y", "tpubD8szuhbEMy3YsXcfREnurMrKu8b5mNS6iXkoPoPj3pdkHEX9wjgNAs4zgG56tEYiNQUjCQ9L4UUxsniaSvQyDVfzG86n8mAmNcyE7ppPzCL"],
    "ltc": ["HnKZ7xcEMBq9n1iNiLKz8soLwGezS3r7ErgbAbAGSZ9y", "tpubD98231kvgEd78q3yYBCLGZj9zpK3mqAb7dzJBt7Zki8Z1EgAv3Jw3k3Eqp2iiYzqwvUD9jciD9L321ziDUqoJQ2o5uUvhWuegQ5MEvBcM3M"]
  };
  
  const outputArray = {
    "btc": [{"store": inputArray["btc"][0], "xpub": inputArray["btc"][1]}],
    "ltc": [{"store": inputArray["ltc"][0], "xpub": inputArray["ltc"][1]}],
    "eth": [{"store": inputArray["eth"][0][0], "address": inputArray["eth"][0][1]}],
    "ethTokens": [
      {"store": inputArray["ethTokens"][0][0], "address": inputArray["ethTokens"][0][1], "name": inputArray["ethTokens"][0][2]},
      {"store": inputArray["ethTokens"][1][0], "address": inputArray["ethTokens"][1][1], "name": inputArray["ethTokens"][1][2]}
    ],
    "bch": [{"store": inputArray["bch"][0][0], "xpub": inputArray["bch"][0][1]}],
    "eos": [{"store": inputArray["eos"][0][0], "address": inputArray["eos"][0][1]}],
    "eosTokens": [
      {"store": inputArray["eosTokens"][0][0], "address": inputArray["eosTokens"][0][1], "name": inputArray["eosTokens"][0][2]},
      {"store": inputArray["eosTokens"][1][0], "address": inputArray["eosTokens"][1][1], "name": inputArray["eosTokens"][1][2]}
    ],
    "trx": [{"store": inputArray["trx"][0][0], "address": inputArray["trx"][0][1]}],
    "trxTokens": [
      {"store": inputArray["trxTokens"][0][0], "address": inputArray["trxTokens"][0][1], "name": inputArray["trxTokens"][0][2]},
      {"store": inputArray["trxTokens"][1][0], "address": inputArray["trxTokens"][1][1], "name": inputArray["trxTokens"][1][2]},
      {"store": inputArray["trxTokens"][2][0], "address": inputArray["trxTokens"][2][1], "name": inputArray["trxTokens"][2][2]},
      {"store": inputArray["trxTokens"][3][0], "address": inputArray["trxTokens"][3][1], "name": inputArray["trxTokens"][3][2]},
      {"store": inputArray["trxTokens"][4][0], "address": inputArray["trxTokens"][4][1], "name": inputArray["trxTokens"][4][2]},
      {"store": inputArray["trxTokens"][5][0], "address": inputArray["trxTokens"][5][1], "name": inputArray["trxTokens"][5][2]}
    ],
    "xmr": [{"store": inputArray["xmr"][0][0], "address": inputArray["xmr"][0][1], "viewkey": inputArray["xmr"][0][2]}]
  };
  
  const resultJSON = JSON.stringify(outputArray, null, 2);
  console.log(resultJSON);
  