import Wrapper from '@/component/Wrapper'

type Props = {}

export default function page({ }: Props) {
  return (
    <Wrapper>
      <div>
        <div>test</div>
        <div className='flex justify-end '>
          <div className='flex items-center'>
            <label htmlFor="options" className="text-gray-700 mr-2">
              <label htmlFor="options" className="text-gray-700 mr-2"></label>
              Année Scolaire :
            </label>
            <select
              id="options"
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            >
              <option value="">Sélectionnez...</option>
              <option value="option1">2025 - 2026</option>
              <option value="option2">2024 - 2025</option>
              <option value="option3">2023 - 2024</option>
            </select>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}