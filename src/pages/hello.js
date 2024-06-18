import Image from "next/image";

export default function MyComponent() {
  return (
    <div className="w-full h-screen">
      <Image
        src="/background.jpeg" // Replace with the correct path to your image
        width={1920} // Set the width of your image
        height={1080} // Set the height of your image
        layout="responsive" // Optional: Set layout to responsive, fill, fixed, intrinsic, or placeholder
        alt="Background Image" // Add alt text for accessibility
        className="w-full h-screen" // Apply any additional styles here
      />
    </div>
  );
}
