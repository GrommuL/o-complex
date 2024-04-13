import { Container } from '@/components/container'
import { ReviewList } from '@/components/review-list'
import { Shop } from '@/components/shop'

const HomePage = () => {
	return (
		<main>
			<h1 className='visually-hidden'>Тестовое задание</h1>
			<Container>
				<ReviewList />
				<Shop />
			</Container>
		</main>
	)
}
export default HomePage
