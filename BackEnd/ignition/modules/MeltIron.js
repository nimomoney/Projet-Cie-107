import { buildModule } from "@nomicfoundation/hardhat-ignition/modules"

export default buildModule("MeltIronBuilder", m => {
    const contract = m.contract("MeltIron")
    return { contract }
})