/*Bir pizza görseline Tailwind CSS kullanarak 4 piksel kalınlığında, kesikli (dashed) ve kırmızı(tonu 500) bir çerçeve ekleyin.
*/

export default function PizzaImage(props) {
 return (
   <img className="border-4 border-dashed border-red-500" src="props.imgUrl" alt="props.alt" />
 );
}
