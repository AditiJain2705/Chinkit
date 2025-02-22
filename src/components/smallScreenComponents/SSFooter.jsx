
import Image from 'next/image';
import Link from 'next/link';
import footer from '../../../assets/footer/footer.webp';

export default function SSFooter() {
 
  return (
    <div className="md:min-h-[60vh] w-full">
   <Image src={footer} alt='last minute app' className='w-full h-full object-cover'/>
   <p className='text-base font-bold text-gray-500  px-3'>India's last minute app - blinkit</p>
    </div>
  );
}
