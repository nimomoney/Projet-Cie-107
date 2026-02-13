import { defineConfig } from "hardhat/config";
import hardhatIgnition from "@nomicfoundation/hardhat-ignition"

export default defineConfig({
  solidity: {
    version: "0.8.28",
  },
  plugins: [hardhatIgnition]
});
