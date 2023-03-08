export const GlobomanticsAnalyticsSDK = (
  interval = 3000
) => {
  console.info("Analytics SDK is online")
  let i = setInterval(()=>{
    console.info("Transmitting analytics data");
  },interval)

  return {
    clear : () => clearInterval(i)
  }
}