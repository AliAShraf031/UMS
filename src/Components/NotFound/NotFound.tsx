import { CirclesWithBar } from "react-loader-spinner";

export default function Notfound() {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "50px 0 " }}>Page Not Found</h1>
      <CirclesWithBar
        height="150"
        width="150"
        color="#FEAF00"
        outerCircleColor="#FEAF00"
        innerCircleColor="#FEAF00"
        barColor="#FEAF00"
        ariaLabel="circles-with-bar-loading"
        wrapperStyle={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "200px",
        }}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
