export default function yearsAgo(year) {
  let today = new Date();
  return new Date().getFullYear() - year;
}