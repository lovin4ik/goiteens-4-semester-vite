import { useSetTitle } from '@/utils/useSetTitle'

export function homePage(): string {
	useSetTitle('Home')
	return `
	  <div class="container mx-auto h-full flex items-center justify-center flex-col">
			<h1 class="font-bold text-center text-xl md:text-2xl 3xl:text-3xl">
				Це моя сторінка для здачи завданнь для школи GoIteens
			</h1>
		</div>
	`
}
