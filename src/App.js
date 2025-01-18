
// import React, { useState } from "react";
// import { ethers } from "ethers";

// const SimpleStore = ({ contractAddress="0xd8b934580fcE35a11B58C6D73aDeE468a2833fa8", abi }) => {
//   const [data, setData] = useState(""); // State for input data
//   const [retrievedData, setRetrievedData] = useState(""); // State for retrieved data

//   // Function to store data on the blockchain
//   const handleStore = async () => {
//     try {
//       // Request the user to connect their wallet
//       await window.ethereum.request({ method: "eth_requestAccounts" });

//       // Connect to the blockchain
//       const provider = new ethers.BrowserProvider(window.ethereum);
//       const signer = await provider.getSigner();

//       // Debug: Log the signer address
//       console.log("Signer Address:", await signer.getAddress());

//       // Create a contract instance
//       const contract = new ethers.Contract(contractAddress, abi, signer);

//       // Call the setHealthData function in the contract
//       console.log("Storing data:", data);
//       const tx = await contract.setHealthData(data);

//       // Wait for the transaction to be confirmed
//       console.log("Transaction hash:", tx.hash);
//       await tx.wait();

//       alert("Data stored successfully!");
//     } catch (error) {
//       console.error("Error storing data:", error.message || error);
//     }
//   };

//   // Function to retrieve data from the blockchain
//   const handleRetrieve = async () => {
//     try {
//       // Request the user to connect their wallet
//       await window.ethereum.request({ method: "eth_requestAccounts" });

//       // Connect to the blockchain
//       const provider = new ethers.BrowserProvider(window.ethereum);
//       const signer = await provider.getSigner();

//       // Debug: Log the signer address
//       console.log("Signer Address:", await signer.getAddress());

//       // Create a contract instance
//       const contract = new ethers.Contract(contractAddress, abi, signer);

//       // Call the getHealthData function in the contract
//       console.log("Retrieving data...");
//       const result = await contract.getHealthData();

//       // Update the retrieved data state
//       console.log("Retrieved data:", result);
//       setRetrievedData(result);
//     } catch (error) {
//       console.error("Error retrieving data:", error.message || error);
//     }
//   };

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial" }}>
//       <h1>Simple Health Data Store</h1>

//       {/* Input for health data */}
//       <input
//         type="text"
//         value={data}
//         onChange={(e) => setData(e.target.value)}
//         placeholder="Enter health data"
//         style={{
//           padding: "10px",
//           marginBottom: "10px",
//           width: "300px",
//           fontSize: "16px",
//         }}
//       />

//       {/* Store Data Button */}
//       <button
//         onClick={handleStore}
//         style={{
//           margin: "5px",
//           padding: "10px 20px",
//           backgroundColor: "blue",
//           color: "white",
//           fontSize: "16px",
//           border: "none",
//           cursor: "pointer",
//         }}
//       >
//         Store Data
//       </button>

//       {/* Retrieve Data Button */}
//       <button
//         onClick={handleRetrieve}
//         style={{
//           margin: "5px",
//           padding: "10px 20px",
//           backgroundColor: "green",
//           color: "white",
//           fontSize: "16px",
//           border: "none",
//           cursor: "pointer",
//         }}
//       >
//         Retrieve Data
//       </button>

//       {/* Display Retrieved Data */}
//       <div style={{ marginTop: "20px" }}>
//         <h3>Retrieved Data:</h3>
//         <p
//           style={{
//             padding: "10px",
//             backgroundColor: "#f4f4f4",
//             border: "1px solid #ccc",
//             width: "300px",
//             wordWrap: "break-word",
//           }}
//         >
//           {retrievedData || "No data retrieved yet."}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SimpleStore;

import React from 'react'
import SimpleStore from './SimpleStore'
const App = () => {
  return (
    <div>
      <SimpleStore/>
    </div>
  )
}

export default App