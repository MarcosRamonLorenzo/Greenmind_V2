import { useRef, useEffect } from "react";
import GoBack from "../components/GoBack";
import "./Scan.css";

export const Scan = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: "environment" } })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((err) => {
        console.error("No se pudo acceder a la cámara", err);
      });

    return () => {
      // Parar cámara al salir de la pantalla
      if (videoRef.current?.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div className="scan-container">
      <GoBack className="scan-go-back" />

      <h2 className="scan-title">SCAN</h2>

      <div className="scan-box">
        <video ref={videoRef} autoPlay playsInline className="scan-video" />
      </div>

      <button className="scan-btn">
        Scan
      </button>
    </div>
  );
};
