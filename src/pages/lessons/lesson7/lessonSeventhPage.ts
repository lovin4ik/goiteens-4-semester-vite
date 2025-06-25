import Handlebars from 'handlebars'

import templateProduct from './product.hbs?raw'
import { PRODUCTS } from './products.data'
import { codePreview } from '@/shared/ui/codePreview'

const productTemplate = Handlebars.compile(templateProduct)

export async function lessonSeventhPage() {
	const div = document.createElement('div') as HTMLElement
	div.innerHTML = `
		<div>
			<h2 class="mb-4 text-2xl font-bold">Використання Handlebars.js</h2>
			<div class="flex flex-col gap-2 justify-baseline items-start">
				${PRODUCTS.map(product => {
					return productTemplate(product)
				}).join('')}
			</div>

			<div class="mt-2" id="productHbs"></div>
		</div>
	`

	div.querySelector('#productHbs')?.appendChild(
		await codePreview({
			lang: 'hbs',
			code: `
<div
	class='border-ios flex flex-col gap-0.5
	px-4 py-2 rounded-md max-w-[300px] 
	bg-white/30 backdrop-blur-3xl
	dark:bg-sidebar/10'
>
	<span>id: {{id}}</span>
	<span class='text-lg'>
		{{name}}
	</span>
	<span class='text-lg'>
		price: {{price}}
	</span>
	<span class='text-lg'>
		description: {{description}}
	</span>
</div>
			`
		})
	)

	return div
}
