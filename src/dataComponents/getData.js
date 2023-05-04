export default function fakeApiCall(data) {
  return new Promise((resolve) => setTimeout(() => resolve(data), 1000));
}
