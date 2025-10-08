import Image from "next/image";
export default function Loading() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', 
      backgroundColor: '#fff' 
    }}>
      <Image 
        src="/loader.gif" 
        alt="Loading..." 
        width={80} 
        height={80}
      />
    </div>
  );
}