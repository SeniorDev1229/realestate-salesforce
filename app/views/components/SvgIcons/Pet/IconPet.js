import React from 'react'
import styled, { css } from 'styled-components'

const width = '24'
const height = '24'
const viewBox = '0 0 24 24'

const getDimensions = () => ({
  height,
  width
})

const getDimensionsCss = () => css`
  width: ${width}px;
  height: ${height}px;
`

const Image = styled.svg`
  ${({ noStyles }) => (!noStyles ? getDimensionsCss() : null)};
`

const defaultProps = {
  children: [
    <path
      key="0"
      fillRule="nonzero"
      d="M20.25 6a.75.75 0 0 1 .75.75v3.75a3 3 0 0 1-3 3h-2.25a3 3 0 0 0-3 3V21H3V6a3 3 0 0 1 3-3h5.379c.384 0 .767.146 1.06.44l2.122 2.12c.27.272.646.44 1.06.44h4.63zM4.5 19.5h6.75V18H4.5v1.5zm15-9v-3h-3.88a2.98 2.98 0 0 1-2.122-.88l-2.12-2.12h-5.38A1.5 1.5 0 0 0 4.5 6v4.5c0 1.654 1.346 3 3 3V6H9v7.5A1.5 1.5 0 0 1 7.5 15a4.48 4.48 0 0 1-3-1.154V16.5h6.75c0-1.154.438-2.204 1.153-3H10.5V12H18c.826 0 1.499-.673 1.499-1.5zm-7.5-3a.75.75 0 1 1-1.499.001A.75.75 0 0 1 12 7.5z"
    />
  ],
  viewBox
}

export default Object.assign(Image, {
  getDimensions,
  getDimensionsCss,
  defaultProps,
  displayName: 'IconPet'
})
