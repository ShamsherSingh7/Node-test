const fastify = require("fastify")({ logger: true });
const axios = require("axios");
const FORGINGBLOCK_API_URL = "https://api.forgingblock.io/invoice/status";
const COINGECKO_API_URL = "https://api.coingecko.com/api/v3/simple/price";

fastify.post("/status/invoice", async (request, reply) => {
  try {
    const { invoice } = request.body;

    const response = await axios.get(
      `${FORGINGBLOCK_API_URL}?invoiceId=${invoice}&paymentMethodId=BTC&_=1575903768088`
    );

    const data = response.data;

    return {
      btcAddress: data.btcAddress,
      status: data.status,
      orderAmount: data.orderAmount,
      orderAmountFiat: data.orderAmountFiat,
    };
  } catch (error) {
    if (error.response.status == "400"||error.response.status == "504") {
      return reply.status(400).send({ error: "Invoice ID doesn't corresponds to the correct invoice" });
    } else {
      console.error(error);
      return reply.status(500).send({ error: "Internal Server Error" });
    }
  }
});

fastify.post("/status/eth/invoice", async (request, reply) => {
  try {
    const { invoice } = request.body;

    const forgingBlockResponse = await axios.get(
      `${FORGINGBLOCK_API_URL}?invoiceId=${invoice}&paymentMethodId=BTC&_=1575903768088`
    );
    const forgingBlockData = forgingBlockResponse.data;

    if (!forgingBlockData || !forgingBlockData.orderAmountFiat) {
      return reply.status(400).send({ error: "Invalid invoice ID" });
    }
    const coingeckoResponse = await axios.get(
      `${COINGECKO_API_URL}?ids=ethereum&vs_currencies=usd`
    );
    const ethRate = coingeckoResponse.data.ethereum.usd;

    return { ethRate };
  } catch (error) {
    if (error.response.status == "400"||error.response.status == "504") {
      return reply.status(400).send({ error: "Invoice ID doesn't corresponds to the correct invoice" });
    } else {
      console.error(error);
      return reply.status(500).send({ error: "Internal Server Error" });
    }
  }
});

fastify.listen({ port: 3001, host: "127.0.0.1" }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
