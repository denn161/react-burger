import { cleanup, getByAltText, getByTestId, render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import IngredientIcon from './IngredientIcon'

describe('test IngredientIcon component', () => {

    const mockPropUrl = 'https://avatars.mds.yandex.net/i?id=1834c191b774e63cde2835ef7cc00976a6e6489b-8425275-images-thumbs&n=13'


    test('should be equal to snapshot', () => {

        const renderValue = renderer
            .create(
                <IngredientIcon img={mockPropUrl} />
            ).toJSON()

        expect(renderValue).toMatchSnapshot()
    })


})

describe('Testing component IngredientIcon witch render', () => {

    afterEach(cleanup)

    const mockPropUrl = 'https://avatars.mds.yandex.net/i?id=1834c191b774e63cde2835ef7cc00976a6e6489b-8425275-images-thumbs&n=13'
    const mockAlt = 'Ingredient'

    test('should render IngredientIcon with class image', () => {

        const { container } = render(

            <IngredientIcon img={mockPropUrl} />
        )

        const img = getByAltText(container, mockAlt)

        expect(img).toHaveClass('image')



    })

    test('should render IngredientIcon with class image', () => {

        const { container } = render(

            <IngredientIcon img={mockPropUrl} />
        )

        const img = getByTestId(container,'image-tag')

        expect(img).toHaveClass('image')



    })

})