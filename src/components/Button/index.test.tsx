import React from "react"
import { render } from "@testing-library/react"
import {
  createRenderer as createShallowRenderer,
  ShallowRenderer,
} from "react-test-renderer/shallow"

import Component, { Props } from "./Button"

const requiredProps: Props = {}

describe("snapshot", () => {
  let renderer: ShallowRenderer

  beforeEach(() => {
    renderer = createShallowRenderer()
  })
  afterEach(() => {
    renderer.unmount()
  })

  it("required props only", () => {
    renderer.render(
      <Component {...requiredProps}>
        <div>Test</div>
      </Component>,
    )
    expect(renderer.getRenderOutput()).toMatchSnapshot()
  })
  it("disabled", () => {
    const props: Props = {
      ...requiredProps,
      disabled: true,
    }
    renderer.render(
      <Component {...props}>
        <div>Test</div>
      </Component>,
    )
    expect(renderer.getRenderOutput()).toMatchSnapshot()

    const { container } = render(
      <Component {...props}>
        <div>Test</div>
      </Component>,
    )
    const button = container.querySelector(".disabled")
    expect(button).toBeDefined()
    expect(button).not.toBeNull()
  })
})
