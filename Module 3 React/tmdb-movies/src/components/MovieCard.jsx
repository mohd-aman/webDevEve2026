export default function MovieCard({ url, title }) {
  return (
    <div
      className="h-80 w-60 relative rounded-2xl hover:scale-105  delay-300 transition duration-300 ease-in-out cursor-pointer"
    >
      <img className="h-full w-full rounded-2xl" src={url} alt="banner-image" />
      <p className="absolute font-bold text-black-700 bottom-3 w-full text-center bg-white">
        {title}
      </p>
    </div>
  );
}
