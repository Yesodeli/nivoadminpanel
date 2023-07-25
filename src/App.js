import { useState, useEffect } from "react";
import MyResponsivePie from "./Nivo/Pie/NivoPie";
import MyResponsiveLine from "./Nivo/Line/NivoLine";
import AMyResponsiveLine from "./Nivo/Line/AlternateLine";
import Box from "./Box/Box";
import "./App.css";
import MyResponsiveRadialBar from "./Nivo/Radial/NivoRadial";

function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    // Simulate fetching data (replace with your actual data fetching logic)
    setTimeout(() => {
      setDataLoaded(true);
    }, 1000); // Adjust the timeout as per your data fetching requirements
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "200vh",
        backgroundColor: "#C0C0C0",
        padding: "20px",
      }}
    >
      {/* Label for 112 Acil */}
      <div
        style={{
          backgroundColor: "#003366", 
          padding: "10px",
          borderRadius: "15px",
          position: "absolute",
          top: "10px",
          fontSize: "44px",
          fontWeight: "bold",
          color: "#CCCCCC",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.55)", // Add box shadow for a 3D effect
          cursor: "pointer", // Change cursor to indicate interactivity
          transition: "transform 0.2s", // Add smooth transition on hover
          zIndex: 999, // Set a higher z-index to bring it above other elements
        }}
      >
        112 Acil BarkoVizyon Çorum Santrali
      </div>

      {/* Conditional rendering based on dataLoaded state */}
      {dataLoaded ? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 44,
              gap:24,
            }}
          >
            {/* Sol en üstte Pie Chart */}
            <div
              style={{
                height: 700,
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <div style={{ height: "500px", width: "600px" }}>
                <MyResponsivePie />
              </div>
              <div style={{width:500}}><Box 
                text="Bekleyen Çağrılar: A 1 Uygunda Bekleyen Kullanıcılar: B 1 Cevaplanan Çağrı Sayısı: C 1 Çağrıdaki Kullanıcı Sayısı: D 1 Moladaki Kullanıcılar: E 1 Kurumdaki Aktif Kullanıcı Sayısı: F 1
            Kurum Kuyruğuna Atanan Çağrı Sayısı: G "
              /></div>
              
            </div>


             {/* Sol en üstte Pie Chart */}
             <div
              style={{
                height: 700,
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <div style={{ height: 500, width: 600 }}>
                <MyResponsiveRadialBar />
              </div>
              <div style={{width:500}}><Box 
                text="Bekleyen Çağrılar: A 1 Uygunda Bekleyen Kullanıcılar: B 1 Cevaplanan Çağrı Sayısı: C 1 Çağrıdaki Kullanıcı Sayısı: D 1 Moladaki Kullanıcılar: E 1 Kurumdaki Aktif Kullanıcı Sayısı: F 1
            Kurum Kuyruğuna Atanan Çağrı Sayısı: G "
              /></div>
            </div>

          </div>

          {/* Orta kısımda Line Chart */}
          <div style={{ padding: "20px", width: "100%", height: 300 }}>
            <MyResponsiveLine />
          </div>

          {/* En altta yan yana 3 Bar Chart */}
          <div style={{ display: "flex", padding: "20px" }}>
            <div style={{ padding: "20px", flex: 1, height: 200, width: 400 }}>
              <AMyResponsiveLine />
            </div>
            <div style={{ padding: "20px", flex: 1, height: 200, width: 400 }}>
              <AMyResponsiveLine />
            </div>
            <div style={{ padding: "20px", flex: 1, height: 200, width: 400 }}>
              <AMyResponsiveLine />
            </div>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default App;
