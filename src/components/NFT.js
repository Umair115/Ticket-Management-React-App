import { ethers } from "ethers";
import myNft from "./MyNFT.json";



const NFT=()=>{


    async function connectAccounts(){

        const provider = new ethers.providers.JsonRpcProvider();
        const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; //contract address
        const  signer = provider.getSigner("0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266") //account address
        // const provider = new ethers.providers.Web3Provider(window.ethereum);
        // const signer = provider.getSigner();
        const contract = new ethers.Contract(
            contractAddress,
          myNft.abi,
          signer
        )
        try{
            let overrides = {
              // To convert Ether to Wei:
              value: ethers.utils.parseEther("1.0")     // ether in this case MUST be a string
          
              // Or you can use Wei directly if you have that:
              // value: someBigNumber
              // value: 1234   // Note that using JavaScript numbers requires they are less than Number.MAX_SAFE_INTEGER
              // value: "1234567890"
              // value: "0x1234"
          
              // Or, promises are also supported:
              // value: provider.getBalance(addr)
          };
const cnic = "4200084173697" ;
          // Pass in the overrides as the 3rd parameter to your 2-parameter function:
            const response = await contract.mintNFT(cnic,overrides);
            console.log("response : ",response);
            var tid = (await contract.tokID()).toString()
            console.log("token id : ",tid);
            // setmintID(tid)
          }
          catch(err){
            console.log(err)
          }
        
        // const NFTCont = new ethers.Contract(contractAddress, conABI, provider);
        // const NFTSigner = NFTCont.connect(signer);
      }


return(
    <div>
        <button onClick={()=>connectAccounts()}>Mint Nft</button>
    </div>
)

}

export default NFT;
