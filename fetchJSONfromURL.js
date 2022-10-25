const { ethers } = require("ethers")
const fetch = require("node-fetch")

const provider = new ethers.providers.JsonRpcProvider(`https://rpc-mumbai.maticvigil.com`)

const ERC721_ABI = ["function tokenURI(uint256) public view returns (string)"]

const address = "0x988eF5bBfDd41Fa776c34843ffbBBE3aED747346" // TEST address on mumbai
const contract = new ethers.Contract(address, ERC721_ABI, provider)

const main = async () => {
    const tokenURI = await contract.tokenURI("0")

    console.log(`\nReading from ${address}\n`)
    console.log(`Token URI of token 0 is: ${tokenURI}\n`)

    try {
        const nft = await contract.tokenURI("0")
        console.log(nft)
        // await fetch("https://sochain.com/api/v2/address/LTC/LMSuo8W7CiXs8oFs1sJh77AQ54tCZM42Ay")
        //     .then((res) => res.json())
        //     .then((json) => console.log(json.status))
        const response = await fetch("https://sochain.com/api/v2/address/LTC/LMSuo8W7CiXs8oFs1sJh77AQ54tCZM42Ay")
        const json = await response.json()
        console.log(json.status)
        // ipfs://bafkreibm6zmszdwaohsc3c2y6kqer6sn6mi3twj42xrfzttnubmvgyhrsy
    } catch (err) {
        console.log("Error:" + err)
    }
}

main()
