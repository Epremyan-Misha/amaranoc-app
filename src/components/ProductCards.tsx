interface ProductCardProps {
  title: string;
  image: string;
}
function ProductCard({ title, image }: ProductCardProps) {
  const fallbackSrc = "/imagesForOptions/default.png";

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    if (target.src !== window.location.origin + fallbackSrc) {
      console.error("Image not found:", target.src);
      target.src = fallbackSrc;
    }
  };

  const folder = "photo";
  const filename = image ? image.replace(`${folder}/`, "") : "";

  const imagePath = image ? `/imagesForOptions/${folder}/${encodeURIComponent(filename)}` : fallbackSrc;

  return (
    <div className="cursor-pointer p-[10px] ml-[40px]">
      <img
        className="productCardImg"
        src={imagePath}
        alt={title}
        onError={handleError}
      />
      <p className="mt-[15px]">{title}</p>
    </div>
  );
}


export default ProductCard;
