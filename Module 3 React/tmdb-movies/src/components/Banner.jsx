export default function Banner() {
  return (
    <main className="relative">
      <img
        className="h-[70vh] w-screen"
        src="https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68"
        alt="banner-image"
      />
      <p className="absolute text-black-700 text-2xl bottom-0.5 w-full text-center bg-white">
        A Marvel Television Special Presentation - The Punisher: One Last Kill
      </p>
    </main>
  );
}
