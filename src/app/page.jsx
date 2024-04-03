import Link from "next/link";
import ImageTest from "@/components/common/ImageTest";
import Counter from "@/components/common/Counter";

export default function Home() {
  return (
    <main>
      Home
      
      <Link href="/about">About</Link>
      <Link href="/profile">Profile</Link>
      
      <ImageTest />

      <Counter />
        
    
    </main>
  );
}
