import Handlebars from 'handlebars'

import templateProduct from './product.hbs?raw'
import { PRODUCTS } from './products.data'

const productTemplate = Handlebars.compile(templateProduct)

export function lessonSeventhPage() {
	return `
		<div>
			<div class="flex flex-col gap-2 justify-baseline items-start">
				${PRODUCTS.map(product => {
					return productTemplate(product)
				}).join('')}
			</div>
		</div>
	`
}
