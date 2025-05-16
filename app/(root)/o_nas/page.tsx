import Navigation from '@/components/Navigation'
import PageTitle from '@/components/PageTitle'
import Image from 'next/image'
import zdjecie_kasia from '@/public/images/kasia_photo.webp'
import zdjecie_dorota from '@/public/images/dorota_photo.webp'
import about_photo from '@/public/images/about_us_main_photo.jpg'
import Footer from '@/components/Footer'

export const metadata = {
	title: 'FMP | O Nas',
}

const AboutUsPage = () => {
	return (
		<>
			<div className='min-h-screen bg-[var(--primary)] pt-20 flex flex-col relative px-4'>
				<div className='fixed top-6 left-6'>
					<Navigation hidden='about' />
				</div>
				<PageTitle title='o fundacji' />

				<div className='mt-20 max-w-[80vw] md:max-w-[60vw] mx-auto mb-20'>
					<Image
						src={about_photo}
						alt='about image'
						width={960}
						height={300}
						className='rounded-full mx-auto shadow-lg'
						// sizes='(max-width: 480px) 150px, (max-width: 767px) 200px, (min-width: 768px) 80px, 500px'
					/>
					<p className='w-full mt-10 text-justify font-montserrat tracking-wide leading-loose text-lg lg:text-xl mx-auto'>
						Fundacja Miasto Pracownia powstała w 2017 roku w Oświęcimiu z
						inicjatywy dwóch przyjaciółek – kobiet z pasją do twórczości,
						działań społecznych i miejskich metamorfoz. Od początku przyświeca
						nam jeden cel: ożywić nasze miasto i obudzić twórczy potencjał jego
						mieszkańców. Organizujemy warsztaty twórcze dla dzieci, młodzieży,
						dorosłych i całych rodzin – od ceramiki, przez pracę z drewnem, po
						florystykę i inne rękodzieła. Wierzymy, że każdy ma w sobie potrzebę
						tworzenia – wystarczy ją tylko trochę rozbudzić. Ale Miasto
						Pracownia to nie tylko praca przy stole – to także działania w
						przestrzeni publicznej. Tworzymy murale, zakładamy ogrody społeczne,
						angażujemy lokalną społeczność w zmienianie otoczenia na bardziej
						przyjazne, kolorowe i wspólne. Nasza fundacja to przestrzeń spotkań,
						wymiany, współpracy. To miejsce, gdzie małe inicjatywy mają wielką
						moc zmiany. Działamy lokalnie, z sercem i przekonaniem, że twórczość
						może być narzędziem budowania więzi – z ludźmi i z miastem.
					</p>
				</div>

				<PageTitle title='o nas' />

				<div className='grid grid-cols-1 xl:grid-cols-2 mt-20 md:max-w-[60vw] mx-auto pb-60 items-start xl:gap-x-20'>
					<div className='flex flex-col justify-center mx-auto mb-20 xl:mb-0'>
						<Image
							src={zdjecie_dorota}
							alt='zdjęcie Doroty'
							width={442}
							height={442}
							className='rounded-full max-w-[75%] mx-auto shadow-lg'
						/>
						<h2 className='font-calistoga tracking-wide text-rose-500 mx-auto pt-10 text-3xl md:text-4xl'>
							Dorota Zwolak
						</h2>
						<p className='pt-4 px-8 text-justify font-montserrat tracking-wide leading-loose text-sm lg:text-base'>
							Współzałożycielka Fundacji Miasto Pracownia, absolwentka Wydziału
							Architektury Politechniki Wrocławskiej na kierunku Architektura i
							Urbanistyka. Czynna architektka i projektantka prowadząca studio
							architektoniczne, członek Izby Architektów Rzeczpospolitej
							Polskiej. Adeptka szkoły florystycznej tworząca małe, zielone
							kompozycje odzwierciedlające świat rzeczywisty. Absolwentka kursu
							„Pani od architektury” organizowanego przez pracownię k. Członkini
							byłej fundacji Animatornia - twórcze działania, w ramach której
							m.in. współorganizowała i prowadziła działania w przestrzeni
							miejskiej, warsztaty architektoniczne, konstrukcyjne, planowania
							przestrzennego. Prowadząca jako edukatorka architektoniczna
							warsztaty projektowe i konstrukcyjne w ramach projektu
							„Archi-przygody” realizowanego przez Narodowe Centrum Kultury,
							„Laboratorium w Archiwum” i „Laboratorium przestrzeni” w Ośrodku
							Dokumentacji Sztuki Tadeusza Kantora CRICOTEKA w Krakowie oraz
							„Projekt-Miasto” w Ośrodku Kultury Norwida w Krakowie.
							Realizatorka warsztatów twórczych i konstrukcyjnych w ramach
							działań Fundacji Miasto Pracownia.
						</p>
					</div>
					<div className='flex flex-col justify-center mx-auto pt-10 lg:pt-0'>
						<Image
							src={zdjecie_kasia}
							alt='zdjęcie Kasi'
							width={442}
							height={442}
							className='rounded-full max-w-[75%] mx-auto shadow-lg'
						/>
						<h2 className='font-calistoga tracking-wide text-rose-500 mx-auto pt-10 text-3xl md:text-4xl'>
							Katarzyna Heród
						</h2>
						<p className='pt-4 px-8 text-justify font-montserrat tracking-wide leading-loose text-sm lg:text-base'>
							Współzałożycielka Fundacji Miasto Pracownia, w latach 2015 -2017
							dyrektorka oddziału Fundacji Machina Fotografika w Oświęcimiu,
							laureatka stypendium Olgi - Rok, certyfikowana trenerka edukacji
							medialnej. Lokalna patriotka, która swoje działania koncentruje
							wokół oświęcimskiej społeczności. Tworzy i koordynuje projekty dla
							dzieci, młodzieży i dorosłych. Realizatorka projektów
							samorządowych, FIO Małopolska Lokalnie, MKiDN i wiele innych. W
							swoich działaniach stawia na nieszablonowość i kreatywność,
							kierując się zasadą, że &quot;projekty są dla ludzi, nie dla
							idei&quot;. Realizatorka i Inicjatorka takich projektów jak:
							&quot;Nieruchomość Literacka - budujemy mikroiblioteki&quot;, Noc
							Maturzystów, Nocny Maraton Wiedzy, Wyklikaj to - edukacja medialna
							dla dzieci, &quot;Pudełko Czasu - kobiecy projekt
							międzypokoleniowy&quot;, &quot;Kobieca Przestrzeń Inspiracji - II
							edycje&quot;, Kreatywna Strefa Kobiet - II edycje&quot; i wiele
							innych. Realizatorka autorskich warsztatów &quot;Doradztwo
							Kreatywne - od pomysłu do projektu&quot; (do tej pory w Lublinie,
							Warszawie i Gdańsku). Aktualnie nauczycielka w szkole podstawowej
							w Brzeszczach.
						</p>
					</div>
				</div>
				<Footer />
			</div>
		</>
	)
}

export default AboutUsPage
