// export default function ConditionalRendering({ isLoggedIn, userName }) {
//   return (
//     <div>
//       {isLoggedIn ? <h1>Welcome, {userName}</h1> : <h1>Please log in</h1>}
//     </div>
//   );
// }

export default function ConditionalRendering({ isLoggedIn, userName }) {
  if (isLoggedIn) {
    return <h1>Welcome, {userName}</h1>;
  } else {
    return <h1>Please log in</h1>;
  }
}